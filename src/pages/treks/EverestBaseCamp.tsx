
import React from "react";
import TrekTemplate from "./TrekTemplate";

const EverestBaseCamp = () => {
  return (
    <TrekTemplate
      title="Everest Base Camp Trek"
      heroImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      duration={14}
      difficulty="Challenging"
      maxAltitude="5,364m"
      bestSeason="Mar-May, Sep-Nov"
      price="USD 1,499"
      overview="The Everest Base Camp trek is one of the most popular trekking routes in Nepal and the world. This trek takes you through stunning mountain scenery, traditional Sherpa villages, and eventually to the foot of the world's highest mountain, Mount Everest (8,848m). Along the way, you'll experience unique Sherpa culture, visit ancient monasteries, and enjoy breathtaking panoramic views of the Himalayan giants including Lhotse, Nuptse, and Ama Dablam."
      itinerary={[
        {
          day: 1,
          title: "Arrival in Kathmandu",
          description: "Welcome to Nepal! Upon your arrival at Tribhuvan International Airport, our representative will meet you and transfer you to your hotel. Rest and prepare for the upcoming adventure."
        },
        {
          day: 2,
          title: "Fly to Lukla and Trek to Phakding (2,651m)",
          description: "Early morning flight to Lukla, the gateway to Everest. Begin your trek through Sherpa villages to Phakding. Walking time: 3-4 hours."
        },
        {
          day: 3,
          title: "Trek to Namche Bazaar (3,440m)",
          description: "Hike alongside the Dudh Koshi River and ascend to Namche Bazaar, the capital of the Khumbu region. Walking time: 5-6 hours."
        },
        {
          day: 4,
          title: "Acclimatization Day in Namche",
          description: "Rest day for acclimatization. Optional hike to Everest View Hotel for panoramic views of Everest, Lhotse and Ama Dablam."
        },
        {
          day: 5,
          title: "Trek to Tengboche (3,867m)",
          description: "Trek to Tengboche, home to the region's largest monastery with spectacular mountain views. Walking time: 5 hours."
        }
      ]}
      included={[
        "Airport pickups and drops",
        "3 nights accommodation in Kathmandu",
        "Domestic flights (Kathmandu/Lukla/Kathmandu)",
        "Teahouse accommodation during the trek",
        "All meals during the trek (breakfast, lunch and dinner)",
        "Experienced English-speaking guide and porters",
        "Sagarmatha National Park entry permits",
        "TIMS (Trekkers' Information Management System) card"
      ]}
      excluded={[
        "International airfare",
        "Nepal entry visa fee",
        "Travel insurance",
        "Meals in Kathmandu (except breakfast)",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and porters"
      ]}
    />
  );
};

export default EverestBaseCamp;
