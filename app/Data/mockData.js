// mockData.js

export const MOCK_DATA = {
  ngos: [
    {
      id: 1,
      name: "AgriSupport Ghana",
      services: ["Storage Facilities", "Equipment", "Training"],
      location: "Kumasi, Ashanti",
      distance: "2.5 km",
      rating: 4.8,
      contact: "+233 24 123 4567",
      email: "info@agrisupport.gh",
      available: true,
      capacity: "500 tons",
      description: "Leading agricultural support NGO providing modern storage solutions"
    },
    {
      id: 2,
      name: "FarmAid Foundation",
      services: ["Cold Storage", "Processing", "Marketing"],
      location: "Ejisu, Ashanti",
      distance: "8.2 km",
      rating: 4.6,
      contact: "+233 20 987 6543",
      email: "help@farmaid.org",
      available: true,
      capacity: "300 tons",
      description: "Specialized in post-harvest storage and value addition services"
    },
    {
      id: 3,
      name: "Rural Development Co-op",
      services: ["Storage", "Transport", "Finance"],
      location: "Bosomtwe, Ashanti",
      distance: "15.7 km",
      rating: 4.3,
      contact: "+233 26 555 7890",
      email: "contact@ruraldev.gh",
      available: false,
      capacity: "200 tons",
      description: "Community-focused cooperative supporting small-scale farmers"
    }
  ],
  
  diseases: [
    {
      name: "Late Blight",
      confidence: 92,
      crop: "Tomato",
      symptoms: ["Dark spots on leaves", "White fuzzy growth", "Fruit rot"],
      treatment: "Apply copper-based fungicide, improve ventilation",
      severity: "High"
    },
    {
      name: "Leaf Spot",
      confidence: 85,
      crop: "Maize",
      symptoms: ["Small brown spots", "Yellowing leaves", "Premature leaf drop"],
      treatment: "Remove affected leaves, apply organic fungicide",
      severity: "Medium"
    },
    {
      name: "Powdery Mildew",
      confidence: 78,
      crop: "Cocoa",
      symptoms: ["White powdery coating", "Leaf curling", "Stunted growth"],
      treatment: "Increase air circulation, apply sulfur spray",
      severity: "Medium"
    }
  ],
  
  bookings: [
    {
      id: 1,
      ngo: "AgriSupport Ghana",
      crop: "Cocoa",
      quantity: "2 tons",
      startDate: "2025-08-01",
      endDate: "2025-10-01",
      status: "Confirmed",
      cost: "₵450"
    },
    {
      id: 2,
      ngo: "FarmAid Foundation",
      crop: "Maize",
      quantity: "1.5 tons",
      startDate: "2025-07-15",
      endDate: "2025-09-15",
      status: "Pending",
      cost: "₵300"
    }
  ],
  
  user: {
    name: "Kwame Asante",
    location: "Kumasi, Ashanti",
    farmSize: "5 hectares",
    crops: ["Cocoa", "Maize", "Tomatoes"]
  }
};


export default MOCK_DATA;