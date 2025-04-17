
import React from "react";
import TrekTemplate from "./TrekTemplate";

const UpperMustang = () => {
  return (
    <TrekTemplate
      title="Upper Mustang Trek"
      heroImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
      duration={14}
      difficulty="Moderate"
      maxAltitude="3,810m (Lo Manthang)"
      bestSeason="Mar-Oct"
      price="USD 2,199"
      overview="The Upper Mustang Trek takes you to the hidden kingdom of Lo, a restricted and remote area that was once an independent Buddhist kingdom. This trek offers a unique cultural experience with strong Tibetan influences, ancient monasteries, and cave dwellings that date back thousands of years. The landscape of Upper Mustang is dramatically different from the rest of Nepal - arid, desert-like terrain with colorful rock formations and deep ravines. This region lies in the rain shadow of the Himalayas, making it possible to trek even during monsoon season."
      itinerary={[
        {
          day: 1,
          title: "Arrival in Kathmandu",
          description: "Welcome to Nepal! Meet our representative at Tribhuvan International Airport who will transfer you to your hotel. Preparation for the trek."
        },
        {
          day: 2,
          title: "Fly to Pokhara",
          description: "Scenic 25-minute flight to Pokhara with views of the Annapurna and Dhaulagiri ranges. Free time to explore Pokhara."
        },
        {
          day: 3,
          title: "Fly to Jomsom and Trek to Kagbeni (2,800m)",
          description: "Early morning flight to Jomsom. Begin trek to Kagbeni, the gateway to Upper Mustang. Walking time: 3-4 hours."
        },
        {
          day: 4,
          title: "Trek to Chele (3,050m)",
          description: "Enter the restricted area of Upper Mustang. Trek through unique landscape with colorful cliffs. Walking time: 5-6 hours."
        },
        {
          day: 5,
          title: "Trek to Syangbochen (3,475m)",
          description: "Cross high passes with views of the Annapurna range and Nilgiri. Trek through villages with distinct Tibetan architecture. Walking time: 6-7 hours."
        }
      ]}
      included={[
        "Airport pickups and drops",
        "3 nights accommodation in Kathmandu, 2 nights in Pokhara",
        "Domestic flights (Kathmandu/Pokhara/Jomsom and return)",
        "Upper Mustang Restricted Area Permit (USD 500 per person)",
        "Annapurna Conservation Area permit",
        "Teahouse/lodge accommodation during the trek",
        "All meals during the trek (breakfast, lunch and dinner)",
        "Experienced English-speaking guide and porters",
        "All ground transportation as per itinerary"
      ]}
      excluded={[
        "International airfare",
        "Nepal entry visa fee",
        "Travel insurance",
        "Meals in Kathmandu and Pokhara (except breakfast)",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and porters"
      ]}
    />
  );
};

export default UpperMustang;
