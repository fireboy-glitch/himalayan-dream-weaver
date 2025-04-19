
import React from "react";
import TrekTemplate from "./TrekTemplate";

const KanchenjungaBaseCamp = () => {
  return (
    <TrekTemplate
      title="Kanchenjunga Base Camp Trek"
      heroImage="https://images.unsplash.com/photo-1544198365-f5d60b6d8190"
      duration={22}
      difficulty="Challenging"
      maxAltitude="5,150m"
      bestSeason="Mar-May, Sep-Nov"
      price="USD 1,950"
      overview="The Kanchenjunga Base Camp Trek is a challenging adventure to the world's third-highest mountain. This remote trek offers pristine wilderness, diverse ecosystems, and authentic cultural experiences in Nepal's eastern region. Trek through dense forests, alpine meadows, and glacial valleys while experiencing the unique culture of local communities."
      itinerary={[
        {
          day: 1,
          title: "Fly to Bhadrapur and Drive to Ilam",
          description: "Flight to Bhadrapur followed by a drive to the tea gardens of Ilam."
        },
        {
          day: 2,
          title: "Drive to Taplejung",
          description: "Scenic drive to Taplejung (2,420m), the gateway to Kanchenjunga."
        },
        {
          day: 3,
          title: "Trek to Mitlung",
          description: "Begin trek along the Tamor River to Mitlung (921m)."
        },
        {
          day: 4,
          title: "Trek to Chirwa",
          description: "Continue along the river valley to Chirwa (1,270m)."
        },
        {
          day: 5,
          title: "Trek to Sekathum",
          description: "Ascend through villages to Sekathum (1,576m)."
        },
        {
          day: 6,
          title: "Trek to Amjilossa",
          description: "Steep climb to Amjilossa (2,308m)."
        },
        {
          day: 7,
          title: "Trek to Gyabla",
          description: "Trek through rhododendron forests to Gyabla (2,730m)."
        },
        {
          day: 8,
          title: "Trek to Ghunsa",
          description: "Reach the Sherpa village of Ghunsa (3,595m)."
        },
        {
          day: 9,
          title: "Acclimatization at Ghunsa",
          description: "Rest and acclimatization day with optional hikes."
        },
        {
          day: 10,
          title: "Trek to Kambachen",
          description: "Trek to Kambachen (4,050m) with views of Jannu."
        },
        {
          day: 11,
          title: "Acclimatization at Kambachen",
          description: "Second acclimatization day with short hikes."
        },
        {
          day: 12,
          title: "Trek to Lhonak",
          description: "Trek to Lhonak (4,780m) through high altitude terrain."
        },
        {
          day: 13,
          title: "Trek to Kanchenjunga Base Camp",
          description: "Trek to Kanchenjunga Base Camp (5,150m) for stunning views."
        },
        {
          day: 14,
          title: "Explore Base Camp Area",
          description: "Explore the base camp area and Yalung Glacier."
        },
        {
          day: 15,
          title: "Return to Lhonak",
          description: "Begin return journey to Lhonak."
        },
        {
          day: 16,
          title: "Trek to Kambachen",
          description: "Descend to Kambachen."
        },
        {
          day: 17,
          title: "Trek to Ghunsa",
          description: "Continue descent to Ghunsa."
        },
        {
          day: 18,
          title: "Trek to Phembu",
          description: "Trek to Phembu (2,845m)."
        },
        {
          day: 19,
          title: "Trek to Mitlung",
          description: "Long day trek to Mitlung."
        },
        {
          day: 20,
          title: "Trek to Taplejung",
          description: "Final trek day to Taplejung."
        },
        {
          day: 21,
          title: "Drive to Bhadrapur",
          description: "Drive from Taplejung to Bhadrapur."
        },
        {
          day: 22,
          title: "Fly to Kathmandu",
          description: "Flight back to Kathmandu where the trek concludes."
        }
      ]}
      included={[
        "Domestic flights (Kathmandu-Bhadrapur-Kathmandu)",
        "All ground transportation",
        "Experienced guide and porters",
        "All necessary permits",
        "Teahouse/camping accommodation",
        "All meals during the trek",
        "Camping equipment if needed",
        "First aid and oxygen support"
      ]}
      excluded={[
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Staff tips",
        "Extra nights in Kathmandu",
        "Personal trekking gear",
        "Emergency evacuation"
      ]}
    />
  );
};

export default KanchenjungaBaseCamp;
