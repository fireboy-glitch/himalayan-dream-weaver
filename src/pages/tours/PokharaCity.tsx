
import React from "react";
import TourTemplate from "./TourTemplate";

const PokharaCity = () => {
  return (
    <TourTemplate
      title="Pokhara City Tour"
      heroImage="https://images.unsplash.com/photo-1544015759-9a76377fe12f"
      duration={3}
      locations="Pokhara, Sarangkot, Phewa Lake"
      groupSize="2-12 people"
      price="USD 249"
      overview="Pokhara, nestled beside Phewa Lake and surrounded by the Annapurna mountains, is Nepal's premier holiday destination. Our Pokhara City Tour offers the perfect blend of natural beauty, adventure, and relaxation. Experience stunning mountain views, tranquil boat rides, and cultural attractions in this picturesque lakeside city. Often called the 'Gateway to the Annapurnas', Pokhara combines the thrill of adventure with the serenity of nature's finest offerings."
      highlights={[
        "Watch a spectacular sunrise over the Himalayas from Sarangkot viewpoint",
        "Enjoy a peaceful boat ride on Phewa Lake with mountain reflections",
        "Visit the sacred Tal Barahi Temple located on an island in Phewa Lake",
        "Explore the mysterious Davis Falls and adjoining Gupteshwor Cave",
        "Visit the International Mountain Museum to learn about Nepal's mountaineering history",
        "Experience the city's relaxed atmosphere and lakeside cafes",
        "Optional adventure activities including paragliding and zip-lining"
      ]}
      itinerary={[
        {
          day: 1,
          title: "Arrival in Pokhara and Lakeside Tour",
          description: "Arrive in Pokhara either by flight from Kathmandu (25 minutes) or by road (6-7 hours). Check into your hotel and then begin your exploration with a relaxing boat ride on Phewa Lake, visiting the island temple of Tal Barahi. In the evening, enjoy the vibrant atmosphere of Lakeside with its many shops, restaurants, and cafes. Witness a beautiful sunset over the lake and mountains if weather permits."
        },
        {
          day: 2,
          title: "Sunrise at Sarangkot and City Sightseeing",
          description: "Early morning drive to Sarangkot (about 45 minutes) to witness a magnificent sunrise over the Annapurna and Dhaulagiri mountain ranges. After breakfast, tour the city's main attractions including Davis Falls, Gupteshwor Cave, the Seti River Gorge, and the International Mountain Museum. In the afternoon, explore the Old Bazaar for a glimpse into the traditional lifestyle of Pokhara's diverse ethnic communities. Evening at leisure by the lakeside."
        },
        {
          day: 3,
          title: "World Peace Pagoda and Leisure Day",
          description: "After breakfast, hike to the World Peace Pagoda (Japanese Stupa) for panoramic views of Pokhara, the lake, and the mountains. Enjoy a free afternoon for optional activities such as paragliding, zip-lining, or ultralight aircraft flights (additional cost). Alternatively, relax by the lake or explore more of the city at your own pace. Farewell dinner at a traditional Nepali restaurant with cultural performances."
        }
      ]}
      included={[
        "3 nights accommodation in Pokhara (3-star hotel)",
        "Daily breakfast",
        "Private vehicle for transportation throughout the tour",
        "Professional English-speaking tour guide",
        "Boat ride on Phewa Lake",
        "All entrance fees to monuments and attractions",
        "All applicable taxes and service charges"
      ]}
      excluded={[
        "Transportation to/from Pokhara (flight or road transfer)",
        "Lunch and dinner (except farewell dinner)",
        "Travel insurance",
        "Optional adventure activities (paragliding, zip-lining, etc.)",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and drivers"
      ]}
    />
  );
};

export default PokharaCity;
