// Central Local Storage Enquiry Manager for Bala's Travels Admin Dashboard

const ENQUIRIES_STORAGE_KEY = 'balas_travels_enquiries_v1';

// Initial sample data if no enquiries exist yet
const INITIAL_SAMPLE_ENQUIRIES = [
  {
    id: 'ENQ-1001',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    name: 'Ramesh Kumar',
    phone: '9876543210',
    pickup: 'Chennai Airport (MAA)',
    drop: 'Pondicherry Rock Beach',
    category: 'Sedan',
    model: 'Hyundai Verna',
    date: '2026-09-10',
    status: 'New'
  },
  {
    id: 'ENQ-1002',
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    name: 'Priya Sundaram',
    phone: '9944012345',
    pickup: 'Bangalore Electronic City',
    drop: 'Chennai T. Nagar',
    category: 'SUVs / Mini SUVs',
    model: 'Toyota Innova Crysta',
    date: '2026-09-12',
    status: 'Confirmed'
  },
  {
    id: 'ENQ-1003',
    timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
    name: 'Suresh Babu',
    phone: '9840156789',
    pickup: 'Madurai Junction',
    drop: 'Rameshwaram Temple',
    category: 'Travellers and Coaches',
    model: 'Tempo Traveller',
    date: '2026-09-15',
    status: 'Contacted'
  }
];

export const getEnquiries = () => {
  try {
    const data = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    if (data === null) {
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_ENQUIRIES));
      return INITIAL_SAMPLE_ENQUIRIES;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading enquiries:', err);
    return [];
  }
};

export const addEnquiry = (enquiryData) => {
  try {
    const existing = getEnquiries();
    const newEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString(),
      name: enquiryData.name || 'Anonymous',
      phone: enquiryData.phone || 'N/A',
      pickup: enquiryData.pickup || 'N/A',
      drop: enquiryData.drop || 'N/A',
      category: enquiryData.category || 'Not Specified',
      model: enquiryData.model || 'Not Specified',
      date: enquiryData.date || new Date().toISOString().split('T')[0],
      status: 'New'
    };
    const updated = [newEnquiry, ...existing];
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Error adding enquiry:', err);
    return [];
  }
};

export const deleteEnquiry = (id) => {
  try {
    const existing = getEnquiries();
    const targetIdStr = String(id).trim();
    const updated = existing.filter(item => String(item.id).trim() !== targetIdStr);
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Error deleting enquiry:', err);
    return [];
  }
};

export const clearAllEnquiries = () => {
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify([]));
  return [];
};
