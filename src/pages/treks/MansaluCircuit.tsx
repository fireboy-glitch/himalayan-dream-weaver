
import React from "react";
import TrekTemplate from "./TrekTemplate";

const MansaluCircuit = () => {
  return (
    <TrekTemplate
      title="Manaslu Circuit Trek"
      heroImage="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
      duration={15}
      difficulty="Challenging"
      maxAltitude="5,106m (Larkya La Pass)"
      bestSeason="Mar-May, Sep-Nov"
      price="USD 1,699"
      overview="The Manaslu Circuit Trek is an incredible journey around Mount Manaslu, the world's eighth highest mountain (8,163m). This remote and less crowded trek offers a perfect blend of natural beauty and cultural immersion. The trail passes through diverse landscapes including subtropical forests, alpine meadows, and high-altitude desert plateaus. You'll experience authentic Gurung, Tibetan, and Nubri cultures, visit ancient monasteries, and cross the challenging Larkya La Pass with panoramic views of the Himalayan giants."
      itinerary={[
        {
          day: 1,
          title: "Drive from Kathmandu to Soti Khola (700m)",
          description: "Journey through scenic countryside and mountain roads to reach Soti Khola. Drive duration: 7-8 hours."
        },
        {
          day: 2,
          title: "Trek to Machha Khola (870m)",
          description: "Begin your trek along the Budhi Gandaki River through villages and terraced fields. Walking time: 5-6 hours."
        },
        {
          day: 3,
          title: "Trek to Jagat (1,340m)",
          description: "Continue along the river, crossing suspension bridges and enjoying waterfalls. Walking time: 6-7 hours."
        },
        {
          day: 4,
          title: "Trek to Deng (1,860m)",
          description: "Trek through bamboo forests and enter the Tibetan Buddhist region. Walking time: 6-7 hours."
        },
        {
          day: 5,
          title: "Trek to Namrung (2,630m)",
          description: "Ascend through pine forests with views of Sringi Himal and Ganesh Himal. Walking time: 5-6 hours."
        }
      ]}
      included={[
        "Airport pickups and drops",
        "3 nights accommodation in Kathmandu",
        "All ground transportation as per itinerary",
        "Teahouse accommodation during the trek",
        "All meals during the trek (breakfast, lunch and dinner)",
        "Experienced English-speaking guide and porters",
        "Restricted area permit for Manaslu",
        "Manaslu Conservation Area permit",
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

export default MansaluCircuit;
