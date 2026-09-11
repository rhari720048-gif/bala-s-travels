export const PHONE_NUMBER = "80721 66761";
export const WHATSAPP_NUMBER = "918072166761";

export const formatWhatsAppMessage = ({ name, phone, pickup, drop, hours, vehicle }) => {
  let message = `Hi Bala's Travels,\n\nI would like to enquire about a trip.\n\n`;
  if (name) message += `*Name:* ${name}\n`;
  if (phone) message += `*Mobile:* ${phone}\n`;
  if (pickup) message += `*Pickup:* ${pickup}\n`;
  if (drop) message += `*Drop:* ${drop}\n`;
  if (hours) message += `*Duration:* ${hours} Hours\n`;
  if (vehicle) message += `*Vehicle:* ${vehicle}\n`;
  
  message += `\nPlease contact me with more details.`;

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

export const openActingDriverWhatsApp = (driverType = "Acting Driver") => {
  const message = `Hi Bala's Travels,\n\nI am looking to book an ${driverType} in Chennai.\nPlease share the availability and charges.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
};

