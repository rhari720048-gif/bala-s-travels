export const PHONE_NUMBER = "99400 99347";
export const WHATSAPP_NUMBER = "919940099347";

export const formatWhatsAppMessage = ({ pickup, drop, vehicle }) => {
  const pickupText = pickup?.trim() || "Not specified";
  const dropText = drop?.trim() || "Not specified";
  const vehicleText = vehicle || "Not Sure";

  const message = `Hi Bala's Travels,

I would like to enquire about a Pickup & Drop service.

Pickup Location: ${pickupText}
Drop Location: ${dropText}
Vehicle Preference: ${vehicleText}

Please contact me with more details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openGeneralWhatsApp = (customText = "") => {
  const text = customText || "Hi Bala's Travels, I would like to enquire about your Pickup & Drop transportation services across South India.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
};

export const openRouteWhatsApp = (from, to) => {
  const message = `Hi Bala's Travels,\n\nI would like to enquire about taxi rental for the route:\n📍 Pickup: ${from}\n🎯 Drop: ${to}\n\nPlease share availability and fare details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
};

