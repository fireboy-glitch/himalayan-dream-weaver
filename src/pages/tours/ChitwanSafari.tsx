
import React from "react";
import TourTemplate from "./TourTemplate";

const ChitwanSafari = () => {
  return (
    <TourTemplate
      title="Chitwan Safari"
      heroImage="https://images.unsplash.com/photo-1542476478-5c0c490a64d4"
      duration={3}
      locations="Chitwan National Park"
      groupSize="2-8 people"
      price="USD 349"
      overview="Chitwan National Park, a UNESCO World Heritage Site, offers an incredible wildlife experience in the subtropical lowlands of Nepal. Our Chitwan Safari package allows you to explore this rich ecosystem, home to endangered one-horned rhinoceros, Bengal tigers, and many other species. During your stay, enjoy a variety of jungle activities led by expert naturalist guides, experience the culture of the local Tharu community, and relax in comfortable lodges at the edge of this pristine wilderness."
      highlights={[
        "Jeep safari through diverse habitats to spot wildlife including rhinos, deer, and possibly tigers",
        "Guided canoe ride on the Rapti River to observe crocodiles and aquatic birds",
        "Walking safari with experienced naturalists to discover the jungle's flora and fauna",
        "Visit to an elephant breeding center to learn about conservation efforts",
        "Cultural program featuring traditional Tharu stick dance and music",
        "Bird watching tours with over 500 species in the area",
        "Sunset views over the Rapti River and National Park"
      ]}
      itinerary={[
        {
          day: 1,
          title: "Arrival in Chitwan and Afternoon Activities",
          description: "Arrive in Chitwan either by flight to Bharatpur (25 minutes from Kathmandu) or by road (5-6 hours). Check into your jungle lodge and enjoy lunch. In the afternoon, attend a briefing about the park and its wildlife before embarking on a village walk to learn about the local Tharu culture. Later, enjoy sunset views from the banks of the Rapti River with refreshments. After dinner, experience a traditional Tharu cultural program with stick dance and folk music."
        },
        {
          day: 2,
          title: "Full Day Jungle Activities",
          description: "Early morning bird watching tour as dawn is the best time to spot many of the 500+ bird species in the park. Return for breakfast at the lodge. Mid-morning, depart for a jeep safari through the national park with an experienced naturalist guide to spot wildlife including the one-horned rhinoceros, deer, monkeys, wild boar, and if you're lucky, the elusive Bengal tiger. After lunch at the lodge, enjoy a guided canoe ride on the Rapti River to observe crocodiles and aquatic birds. End the day with a visit to the elephant breeding center to learn about conservation efforts."
        },
        {
          day: 3,
          title: "Morning Safari and Departure",
          description: "Wake up early for a guided jungle walk with a naturalist to explore the park's flora and fauna from a different perspective, focusing on smaller creatures, plant life, and tracking techniques. Return to the lodge for breakfast, followed by free time to relax or explore the surroundings on your own. After lunch, prepare for your departure from Chitwan to your next destination."
        }
      ]}
      included={[
        "2 nights accommodation in Chitwan (jungle lodge)",
        "All meals during the stay (breakfast, lunch, dinner)",
        "Transportation to/from activities within Chitwan",
        "Professional naturalist guide for all jungle activities",
        "All park entry fees and permits",
        "All activities mentioned in the itinerary",
        "All applicable taxes and service charges"
      ]}
      excluded={[
        "Transportation to/from Chitwan (flight or road transfer)",
        "Alcoholic beverages and personal bar bills",
        "Travel insurance",
        "Optional activities not mentioned in the itinerary",
        "Personal expenses (phone calls, laundry, etc.)",
        "Tips for guides and staff"
      ]}
    />
  );
};

export default ChitwanSafari;
