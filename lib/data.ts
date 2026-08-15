export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export type Tour = {
  slug: string;
  title: string;
  categorySlug: string;
  extraCategorySlugs?: string[];
  category: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  strikePrice?: number;
  priceOnRequest?: boolean;
  /** Pricing unit shown after the price (defaults to "person"). */
  priceUnit?: string;
  image: string;
  /** Optional extra photos (inside/outside) shown in a gallery on the detail page. */
  gallery?: string[];
  badge?: string;
  /** Temporarily not bookable: shows an alert badge and swaps the booking CTA. */
  closed?: boolean;
  specs?: { label: string; value: string }[];
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  /** Optional day-by-day plan for multi-day packages. */
  itinerary?: { day: string; title: string; items: string[] }[];
};

export type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  tour: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  image: string;
  body: string[];
};

export type Mood = {
  name: string;
  blurb: string;
  image: string;
  categorySlug: string;
};

export const site = {
  name: "Holiday In Goa Tour & Travels",
  shortName: "Holiday In Goa",
  tagline: "Domestic & International Travel Agent",
  url: "https://holidayingoatourandtravels.com",
  phone: "+91 78753 33306",
  phoneRaw: "917875333306",
  office: "0832 295 8836",
  officeRaw: "08322958836",
  whatsapp: "917875333306",
  whatsappDisplay: "+91 78753 33306",
  email: "holidayingoatourandtravel@gmail.com",
  whatsappUrl: "https://wa.me/917875333306",
  facebookUrl: "https://www.facebook.com/share/19WR8nbkeX/",
};

const img = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Prefixes local (public/) asset paths with the deploy basePath so they
// resolve correctly on GitHub Pages project URLs. No-op locally.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

/** Build a WhatsApp deep link with a pre-filled message. */
export const whatsapp = (message: string) =>
  `${site.whatsappUrl}?text=${encodeURIComponent(message)}`;

export const categories: Category[] = [
  {
    slug: "packages",
    name: "Tour Packages",
    tagline: "3N–6N Goa holidays",
    image: img("photo-1520454974749-611b7248ffdb"),
  },
  {
    slug: "cruises",
    name: "Cruises",
    tagline: "Sunset & dinner cruises",
    image: img("photo-1544551763-46a013bb70d5"),
  },
  {
    slug: "scuba-diving",
    name: "Scuba Diving",
    tagline: "Grand Island reefs",
    image: img("photo-1530053969600-caed2596d242"),
  },
  {
    slug: "water-sports",
    name: "Water Sports",
    tagline: "Jet ski & parasailing",
    image: img("photo-1530870110042-98b2cb110834"),
  },
  {
    slug: "sightseeing",
    name: "Sightseeing",
    tagline: "North & South Goa",
    image: img("photo-1471922694854-ff1b63b20054"),
  },
  {
    slug: "dudhsagar",
    name: "Dudhsagar",
    tagline: "Waterfall jeep safari",
    image: asset("/dudhsagar.png"),
  },
  {
    slug: "adventure",
    name: "Adventure",
    tagline: "Kayaking & flyboarding",
    image: img("photo-1502680390469-be75c86b636f"),
  },
  {
    slug: "casino",
    name: "Casino",
    tagline: "Big Daddy & Deltin nights",
    image: img("photo-1596838132731-3301c3fd4317"),
  },
  {
    slug: "nightlife",
    name: "Nightlife & Parties",
    tagline: "Clubs, pubs & beach parties",
    image: img("photo-1470229722913-7c0e2dbbafd3"),
  },
];

const genInclusions = [
  "Pickup & drop from selected Goa locations",
  "All applicable taxes and service charges",
  "Professional, verified local guide/operator",
  "Safety equipment where applicable",
];
const genExclusions = [
  "Personal expenses and tips",
  "Food & beverages unless specified",
  "Anything not mentioned in inclusions",
];

export const tours: Tour[] = [
  // Packages
  {
    slug: "goa-luxury-escape-5d4n",
    title: "Goa Luxury Escape — 5 Days / 4 Nights",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviews: 96,
    price: 56999,
    priceUnit: "couple",
    image: img("photo-1582719478250-c89cae4dc85b"),
    badge: "5-Star",
    specs: [
      { label: "Stay", value: "5-Star Hotel · 01 Premium Room · 4 Nights" },
      { label: "Occupancy", value: "02 Adults" },
      { label: "Meals", value: "Daily Breakfast" },
      { label: "Vehicle", value: "Private AC Innova throughout" },
    ],
    description:
      "Our flagship Goa holiday for couples who want the best — a 5-star stay with daily breakfast, a private AC Innova for all transfers and sightseeing, an exclusive couple dinner cruise party, and a full day of Grand Island scuba diving and water sports. Priced at ₹56,999 per couple.",
    highlights: [
      "5-star hotel stay in a premium room with breakfast",
      "Private AC Innova for all transfers & sightseeing",
      "Exclusive Couple Dinner Cruise Party with live dance shows",
      "Grand Island scuba diving, water sports & snorkeling",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Goa & Couple Dinner Cruise",
        items: [
          "Warm welcome & private AC Innova transfer to your 5-star hotel, check-in and leisure",
          "Evening triple-deck dinner cruise: welcome drinks, starters, unlimited buffet dinner, 02 drinks & 02 tequila shots",
          "Scenic route Panjim – Miramar – Old Goa with DJ and Goan, Bollywood, Hollywood & Portuguese dance shows",
        ],
      },
      {
        day: "Day 02",
        title: "Private South Goa Experience (10 AM – 8 PM)",
        items: [
          "Miramar Beach, Dona Paula & Old Goa churches (Se Cathedral)",
          "Mangeshi & Shantadurga temples, Panjim city & Fontainhas Latin Quarter",
          "Wax Museum & Horror Show and Spice Plantation — all by private AC Innova",
        ],
      },
      {
        day: "Day 03",
        title: "Grand Island Scuba Diving & Water Sports (8:30 AM – 5 PM)",
        items: [
          "Boat to Grand Island with breakfast, snacks & unlimited buffet lunch",
          "Scuba diving with PADI guide, underwater photos & videos",
          "Jet ski, banana, bumper, speed boat, parasailing, snorkeling & dolphin sighting",
        ],
      },
      {
        day: "Day 04",
        title: "Private North Goa Experience (10 AM – 7 PM)",
        items: [
          "Fort Aguada, Sinquerim, Baga & Calangute beaches",
          "Anjuna & Vagator beaches, Parra coconut road, Chauranginath temple",
          "Thunder World, Arpora (Snow Park optional — extra charges)",
        ],
      },
      {
        day: "Day 05",
        title: "Check-out & Departure",
        items: [
          "Breakfast and hotel check-out",
          "Private AC Innova transfer to airport / railway / bus station",
        ],
      },
    ],
    inclusions: [
      "04 nights at a 5-star hotel with daily buffet breakfast",
      "Private AC Innova for airport transfers & all sightseeing",
      "Hotel pickup & drop for Grand Island (AC mini bus)",
      "Couple Dinner Cruise Party",
      "Private South & North Goa sightseeing",
      "Grand Island scuba diving, water sports & snorkeling",
      "Fuel, tolls, parking, interstate taxes & driver allowance",
      "Free Wi-Fi, hot water & room service",
    ],
    exclusions: [
      "Dolphin trip & evening cruise on Day 02 (extra charges)",
      "Snow Park entry on Day 04 (extra charges)",
      "Executive deck, hookah, photoshoot & event arrangements (optional add-ons)",
      "Lunch & dinner except where mentioned, personal expenses & tips",
    ],
  },
  {
    slug: "goa-luxury-holiday-5d4n",
    title: "Goa Premium Luxury Holiday Package — 5 Days / 4 Nights",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 142,
    price: 35999,
    priceUnit: "couple",
    image: img("photo-1566073771259-6a8506099945"),
    badge: "Luxury",
    specs: [
      { label: "Stay", value: "4-Star Premium Hotel · 4 Nights" },
      { label: "Occupancy", value: "01 Room · 02 Adults" },
      { label: "Meals", value: "Daily Breakfast" },
      { label: "Sightseeing", value: "Private AC Sedan (North & South)" },
    ],
    description:
      "The most premium way to see Goa — a luxury 4-star stay with daily breakfast, private AC sedan sightseeing across North & South Goa, an exclusive couple dinner cruise party, and a full day of Grand Island scuba diving and water sports. Airport transfers included, priced at ₹35,999 per couple.",
    highlights: [
      "Luxury 4-star hotel stay with daily breakfast",
      "Private AC sedan for North & South Goa sightseeing",
      "Exclusive Couple Dinner Cruise Party with live dance shows",
      "Grand Island scuba diving, water sports & snorkeling",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Goa & Couple Dinner Cruise",
        items: [
          "Welcome & private AC sedan transfer to your 4-star hotel, check-in and leisure",
          "Evening triple-deck dinner cruise: welcome drinks, starters, unlimited buffet dinner, 02 drinks & 02 tequila shots",
          "Scenic route Panjim – Miramar – Old Goa with DJ and Goan, Bollywood, Hollywood & Portuguese dance shows",
        ],
      },
      {
        day: "Day 02",
        title: "Private South Goa Sightseeing (10 AM – 8 PM)",
        items: [
          "Miramar Beach, Dona Paula & Old Goa churches (Se Cathedral)",
          "Mangeshi & Shantadurga temples, Panjim city & Fontainhas Latin Quarter",
          "Wax Museum & Horror Show and Spice Plantation",
        ],
      },
      {
        day: "Day 03",
        title: "Grand Island Scuba Diving & Water Sports (8:30 AM – 5 PM)",
        items: [
          "Sharing AC mini bus & boat to Grand Island with breakfast, snacks & unlimited buffet lunch",
          "Scuba diving with PADI guide, underwater photos & videos",
          "Jet ski, banana, bumper, speed boat, parasailing, snorkeling & dolphin sighting",
        ],
      },
      {
        day: "Day 04",
        title: "Private North Goa Sightseeing (10 AM – 7 PM)",
        items: [
          "Fort Aguada, Sinquerim, Baga & Calangute beaches",
          "Anjuna & Vagator beaches, Parra coconut road, Chauranginath temple",
          "Thunder World, Arpora (Snow Park optional — extra charges)",
        ],
      },
      {
        day: "Day 05",
        title: "Check-out & Departure",
        items: [
          "Breakfast and hotel check-out",
          "Private transfer to airport / railway / bus station",
        ],
      },
    ],
    inclusions: [
      "04 nights in a 4-star hotel with daily buffet breakfast",
      "Airport / railway transfers",
      "Private AC sedan for sightseeing; AC mini bus for cruise & Grand Island",
      "Couple Dinner Cruise Party",
      "Private South & North Goa sightseeing",
      "Grand Island scuba diving, water sports & snorkeling",
      "Fuel, tolls, parking, interstate taxes & driver allowance",
      "Free Wi-Fi, hot water & room service",
    ],
    exclusions: [
      "Dolphin trip & evening cruise on Day 02 (extra charges)",
      "Snow Park entry on Day 04 (extra charges)",
      "Executive deck, hookah, photoshoot & event arrangements (optional add-ons)",
      "Lunch & dinner except where mentioned, personal expenses & tips",
    ],
  },
  {
    slug: "goa-premium-holiday-5d4n",
    title: "Goa Premium Holiday Package — 5 Days / 4 Nights",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 187,
    price: 20999,
    priceUnit: "couple",
    image: img("photo-1507525428034-b723cf961d3e"),
    badge: "Premium",
    specs: [
      { label: "Stay", value: "3-Star Premium Hotel · 4 Nights" },
      { label: "Occupancy", value: "01 Room · 02 Adults" },
      { label: "Meals", value: "Daily Breakfast" },
      { label: "Transfers", value: "AC transport + Airport pickup & drop" },
    ],
    description:
      "A complete 5-day Goa holiday for two — a premium 3-star stay with daily breakfast, a couple dinner cruise party, North & South Goa sightseeing, and a full day of Grand Island scuba diving and water sports. Airport transfers and AC transport throughout, priced at ₹20,999 per couple.",
    highlights: [
      "Exclusive Couple Dinner Cruise Party with DJ & dance shows",
      "Grand Island scuba diving + water sports day",
      "North & South Goa sightseeing by AC coach",
      "Airport / railway transfers & AC transport included",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Goa & Couple Dinner Cruise",
        items: [
          "Welcome & AC sedan transfer to hotel, check-in and freshen up",
          "Evening couple dinner cruise: welcome drink, starters, unlimited buffet dinner & selected drinks",
          "Triple-deck cruise (Panjim – Miramar – Old Goa) with DJ, Goan, Bollywood & Portuguese dance shows",
        ],
      },
      {
        day: "Day 02",
        title: "South Goa Sightseeing (10 AM – 8 PM)",
        items: [
          "Miramar Beach, Dona Paula & Old Goa churches (Se Cathedral)",
          "Mangeshi & Shantadurga temples, Panjim city & Fontainhas Latin Quarter",
          "Spice Plantation and Wax Museum & Horror Show",
        ],
      },
      {
        day: "Day 03",
        title: "Grand Island Scuba Diving & Water Sports (8:30 AM – 5 PM)",
        items: [
          "Boat to Grand Island with breakfast, snacks & unlimited buffet lunch",
          "Scuba diving with PADI guide, underwater photos & videos",
          "Jet ski, banana, bumper, speed boat, parasailing, snorkeling & dolphin sighting",
        ],
      },
      {
        day: "Day 04",
        title: "North Goa Sightseeing (10 AM – 7 PM)",
        items: [
          "Fort Aguada, Sinquerim, Calangute & Baga beaches",
          "Anjuna & Vagator beaches, Parra coconut road, Chauranginath temple",
          "Thunder World, Arpora (Snow Park optional — extra charges)",
        ],
      },
      {
        day: "Day 05",
        title: "Check-out & Departure",
        items: [
          "Breakfast and hotel check-out",
          "Comfortable transfer to airport / railway / bus station",
        ],
      },
    ],
    inclusions: [
      "04 nights in a 3-star hotel with daily buffet breakfast",
      "Airport / railway transfers + AC transport throughout",
      "Couple Dinner Cruise Party",
      "South & North Goa sightseeing",
      "Grand Island scuba diving, water sports & snorkeling",
      "Fuel, tolls, parking, interstate taxes & driver allowance",
      "Free Wi-Fi, hot water & room service",
    ],
    exclusions: [
      "Dolphin trip & evening cruise on Day 02 (extra charges)",
      "Snow Park entry on Day 04 (extra charges)",
      "Lunch & dinner except where mentioned",
      "Personal expenses, tips and anything not in inclusions",
    ],
  },
  {
    slug: "wildernest-nature-resort",
    title: "Wildernest Nature Resort — Goa Nature Escape",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "Chorla Ghat, North Goa",
    duration: "1 Night / 2 Days",
    rating: 4.8,
    reviews: 156,
    price: 18999,
    priceUnit: "couple / night",
    image: asset("/wildernest.jpg"),
    gallery: [
      asset("/wildernest-resort.jpg"),
      asset("/wildernest-cottage.jpg"),
      asset("/wildernest-garden.jpg"),
      asset("/wildernest-valley.jpg"),
      asset("/wildernest-aframe.jpg"),
      asset("/wildernest-room.jpg"),
      asset("/wildernest-roomview.jpg"),
      asset("/wildernest-sunset.jpg"),
      asset("/wildernest-waterfall.jpg"),
      asset("/wildernest-hammock.jpg"),
      asset("/wildernest-lake.jpg"),
    ],
    badge: "Nature Escape",
    specs: [
      { label: "Stay", value: "Nature Cottage · 1 Night" },
      { label: "Occupancy", value: "Per Couple · Per Room" },
      { label: "Meals", value: "All Meals Included" },
      { label: "Transfers", value: "Private Pick-Up & Drop" },
    ],
    description:
      "Escape into the wild at Wildernest Nature Resort in the Western Ghats at Chorla Ghat — sprawling greenery, valley and mountain views, and a peaceful break from the city. Stay in a nature-inspired cottage with all meals and private transfers, and enjoy the infinity pool, Ayurshala spa, Cloud 9 bar and naturalist-led trails. ₹18,999 per couple, per room, for one night.",
    highlights: [
      "Nature-inspired cottage stay in the Western Ghats",
      "Infinity pool, Ayurshala spa & Cloud 9 bar",
      "Naturalist-led foot trails, machans & wildlife hides",
      "All meals and private pick-up & drop included",
    ],
    inclusions: [
      "1 night in a nature cottage (Forest / Valley / Family)",
      "All meals included",
      "Private pick-up & drop",
      "Infinity pool, Ayurshala & Cloud 9 bar access",
      "Naturalist-guided foot trails, machans & wildlife hides",
      "Nature encounters, pottery & art studio and bonfire",
    ],
    exclusions: [
      "Off-road excursions & special add-on experiences (on request)",
      "Seasonal activities subject to weather & availability",
      "Personal expenses, tips & gratuities",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "goa-3n4d-couple",
    title: "3 Nights / 4 Days Goa Package for Couples",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 214,
    price: 13900,
    strikePrice: 18999,
    image: img("photo-1519046904884-53103b34b206"),
    badge: "Romantic",
    description:
      "A curated 4-day romantic escape covering North and South Goa with a handpicked stay, sightseeing, a sunset dinner cruise and airport transfers — perfect for couples and honeymooners.",
    highlights: [
      "Handpicked couple-friendly resort stay",
      "Sunset dinner cruise on the Mandovi",
      "North & South Goa sightseeing",
      "Airport pickup and drop included",
    ],
    inclusions: [
      "3 nights stay with daily breakfast",
      "Sightseeing by private cab",
      "Dinner cruise tickets",
      ...genInclusions.slice(0, 2),
    ],
    exclusions: genExclusions,
  },
  {
    slug: "goa-essential-escape-4d3n",
    title: "Goa Essential Escape — 4 Days / 3 Nights",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "4 Days / 3 Nights",
    rating: 4.6,
    reviews: 231,
    price: 12999,
    priceUnit: "couple",
    image: img("photo-1512343879784-a960bf40e7f2"),
    badge: "Value",
    specs: [
      { label: "Stay", value: "2-Star Hotel · 3 Nights" },
      { label: "Occupancy", value: "01 Room · 02 Adults" },
      { label: "Transfers", value: "AC Sedan + AC Mini Coach sightseeing" },
      { label: "Includes", value: "Dinner Cruise + Grand Island" },
    ],
    description:
      "An affordable yet complete Goa holiday for two — comfortable 2-star stay, a couple dinner cruise party, South & North Goa sightseeing, and a full day of Grand Island scuba diving and water sports. All transfers included, priced at ₹12,999 per couple.",
    highlights: [
      "Great-value 4D/3N Goa holiday for two",
      "Couple Dinner Cruise Party with live dance shows",
      "South & North Goa sightseeing by AC coach",
      "Grand Island scuba diving, water sports & snorkeling",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Goa & Couple Dinner Cruise",
        items: [
          "AC sedan transfer to hotel, check-in and leisure",
          "Evening triple-deck dinner cruise: welcome drinks, starters, unlimited buffet dinner, 02 drinks & 02 tequila shots",
          "Scenic route Panjim – Miramar – Old Goa with DJ and Goan, Bollywood, Hollywood & Portuguese dance shows",
        ],
      },
      {
        day: "Day 02",
        title: "South Goa Sightseeing (10 AM – 8 PM)",
        items: [
          "Miramar Beach, Dona Paula & Old Goa churches (Se Cathedral)",
          "Mangeshi & Shantadurga temples, Panjim city & Fontainhas Latin Quarter",
          "Wax Museum & Horror Show and Spice Plantation",
        ],
      },
      {
        day: "Day 03",
        title: "Grand Island Scuba Diving & Water Sports (8:30 AM – 5 PM)",
        items: [
          "Boat to Grand Island with breakfast, snacks & unlimited buffet lunch",
          "Scuba diving with PADI guide, underwater photos & videos",
          "Jet ski, banana, bumper, speed boat, parasailing, snorkeling & dolphin sighting",
        ],
      },
      {
        day: "Day 04",
        title: "North Goa Sightseeing & Departure (10 AM – 7 PM)",
        items: [
          "Check-out, then Fort Aguada, Sinquerim, Baga & Calangute beaches",
          "Anjuna & Vagator beaches, Parra coconut road, Chauranginath temple, Thunder World (Snow Park optional — extra charges)",
          "Transfer to airport / railway / bus station",
        ],
      },
    ],
    inclusions: [
      "03 nights hotel accommodation",
      "Airport / railway transfers by AC sedan",
      "AC mini coach for sightseeing; AC mini bus for cruise & Grand Island",
      "Couple Dinner Cruise Party",
      "South & North Goa sightseeing",
      "Grand Island scuba diving, water sports & snorkeling",
      "Fuel, tolls, parking, interstate taxes & driver allowance",
      "Free Wi-Fi, hot water & room service",
    ],
    exclusions: [
      "Dolphin trip & evening cruise on Day 02 (extra charges)",
      "Snow Park entry on Day 04 (extra charges)",
      "Executive deck, hookah, photoshoot & event arrangements (optional add-ons)",
      "Meals except where mentioned, personal expenses & tips",
    ],
  },
  {
    slug: "goa-4n5d-family",
    title: "4 Nights / 5 Days Goa Package for Family",
    categorySlug: "packages",
    category: "Tour Packages",
    location: "North & South Goa",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    reviews: 168,
    price: 11800,
    strikePrice: 15999,
    image: img("photo-1476041800959-2f6bb412c8ce"),
    badge: "Family",
    description:
      "A relaxed 5-day family holiday with comfortable stays, easy sightseeing, a dolphin boat ride and a Dudhsagar waterfall trip — designed to be fun for all ages.",
    highlights: [
      "Family-friendly hotel with breakfast",
      "Dolphin ride & beach sightseeing",
      "Dudhsagar waterfall jeep safari",
      "Private cab throughout the trip",
    ],
    inclusions: [
      "4 nights stay with daily breakfast",
      "All sightseeing by private cab",
      "Dolphin ride & Dudhsagar tickets",
      ...genInclusions.slice(0, 2),
    ],
    exclusions: genExclusions,
  },
  // Cruises
  {
    slug: "princesa-dinner-cruise",
    title: "Princesa — Goa's First Floating Restaurant Dinner Cruise",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Mandovi River, Panaji",
    duration: "3 hours",
    rating: 4.8,
    reviews: 289,
    price: 1299,
    strikePrice: 1900,
    image: asset("/princesa-cruise.png"),
    badge: "Most Popular",
    description:
      "Goa's first floating restaurant dinner cruise — a full-on 3-hour party on the River Mandovi, open to everyone: couples, families, friends, groups and solo travellers. Start with a welcome drink, then enjoy tequila shots, a lavish buffet dinner, a live DJ, fun games, spot prizes and an on-board photoshoot. A moving cruise from Panjim to Old Goa, Miramar and back. Reporting/pickup 7:30 PM, cruise 8:30–11:30 PM.",
    highlights: [
      "Open to everyone — couples, families, friends, groups & solo",
      "1 welcome drink, 3 tequila shots & 2 drinks",
      "Buffet dinner with live DJ & dance floor",
      "Fun games, spot prizes & on-board photoshoot",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "1 welcome drink",
      "3 tequila shots",
      "2 drinks (beer / hard drink / soft drink)",
      "Buffet dinner (veg & non-veg)",
      "Live DJ, dance floor & live performances",
      "Fun games & spot prizes",
      "On-board photoshoot",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
  },
  {
    slug: "paradise-dinner-cruise",
    title: "Paradise Dinner Cruise",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Tourism Jetty, Panaji",
    duration: "2.5 hours",
    rating: 4.7,
    reviews: 241,
    price: 1099,
    strikePrice: 1999,
    image: asset("/paradise-cruise.png"),
    badge: "Couple & Family",
    description:
      "A relaxed 2.5-hour dinner cruise on the River Mandovi, exclusively for couples and families — stag entry is not permitted. Enjoy a welcome drink, buffet dinner, a live DJ, Goan folk dances and a dance floor in an AC cabin. A moving cruise from Panjim to Old Goa, Miramar and back. Reporting/pickup 7:30 PM, cruise 8:30–11:00 PM. Tequila shots are not available and starters are not included.",
    highlights: [
      "Exclusively for couples & families — no stag entry",
      "1 welcome drink & 2 drinks (beer / hard / soft)",
      "Buffet dinner, live DJ, folk dances & dance floor",
      "2.5-hour cruise · AC cabin",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "1 welcome drink",
      "2 drinks (beer / hard drink / soft drink)",
      "Buffet dinner (veg & non-veg)",
      "Live DJ, Goan folk dances & dance floor",
      "AC cabin",
    ],
    exclusions: [
      "Stag entry (not permitted)",
      "Tequila shots (not available)",
      "Starters (not included — available to buy)",
      "Personal expenses & tips",
    ],
  },
  {
    slug: "nirvana-dinner-cruise",
    title: "Nirvana Dinner Cruise",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Mandovi River, Panaji",
    duration: "3 hours",
    rating: 4.9,
    reviews: 356,
    price: 1199,
    strikePrice: 1799,
    image: asset("/nirvana-cruise.png"),
    badge: "Bestseller",
    description:
      "A vibrant 3-hour party dinner cruise on the River Mandovi, open to everyone: couples, families, friends, groups and solo travellers. Enjoy a welcome drink, 2 drinks, a buffet dinner and a non-stop DJ with a full dance floor. A moving cruise from Panjim to Old Goa, Miramar and back. Reporting/pickup 7:30 PM, cruise 8:30–11:30 PM. Please note: tequila shots are not available on Nirvana.",
    highlights: [
      "Open to everyone — couples, families, friends, groups & solo",
      "1 welcome drink & 2 drinks (beer / hard / soft)",
      "Buffet dinner with non-stop DJ & dance floor",
      "Pickup 7:30 PM · cruise 8:30–11:30 PM",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "1 welcome drink",
      "2 drinks (beer / hard drink / soft drink)",
      "Buffet dinner (veg & non-veg)",
      "Non-stop Bollywood DJ, dance floor & live performances",
    ],
    exclusions: [
      "Tequila shots (not available on Nirvana)",
      "Personal expenses & tips",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "private-yacht-cruise",
    title: "Private Yacht in Goa",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Panjim, Goa",
    duration: "2 hours (min)",
    rating: 4.9,
    reviews: 96,
    price: 10000,
    priceUnit: "hour",
    image: asset("/private-yacht.jpg"),
    badge: "Luxury",
    description:
      "Charter a private luxury yacht on the River Mandovi in Panjim — perfect for couple celebrations, proposals, family gatherings and photoshoots. Glide past the Panjim bridge, mangroves and old white churches on a spacious open deck with music and refreshments. Starting at ₹10,000 per hour, minimum 2 hours.",
    highlights: [
      "Perfect for celebrations, proposals & photoshoots",
      "Spacious open deck with Bluetooth music",
      "Professional crew assistance",
      "From ₹10,000 / hour · minimum 2 hours",
    ],
    inclusions: [
      "Bluetooth music system",
      "Soda & water bottles",
      "Ice cubes & ice box",
      "Professional crew assistance",
      "Spacious open deck",
    ],
    exclusions: [
      "Cake & decoration (paid add-on)",
      "Drone shoot — extra charges (₹9,999)",
      "Photography (paid add-on)",
      "DJ & host (paid add-on)",
      "Food & drinks (paid add-on)",
    ],
  },
  {
    slug: "panjim-sunset-cruise",
    title: "Panjim Sunset Cruise on the Mandovi",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Santa Monica Jetty, Panaji",
    duration: "1 hour",
    rating: 4.7,
    reviews: 168,
    price: 400,
    strikePrice: 600,
    image: asset("/sunset-cruise.jpg"),
    badge: "Sunset",
    description:
      "A breezy golden-hour sightseeing cruise on the River Mandovi, boarding from Panjim's Santa Monica Jetty. Enjoy DJ music and Goan folk dances as the sun sets over the capital's riverfront. Reporting 5:30 PM, cruise 6:00–7:00 PM.",
    highlights: [
      "Sunset sightseeing on the Mandovi",
      "DJ music & Goan folk dances on board",
      "Riverfront views of Panaji",
      "Reporting 5:30 PM · cruise 6:00–7:00 PM",
    ],
    inclusions: [
      "Cruise ticket",
      "Sightseeing on the River Mandovi",
      "DJ music",
      "Goan folk dance performances",
    ],
    exclusions: ["Pickup & drop", "Food & drinks", "Personal expenses"],
  },
  // Scuba (3 combos)
  {
    slug: "grand-island-scuba",
    title: "Grand Island Scuba Diving & Water Sports Combo",
    categorySlug: "scuba-diving",
    category: "Scuba Diving",
    location: "Grand Island",
    duration: "08:30 AM – 06:00 PM",
    rating: 4.7,
    reviews: 210,
    price: 2000,
    strikePrice: 2500,
    image: img("photo-1560275619-4662e36fa65c"),
    badge: "Bestseller",
    description:
      "A full-day Grand Island adventure combining PADI-guided scuba diving with a bundle of water sports. Cruise 35 km by boat with dolphin sightseeing, scenic points, Bollywood music and entertainment, an unlimited buffet lunch and a guided underwater dive with photos and videos. Sharing mini-bus transfer with hotel pickup & drop.",
    highlights: [
      "PADI-guided scuba dive + training session",
      "35 km Grand Island boat journey & dolphin sightseeing",
      "Water sports: jet ski, banana, bumper, speed boat & parasailing",
      "Unlimited buffet lunch + breakfast, snacks & juice",
    ],
    inclusions: [
      "Hotel pickup & drop (Arpora Junction, Baga, Calangute, Candolim, Sinquerim)",
      "Sharing mini-bus transfer",
      "Breakfast, snacks & juice",
      "Unlimited buffet lunch",
      "35 km Grand Island boat journey",
      "Dolphin sightseeing & multiple scenic points",
      "Bollywood music & entertainment on boat",
      "Scuba training + guided PADI dive with underwater photos & videos",
      "Water sports — jet ski, banana, bumper, speed boat, parasailing & swimming",
      "Washroom & changing room facilities",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
  },
  {
    slug: "malvan-scuba-combo",
    title: "Scuba Diving & Water Sports Combo — Malvan",
    categorySlug: "scuba-diving",
    category: "Scuba Diving",
    location: "Malvan",
    duration: "07:30 AM – 06:00 PM",
    rating: 4.6,
    reviews: 142,
    price: 3000,
    strikePrice: 5000,
    image: img("photo-1682687982501-1e58ab814714"),
    description:
      "A full-day scuba and water sports combo at Malvan in a comfortable AC mini-bus. Enjoy clear-water diving with a PADI guide, dolphin sightseeing, sightseeing of famous attractions, an unlimited buffet lunch and a bundle of water sports. Hotel pickup & drop included.",
    highlights: [
      "AC mini-bus journey with hotel pickup & drop",
      "PADI-guided scuba dive + training session",
      "Dolphin sightseeing & famous attractions",
      "Water sports: jet ski, banana, bumper, speed boat & parasailing",
    ],
    inclusions: [
      "Hotel pickup & drop (Arpora Junction, Baga, Calangute, Candolim, Sinquerim)",
      "Sharing AC mini-bus transfer",
      "Breakfast, snacks & juice",
      "Unlimited buffet lunch",
      "Dolphin sightseeing",
      "Sightseeing of famous attractions",
      "Scuba training + guided PADI dive with underwater photos & videos",
      "Water sports — jet ski, banana, bumper, speed boat, parasailing & swimming",
      "Washroom & changing room facilities",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
  },
  {
    slug: "paradise-island-scuba",
    title: "Scuba Diving & Water Sports Combo — Paradise Island",
    categorySlug: "scuba-diving",
    category: "Scuba Diving",
    location: "Paradise Island (off Calangute)",
    duration: "08:30 AM – 03:00 PM",
    rating: 4.6,
    reviews: 118,
    price: 1800,
    strikePrice: 2500,
    image: img("photo-1583212292454-1fe6229603b7"),
    badge: "Value",
    description:
      "A half-day scuba and water sports combo at Paradise Island, roughly a 40-minute boat journey from Calangute Beach. Includes a PADI-guided dive with training, dolphin sightseeing, sightseeing of famous attractions, an unlimited buffet lunch and water sports. Sharing mini-bus transfer with hotel pickup & drop.",
    highlights: [
      "~40-minute boat journey from Calangute Beach",
      "PADI-guided scuba dive + training session",
      "Dolphin sightseeing & famous attractions",
      "Water sports: jet ski, banana, bumper, speed boat & parasailing",
    ],
    inclusions: [
      "Hotel pickup & drop (Arpora Junction, Baga, Calangute, Candolim, Sinquerim)",
      "Sharing mini-bus transfer",
      "Breakfast, snacks & juice",
      "Unlimited buffet lunch",
      "Approx. 40-minute journey from Calangute Beach",
      "Dolphin sightseeing",
      "Sightseeing of famous attractions",
      "Scuba training + guided PADI dive with underwater photos & videos",
      "Water sports — jet ski, banana, bumper, speed boat, parasailing & swimming",
      "Washroom & changing room facilities",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
  },
  // Water sports
  {
    slug: "water-sports-combo",
    title: "Water Sports Package — Calangute & Baga Beach",
    categorySlug: "water-sports",
    category: "Water Sports",
    location: "Calangute – Baga Beach",
    duration: "10:00 AM – 06:00 PM",
    rating: 4.6,
    reviews: 278,
    price: 1800,
    strikePrice: 2500,
    image: img("photo-1530870110042-98b2cb110834"),
    badge: "5 Rides",
    description:
      "Five back-to-back water sports rides at Calangute–Baga Beach — jet ski, banana, bumper, speed boat and parasailing. Each activity is provided once per person and every ride runs for the maximum permitted duration. Please note: pickup & drop and food are not included — guests report directly at the activity location. Advance payment is required to confirm the booking.",
    highlights: [
      "5 rides: jet ski, banana, bumper, speed boat & parasailing",
      "Operating 10:00 AM – 6:00 PM at Calangute–Baga",
      "Each activity once per person, maximum permitted duration",
      "Safety jackets & trained instructors",
    ],
    inclusions: [
      "Jet ski ride",
      "Banana ride",
      "Bumper ride",
      "Speed boat ride",
      "Parasailing ride",
      "Safety jackets & instructor",
    ],
    exclusions: [
      "Pickup & drop (report directly at the activity location)",
      "Food",
      "Personal expenses",
    ],
  },
  // Sightseeing (Dudhsagar first, then South, North, Extreme South, Dolphin)
  {
    slug: "dudhsagar-jeep-safari",
    title: "Dudhsagar Waterfall with Spice Plantation Tour",
    categorySlug: "dudhsagar",
    extraCategorySlugs: ["sightseeing"],
    category: "Dudhsagar",
    location: "Mollem",
    duration: "06:30 AM – 05:00 PM",
    rating: 4.6,
    reviews: 189,
    price: 1999,
    strikePrice: 2500,
    image: asset("/dudhsagar.png"),
    badge: "Popular",
    specs: [
      { label: "Transport", value: "AC Sharing Coach" },
      { label: "Includes", value: "Spice Plantation + Buffet Lunch" },
      { label: "Jeep Safari", value: "To Dudhsagar Falls" },
      { label: "Also visit", value: "Old Goa" },
    ],
    description:
      "A full day out to India's iconic Dudhsagar Falls — travel by AC Sharing Coach, switch to a thrilling jeep safari through the forest, cool off near the base of the falls, then unwind with a spice plantation visit, buffet lunch and a stop at historic Old Goa.",
    highlights: [
      "Jeep safari to Dudhsagar Falls",
      "Forest entry with life jacket",
      "Spice plantation visit with buffet lunch",
      "Old Goa heritage visit",
    ],
    inclusions: [
      "Hotel pickup & drop by AC Sharing Coach",
      "Jeep safari entry",
      "Forest entry & life jacket fees",
      "Spice plantation visit",
      "Buffet lunch at spice plantation",
      "Old Goa visit",
    ],
    exclusions: [
      "Professional camera fees",
      "Beverages such as soft drinks & liquor",
      "Elephant ride / elephant bath",
      "Breakfast",
    ],
  },
  {
    slug: "south-goa-sightseeing",
    title: "South Goa Sightseeing",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "South Goa",
    duration: "09:00 AM – 08:00 PM",
    rating: 4.5,
    reviews: 121,
    price: 400,
    image: asset("/sightseeing-south-goa.jpg"),
    description:
      "Discover South Goa's soulful side in a single day — grand Old Goa churches, serene temples, the colourful Fontainhas Latin Quarter and a laid-back Panjim city tour, finishing by the sea. Travel by AC Mini Bus, Small Bus or Private Car with hotel pickup from Arpora, Baga, Calangute, Candolim and Nerul. Itinerary may be adjusted depending on traffic, weather, seasonal conditions and local timings.",
    highlights: [
      "Basilica of Bom Jesus, Se Cathedral & St. Augustine Tower",
      "Shanta Durga & Mangueshi temples",
      "Fontainhas Latin Quarter & Panjim city tour",
      "Miramar Beach & Dona Paula",
    ],
    inclusions: [
      "AC Mini Bus / Small Bus / Private Car",
      "Hotel pickup & drop (Arpora, Baga, Calangute, Candolim, Nerul)",
      "Miramar Beach",
      "Dona Paula",
      "Basilica of Bom Jesus, Old Goa",
      "St. Augustine Tower",
      "Se Cathedral, Old Goa",
      "Shanta Durga Temple",
      "Mangueshi Temple",
      "Fontainhas Latin Quarter",
      "Panjim City Tour",
    ],
    exclusions: [
      "Dolphin Trip (extra charges, seasonal)",
      "Evening Sunset Cruise (extra charges)",
      "Meals & personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "north-goa-sightseeing",
    title: "North Goa Sightseeing",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "North Goa",
    duration: "09:00 AM – 06:00 PM",
    rating: 4.5,
    reviews: 133,
    price: 400,
    image: img("photo-1512343879784-a960bf40e7f2"),
    badge: "Bestseller",
    description:
      "Cover North Goa's icons in a single, well-paced day — historic forts, golden beaches, a hilltop church and the buzzing Baga strip. Travel by AC Mini Bus, Small Bus or Private Car with hotel pickup from Arpora, Baga, Calangute, Candolim and Nerul. Itinerary may be adjusted depending on traffic, weather, local timings and operational conditions.",
    highlights: [
      "Fort Aguada, Sinquerim Fort & Chapora Fort",
      "Candolim, Calangute, Anjuna & Vagator beaches",
      "Saligao Church & Baga nightlife strip",
      "Snow Park & Thunder World (optional, extra charges)",
    ],
    inclusions: [
      "AC Mini Bus / Small Bus / Private Car",
      "Hotel pickup & drop (Arpora, Baga, Calangute, Candolim, Nerul)",
      "Fort Aguada",
      "Sinquerim Fort",
      "Candolim Beach",
      "Calangute Beach",
      "Saligao Church",
      "Anjuna Beach",
      "Vagator Beach",
      "Chapora Fort",
      "Baga nightlife",
    ],
    exclusions: [
      "Snow Park entry (extra charges)",
      "Thunder World Goa Amusement Park entry (extra charges)",
      "Meals & personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "extreme-south-goa-tour",
    title: "Extreme South Goa Tour",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "South Goa",
    duration: "09:00 AM – 08:00 PM",
    rating: 4.7,
    reviews: 64,
    price: 0,
    priceOnRequest: true,
    image: asset("/palolem-beach.jpg"),
    badge: "Private Tour",
    description:
      "Venture deep into Goa's untouched south by private vehicle — pristine beaches, a secret butterfly cove, a clifftop Portuguese fort and a golden sunset point. A full-day escape away from the crowds. The itinerary may be adjusted depending on weather, traffic, local conditions and activity availability.",
    highlights: [
      "Palolem & Agonda beaches",
      "Butterfly Island by boat",
      "Cabo de Rama Fort",
      "Kayaking at Cola Beach & Betalbatim sunset point",
    ],
    inclusions: [
      "Private vehicle for the day",
      "Palolem Beach",
      "Butterfly Island",
      "Agonda Beach",
      "Cabo de Rama Fort",
      "Kayaking at Cola Beach",
      "Colva Beach",
      "Betalbatim Beach — Sunset Point",
    ],
    exclusions: [
      "Kayaking charges & activity tickets",
      "Meals & personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "dolphin-boat-ride",
    title: "Dolphin Ride (Boat Trip) in Goa",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "Sinquerim",
    duration: "45–60 min",
    rating: 4.3,
    reviews: 205,
    price: 350,
    strikePrice: 400,
    image: asset("/sightseeing-dolphin-ride.jpg"),
    description:
      "A scenic boat trip into the Arabian Sea to spot playful dolphins in the wild, passing Fort Aguada and the famous millionaire's palace.",
    highlights: [
      "Dolphin spotting in the wild",
      "Fort Aguada from the water",
      "Family-friendly boat ride",
      "Life jackets provided",
    ],
    inclusions: ["Boat ride", "Life jacket", "Guide", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  // Adventure Experiences
  {
    slug: "party-boat-water-sports",
    title: "AC Adventure Boat Trip with Watersports",
    categorySlug: "adventure",
    category: "Adventure",
    location: "North Goa",
    duration: "4 hours",
    rating: 4.6,
    reviews: 174,
    price: 1499,
    strikePrice: 2500,
    image: asset("/adv-boat-tour.jpg"),
    badge: "All-Inclusive",
    specs: [
      { label: "Boat", value: "Catamaran double-decker AC boat" },
      { label: "Morning batch", value: "09:00 AM – 01:00 PM" },
      { label: "Evening batch", value: "02:00 PM – 06:00 PM" },
      { label: "Sightseeing", value: "15+ famous points by boat" },
    ],
    description:
      "Goa's most exciting double-decker AC boat adventure — cruise on a catamaran with an open-air upper deck, live DJ and music on demand, then dive into an all-inclusive bundle of watersports with no hidden charges. Enjoy jet ski, banana, bumper and speed boat rides, kayaking, SUP boarding, a fishing experience and dolphin spotting, plus lunch, chilled beers and 15+ scenic sightseeing points. Comfortable seating, changing room, washroom and life jackets make it safe and family-friendly.",
    highlights: [
      "Double-decker AC catamaran with open-air upper deck",
      "Live DJ & music on demand",
      "All watersports included — no extra cost",
      "Dolphin spotting & 15+ sightseeing points",
      "Lunch, 2 chilled beers & soft drinks",
    ],
    inclusions: [
      "Pick-up & drop",
      "Jet ski, banana, bumper & speed boat rides",
      "Kayaking, SUP board ride & fishing experience",
      "Dolphin spotting tour",
      "Lunch, 2 chilled beers, soft drinks & mineral water",
      "Changing room, washroom & life jackets",
    ],
    exclusions: [
      "Personal expenses and tips",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "backwater-kayaking",
    title: "Mangrove Kayaking",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Sal Backwaters",
    duration: "2 hours",
    rating: 4.5,
    reviews: 156,
    price: 500,
    strikePrice: 999,
    image: asset("/adv-kayaking.jpg"),
    description:
      "Paddle through peaceful mangrove backwaters spotting birds and marine life on this calm, beginner-friendly kayaking experience.",
    highlights: [
      "Calm backwater paddling",
      "Mangrove & birdlife",
      "Beginner friendly",
      "Guide & safety gear",
    ],
    inclusions: ["Kayak & paddle", "Life jacket", "Guide", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  {
    slug: "flyboarding-goa",
    title: "Flyboarding Experience",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Chapora River, North Goa",
    duration: "5–15 min slots",
    rating: 4.7,
    reviews: 88,
    price: 2500,
    image: asset("/flyboarding.jpg"),
    gallery: [asset("/flyboarding.png")],
    badge: "Adrenaline",
    description:
      "The most adventurous water sport in Goa — strap into a water-jet powered flyboard and rise above the Chapora River like a superhero, guided by a certified instructor. Choose a single or tandem slot. Single: 15 min ₹3,600 / 10 min ₹2,500. Tandem/Double (weight below 50 kg): 10 min ₹5,000 / 5 min ₹3,000.",
    highlights: [
      "Water-jet powered flight above the river",
      "Single: 15 min ₹3,600 · 10 min ₹2,500",
      "Tandem/Double (below 50 kg): 10 min ₹5,000 · 5 min ₹3,000",
      "Photos & videos included",
    ],
    inclusions: [
      "Certified instructor & safety gear",
      "Photos & videos",
    ],
    exclusions: ["Pick-up & drop", "Food", "Anything not mentioned in inclusions"],
  },
  {
    slug: "dolphin-watching-trip",
    title: "Dolphin Tour",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Coco Beach — Dolphin Jetty",
    duration: "1.5 hours",
    rating: 4.5,
    reviews: 190,
    price: 1599,
    image: img("photo-1607153333879-c174d265f1d2"),
    description:
      "A fun ocean adventure in Goa — cruise out from Coco Beach Dolphin Jetty on a 1.5-hour boat ride to spot playful dolphins in the wild. A life jacket and a drinking water bottle are included. Pick-up & drop is not included. Operating 09:00 AM – 06:00 PM.",
    highlights: [
      "1.5-hour dolphin boat ride",
      "Spot dolphins in the wild",
      "Life jacket provided",
      "Drinking water bottle included",
      "Family friendly",
    ],
    inclusions: [
      "Life jacket provided",
      "Drinking water bottle",
      "1.5 hours dolphin boat ride",
    ],
    exclusions: [
      "Pick-up & drop",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "crocodile-mangrove-safari",
    title: "Crocodile & Mangrove Safari",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Cumbarjua Canal",
    duration: "2–3 hours",
    rating: 4.5,
    reviews: 84,
    price: 0,
    priceOnRequest: true,
    image: asset("/adv-crocodile.jpg"),
    description:
      "A guided boat safari through the Cumbarjua mangroves to spot wild crocodiles basking on the banks, along with kingfishers and other backwater wildlife.",
    highlights: [
      "Spot wild crocodiles in the mangroves",
      "Rich birdlife & backwater scenery",
      "Guided boat with life jackets",
      "Great for nature lovers",
    ],
    inclusions: ["Boat safari", "Guide", "Life jacket", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  {
    slug: "fishing-tour",
    title: "Goa Deep Sea Fishing Experience",
    categorySlug: "adventure",
    category: "Adventure",
    location: "North Goa Coast",
    duration: "Approx. 4 hours",
    rating: 4.4,
    reviews: 72,
    price: 2999,
    strikePrice: 4000,
    image: asset("/adv-fishing.jpg"),
    specs: [
      { label: "Morning trip", value: "05:00 AM – 09:00 AM" },
      { label: "Afternoon trip", value: "03:00 PM – 07:00 PM" },
      { label: "Transfer", value: "Private AC vehicle with driver" },
      { label: "Suitable for", value: "Beginners & experienced anglers" },
    ],
    description:
      "Catch • Cruise • Relax • Explore — a professionally guided deep sea fishing trip along Goa's 110 km coastline. With premium equipment, comfortable boats and expert local guides, you'll learn the best techniques and try to land species like grouper, snapper, barramundi, wahoo, barracuda, cobia and more, all while soaking up views of Fort Aguada and the Arabian Sea. Choose a morning trip (sunrise) or an afternoon trip (sunset), each around 4 hours. Swimming knowledge is not compulsory and all boats carry required safety equipment.",
    highlights: [
      "Premium deep sea fishing — beginners & pros welcome",
      "Rich marine waters — grouper, snapper, wahoo, barracuda & more",
      "Chilled beer & soft drinks onboard",
      "Scenic Fort Aguada & Arabian Sea views",
      "Modern boats with safety equipment",
    ],
    inclusions: [
      "Hotel pick-up & drop (selected areas)",
      "Private air-conditioned vehicle with driver",
      "Packaged drinking water, chilled beer & soft drinks",
      "Professional fishing rods, reels, hooks & baits",
      "Experienced fishing guide & assistance",
      "Safety equipment onboard",
    ],
    exclusions: [
      "Personal expenses, tips & telephone calls",
      "Expenses due to bad weather, sea conditions or roadblocks",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "crab-catching",
    title: "Crab Catching Adventure",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Goa Backwaters",
    duration: "Afternoon (2:00 – 7:00 PM)",
    rating: 4.4,
    reviews: 58,
    price: 2899,
    strikePrice: 4000,
    image: asset("/adv-crab.jpg"),
    specs: [
      { label: "Pick-up", value: "02:00 PM (selected North Goa areas)" },
      { label: "Boarding", value: "03:30 PM" },
      { label: "Return", value: "06:30 PM · hotel drop 07:00 PM" },
      { label: "Safety", value: "British-standard life jackets · licensed boat" },
    ],
    description:
      "A unique backwater experience catching crabs the traditional Goan way, guided by local experts — a hands-on adventure for curious travellers. Board in the afternoon, enjoy chilled beer and soft drinks onboard and try your hand at crab catching, all with safety fully taken care of on a government-licensed boat with British safety standard life jackets and an experienced guide.",
    highlights: [
      "Traditional crab catching experience",
      "Beer & soft drinks onboard",
      "British-standard life jackets & licensed boat",
      "Experienced guide throughout",
    ],
    inclusions: [
      "Pick-up & drop from North Goa",
      "Life jacket",
      "Water bottle",
      "Beer & soft drinks",
      "Crab catching experience",
    ],
    exclusions: [
      "Personal expenses and tips",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "grand-island-snorkeling",
    title: "Grand Island Visit with Snorkeling",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Grand Island",
    duration: "08:00 AM – 04:00 PM",
    rating: 4.7,
    reviews: 96,
    price: 2999,
    image: asset("/grand-island.jpg"),
    badge: "Full Day",
    description:
      "A full-day boat adventure to Grand Island. Cruise past Fort Aguada, the Portuguese Jail and Jimmy's iconic villa with dolphin sighting along the way, then snorkel and swim in the Arabian Sea with a professional trainer. Enjoy a fishing experience, marine-life exploration and a hearty onboard lunch with unlimited beer. Pickup 08:00–08:30 AM from Calangute, Baga, Candolim, Arpora & nearby areas.",
    highlights: [
      "Snorkeling with a professional trainer",
      "Dolphin sighting & Fort Aguada views",
      "Swimming & fishing in the Arabian Sea",
      "Onboard lunch with fish barbecue & unlimited beer",
    ],
    inclusions: [
      "Pickup & drop (Calangute, Baga, Candolim, Arpora & nearby)",
      "Boat cruise — Fort Aguada, Portuguese Jail & Jimmy's villa",
      "Dolphin sighting & coastal sightseeing",
      "Snorkeling with professional trainer",
      "Swimming & marine life exploration",
      "Fishing experience",
      "Onboard lunch — veg & non-veg meal, fish barbecue, Indian snacks",
      "Soft drinks, unlimited beer & mineral water",
    ],
    exclusions: [
      "Personal expenses & tips",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "overnight-houseboat",
    title: "Houseboat Goan Pleasure — Overnight Backwater Cruise",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Aldona Backwaters, Goa",
    duration: "1 night / 2 days",
    rating: 4.7,
    reviews: 64,
    price: 8999,
    image: asset("/houseboat-goa.jpg"),
    gallery: [
      asset("/houseboat-deck.jpg"),
      asset("/houseboat-deck2.jpg"),
      asset("/houseboat-lounge.jpg"),
      asset("/houseboat-bedroom.jpg"),
      asset("/houseboat-bedroom2.jpg"),
      asset("/houseboat-aerial.jpg"),
      asset("/houseboat-bar.jpg"),
      asset("/houseboat-bath.jpg"),
    ],
    badge: "Stay",
    specs: [
      { label: "Pick-up", value: "Baga 2:30 · Calangute 2:45 · Candolim 3:00 PM" },
      { label: "Cruise", value: "Backwaters towards Aldona" },
      { label: "Meals", value: "Snacks, starters, dinner, breakfast & brunch" },
      { label: "Complimentary", value: "1 drinks option per cabin (2 pax)" },
    ],
    description:
      "An overnight cruise-and-stay on the 'Goan Pleasure' houseboat, drifting through Goa's tranquil backwaters towards Aldona. Board in the afternoon with a refreshing welcome drink, glide past the Salim Ali Bird Sanctuary spotting crocodiles and traditional fishing, and soak in a beautiful sunset. Enjoy evening snacks, starters and dinner on board, try your hand at fishing once the boat is docked, then wake to breakfast and brunch before check-out. Each cabin gets one complimentary drinks option (2 pax).",
    highlights: [
      "Overnight stay & backwater cruise to Aldona",
      "Welcome drink, snacks, starters, dinner, breakfast & brunch",
      "Sunset, Salim Ali Bird Sanctuary & crocodile views",
      "Fishing rods & bait provided after sunset",
    ],
    inclusions: [
      "Pick-up from Baga, Calangute & Candolim",
      "Welcome drink on arrival",
      "Evening snacks, starters & dinner",
      "Breakfast & brunch next morning",
      "1 complimentary drinks option per cabin — 10 beers / rum / vodka / brandy / whisky pegs or 10 soft drinks",
      "Fishing rods & bait",
    ],
    exclusions: [
      "Any drinks beyond the complimentary option (chargeable extra)",
      "Personal expenses and tips",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "bungy-jumping-goa",
    title: "Bungy Jumping — North Goa",
    categorySlug: "adventure",
    category: "Adventure",
    location: "North Goa",
    duration: "61 m jump",
    rating: 4.8,
    reviews: 142,
    price: 3299,
    strikePrice: 4999,
    image: asset("/adv-bungy.jpg"),
    badge: "India's Highest",
    description:
      "Take the leap at India's highest bungy jump — a heart-pounding 61-metre plunge in North Goa. Built to safety standards inspired by Australia and New Zealand, every jump comes with free photos and videos. Feel the height, conquer the fear, live the adventure. Price is all-inclusive of GST. Participation is subject to the operator's age, weight, health and safety requirements.",
    highlights: [
      "India's highest bungy jump — 61 metres",
      "Free photos & videos",
      "Safety standards inspired by Australia & New Zealand",
      "All-inclusive of GST",
    ],
    inclusions: [
      "61-metre high bungy jump",
      "Free photos & videos",
      "GST included",
    ],
    exclusions: [
      "Pick-up & drop",
      "Meals & personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  // Casino
  {
    slug: "big-daddy-casino",
    title: "Big Daddy Casino — Entry, Buffet & Gaming Coins",
    categorySlug: "casino",
    category: "Casino",
    location: "Panjim Jetty, Mandovi River",
    duration: "Evening (6–8 hrs)",
    rating: 4.7,
    reviews: 268,
    price: 2500,
    strikePrice: 3500,
    image: asset("/casino-bigdaddy.jpg"),
    badge: "Bestseller",
    description:
      "Board Goa's iconic floating casino on the Mandovi river for a glamorous evening of gaming, live entertainment and an unlimited multi-cuisine buffet — with complimentary gaming coins to get you started.",
    highlights: [
      "Entry to Big Daddy floating casino",
      "Unlimited multi-cuisine buffet",
      "Complimentary gaming coins on entry",
      "Live music, DJ & entertainment",
    ],
    inclusions: [
      "Casino entry ticket",
      "Unlimited buffet dinner",
      "Welcome gaming coins",
      "Live entertainment & DJ",
      "Return jetty transfer coordination",
    ],
    exclusions: [
      "Gaming losses and additional chips",
      "Alcoholic beverages (unless in package)",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  {
    slug: "deltin-royale-casino",
    title: "Deltin Royale Casino — Premium Package",
    categorySlug: "casino",
    category: "Casino",
    location: "Panjim, Mandovi River",
    duration: "Evening (6–8 hrs)",
    rating: 4.8,
    reviews: 312,
    price: 3500,
    strikePrice: 4500,
    image: asset("/casino-deltin-royale.jpg"),
    badge: "Premium",
    description:
      "Experience India's premier luxury floating casino with premium gaming tables, a lavish buffet spread, unlimited drinks and top live acts — the classiest night out on the Mandovi.",
    highlights: [
      "Entry to Deltin Royale — Goa's flagship casino",
      "Premium buffet with unlimited drinks",
      "Gaming coins & VIP gaming floor access",
      "Live shows & entertainment",
    ],
    inclusions: [
      "Casino entry ticket",
      "Unlimited premium buffet",
      "Unlimited soft & select alcoholic drinks",
      "Welcome gaming coins",
      "Return jetty transfer coordination",
    ],
    exclusions: [
      "Gaming losses and additional chips",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  {
    slug: "deltin-jaqk-casino",
    title: "Deltin JAQK Casino Cruise",
    categorySlug: "casino",
    category: "Casino",
    location: "Panjim, Mandovi River",
    duration: "Evening (6–8 hrs)",
    rating: 4.6,
    reviews: 154,
    price: 3000,
    strikePrice: 3800,
    image: asset("/casino-jaqk.jpg"),
    description:
      "A vibrant, younger-vibe floating casino with lively gaming, great food and non-stop entertainment — perfect for groups looking for a fun night on the river.",
    highlights: [
      "Entry to Deltin JAQK floating casino",
      "Unlimited buffet dinner",
      "Complimentary gaming coins",
      "Energetic live entertainment",
    ],
    inclusions: [
      "Casino entry ticket",
      "Unlimited buffet dinner",
      "Welcome gaming coins",
      "Live entertainment",
      "Return jetty transfer coordination",
    ],
    exclusions: [
      "Gaming losses and additional chips",
      "Alcoholic beverages (unless in package)",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  // Nightlife & Parties
  {
    slug: "north-goa-pub-crawl",
    title: "North Goa Pub Crawl — Tito's Lane, Baga",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Tito's Lane, Baga",
    duration: "Evening (4–5 hrs)",
    rating: 4.7,
    reviews: 231,
    price: 1499,
    strikePrice: 2200,
    image: img("photo-1516450360452-9312f5e86fc7"),
    badge: "Bestseller",
    description:
      "Hop across the best clubs and bars on Goa's most famous party street with a group host, skip-the-line entries, welcome shots and a high-energy Bollywood-meets-EDM night out.",
    highlights: [
      "Guided crawl across 3–4 top venues",
      "Skip-the-line club entries",
      "Welcome shots & drink deals",
      "Great for singles & groups",
    ],
    inclusions: [
      "Entry to multiple clubs/pubs",
      "Welcome shots at each stop",
      "Group host / party guide",
      "Exclusive drink offers",
    ],
    exclusions: [
      "Additional drinks & food",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  {
    slug: "club-cubana-entry",
    title: "Club Cubana — Nightclub in the Sky, Arpora",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Arpora Hill",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.6,
    reviews: 187,
    price: 3000,
    priceUnit: "couple",
    image: img("photo-1545128485-c400e7702796"),
    badge: "Temporarily Closed",
    closed: true,
    specs: [
      { label: "Status", value: "Temporarily closed — not bookable right now" },
      { label: "Couple entry", value: "₹3,000 (fully redeemable as cover)" },
      { label: "Stag entry", value: "₹4,000 (fully redeemable as cover)" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Please note: Club Cubana is temporarily closed and cannot be booked at the moment — message us on WhatsApp and we'll suggest an alternative club for your dates. Goa's legendary hilltop club has multiple levels, a poolside dance floor, neon lights and panoramic night views. Open 9:30 PM to 4:00 AM. Couple entry ₹3,000 and stag entry ₹4,000 — both fully redeemable as cover on food & drinks.",
    highlights: [
      "Temporarily closed — ask us for an alternative club",
      "Couple ₹3,000 / Stag ₹4,000 — fully redeemable as cover",
      "Poolside dance floor & neon lights",
      "Panoramic hilltop night views",
    ],
    inclusions: [
      "Couple entry ₹3,000 / Stag entry ₹4,000",
      "Entry fee fully redeemable as cover on food & drinks",
      "Access to all levels & pool area",
    ],
    exclusions: [
      "Additional drinks & food",
      "Transport to Arpora hill unless selected",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "titos-club-night",
    title: "Tito's Club — Tito's Lane, Baga",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Tito's Lane, Baga Beach",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.5,
    reviews: 164,
    price: 2500,
    priceUnit: "couple",
    image: img("photo-1533174072545-7a4b6ad7a6c3"),
    specs: [
      { label: "Couple entry", value: "₹2,500 (fully redeemable as cover)" },
      { label: "Stag entry", value: "₹2,500 (fully redeemable as cover)" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Party at Goa's most famous club — Tito's on Tito's Lane, Baga. Bollywood and EDM floors, big-name DJs and an unbeatable Baga party atmosphere. Open 9:30 PM to 4:00 AM. Couple and stag entry are both ₹2,500, fully redeemable as cover on food & drinks.",
    highlights: [
      "Couple ₹2,500 / Stag ₹2,500 — fully redeemable as cover",
      "Bollywood + EDM dance floors",
      "Buzzing Baga beach party scene",
      "Perfect for first-timers",
    ],
    inclusions: [
      "Couple entry ₹2,500 / Stag entry ₹2,500",
      "Entry fee fully redeemable as cover on food & drinks",
      "Access to main dance floors",
    ],
    exclusions: [
      "Additional drinks & food",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  {
    slug: "mambos-club-night",
    title: "Mambo's Club — Tito's Lane, Baga",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Tito's Lane, Baga Beach",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.4,
    reviews: 128,
    price: 1000,
    priceUnit: "couple",
    image: img("photo-1516450360452-9312f5e86fc7"),
    specs: [
      { label: "Couple entry", value: "₹1,000 (food & drinks charged extra)" },
      { label: "Stag entry", value: "₹1,500 (food & drinks charged extra)" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Baga's legendary beachfront club right on Tito's Lane — Mambo's packs a lively open-air dance floor with Bollywood, commercial house and retro sets a few steps from the sand. Open 9:30 PM to 4:00 AM. Couple entry ₹1,000 and stag entry ₹1,500; food and drinks are charged extra and are not covered by the entry fee.",
    highlights: [
      "Couple ₹1,000 / Stag ₹1,500 — entry only",
      "Open-air dance floor steps from Baga Beach",
      "Bollywood, commercial house & retro sets",
      "Right on Tito's Lane",
    ],
    inclusions: [
      "Couple entry ₹1,000 / Stag entry ₹1,500",
      "Access to the dance floor & bar area",
    ],
    exclusions: [
      "Food & drinks (charged extra)",
      "Tips and personal expenses",
      "Hotel pickup unless selected",
    ],
  },
  {
    slug: "vagator-psytrance-party",
    title: "Hilltop Vagator Psytrance Party",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Vagator / Anjuna",
    duration: "Night",
    rating: 4.6,
    reviews: 142,
    price: 1000,
    strikePrice: 1600,
    image: img("photo-1493225457124-a3eb161ffa5f"),
    badge: "Trending",
    description:
      "Dive into Goa's legendary open-air electronic scene with entry to a Hilltop/Vagator psytrance night — multiple stages, big-name DJs and a bohemian international crowd under the stars.",
    highlights: [
      "Entry to open-air psytrance party",
      "Multiple stages & big-name DJs",
      "Iconic Vagator/Anjuna hill setting",
      "Bohemian international crowd",
    ],
    inclusions: [
      "Party entry",
      "Access to open-air dance floors",
    ],
    exclusions: [
      "Drinks & food",
      "Transport unless selected",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "silent-noise-palolem",
    title: "Silent Noise Headphone Party, Palolem",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Palolem Beach, South Goa",
    duration: "Night",
    rating: 4.8,
    reviews: 209,
    price: 900,
    strikePrice: 1400,
    image: img("photo-1508997449629-303059a039c0"),
    badge: "Unique",
    description:
      "Goa's most unique night out — dance on Palolem beach to three live DJs streamed through glowing wireless headphones. Flip channels, pull off the headset and watch a crowd dancing in silence.",
    highlights: [
      "Wireless headphone silent disco",
      "Three live DJ channels to switch between",
      "Right on Palolem beach",
      "Unforgettable, one-of-a-kind vibe",
    ],
    inclusions: [
      "Party entry",
      "Wireless headphones",
      "Access to all DJ channels",
    ],
    exclusions: [
      "Drinks & food",
      "Deposit for headphones (refundable)",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "hammerzz-nightclub-entry",
    title: "Hammerzz Nightclub — Luxury Club, Baga",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Calangute – Baga Road, North Goa",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.6,
    reviews: 176,
    price: 5000,
    priceUnit: "couple",
    image: img("photo-1574391884720-bbc3740c59d1"),
    badge: "Luxury",
    specs: [
      { label: "Couple entry", value: "₹5,000 (fully redeemable as cover)" },
      { label: "Stag entry", value: "₹6,000 (fully redeemable as cover)" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Party at one of North Goa's most extravagant nightclubs — Hammerzz on the Calangute–Baga road. Expect a huge dance floor, world-class sound and lighting, EDM and hip-hop sets by top DJs, a rooftop bar and an electric, dressed-up crowd. Open 9:30 PM to 4:00 AM. Couple entry ₹5,000 and stag entry ₹6,000 — both fully redeemable as cover on food & drinks.",
    highlights: [
      "Couple ₹5,000 / Stag ₹6,000 — fully redeemable as cover",
      "Top DJs spinning EDM & hip-hop",
      "State-of-the-art sound & lighting",
      "Rooftop restaurant & bar",
    ],
    inclusions: [
      "Couple entry ₹5,000 / Stag entry ₹6,000",
      "Entry fee fully redeemable as cover on food & drinks",
      "Access to main dance floor & bar",
    ],
    exclusions: [
      "Drinks & food (as per bill)",
      "Transport unless selected",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "lpk-waterfront-entry",
    title: "LPK Waterfront — Love Passion Karma, Nerul",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Nerul River, near Candolim",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.5,
    reviews: 158,
    price: 3000,
    priceUnit: "couple",
    image: asset("/lpk-neon.jpg"),
    gallery: [
      asset("/lpk-mermaid.jpg"),
      asset("/lpk-architecture.jpg"),
      asset("/lpk-sculpture.jpg"),
      asset("/lpk-crowd.jpg"),
    ],
    badge: "Iconic",
    specs: [
      { label: "Couple entry", value: "₹3,000 (redeemable on selected drinks only)" },
      { label: "Stag entry", value: "₹3,000 (redeemable on selected drinks only)" },
      { label: "Food", value: "Charged extra" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Dance the night away at Goa's most striking riverside club — Love Passion Karma. Famous for its rock-carved, mystical architecture on the banks of the Nerul River, LPK blends terracotta sculptures and a huge dance floor with EDM, hip-hop and live sets. Open 9:30 PM to 4:00 AM. Couple and stag entry are both ₹3,000, redeemable against selected drinks only — food is charged extra.",
    highlights: [
      "Couple ₹3,000 / Stag ₹3,000 — redeemable on selected drinks only",
      "Stunning rock-carved riverside setting",
      "EDM, hip-hop & live performances",
      "Riverside deck & VIP sections",
    ],
    inclusions: [
      "Couple entry ₹3,000 / Stag entry ₹3,000",
      "Entry fee redeemable against selected drinks only",
      "Access to dance floor & riverside deck",
    ],
    exclusions: [
      "Food (charged extra)",
      "Drinks outside the selected redeemable list",
      "Transport to Nerul unless selected",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "sinq-nightclub-entry",
    title: "SinQ Nightclub — Party Resort, Candolim",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Opp. Taj Holiday Village, Candolim",
    duration: "Night (9:30 PM – 4:00 AM)",
    rating: 4.4,
    reviews: 149,
    price: 3000,
    priceUnit: "couple",
    image: img("photo-1566737236500-c8ac43014a67"),
    badge: "Popular",
    specs: [
      { label: "Couple entry", value: "₹3,000 (fully redeemable as cover)" },
      { label: "Stag entry", value: "₹4,000 (fully redeemable as cover)" },
      { label: "Timings", value: "09:30 PM – 04:00 AM" },
    ],
    description:
      "Party at SinQ — Goa's original party resort in Candolim, near Fort Aguada. A one-stop night out with a buzzing nightclub, lounge, Goan tavern and poolside deck, top DJs and a fashionable crowd. Open daily 9:30 PM to 4:00 AM. Couple entry ₹3,000 and stag entry ₹4,000 — both fully redeemable as cover on food & drinks.",
    highlights: [
      "Couple ₹3,000 / Stag ₹4,000 — fully redeemable as cover",
      "Nightclub, lounge & poolside deck",
      "Top DJs & great bartenders",
      "Central Candolim location",
    ],
    inclusions: [
      "Couple entry ₹3,000 / Stag entry ₹4,000",
      "Entry fee fully redeemable as cover on food & drinks",
      "Access to dance floor & lounge",
    ],
    exclusions: [
      "Additional drinks & food",
      "Transport to Candolim unless selected",
      "Tips and personal expenses",
    ],
  },
];

export const moods: Mood[] = [
  {
    name: "For Couples",
    blurb: "Sunset cruises & romantic escapes",
    image: img("photo-1519046904884-53103b34b206"),
    categorySlug: "packages",
  },
  {
    name: "For Families",
    blurb: "Easy sightseeing & dolphin rides",
    image: img("photo-1476041800959-2f6bb412c8ce"),
    categorySlug: "sightseeing",
  },
  {
    name: "For Groups",
    blurb: "Party boats & beach hopping",
    image: img("photo-1533105079780-92b9be482077"),
    categorySlug: "adventure",
  },
  {
    name: "Adventure Seekers",
    blurb: "Scuba, flyboard & waterfalls",
    image: img("photo-1502933691298-84fc14542831"),
    categorySlug: "scuba-diving",
  },
];

export const reviews: Review[] = [
  {
    name: "Aaradhya Pande",
    location: "Pune",
    rating: 5,
    text: "Smooth booking, comfortable cab and the dinner cruise was magical. Every part of the trip was worth the money!",
    tour: "Sunset Dinner Cruise",
  },
  {
    name: "Samiuddin Shaikh",
    location: "Mumbai",
    rating: 5,
    text: "Excellent, well-managed and enjoyable. The team was professional and everything went perfectly. Highly recommended.",
    tour: "Grand Island Scuba Diving",
  },
  {
    name: "Swapnil Sinha",
    location: "Bengaluru",
    rating: 5,
    text: "A day well spent and absolutely worth it. Perfect choice for a first-time visitor to Goa. Must try!",
    tour: "Dudhsagar Jeep Safari",
  },
  {
    name: "Shobha Krishnan",
    location: "Hyderabad",
    rating: 5,
    text: "Our guide was very cooperative and guided us throughout with great professionalism. Wonderful experience.",
    tour: "North Goa Sightseeing",
  },
];

export const posts: Post[] = [
  {
    slug: "hidden-beaches-goa",
    title: "Top 10 Hidden Beaches in Goa (2026)",
    excerpt:
      "Peaceful shores, secret coves and the best times to visit away from the crowds.",
    tag: "Travel Guide",
    date: "Aug 1, 2026",
    image: img("photo-1473116763249-2faaef81ccda"),
    body: [
      "Goa's famous beaches are wonderful, but the real magic often hides just around the headland. If you want turquoise water without the crowds, these lesser-known shores are worth the extra effort.",
      "Butterfly Beach in the south is a crescent of soft sand reachable only by boat or a short forest trail — go early to spot dolphins on the way. Nearby, Cola Beach hides a freshwater lagoon right behind the sand, perfect for a quiet float.",
      "Up north, Kakolem (Tiger) Beach rewards a steep climb with near-total seclusion, while Hollant and Betul stay calm even in peak season. Pack water, reef-safe sunscreen and cash, and always check the tide before you set out.",
      "Want us to build a hidden-beach day around your dates? Message our team and we'll arrange the boat, transport and timing so you only have to show up.",
    ],
  },
  {
    slug: "goa-family-budget",
    title: "Goa Family Trip Budget for 2026",
    excerpt:
      "A complete breakdown of hotels, food, transport and activity costs for families.",
    tag: "Planning",
    date: "Aug 4, 2026",
    image: img("photo-1476041800959-2f6bb412c8ce"),
    body: [
      "A family holiday in Goa can be surprisingly affordable with a little planning. Here's a realistic breakdown for a family of four across a typical 4-day trip.",
      "Stays range from comfortable 3-star hotels (₹2,500–4,000/night) to family resorts with pools (₹5,000–8,000/night). Food is a highlight and a bargain — local Goan thalis and beach shacks keep daily meals around ₹1,200–2,000 for the family.",
      "For getting around, a private cab for sightseeing days costs about ₹2,500–3,500 per day and is far easier with kids than scooters. Activities like dolphin rides, Dudhsagar and a dinner cruise add roughly ₹350–2,000 per person.",
      "Bundle it into a package and you'll typically save 20–30% versus booking piecemeal. Tell us your dates and we'll send a transparent, all-in quote with no hidden charges.",
    ],
  },
  {
    slug: "best-time-to-visit",
    title: "Best Time to Visit Goa: A Season Guide",
    excerpt:
      "From monsoon magic to peak-season parties — when to go for the trip you want.",
    tag: "Guide",
    date: "Jul 28, 2026",
    image: img("photo-1520454974749-611b7248ffdb"),
    body: [
      "The 'best' time to visit Goa depends entirely on the trip you want. Each season has its own personality.",
      "November to February is peak season: sunny days, cool evenings, buzzing beaches, cruises and the biggest events. Book early — this is when Goa is at its liveliest (and priciest).",
      "March to May is hot but quieter, with great hotel deals and warm seas ideal for water sports and scuba. June to September brings the monsoon — lush green hills, roaring waterfalls like Dudhsagar, and dramatically lower prices, though some boat activities pause.",
      "Whenever you come, we'll tailor the itinerary to the season — waterfalls and greenery in the monsoon, cruises and nightlife in winter. Just reach out and we'll plan around your dates.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/* ----------------------------- selectors ----------------------------- */

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getToursByCategory = (slug: string) =>
  tours.filter(
    (t) => t.categorySlug === slug || t.extraCategorySlugs?.includes(slug),
  );

// Boat / on-water experiences that carry the safety assurance.
const boatSafetySlugs = new Set([
  "princesa-dinner-cruise",
  "paradise-dinner-cruise",
  "nirvana-dinner-cruise",
  "private-yacht-cruise",
  "panjim-sunset-cruise",
  "grand-island-scuba",
  "malvan-scuba-combo",
  "paradise-island-scuba",
  "water-sports-combo",
  "dolphin-boat-ride",
  "party-boat-water-sports",
  "backwater-kayaking",
  "flyboarding-goa",
  "dolphin-watching-trip",
  "crocodile-mangrove-safari",
  "fishing-tour",
  "crab-catching",
  "grand-island-snorkeling",
  "overnight-houseboat",
]);

export const hasBoatSafety = (slug: string) => boatSafetySlugs.has(slug);

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export const featuredTours = tours.filter((t) =>
  [
    "nirvana-dinner-cruise",
    "grand-island-scuba",
    "dudhsagar-jeep-safari",
    "backwater-kayaking",
    "water-sports-combo",
    "goa-3n4d-couple",
  ].includes(t.slug),
);
