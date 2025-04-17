
import React from "react";
import TrekTemplate from "./TrekTemplate";

const LangtangValley = () => {
  return (
    <TrekTemplate
      title="Langtang Valley Trek"
      heroImage="https://images.unsplash.com/photo-1501854140801-50d01698950b"
      duration={7}
      difficulty="Moderate"
      maxAltitude="3,870m (Kyanjin Ri)"
      bestSeason="Mar-May, Sep-Dec"
      price="USD 899"
      overview="The Langtang Valley Trek is a hidden gem located just north of Kathmandu. Despite being easily accessible, it's less crowded than other popular treks, offering a more authentic experience. The trek takes you through beautiful forests, traditional Tamang villages, and alongside glacial rivers. Langtang Valley is known as 'the valley of glaciers' where you'll witness breathtaking mountain scenery including Langtang Lirung (7,227m), Dorje Lakpa (6,966m), and Gangchenpo (6,388m)."
      itinerary={[
        {
          day: 1,
          title: "Drive from Kathmandu to Syabrubesi (1,550m)",
          description: "Scenic drive through rural landscapes and mountain highways to Syabrubesi, the gateway to Langtang. Drive duration: 7-8 hours."
        },
        {
          day: 2,
          title: "Trek to Lama Hotel (2,380m)",
          description: "Begin your trek through dense forests along the Langtang Khola (river). Walking time: 5-6 hours."
        },
        {
          day: 3,
          title: "Trek to Langtang Village (3,430m)",
          description: "Continue ascending through forests into more open meadows and yak pastures. Walking time: 5-6 hours."
        },
        {
          day: 4,
          title: "Trek to Kyanjin Gompa (3,870m)",
          description: "Short but scenic trek to the principal settlement in the valley, surrounded by mountains. Walking time: 3-4 hours."
        },
        {
          day: 5,
          title: "Exploration Day at Kyanjin Gompa",
          description: "Optional hike to Kyanjin Ri (4,773m) or Tserko Ri (5,000m) for spectacular views of the Langtang range."
        }
      ]}
      included={[
        "Airport pickups and drops",
        "2 nights accommodation in Kathmandu",
        "All ground transportation as per itinerary",
        "Teahouse accommodation during the trek",
        "All meals during the trek (breakfast, lunch and dinner)",
        "Experienced English-speaking guide and porters",
        "Langtang National Park entry permit",
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

export default LangtangValley;
