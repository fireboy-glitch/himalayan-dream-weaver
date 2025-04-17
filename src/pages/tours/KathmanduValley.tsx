
import React from "react";
import TourTemplate from "./TourTemplate";

const KathmanduValley = () => {
  return (
    <TourTemplate
      title="Kathmandu Valley Tour"
      heroImage="https://images.unsplash.com/photo-1605640840605-14ac1855827b"
      duration={3}
      locations="Kathmandu, Bhaktapur, Patan"
      groupSize="2-12 people"
      price="USD 299"
      overview="The Kathmandu Valley Tour offers a fascinating journey through the cultural and historical treasures of Nepal's capital and its surrounding cities. Visit seven UNESCO World Heritage Sites in three days as you explore ancient temples, royal palaces, and sacred stupas. Experience the rich cultural heritage of the Newari people, witness traditional craftsmanship, and immerse yourself in the vibrant blend of Hindu and Buddhist traditions that characterize this remarkable valley."
      highlights={[
        "Explore Kathmandu Durbar Square with its ancient palaces and temples",
        "Visit the sacred Pashupatinath Temple, one of the most important Hindu shrines",
        "Discover Boudhanath Stupa, the largest Buddhist stupa in Nepal",
        "Tour the ancient city of Bhaktapur and its well-preserved architecture",
        "Explore Patan's Golden Temple and Durbar Square",
        "Experience local culture, cuisine, and traditional crafts",
        "Enjoy panoramic views from Swayambhunath (Monkey Temple)"
      ]}
      itinerary={[
        {
          day: 1,
          title: "Kathmandu City Tour",
          description: "After breakfast, begin your exploration of Kathmandu with visits to Kathmandu Durbar Square, home to numerous palaces and temples from the 12th to 18th centuries. Continue to Swayambhunath (Monkey Temple), offering panoramic views of the valley and an important Buddhist shrine. In the afternoon, visit the sacred Pashupatinath Temple complex on the banks of the Bagmati River, one of the most significant Hindu temples dedicated to Lord Shiva."
        },
        {
          day: 2,
          title: "Bhaktapur City Tour",
          description: "Today, explore the ancient city of Bhaktapur, known as the 'City of Devotees'. Visit the well-preserved Bhaktapur Durbar Square with its Lion Gate, Golden Gate, and Palace of 55 Windows. Explore the narrow streets lined with traditional red-brick buildings and witness local potters at work in the famous Pottery Square. Enjoy lunch at a local restaurant serving authentic Newari cuisine. In the afternoon, visit Changu Narayan Temple, the oldest temple in the Kathmandu Valley."
        },
        {
          day: 3,
          title: "Patan City Tour and Boudhanath",
          description: "Begin your day with a visit to Patan, also known as Lalitpur, the 'City of Beauty'. Explore Patan Durbar Square with its ancient palace, intricate carvings, and beautiful temples. Visit the Golden Temple (Hiranya Varna Mahavihara) and the Patan Museum to learn about Nepal's rich art and cultural heritage. After lunch, visit the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in the world and a center of Tibetan culture in Nepal. Enjoy some free time for shopping in Thamel before concluding your tour."
        }
      ]}
      included={[
        "3 nights accommodation in Kathmandu (3-star hotel)",
        "Daily breakfast",
        "Private vehicle for transportation throughout the tour",
        "Professional English-speaking tour guide",
        "All entrance fees to monuments and attractions",
        "Welcome dinner with cultural show",
        "All applicable taxes and service charges"
      ]}
      excluded={[
        "International airfare",
        "Nepal entry visa fee",
        "Lunch and dinner (except welcome dinner)",
        "Travel insurance",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and drivers"
      ]}
    />
  );
};

export default KathmanduValley;
