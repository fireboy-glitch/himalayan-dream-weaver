
import React from "react";
import TrekTemplate from "./TrekTemplate";

const GhorepaniPoonHill = () => {
  return (
    <TrekTemplate
      title="Ghorepani Poon Hill Trek"
      heroImage="https://images.unsplash.com/photo-1532339142463-fd0a8979791a"
      duration={5}
      difficulty="Easy"
      maxAltitude="3,210m"
      bestSeason="Year Round (Best: Mar-May, Oct-Nov)"
      price="USD 650"
      overview="The Ghorepani Poon Hill Trek is one of Nepal's most scenic and accessible treks, perfect for beginners and families. This short but rewarding journey offers spectacular sunrise views over the Annapurna and Dhaulagiri mountain ranges. The trek passes through beautiful rhododendron forests, traditional Gurung villages, and culminates at the famous Poon Hill viewpoint."
      itinerary={[
        {
          day: 1,
          title: "Drive to Nayapul and Trek to Tikhedhunga",
          description: "After breakfast, drive to Nayapul (1,070m) and begin the trek. Walk along the Modi Khola river, passing through villages and farmland. Overnight at Tikhedhunga (1,540m)."
        },
        {
          day: 2,
          title: "Trek to Ghorepani",
          description: "Ascend stone stairs to Ulleri village, then trek through rhododendron forests to reach Ghorepani (2,860m). This is a challenging day with significant elevation gain."
        },
        {
          day: 3,
          title: "Poon Hill Sunrise and Trek to Tadapani",
          description: "Early morning hike to Poon Hill (3,210m) for sunrise views over the Himalayas. Return to Ghorepani for breakfast, then trek to Tadapani (2,630m) through beautiful forests."
        },
        {
          day: 4,
          title: "Trek to Ghandruk",
          description: "Descend through rhododendron forest to the large Gurung village of Ghandruk (1,940m). Explore the traditional culture and mountain views."
        },
        {
          day: 5,
          title: "Trek to Nayapul and Drive to Pokhara",
          description: "Final day of trekking, descending to Nayapul. Drive back to Pokhara where the trek concludes."
        }
      ]}
      included={[
        "Transportation to/from Pokhara-Nayapul",
        "Professional English-speaking trekking guide",
        "Required permits and TIMS card",
        "Teahouse accommodation during the trek",
        "Three meals per day during the trek",
        "Porter (1 porter for 2 trekkers)",
        "Insurance for guide and porter",
        "First aid kit"
      ]}
      excluded={[
        "Transportation to/from Kathmandu-Pokhara",
        "Travel insurance",
        "Personal expenses",
        "Tips for guides and porters",
        "Extra porters if needed",
        "Meals in Pokhara",
        "Personal trekking gear"
      ]}
    />
  );
};

export default GhorepaniPoonHill;
