
import React from "react";
import TourTemplate from "./TourTemplate";

const LumbiniPilgrimage = () => {
  return (
    <TourTemplate
      title="Lumbini Pilgrimage"
      heroImage="https://images.unsplash.com/photo-1605649461790-85c0acc30e05"
      duration={2}
      locations="Lumbini"
      groupSize="2-15 people"
      price="USD 199"
      overview="Lumbini, the birthplace of Lord Buddha, is one of the world's most important pilgrimage destinations for Buddhists and spiritual seekers alike. Our Lumbini Pilgrimage tour offers a deeply meaningful journey to this UNESCO World Heritage Site where Siddhartha Gautama, the Buddha, was born in 623 BCE. Explore the Sacred Garden where Buddha was born, visit the Mayadevi Temple, and tour the many international Buddhist monasteries and meditation centers established by different countries and traditions in the Monastic Zone."
      highlights={[
        "Visit the exact birthplace of Buddha in the Sacred Garden",
        "Explore the Mayadevi Temple housing the Marker Stone and Nativity Sculpture",
        "Tour diverse international monasteries in the Monastic Zone",
        "See the Ashoka Pillar with ancient inscriptions confirming Buddha's birthplace",
        "Experience the peace of the Sacred Garden and Puskarini Pond",
        "Learn about Buddhist philosophy and history",
        "Optional meditation sessions in this spiritually significant location"
      ]}
      itinerary={[
        {
          day: 1,
          title: "Arrival in Lumbini and Sacred Garden Tour",
          description: "Arrive in Lumbini either by flight to Bhairahawa Airport (nearest to Lumbini) or by road. Check into your hotel and refresh. After lunch, visit the Sacred Garden where Buddha was born in 623 BCE. Explore the Mayadevi Temple, housing the exact spot of Buddha's birth marked by the Marker Stone and Nativity Sculpture depicting the birth of the Buddha. Visit the sacred Puskarini Pond where Queen Mayadevi bathed before giving birth and where the infant Buddha was given his first purification bath. See the famous Ashoka Pillar, erected by Emperor Ashoka in 249 BCE to mark Buddha's birthplace. Spend time for personal reflection or meditation in this peaceful setting. Return to hotel for dinner."
        },
        {
          day: 2,
          title: "Monastic Zone Tour",
          description: "After breakfast, explore the Monastic Zone divided into East and West Monastic Zones, separated by a canal. Tour the international monasteries built by various countries and Buddhist traditions, each with its own distinctive architectural style. In the East Monastic Zone, visit monasteries from Thailand, China, Japan, Sri Lanka, and Myanmar. In the West Monastic Zone, explore monasteries from countries including Germany, France, South Korea, and Vietnam. Visit the Lumbini Museum and the World Peace Pagoda (Japanese Stupa). After lunch, enjoy some free time for personal reflection, meditation, or further exploration before your departure from Lumbini."
        }
      ]}
      included={[
        "1 night accommodation in Lumbini",
        "Breakfast and lunch during the tour",
        "Private vehicle for transportation throughout the tour",
        "Professional English-speaking guide with knowledge of Buddhist history",
        "All entrance fees to monuments and attractions",
        "All applicable taxes and service charges"
      ]}
      excluded={[
        "Transportation to/from Lumbini (flight or road transfer)",
        "Dinner",
        "Travel insurance",
        "Optional activities not mentioned in the itinerary",
        "Personal expenses (phone calls, laundry, bar bills, etc.)",
        "Tips for guides and drivers"
      ]}
    />
  );
};

export default LumbiniPilgrimage;
