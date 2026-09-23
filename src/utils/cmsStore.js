const CMS_STORAGE_KEY = 'balas_travels_cms_data';

const DEFAULT_CMS_DATA = {
  hero: {
    title1: "Over 10 Years of Leadership in Crafting",
    title2: "The Finest Chauffeur-Driven Experiences.",
    subtitle: "Luxury, Punctuality & Professionalism — The Balas Standard Since Over a Decade.",
    bgImage: "/images/fleet/traveller/background-buses.jpg"
  },
  contact: {
    phone1: "99400 99347",
    phone2: "94447 05044",
    phone3: "74014 41442",
    email: "balastravels2023@gmail.com",
    whatsapp: "99400 99347"
  },
  about: {
    title1: "Travel Made Simple.",
    title2: "Journeys Made Comfortable.",
    intro: "Welcome to Bala Travels, your trusted partner for safe, comfortable, and reliable transportation services. We specialize in turning every journey into a seamless experience, whether you are traveling locally or heading out of town.",
    image: "/images/about-fleet.png"
  }
};

export const getCmsData = () => {
  try {
    const data = localStorage.getItem(CMS_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(DEFAULT_CMS_DATA));
    return DEFAULT_CMS_DATA;
  } catch (error) {
    console.error("Error reading CMS data from local storage", error);
    return DEFAULT_CMS_DATA;
  }
};

export const updateCmsData = (section, newData) => {
  try {
    const currentData = getCmsData();
    const updatedData = {
      ...currentData,
      [section]: {
        ...currentData[section],
        ...newData
      }
    };
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(updatedData));
    window.dispatchEvent(new Event('cms_update')); // Custom event for listening
    return updatedData;
  } catch (error) {
    console.error("Error updating CMS data in local storage", error);
    return null;
  }
};
