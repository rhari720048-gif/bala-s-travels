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
    title: 'Sedan / Hatchback',
    badge: 'Popular Choice',
    description: 'Smooth, comfortable & economical sedans ideal for business & long distance travel',
    vehicles: [
      { name: 'Maruti Suzuki Dzire', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-dzire.png' },
      { name: 'Toyota Etios', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/toyota-etios.png' },
      { name: 'Hyundai Aura', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/hyundai-aura.png' },
      { name: 'Maruti Suzuki Ciaz', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/maruti-ciaz.png' },
      { name: 'Honda City', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-city.png' },
      { name: 'Hyundai Verna', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/hyundai-verna.png' },
      { name: 'Honda Amaze', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/honda-amaze.png' },
      { name: 'Toyota Corolla Altis', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/corolla-altis.png' },
      { name: 'Tata Tigor', capacity: '4 Passengers', type: 'sedan', image: '/images/fleet/sedan/tata-tigor.png' },
      { name: 'Toyota Glanza', capacity: '5 Passengers', type: 'sedan', image: '/images/fleet/hatchback/toyota-glanza.png' },
      { name: 'Hyundai Venue', capacity: '5 Passengers', type: 'sedan', image: '/images/fleet/hatchback/hyundai-venue.png' },
      { name: 'TATA Nexon EV', capacity: '5 Passengers', type: 'sedan', image: '/images/fleet/hatchback/tata-nexon-ev.png' },
    ]
  },
  {
    id: 'suv',
    title: 'SUVs',
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
      { name: 'Maruti Suzuki XL6', capacity: '6 Passengers', type: 'suv', image: '/images/fleet/hatchback/maruti-xl6.png' },
      { name: 'Chevrolet Tavera', capacity: '7-10 Passengers', type: 'suv', image: '/images/fleet/suv/chevrolet-tavera.png' },
      { name: 'Chevrolet Sail', capacity: '5 Passengers', type: 'suv', image: '/images/fleet/suv/chevrolet-sail.png' },
      { name: 'Mahindra XUV700 AX7', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/toyota-fortuner.png' },
      { name: 'Tata Safari Dark Edition', capacity: '7 Passengers', type: 'suv', image: '/images/fleet/suv/kia-seltos-black.png' },
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
      { name: 'Mini Bus', capacity: '21 Passengers', type: 'traveller', image: '/images/fleet/traveller/mini-bus.png' },
      { name: 'Luxury Coach / Bus (Push Back Seats)', capacity: '35-50 Passengers', type: 'traveller', image: '/images/fleet/traveller/luxury-coach.png' },
      { name: 'Volvo / Benz Coach (Push Back Seats)', capacity: '45-53 Passengers', type: 'traveller', image: '/images/fleet/traveller/volvo-benz-coach.png' },
    ]
  },
  {
    id: 'luxury',
    title: 'Luxury',
    badge: 'VIP Experience',
    description: 'VVIP executive, corporate & wedding transportation with high-end luxury vehicles',
    vehicles: [
      { name: 'BMW', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/bmw-5-series.png' },
      { name: 'Mercedes-Benz', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/mercedes-s-class-2024.png' },
      { name: 'Audi', capacity: '4 Passengers', type: 'luxury', image: '/images/fleet/luxury/audi.png' },
      { name: 'Toyota Vellfire', capacity: '7 Passengers', type: 'luxury', image: '/images/fleet/luxury/toyota-vellfire.png' },
    ]
  }
];
