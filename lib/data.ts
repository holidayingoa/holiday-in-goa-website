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
  category: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  strikePrice?: number;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
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
  name: "Holiday in Goa Tour & Travels",
  shortName: "Holiday in Goa",
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
      "Goa's most popular all-inclusive dinner cruise — dance, dine and party on the River Mandovi. Entry for everyone: stags, couples and groups welcome. A moving cruise that sails from Panjim to Old Goa, Miramar and back. Reporting/pickup 7:30 PM, cruise 8:30–11:30 PM.",
    highlights: [
      "All-inclusive — entry for stags, couples & groups",
      "1 welcome drink, 3 tequila shots & 2 drinks",
      "Buffet dinner with non-stop DJ & dance performances",
      "Pickup 7:30 PM · cruise 8:30–11:30 PM",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "1 welcome drink",
      "3 tequila shots",
      "2 drinks (beer / hard drink / soft drink)",
      "Buffet dinner (veg & non-veg)",
      "Non-stop Bollywood DJ, dance floor & live performances",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
  },
  {
    slug: "princesa-dinner-cruise",
    title: "Princesa — Goa's First Floating Restaurant Dinner Cruise",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Mandovi River, Panaji",
    duration: "2.5 hours",
    rating: 4.8,
    reviews: 289,
    price: 1299,
    strikePrice: 1900,
    image: asset("/princesa-cruise.png"),
    badge: "Couple & Family",
    description:
      "Goa's first floating restaurant dinner cruise, exclusively for couples and families. Enjoy a relaxed 2.5-hour cruise on the River Mandovi with a lavish buffet dinner, Bollywood music and a live DJ. A moving cruise from Panjim to Old Goa, Miramar and back. Reporting/pickup 7:30 PM.",
    highlights: [
      "Couple & family entry only",
      "2.5-hour cruise with buffet dinner",
      "2 drinks included (beer / hard / soft)",
      "Bollywood music, live DJ & dance floor",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "Buffet dinner (veg & non-veg)",
      "2 drinks (beer / hard drink / soft drink)",
      "Bollywood music, live DJ & dance floor",
    ],
    exclusions: ["Tequila shots", "Starters", "Personal expenses & tips"],
  },
  {
    slug: "paradise-dinner-cruise",
    title: "Paradise Dinner Cruise",
    categorySlug: "cruises",
    category: "Cruises",
    location: "Tourism Jetty, Panaji",
    duration: "3 hours",
    rating: 4.7,
    reviews: 241,
    price: 1099,
    strikePrice: 1999,
    image: asset("/paradise-cruise.png"),
    badge: "All Inclusive",
    description:
      "Goa's No.1 all-inclusive dinner cruise with entry for all. A moving cruise on the River Mandovi from Panjim to Old Goa, Miramar and back, with buffet dinner, live DJ, Goan folk dances and a dance floor. Reporting/pickup 7:30 PM, cruise 8:30–11:30 PM.",
    highlights: [
      "Entry for all — all-inclusive",
      "Buffet dinner, 2 drinks & a tequila shot",
      "Live DJ, Goan folk dances & dance floor",
      "Pickup 7:30 PM · cruise 8:30–11:30 PM",
    ],
    inclusions: [
      "Pickup & drop (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)",
      "Buffet dinner (veg & non-veg)",
      "2 drinks (beer / hard drink / soft drink)",
      "1 tequila shot",
      "Live DJ, Goan folk dances & dance floor",
      "AC cabin",
    ],
    exclusions: ["Personal expenses & tips", "Anything not mentioned in inclusions"],
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
    price: 600,
    strikePrice: 900,
    image: img("photo-1544551763-46a013bb70d5"),
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
      "Photography & drone shoot (paid add-on)",
      "DJ & host (paid add-on)",
      "Food & drinks (paid add-on)",
    ],
  },
  // Scuba
  {
    slug: "grand-island-scuba",
    title: "Grand Island Scuba Diving Combo",
    categorySlug: "scuba-diving",
    category: "Scuba Diving",
    location: "Grand Island",
    duration: "8 hours",
    rating: 4.7,
    reviews: 210,
    price: 2000,
    strikePrice: 2500,
    image: img("photo-1530053969600-caed2596d242"),
    badge: "20% OFF",
    description:
      "Sail to Grand Island and dive the clear waters to explore colourful coral reefs and marine life — includes boat ride, training and a certified instructor.",
    highlights: [
      "Beginner-friendly, no experience needed",
      "Certified PADI instructors",
      "Boat ride to Grand Island",
      "Underwater coral & marine life",
    ],
    inclusions: ["Boat transfer", "Scuba gear & training", "Certified instructor", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  {
    slug: "malvan-scuba-combo",
    title: "Scuba Diving in Malvan Combo Package",
    categorySlug: "scuba-diving",
    category: "Scuba Diving",
    location: "Malvan",
    duration: "Full day",
    rating: 4.6,
    reviews: 142,
    price: 3000,
    strikePrice: 5000,
    image: img("photo-1530053969600-caed2596d242"),
    description:
      "A full-day scuba and sightseeing combo at Malvan with clear waters, Sindhudurg fort views and an underwater adventure for all skill levels.",
    highlights: [
      "Clear-water diving at Malvan",
      "Sindhudurg fort sightseeing",
      "All safety gear provided",
      "Great for first-time divers",
    ],
    inclusions: ["Scuba session", "Sightseeing", "Safety equipment", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  // Water sports
  {
    slug: "water-sports-combo",
    title: "Baga Beach Water Sports Combo",
    categorySlug: "water-sports",
    category: "Water Sports",
    location: "Baga",
    duration: "2 hours",
    rating: 4.6,
    reviews: 278,
    price: 1500,
    strikePrice: 1800,
    image: img("photo-1530870110042-98b2cb110834"),
    description:
      "The ultimate adrenaline combo at Baga — jet ski, parasailing, banana boat and bumper rides bundled at one great price.",
    highlights: [
      "Jet ski ride",
      "Parasailing",
      "Banana & bumper boat",
      "Safety jackets & instructor",
    ],
    inclusions: ["All listed water-sport activities", "Safety gear", "Instructor", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  {
    slug: "flyboarding-goa",
    title: "Flyboarding Experience in Goa",
    categorySlug: "water-sports",
    category: "Water Sports",
    location: "Nerul",
    duration: "35 min (incl. training)",
    rating: 4.7,
    reviews: 88,
    price: 2499,
    strikePrice: 3500,
    image: img("photo-1502933691298-84fc14542831"),
    badge: "New",
    description:
      "Strap into a water-powered flyboard and soar above the water like a superhero, with a training session and a certified instructor guiding you throughout.",
    highlights: [
      "Water-jet powered flight",
      "Training session included",
      "Certified instructor",
      "Unforgettable photos & video",
    ],
    inclusions: ["Training + flight", "Safety gear", "Instructor", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  // Sightseeing
  {
    slug: "north-goa-sightseeing",
    title: "North Goa Sightseeing Day Tour",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "Calangute",
    duration: "8 hours",
    rating: 4.4,
    reviews: 133,
    price: 350,
    strikePrice: 500,
    image: img("photo-1471922694854-ff1b63b20054"),
    description:
      "Cover North Goa's icons in a day — Fort Aguada, Calangute, Baga, Anjuna and Vagator — with a comfortable cab and a knowledgeable driver-guide.",
    highlights: [
      "Fort Aguada & lighthouse",
      "Calangute, Baga & Anjuna beaches",
      "Vagator & Chapora fort",
      "Comfortable private cab",
    ],
    inclusions: ["Private cab for the day", "Driver-guide", "Fuel & parking", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  {
    slug: "south-goa-sightseeing",
    title: "South Goa Sightseeing Day Tour",
    categorySlug: "sightseeing",
    category: "Sightseeing",
    location: "Panaji",
    duration: "10 hours",
    rating: 4.5,
    reviews: 121,
    price: 399,
    strikePrice: 600,
    image: img("photo-1502209524164-acea936639a2"),
    description:
      "Explore South Goa's heritage and beaches — Old Goa churches, Mangueshi temple, Miramar, Dona Paula and a dolphin spotting trip.",
    highlights: [
      "Basilica of Bom Jesus & Se Cathedral",
      "Mangueshi temple",
      "Miramar & Dona Paula",
      "Dolphin spotting trip",
    ],
    inclusions: ["Private cab for the day", "Driver-guide", "Fuel & parking", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
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
    image: img("photo-1439066615861-d1af74d74000"),
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
  // Dudhsagar
  {
    slug: "dudhsagar-jeep-safari",
    title: "Dudhsagar Falls & Spice Plantation Tour",
    categorySlug: "dudhsagar",
    category: "Dudhsagar",
    location: "Mollem",
    duration: "8 hours",
    rating: 4.6,
    reviews: 189,
    price: 2000,
    strikePrice: 2500,
    image: asset("/dudhsagar.png"),
    badge: "Popular",
    description:
      "A thrilling jeep safari to India's iconic Dudhsagar waterfall through the Bhagwan Mahavir sanctuary, combined with a spice plantation visit and lunch.",
    highlights: [
      "Jeep safari to Dudhsagar Falls",
      "Swim near the base of the falls",
      "Spice plantation tour",
      "Traditional Goan lunch",
    ],
    inclusions: ["Jeep safari", "Spice farm entry & lunch", "Guide", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
  },
  // Adventure
  {
    slug: "backwater-kayaking",
    title: "Backwater & Mangrove Kayaking",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Sal Backwaters",
    duration: "2 hours",
    rating: 4.5,
    reviews: 156,
    price: 500,
    strikePrice: 999,
    image: img("photo-1502680390469-be75c86b636f"),
    badge: "New",
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
    slug: "party-boat-water-sports",
    title: "Adventure Party Boat with Water Sports",
    categorySlug: "adventure",
    category: "Adventure",
    location: "Grand Island",
    duration: "4 hours",
    rating: 4.6,
    reviews: 174,
    price: 1299,
    strikePrice: 1500,
    image: img("photo-1533105079780-92b9be482077"),
    description:
      "A high-energy party boat to Grand Island with music, snacks and a bundle of water-sport activities — perfect for groups and friends.",
    highlights: [
      "Party boat with music",
      "Water sports included",
      "Snacks & refreshments",
      "Great for groups",
    ],
    inclusions: ["Boat trip", "Water sports", "Snacks", ...genInclusions.slice(0, 1)],
    exclusions: genExclusions,
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
    image: img("photo-1596838132731-3301c3fd4317"),
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
    image: img("photo-1571401835393-8c5f35328320"),
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
    image: img("photo-1517232115160-ff93364542dd"),
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
    duration: "Night",
    rating: 4.6,
    reviews: 187,
    price: 1800,
    strikePrice: 2500,
    image: img("photo-1545128485-c400e7702796"),
    badge: "Premium",
    description:
      "Party at Goa's legendary hilltop club with multiple levels, a poolside dance floor, neon lights and panoramic night views — couple and stag entry with drinks included.",
    highlights: [
      "Entry to Club Cubana (hilltop)",
      "Poolside dance floor & neon lights",
      "Drinks included on entry",
      "Panoramic night views",
    ],
    inclusions: [
      "Club entry (couple/stag)",
      "Selected drinks on entry",
      "Access to all levels & pool area",
    ],
    exclusions: [
      "Additional drinks & food",
      "Transport to Arpora hill unless selected",
      "Tips and personal expenses",
    ],
  },
  {
    slug: "titos-mambos-club-night",
    title: "Tito's & Mambo's Baga Club Night",
    categorySlug: "nightlife",
    category: "Nightlife & Parties",
    location: "Baga Beach",
    duration: "Night",
    rating: 4.5,
    reviews: 164,
    price: 1200,
    strikePrice: 1800,
    image: img("photo-1533174072545-7a4b6ad7a6c3"),
    description:
      "Experience the two most iconic clubs in Goa — Tito's and Mambo's — with entry passes, Bollywood and EDM floors and an unbeatable Baga party atmosphere.",
    highlights: [
      "Entry to Tito's and/or Mambo's",
      "Bollywood + EDM dance floors",
      "Buzzing Baga beach party scene",
      "Perfect for first-timers",
    ],
    inclusions: [
      "Club entry pass",
      "Welcome drink",
      "Access to main dance floors",
    ],
    exclusions: [
      "Additional drinks & food",
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
  tours.filter((t) => t.categorySlug === slug);

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
