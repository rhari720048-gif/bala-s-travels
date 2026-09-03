// Central Fleet & Custom Vehicle Store for Bala's Travels Admin & Public Site
import { fullFleetCategories as defaultCategories } from '../data/fleetData';

const CUSTOM_VEHICLES_KEY = 'balas_travels_custom_vehicles_v1';
const DELETED_VEHICLES_KEY = 'balas_travels_deleted_vehicles_v1';
const CUSTOM_CATEGORIES_KEY = 'balas_travels_custom_categories_v1';

// Read custom vehicles from localStorage
export const getCustomVehicles = () => {
  try {
    const data = localStorage.getItem(CUSTOM_VEHICLES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error reading custom vehicles:', err);
    return [];
  }
};

// Read deleted vehicle IDs
export const getDeletedVehicleIds = () => {
  try {
    const data = localStorage.getItem(DELETED_VEHICLES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error reading deleted vehicle IDs:', err);
    return [];
  }
};

// Read custom categories
export const getCustomCategories = () => {
  try {
    const data = localStorage.getItem(CUSTOM_CATEGORIES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error reading custom categories:', err);
    return [];
  }
};

// Get combined full fleet categories (Default + Custom - Deleted)
export const getAllFleetCategories = () => {
  const customVehicles = getCustomVehicles();
  const deletedIds = getDeletedVehicleIds();
  const customCategories = getCustomCategories();

  // Clone default categories and ensure unique vehicle IDs
  const categoryMap = new Map();

  let globalIndex = 0;
  defaultCategories.forEach(cat => {
    categoryMap.set(cat.title, {
      ...cat,
      vehicles: cat.vehicles
        .map((v, i) => ({
          id: v.id || `default-veh-${cat.id || 'cat'}-${i}-${globalIndex++}`,
          ...v,
          specs: v.specs || {
            seats: v.capacity || '5 Seats',
            ac: 'Dual AC',
            luggage: '2 Large Bags'
          }
        }))
        .filter(v => !deletedIds.includes(String(v.id)))
    });
  });

  // Add custom categories if any
  customCategories.forEach(catTitle => {
    if (!categoryMap.has(catTitle)) {
      categoryMap.set(catTitle, {
        id: `custom-cat-${catTitle.toLowerCase().replace(/\s+/g, '-')}`,
        title: catTitle,
        subtitle: `Custom Fleet - ${catTitle}`,
        badge: 'Custom Category',
        badgeBg: 'bg-emerald-100 text-emerald-800',
        vehicles: []
      });
    }
  });

  // Add custom vehicles to their respective categories
  customVehicles.forEach(v => {
    if (!deletedIds.includes(String(v.id))) {
      if (categoryMap.has(v.categoryTitle)) {
        categoryMap.get(v.categoryTitle).vehicles.unshift(v);
      } else {
        // Create new category dynamically if not found
        categoryMap.set(v.categoryTitle, {
          id: `custom-cat-${v.categoryTitle.toLowerCase().replace(/\s+/g, '-')}`,
          title: v.categoryTitle,
          subtitle: `Custom Fleet - ${v.categoryTitle}`,
          badge: 'New Category',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          vehicles: [v]
        });
      }
    }
  });

  return Array.from(categoryMap.values());
};

// Add a new custom vehicle
export const addCustomVehicle = (vehicleData) => {
  try {
    const existing = getCustomVehicles();
    const newVehicle = {
      id: `custom-veh-${Date.now()}`,
      name: vehicleData.name,
      categoryTitle: vehicleData.categoryTitle,
      tagline: vehicleData.tagline || 'Comfortable & Reliable Outstation Travel',
      specs: {
        seats: vehicleData.seats || '5 Seats',
        ac: vehicleData.ac || 'Dual AC',
        luggage: vehicleData.luggage || '2 Large Bags'
      },
      image: vehicleData.image || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      description: vehicleData.description || 'Premium comfortable vehicle with experienced chauffeur for long distance travel.',
      features: vehicleData.features && vehicleData.features.length > 0 
        ? vehicleData.features 
        : ['Push-back Seats', '24/7 GPS Tracking', 'Luggage Carrier', 'Bluetooth Music']
    };

    const updated = [newVehicle, ...existing];
    localStorage.setItem(CUSTOM_VEHICLES_KEY, JSON.stringify(updated));

    // Also ensure category is recorded in custom categories if new
    if (vehicleData.categoryTitle) {
      addCustomCategory(vehicleData.categoryTitle);
    }

    return getAllFleetCategories();
  } catch (err) {
    console.error('Error adding custom vehicle:', err);
    return getAllFleetCategories();
  }
};

// Add a new custom category
export const addCustomCategory = (categoryTitle) => {
  try {
    const existing = getCustomCategories();
    const trimmed = categoryTitle.trim();
    if (trimmed && !existing.includes(trimmed)) {
      const updated = [...existing, trimmed];
      localStorage.setItem(CUSTOM_CATEGORIES_KEY, JSON.stringify(updated));
    }
  } catch (err) {
    console.error('Error adding custom category:', err);
  }
};

// Delete/Hide a vehicle by ID
export const deleteVehicle = (vehicleId) => {
  try {
    const vehicleIdStr = String(vehicleId);
    
    // Check if it's in custom vehicles
    const customVehicles = getCustomVehicles();
    const filteredCustom = customVehicles.filter(v => String(v.id) !== vehicleIdStr);
    localStorage.setItem(CUSTOM_VEHICLES_KEY, JSON.stringify(filteredCustom));

    // Mark as deleted in deleted IDs
    const deletedIds = getDeletedVehicleIds();
    if (!deletedIds.includes(vehicleIdStr)) {
      deletedIds.push(vehicleIdStr);
      localStorage.setItem(DELETED_VEHICLES_KEY, JSON.stringify(deletedIds));
    }

    return getAllFleetCategories();
  } catch (err) {
    console.error('Error deleting vehicle:', err);
    return getAllFleetCategories();
  }
};
