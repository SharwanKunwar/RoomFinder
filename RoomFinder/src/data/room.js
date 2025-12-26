const room = [
  {
    id: 1,
    ownerName: "Sharwan Jung Kunwar",
    createdAt: new Date(),
    roomImages: ["pic2.jpg", "pic2.jpg", "pic2.jpg"],
    roomPrice: 5000,
    roomTitle: "Sunlight close western room for single",
    description:
      "A bright and well-ventilated room ideal for a single person. Peaceful environment with easy access to water and wifi.",
    status: true,
    facilities: ["Water", "Wifi", "Parking"],
    isSaved: false
  },
  {
    id: 2,
    ownerName: "Parbesh Rawal",
    createdAt: new Date(),
    roomImages: ["room1.jpg", "room2.jpg", "room3.jpg"],
    roomPrice: 7500,
    roomTitle: "Fully furnished room near city center",
    description:
      "Spacious fully furnished room located near the city center. Perfect for students or working professionals.",
    status: false,
    facilities: ["Water", "Wifi", "Parking", "Attached Bathroom"],
    isSaved: true
  }
];

export default room;
