export const featuredVehicles = [
  {
    id: 'sedan',
    name: 'Sedan',
    category: 'Sedan',
    description: 'Comfortable for everyday and long-distance travel.',
    image: '/images/fleet/sedan/hyundai-verna.png',
    capacity: '4 Passengers',
    features: ['Air Conditioned', 'Spacious Boot', 'Smooth Ride']
  },
  {
    id: 'suv',
    name: 'SUV',
    category: 'SUV',
    description: 'More space and comfort for family journeys.',
    image: '/images/fleet/suv/maruti-xl6.png',
    capacity: '5 Passengers',
    features: ['High Ground Clearance', 'Ample Legroom', 'Comfort Seating']
  },
  {
    id: 'large-vehicle',
    name: 'Premium / Large Vehicle',
    category: 'Premium Family Vehicle',
    description: 'Suitable for larger groups and extended trips.',
    image: '/images/fleet/suv/toyota-innova-crysta.png',
    capacity: '7-8 Passengers',
    features: ['Captain Seats', 'Dual AC', 'Long Distance Comfort']
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
      { name: 'Toyota Etios', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/suv/toyota-innova.png' },
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
      { name: 'Toyota Innova Hycross Hybrid', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova-hycross.png' },
      { name: 'Toyota Fortuner', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-fortuner.png' },
      { name: 'Mahindra Scorpio', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/mahindra-scorpio.png' },
      { name: 'Mahindra Marazzo', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/mahindra-marazzo.png' },
      { name: 'Maruti Suzuki XL6', capacity: '6 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-xl6.png' },
      { name: 'Maruti Suzuki Grand Vitara', capacity: '5 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-grand-vitara.png' },
      { name: 'Kia Carens', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/kia-carens.png' },
      { name: 'Hyundai Alcazar', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/hyundai-alcazar.png' },
      { name: 'Tata Safari Dark Edition', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/tata-safari.png' },
    ]
  },
  {
    id: 'traveller',
    title: 'Travellers and Coaches',
    badge: 'Group Tours',
    description: 'Large group travel options with luxury push-back seats and dual AC comfort',
    vehicles: [
      { name: 'Force Urbania', capacity: '12-22 Passengers', type: 'traveller', image: '/images/fleet/traveller/force-urbania.png' },
      { name: 'Tempo Traveller', capacity: '12-26 Passengers', type: 'traveller', image: '/images/fleet/traveller/tempo-traveller.png' },
      { name: 'Maharaja Executive Traveller', capacity: '9-12 Passengers', type: 'traveller', image: '/images/fleet/traveller/maharaja-traveller.png' },
      { name: 'Luxury Mini Bus', capacity: '20-28 Passengers', type: 'traveller', image: '/images/fleet/traveller/mini-bus.png' },
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury',
    badge: 'VIP Experience',
    description: 'VVIP executive, corporate & wedding transportation with high-end luxury vehicles',
    vehicles: [
      { name: 'BMW 5-Series', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/bmw-5-series.png' },
      { name: 'Mercedes Benz S-Class', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class.png' },
      { name: 'Mercedes Benz E-Class', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-e-class.png' },
      { name: 'Audi A6 Executive', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/audi-a6.png' },
      { name: 'Kia Carnival', capacity: '7-9 Passengers', type: 'luxury', image: '/images/fleet/luxury/kia-carnival.png' },
      { name: 'Toyota Vellfire', capacity: '7 Passengers', type: 'luxury', image: '/images/fleet/luxury/toyota-vellfire.png' },
      { name: 'Volvo 9600 Luxury Coach', capacity: '45-53 Passengers', type: 'luxury', image: '/images/fleet/luxury/volvo-9600.png' },
      { name: 'Luxury Push-Back Bus', capacity: '35-50 Passengers', type: 'luxury', image: '/images/fleet/luxury/luxury-bus.png' },
    ]
  }
];
