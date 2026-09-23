const OFFER_STORAGE_KEY = 'balas_travels_special_offer';

const DEFAULT_OFFER = '🔥 SPECIAL OFFER: Only Pickup & Drop! Sedan: ₹800 (10 km) | SUVs: ₹1100 (10 km) | 24/7 Acting Drivers Available in Chennai';

export const getSpecialOffer = () => {
  try {
    const data = localStorage.getItem(OFFER_STORAGE_KEY);
    if (data !== null) {
      return data;
    }
    localStorage.setItem(OFFER_STORAGE_KEY, DEFAULT_OFFER);
    return DEFAULT_OFFER;
  } catch (error) {
    console.error("Error reading offer from local storage", error);
    return DEFAULT_OFFER;
  }
};

export const updateSpecialOffer = (newOfferText) => {
  try {
    localStorage.setItem(OFFER_STORAGE_KEY, newOfferText);
    // Dispatch a standard storage event manually so same-page listeners can catch it
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch (error) {
    console.error("Error updating offer in local storage", error);
    return false;
  }
};
