export const featuredVehicles = [
  {
    id: 'sedan',
    name: 'Sedan',
    category: 'Sedan',
    description: 'Comfortable for everyday and long-distance travel.',
    image: '/images/fleet/sedan/maruti-dzire.png',
    capacity: '4 Passengers',
    features: ['Air Conditioned', 'Spacious Boot', 'Smooth Ride']
  },
  {
    id: 'suv',
    name: 'SUV',
    category: 'SUV',
    description: 'More space and comfort for family journeys.',
    image: '/images/fleet/suv/toyota-innova-white-new.png',
    capacity: '7-8 Passengers',
    features: ['High Ground Clearance', 'Ample Legroom', 'Comfort Seating']
  },
  {
    id: 'luxury',
    name: 'Luxury Car',
    category: 'Luxury',
    description: 'Premium experience for corporate and special events.',
    image: '/images/fleet/luxury/mercedes-s-class-2024.png',
    capacity: '4 Passengers',
    features: ['Premium Interiors', 'Chauffeur Driven', 'Ultimate Comfort']
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    category: 'Traveller',
    description: 'Perfect for mid-sized groups and family outings.',
    image: '/images/fleet/traveller/tempo-traveller-real.png',
    capacity: '12-26 Passengers',
    features: ['Push-back Seats', 'Dual AC', 'Entertainment System']
  },
  {
    id: 'minibus',
    name: 'Mini Bus',
    category: 'Bus',
    description: 'Ideal for large family functions and corporate trips.',
    image: '/images/fleet/traveller/mini-bus-real.png',
    capacity: '20-28 Passengers',
    features: ['Spacious Aisle', 'Comfortable Seating', 'Luggage Space']
  },
  {
    id: 'luxury-coach',
    name: 'Volvo 9600 / Luxury Bus',
    category: 'Bus',
    description: 'High-end luxury travel for large groups.',
    image: '/images/fleet/traveller/volvo-benz-coach.png',
    capacity: '45-53 Passengers',
    features: ['Air Suspension', 'Reclining Seats', 'Premium Travel']
  }
];

export const fullFleetCategories = [
  {
    id: 'sedan',
    title: 'Sedans & Hatchback/Compact',
    badge: 'Popular Choice',
    description: 'Smooth, comfortable & economical sedans and compacts ideal for business, city, & long distance travel',
    vehicles: [
      { name: 'Maruti Suzuki Dzire', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-dzire.png' },
      { name: 'Toyota Etios', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/toyota-etios.png' },
      { name: 'Hyundai Aura', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/hyundai-aura.png' },
      { name: 'Honda City', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-city.png' },
      { name: 'Honda Amaze', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-amaze.png' },
      { name: 'Maruti Suzuki Ciaz', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-ciaz.png' },
      { name: 'Hyundai Verna', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/hyundai-verna.png' },
      { name: 'Toyota Corolla Altis', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/corolla-altis.png' },
      { name: 'Toyota Glanza', capacity: '5 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/toyota-glanza.png' },
      { name: 'Hyundai Venue', capacity: '5 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/hyundai-venue.png' }
    ]
  },
  {
    id: 'suv',
    title: 'SUVs',
    badge: 'Family Favorite',
    description: 'Spacious 6 to 8 seaters designed for comfortable family outstation journeys',
    vehicles: [
      { name: 'Toyota Innova', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova.png' },
      { name: 'Toyota Innova Crysta', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova-white-new.png' },
      { name: 'Toyota Innova Hycross', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova-hycross.png' },
      { name: 'Toyota Fortuner', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-fortuner.png' },
      { name: 'Mahindra Marazzo', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/mahindra-marazzo.png' },
      { name: 'Maruti Suzuki Ertiga', capacity: '6 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-ertiga.png' },
      { name: 'Maruti Suzuki XL6', capacity: '6 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-xl6-new.png' },
      { name: 'Kia Carens', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/kia-carens.png' },
      { name: 'Chevrolet Tavera', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/chevrolet-tavera-new.png' },
    ]
  },
  {
    id: 'traveller',
    title: 'Travellers and Coaches',
    badge: 'Group Tours',
    description: 'Large group travel options with luxury push-back seats and dual AC comfort',
    vehicles: [
      { name: 'Force Urbania', capacity: '12-22 Passengers', type: 'traveller', image: '/images/fleet/traveller/force-urbania-real.jpg' },
      { name: 'Tempo Traveller', capacity: '12-26 Passengers', type: 'traveller', image: '/images/fleet/traveller/tempo-traveller-real.png' },
      { name: 'Luxury Mini Bus', capacity: '20-28 Passengers', type: 'traveller', image: '/images/fleet/traveller/mini-bus-real.png' },
      { name: 'Volvo 9600 Luxury Coach', capacity: '45-53 Passengers', type: 'traveller', image: '/images/fleet/traveller/volvo-benz-coach.png' },
      { name: 'Luxury Push-Back Bus', capacity: '35-50 Passengers', type: 'traveller', image: '/images/fleet/traveller/luxury-coach.png' },
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury',
    badge: 'VIP Experience',
    description: 'VVIP executive, corporate & wedding transportation with high-end luxury vehicles',
    vehicles: [
      { name: 'BMW 5-Series', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/bmw-5-series.png' },
      { name: 'Mercedes Benz S-Class', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class-2024.png' },
      { name: 'Mercedes Benz E-Class', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-e-class-2023.png' },
      { name: 'Audi A6 Executive', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/bmw-5-series.png' },
      { name: 'Kia Carnival', capacity: '7-9 Passengers', type: 'luxury', image: '/images/fleet/suv/kia-carnival.png' },
      { name: 'Toyota Vellfire', capacity: '7 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class-2024.png' },
    ]
  }
];
