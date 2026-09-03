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
    image: '/images/fleet/suv/kia-seltos-black.png',
    capacity: '5 Passengers',
    features: ['High Ground Clearance', 'Ample Legroom', 'Comfort Seating']
  },
  {
    id: 'large-vehicle',
    name: 'Premium / Large Vehicle',
    category: 'Premium Family Vehicle',
    description: 'Suitable for larger groups and extended trips.',
    image: '/images/crysta.png',
    capacity: '7-8 Passengers',
    features: ['Captain Seats', 'Dual AC', 'Long Distance Comfort']
  }
];

export const fullFleetCategories = [
  {
    id: 'sedan',
    title: 'Sedan',
    badge: 'Popular Choice',
    description: 'Smooth, comfortable & economical sedans ideal for business & long distance travel',
    vehicles: [
      { name: 'Hyundai Verna', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/hyundai-verna.png' },
      { name: 'Honda Amaze', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-amaze.png' },
      { name: 'Maruti Suzuki Ciaz', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-ciaz.png' },
      { name: 'Maruti Suzuki Dzire', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-dzire.png' },
      { name: 'Toyota Etios', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/toyota-etios.png' },
      { name: 'Toyota Corolla Altis', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/corolla-altis.png' },
      { name: 'Honda City', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-city.png' },
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury',
    badge: 'VIP Experience',
    description: 'VVIP executive, corporate & wedding transportation with high-end luxury vehicles',
    vehicles: [
      { name: 'BMW 5-Series', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/bmw-5-series.png' },
      { name: 'Mercedes Benz S-Class 2024', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class-2024.png' },
      { name: 'Mercedes Benz E-Class (2023)', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-e-class-2023.png' },
      { name: 'Mercedes Benz E-Class W214', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-e-class-w214.png' },
      { name: 'Mercedes Benz S-Class', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class-2024.png' },
    ]
  },
  {
    id: 'hatchback',
    title: 'Hatchbacks / Compact',
    badge: 'City Travel',
    description: 'Agile & practical vehicles for quick city rides and small family travel',
    vehicles: [
      { name: 'Toyota Glanza', capacity: '5 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/toyota-glanza.png' },
      { name: 'Hyundai Venue', capacity: '5 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/hyundai-venue.png' },
      { name: 'TATA Nexon EV', capacity: '5 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/tata-nexon-ev.png' },
      { name: 'Maruti Suzuki XL6', capacity: '6 Passengers', type: 'hatchback', image: '/images/fleet/hatchback/maruti-xl6.png' },
    ]
  },
  {
    id: 'suv',
    title: 'SUVs / Mini SUVs',
    badge: 'Family Favorite',
    description: 'Spacious 6 to 8 seaters designed for comfortable family outstation journeys',
    vehicles: [
      { name: 'Kia Seltos Black', capacity: '5 Passengers', type: 'suv', image: '/images/fleet/suv/kia-seltos-black.png' },
      { name: 'Toyota Innova Crysta', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova-crysta.png' },
      { name: 'Toyota Fortuner', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-fortuner.png' },
      { name: 'Toyota Innova Hycross Hybrid', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-innova-hycross.png' },
      { name: 'Kia Carnival', capacity: '7-9 Passengers', type: 'suv', image: '/images/fleet/suv/kia-carnival.png' },
      { name: 'Kia Carens', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/kia-carens.png' },
      { name: 'Hyundai Alcazar', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/hyundai-alcazar.png' },
      { name: 'Mahindra Marazzo', capacity: '7-8 Passengers', type: 'suv', image: '/images/fleet/suv/mahindra-marazzo.png' },
      { name: 'Maruti Grand Vitara', capacity: '5 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-grand-vitara.png' },
      { name: 'Maruti Suzuki Ertiga', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/maruti-ertiga.png' },
    ]
  },
  {
    id: 'traveller',
    title: 'Travellers and Coaches',
    badge: 'Group Tours',
    description: 'Large group travel options with luxury push-back seats and dual AC comfort',
    vehicles: [
      { name: 'Force Urbania', capacity: '12-17 Passengers', type: 'traveller', image: '/images/fleet/traveller/force-urbania.png' },
      { name: 'Tempo Traveller', capacity: '12-26 Passengers', type: 'traveller', image: '/images/fleet/traveller/tempo-traveller.png' },
      { name: 'Luxury Coach / Bus (Push Back Seats)', capacity: '35-50 Passengers', type: 'traveller', image: '/images/fleet/traveller/luxury-coach.png' },
      { name: 'Volvo / Benz Coach (Push Back Seats)', capacity: '45-53 Passengers', type: 'traveller', image: '/images/fleet/traveller/volvo-benz-coach.png' },
    ]
  }
];
