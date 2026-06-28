export interface TravelEntry {
  id: string;
  place: string;
  description: string;
  longDescription: string;
  year: string;
  images: string[];
}

export const travelEntries: TravelEntry[] = [
  {
    id: "himalayas",
    place: "Himalayas",
    description: "Trekked through the majestic Himalayan trails, experiencing serene mountain landscapes.",
    longDescription: "The Himalayas were an unforgettable journey through towering peaks, serene monasteries, and pristine alpine lakes. Every step on the trail brought a new perspective — from the prayer flags fluttering in the wind to the warm hospitality of mountain villages. The sunrise over the snow-capped peaks was nothing short of magical.",
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1520681138172-0f5e3a473265?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
  },
  {
    id: "goa",
    place: "Goa",
    description: "Explored the sun-kissed beaches and vibrant nightlife of India's beach paradise.",
    longDescription: "Goa was a perfect blend of relaxation and adventure. From the golden sands of Baga Beach to the historic charm of Old Goa's Portuguese architecture, every day brought something new. The beach shacks served incredible seafood, and the sunsets over the Arabian Sea were absolutely breathtaking.",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      "https://images.unsplash.com/photo-1586312525776-0e97b3f0e36a?w=800&q=80",
      "https://images.unsplash.com/photo-1599232288126-7e51c5d50ceb?w=800&q=80",
    ],
  },
  {
    id: "rajasthan",
    place: "Rajasthan",
    description: "Visited the historic forts and palaces of Jaipur, Jodhpur, and Udaipur.",
    longDescription: "Rajasthan was a journey through royal history and vibrant culture. The Amber Fort in Jaipur, the blue streets of Jodhpur, and the serene lakes of Udaipur each told a different story. The desert safari in Jaisalmer under a blanket of stars was the highlight of the trip.",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
    ],
  },
  {
    id: "kerala",
    place: "Kerala",
    description: "Cruised the tranquil backwaters of Kerala and enjoyed the lush green landscapes.",
    longDescription: "Kerala, God's Own Country, lived up to its name. The houseboat cruise through the Alleppey backwaters was a serene experience unlike any other. The lush green tea plantations of Munnar, the wildlife of Thekkady, and the pristine beaches of Varkala made this trip incredibly diverse.",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80",
      "https://images.unsplash.com/photo-1602216054346-ee7ab2a5617a?w=800&q=80",
      "https://images.unsplash.com/photo-1593558029327-d39e4b2eca6f?w=800&q=80",
    ],
  },
  {
    id: "rishikesh",
    place: "Rishikesh",
    description: "Adventure capital of India — river rafting, camping, and yoga by the Ganges.",
    longDescription: "Rishikesh was pure adventure and spiritual energy. White-water rafting on the Ganges, camping by the river, and the evening Ganga Aarti at Triveni Ghat were unforgettable experiences. The Beatles Ashram and the iconic Laxman Jhula added to the charm of this Himalayan town.",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1566324020176-ee90ddc9c8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1587235442299-b124c6c24afb?w=800&q=80",
      "https://images.unsplash.com/photo-1570488344399-5f2b7b0c77b1?w=800&q=80",
    ],
  },
];

export function getTravelEntry(id: string): TravelEntry | undefined {
  return travelEntries.find((e) => e.id === id);
}
