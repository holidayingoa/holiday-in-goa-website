export type Policy = {
  slug: string;
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
};

export const policies: Policy[] = [
  {
    slug: "cancellation",
    title: "Cancellation Policy",
    updated: "August 2026",
    sections: [
      {
        heading: "Free cancellation window",
        body: [
          "Most experiences can be cancelled free of charge up to 24 hours before the scheduled start time. For multi-day tour packages, the free-cancellation window is 72 hours before the trip start date.",
          "To cancel, simply message us on WhatsApp or call our team with your booking name and date.",
        ],
      },
      {
        heading: "Late cancellations",
        body: [
          "Cancellations made within the free-cancellation window described above are eligible for a full refund of any advance paid.",
          "Cancellations made after that window may be subject to a charge of up to 100% depending on the operator and how close to the start time the cancellation is made.",
        ],
      },
      {
        heading: "Weather & operational cancellations",
        body: [
          "Some activities (boat rides, water sports, scuba) depend on weather and sea conditions. If an activity is cancelled by the operator for safety reasons, you may reschedule for free or receive a full refund of the advance paid.",
        ],
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund Policy",
    updated: "August 2026",
    sections: [
      {
        heading: "How refunds work",
        body: [
          "Where a booking qualifies for a refund under our Cancellation Policy, any advance amount paid will be refunded to the original payment method.",
          "Refunds are typically processed within 5–7 business days, though the exact time may depend on your bank or payment provider.",
        ],
      },
      {
        heading: "Non-refundable items",
        body: [
          "Certain third-party tickets, custom or peak-season packages, and special event bookings may be non-refundable. This will always be made clear before you confirm your booking.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "August 2026",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect only the details you share to make a booking or enquiry — such as your name, phone number, email, travel dates and group size.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "Your details are used solely to plan, confirm and deliver your booking, and to contact you about your trip (for example via WhatsApp, call or email).",
          "We may share necessary details with the specific tour operator fulfilling your experience.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can request that we update or delete your information at any time by contacting us on the details listed on our Contact page.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    updated: "August 2026",
    sections: [
      {
        heading: "Bookings",
        body: [
          "All bookings are subject to availability and confirmation by our team. Prices shown are indicative per person and may vary with season, group size and inclusions.",
          "A booking is confirmed once our team acknowledges it on WhatsApp, call or email.",
        ],
      },
      {
        heading: "Responsibilities",
        body: [
          "Guests are expected to follow the safety instructions of operators and guides at all times. Participation in adventure activities is at the guest's own risk within the operator's safety framework.",
          "We act as a booking facilitator between you and trusted local operators.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "Itineraries may be adjusted due to weather, safety, or circumstances beyond our control. We will always aim to offer a suitable alternative or a refund per our policies.",
        ],
      },
    ],
  },
];

export const getPolicy = (slug: string) => policies.find((p) => p.slug === slug);

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do I book an experience?",
    a: "Pick any tour and tap 'Book on WhatsApp', or use our contact form. Share your date and group size and our team confirms availability and price instantly — usually within minutes.",
  },
  {
    q: "Do I need to pay online to book?",
    a: "No online payment is required to enquire. We confirm your details first, then share secure payment options (UPI, cards and wallets) or an advance as needed.",
  },
  {
    q: "Are the prices per person?",
    a: "Yes, displayed prices are indicative per person. Final pricing depends on your group size, season and chosen inclusions — we always share a clear, all-in quote before you confirm.",
  },
  {
    q: "Can I customise a package?",
    a: "Absolutely. Tell us your dates, budget and interests and we'll tailor a package with stays, transfers and activities to suit you.",
  },
  {
    q: "Is pickup and drop included?",
    a: "Most tours include pickup and drop from selected Goa locations. We'll confirm your exact pickup point when we finalise the booking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Most experiences offer free cancellation up to 24 hours before start (72 hours for packages). See our Cancellation Policy page for full details.",
  },
  {
    q: "What if the weather affects my activity?",
    a: "If an operator cancels a weather-dependent activity for safety, you can reschedule for free or get a full refund of any advance paid.",
  },
];

export const aboutStats = [
  { value: "10+", label: "Years of experience" },
  { value: "50+", label: "Activities & packages" },
  { value: "5000+", label: "Happy travellers" },
  { value: "24x7", label: "WhatsApp support" },
];

export const aboutValues = [
  {
    title: "Local experts",
    text: "Born-and-raised Goa knowledge means the best spots, the right timings and no tourist traps.",
  },
  {
    title: "Transparent pricing",
    text: "Clear, all-in quotes with no hidden charges — what we quote is what you pay.",
  },
  {
    title: "Verified operators",
    text: "Every activity is run by trusted, safety-first partners we know personally.",
  },
  {
    title: "Always reachable",
    text: "Real people on WhatsApp 24x7, before, during and after your trip.",
  },
];
