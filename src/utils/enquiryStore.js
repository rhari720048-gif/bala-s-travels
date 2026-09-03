// Central TiDB Cloud Database & Local Storage Sync for Bala's Travels Enquiries
import { db } from './tidb';

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

// Sync latest records from TiDB Cloud Database
export const syncEnquiriesFromTiDB = async () => {
  try {
    const result = await db.execute('SELECT * FROM enquiries ORDER BY created_at DESC');
    if (result && Array.isArray(result.rows) && result.rows.length > 0) {
      const tidbData = result.rows.map(row => ({
        id: row.id,
        timestamp: row.created_at || new Date().toISOString(),
        name: row.name,
        phone: row.phone,
        pickup: row.pickup,
        drop: row.drop_location,
        category: row.category,
        model: row.model,
        date: row.travel_date,
        status: 'New'
      }));

      // Update local cache
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(tidbData));
      return tidbData;
    }
  } catch (err) {
    console.warn('TiDB cloud sync fallback to local storage:', err?.message || err);
  }
  return getEnquiries();
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

    // Save to TiDB Cloud Database in background
    db.execute({
      sql: `INSERT INTO enquiries (id, name, phone, pickup, drop_location, category, model, travel_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE name=VALUES(name);`,
      args: [
        newEnquiry.id,
        newEnquiry.name,
        newEnquiry.phone,
        newEnquiry.pickup,
        newEnquiry.drop,
        newEnquiry.category,
        newEnquiry.model,
        newEnquiry.date
      ]
    }).catch(err => console.warn('TiDB Insert Note:', err?.message || err));

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

    // Delete from TiDB Cloud Database in background
    db.execute({
      sql: 'DELETE FROM enquiries WHERE id = ?',
      args: [targetIdStr]
    }).catch(err => console.warn('TiDB Delete Note:', err?.message || err));

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
