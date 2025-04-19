
import React from "react";
import TrekTemplate from "./TrekTemplate";

const MardiHimal = () => {
  return (
    <TrekTemplate
      title="Mardi Himal Trek"
      heroImage="https://images.unsplash.com/photo-1540202404-1b927e27fa8b"
      duration={7}
      difficulty="Moderate"
      maxAltitude="4,500m"
      bestSeason="Mar-May, Sep-Nov"
      price="USD 750"
      overview="The Mardi Himal Trek is a hidden gem in the Annapurna region, offering a less crowded alternative to popular routes. This trek takes you through pristine forests, traditional villages, and high-altitude terrain, culminating in breathtaking views of the Annapurna range, Machhapuchhre (Fishtail), and the Mardi Himal."
      itinerary={[
        {
          day: 1,
          title: "Drive to Kande and Trek to Forest Camp",
          description: "Drive from Pokhara to Kande, then trek through rhododendron and oak forests to Forest Camp (2,550m)."
        },
        {
          day: 2,
          title: "Trek to Low Camp",
          description: "Continue ascending through beautiful forests to Low Camp (2,970m), offering first views of Machhapuchhre."
        },
        {
          day: 3,
          title: "Trek to High Camp",
          description: "Climb above the tree line to High Camp (3,550m). Enjoy panoramic mountain views and sunset."
        },
        {
          day: 4,
          title: "Trek to Mardi Himal Base Camp and return to High Camp",
          description: "Early morning trek to Mardi Himal Base Camp (4,500m) for stunning views. Return to High Camp."
        },
        {
          day: 5,
          title: "Trek to Middle Camp",
          description: "Begin descent to Middle Camp (2,800m) through rhododendron forests."
        },
        {
          day: 6,
          title: "Trek to Sidhing",
          description: "Continue descent to Sidhing village (1,750m), experiencing local culture."
        },
        {
          day: 7,
          title: "Trek to Lumre and Drive to Pokhara",
          description: "Final trek to Lumre, then drive back to Pokhara where the trek concludes."
        }
      ]}
      included={[
        "Transportation to/from trek starting point",
        "English-speaking guide",
        "Permits and TIMS card",
        "Teahouse accommodation",
        "Three meals daily during trek",
        "Porter service",
        "Guide and porter insurance",
        "First aid kit"
      ]}
      excluded={[
        "Travel insurance",
        "Personal expenses",
        "Tips for staff",
        "Extra porters",
        "Meals in Pokhara",
        "Personal trekking equipment",
        "Emergency evacuation"
      ]}
    />
  );
};

export default MardiHimal;
