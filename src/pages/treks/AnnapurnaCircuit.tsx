
import React from "react";
import TrekTemplate from "./TrekTemplate";

const AnnapurnaCircuit = () => {
  return (
    <TrekTemplate
      title="Annapurna Circuit Trek"
      heroImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
      duration={12}
      difficulty="Moderate"
      maxAltitude="5,416m (Thorong La Pass)"
      bestSeason="Mar-May, Sep-Nov"
      price="USD 1,299"
      overview="The Annapurna Circuit Trek is one of the most diverse and rewarding treks in Nepal. This trek takes you through incredible diverse landscapes, from subtropical forests to high alpine terrain, and around the entire Annapurna massif. Crossing the challenging Thorong La Pass (5,416m) is the highlight of this trek. You'll experience a variety of cultures, from Hindu villages in the lower regions to Tibetan Buddhist communities in the higher parts of the circuit."
      itinerary={[
        {
          day: 1,
          title: "Arrival in Kathmandu",
          description: "Welcome to Nepal! Meet our representative at Tribhuvan International Airport who will transfer you to your hotel. Prepare for your upcoming adventure."
        },
        {
          day: 2,
          title: "Drive to Besisahar and Trek to Ngadi (930m)",
          description: "Drive to Besisahar, the starting point of the Annapurna Circuit. Begin trek to Ngadi. Walking time: 3 hours."
        },
        {
          day: 3,
          title: "Trek to Jagat (1,300m)",
          description: "Trek along the Marsyangdi River through picturesque villages. Walking time: 6-7 hours."
        },
        {
          day: 4,
          title: "Trek to Dharapani (1,960m)",
          description: "Continue through lush forests and scenic waterfalls. Enter the Manang district. Walking time: 5-6 hours."
        },
        {
          day: 5,
          title: "Trek to Chame (2,670m)",
          description: "Trek through pine forests with views of Lamjung Himal and Annapurna II. Walking time: 5-6 hours."
        }
      ]}
      included={[
        "Airport pickups and drops",
        "3 nights accommodation in Kathmandu",
        "All ground transportation as per itinerary",
        "Teahouse accommodation during the trek",
        "All meals during the trek (breakfast, lunch and dinner)",
        "Experienced English-speaking guide and porters",
        "Annapurna Conservation Area entry permit",
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

export default AnnapurnaCircuit;
