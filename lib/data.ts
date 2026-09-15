export const headquarters = {
  line1: "Badlapur West, 421503",
  line2: "Dist. Thane, Maharashtra, India",
}

export const contact = {
  email: "worldwideedigital@gmail.com",
  phones: ["+91 97309 31676", "+91 99703 36616"],
}

export type TradeCorridor = {
  code: string
  place: string
}

export const tradeCorridors: TradeCorridor[] = [
  { code: "UAE", place: "Dubai" },
  { code: "IR", place: "Iran" },
  { code: "ME", place: "Middle East" },
  { code: "AU", place: "Australia" },
]

export const heroStats = [
  { value: 20, suffix: "+", label: "years in media & PR" },
  { value: 15, suffix: "+", label: "years scaling brands" },
  { value: 4, suffix: "", label: "global markets" },
  { value: 100, suffix: "+", label: "women-led enterprises backed" },
]

export const philosophy = {
  line: "Jo Dikhega, Wo Bikega",
  meaning: "What gets seen, sells.",
}

export const aboutTeaser =
  "World Widee Digital Media Marketing is a leading agency with a rich legacy in media and marketing. With over 20 years of experience, we offer diverse services including SEO, content marketing and social media management - an approach that has earned recognition and set us apart from competitors."

export const whyChooseUs = [
  {
    title: "20 Years of Media Expertise",
    copy: "Unmatched understanding of public perception and PR.",
  },
  {
    title: "15 Years of Business Scaling",
    copy: "Proven track record of helping businesses achieve sustainable growth.",
  },
  {
    title: "Global Reach",
    copy: "Operational networks in Australia, UK, Dubai, and South Korea.",
  },
  {
    title: "Women Empowerment",
    copy: "Proudly transitioned 100+ women-led enterprises into the digital marketplace.",
  },
]

export type TimelineEntry = {
  year: string
  title: string
  copy: string
}

export const timeline: TimelineEntry[] = [
  {
    year: "2003",
    title: "World Widee Digital founded",
    copy: "Prajakta Khedekar founded WWD on a newsroom foundation - media, PR and journalism instinct aimed at brand growth.",
  },
  {
    year: "20 yrs",
    title: "Media & PR expertise",
    copy: "Two decades driving client success globally, turning press relationships into a repeatable growth engine for founder-led brands.",
  },
  {
    year: "15 yrs",
    title: "Business scaling track record",
    copy: "Local brands transformed into internationally recognized names, with measurable gains in visibility and profitability across sectors.",
  },
  {
    year: "100+",
    title: "Women-led enterprises",
    copy: "Helped over 100 women-led businesses transition into the digital marketplace and reach buyers beyond their home market.",
  },
  {
    year: "Today",
    title: "One desk, four disciplines",
    copy: "Media, celebrity promotion, global trade and event curation now file out of Maharashtra into buyers and press across Dubai, Iran, the Middle East and Australia.",
  },
]

export const founder = {
  name: "Prajakta Khedekar",
  role: "Founder, World Widee Digital",
  quote:
    "In a crowded market, visibility is your strongest currency. My mission is to ensure that every local talent and business gets the global stage they deserve.",
}

export type Service = {
  id: string
  eyebrow: string
  title: string
  summary: string
  items: string[]
  tags?: string[]
}

export const services: Service[] = [
  {
    id: "digital",
    eyebrow: "DIGITAL DESK",
    title: "Digital Marketing & Strategic Branding",
    summary:
      "Creating a powerful digital footprint for your brand - from social media management to high-end corporate branding, with a specialization in digital transformation for textile, machinery and FMCG.",
    items: [
      "Social media management",
      "High-end corporate branding",
      "Digital transformation for textile, machinery & FMCG",
      "Trusted across leading Mumbai & India accounts",
    ],
    tags: ["Social", "Branding", "Textile", "FMCG"],
  },
  {
    id: "celebrity",
    eyebrow: "CELEBRITY DESK",
    title: "Celebrity Management",
    summary:
      "Star power, backed by deep media industry connections - celebrity inaugurations, festive appearances and brand endorsements that make a launch unforgettable.",
    items: [
      "Grand openings & launches",
      "Festive appearances - Ganpati Mandals, Navratri & more",
      "Brand endorsements & ambassador roles",
      "End-to-end coordination & media reach",
    ],
  },
  {
    id: "trade",
    eyebrow: "TRADE DESK",
    title: "Global Trade - Import & Export",
    summary:
      "Bridging the gap between Indian products and international demand - exporting premium Indian produce and building strategic trading partnerships abroad.",
    items: [
      "Export of premium Indian fruits, vegetables & FMCG",
      "Trade corridors to Dubai, Iran & the Middle East",
      "International partnerships & distribution in Australia",
      "End-to-end trade documentation & logistics",
    ],
  },
  {
    id: "events",
    eyebrow: "EVENTS DESK",
    title: "Event Curation & Award Shows",
    summary:
      "Large-scale trade expos and lifestyle exhibitions across Maharashtra, plus award shows that put business excellence and women entrepreneurship on stage.",
    items: [
      "Trade expos & lifestyle exhibitions across Maharashtra",
      "Award shows celebrating business excellence",
      "Platforms honoring women entrepreneurship",
      "End-to-end event curation & production",
    ],
    tags: ["Expos", "Awards", "Maharashtra", "Women in Business"],
  },
]

export type Testimonial = {
  name: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Amit Sharma",
    quote:
      "WWD transformed our online presence. Their strategies worked wonders for our brand visibility!",
  },
  {
    name: "Neha Gupta",
    quote:
      "Their team is dedicated and knowledgeable. We've seen a significant increase in customer engagement since we started.",
  },
  {
    name: "Rohan Mehta",
    quote:
      "Professional, creative, and results-driven! WWD's marketing campaigns have taken our business to new heights.",
  },
]

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/celebrity-management", label: "Celebrity Management" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export const celebrityManagement = {
  headline: "Elevate Your Brand with Celebrity Presence",
  subheadline:
    "Make your next big milestone unforgettable. We bridge the gap between your brand and the stars, providing seamless celebrity management for shop openings, festive celebrations, and brand endorsements.",
  offerings: [
    {
      title: "Grand Openings & Launches",
      copy: "Celebrity inaugurations for salons, boutiques and retail outlets that drive foot traffic and media exposure.",
    },
    {
      title: "Festive Appearances",
      copy: "Celebrity visits for community events - Ganpati Mandals, Navratri celebrations and neighborhood festivities.",
    },
    {
      title: "Brand Endorsements",
      copy: "Personality-based promotion, from digital campaigns to full brand ambassador roles.",
    },
  ],
  whyChoose: [
    {
      title: "End-to-End Coordination",
      copy: "From first call to final bow, we manage every logistic detail so you don't have to.",
    },
    {
      title: "Massive Media Reach",
      copy: "Two decades of press and broadcast connections put your event in front of the right audience.",
    },
    {
      title: "Tailored Selection",
      copy: "We match the right personality to your brand and budget - never a generic booking.",
    },
    {
      title: "Social Media Impact",
      copy: "Every appearance is built to travel further online than the room it happened in.",
    },
  ],
  cta: "Contact us now for a consultation and discover how we can elevate your brand!",
}

export const galleryPlaceholderCount = 12

export const businessTypes = [
  "Founder-led brand",
  "Manufacturer / producer",
  "Farm or agricultural business",
  "Talent / public figure",
  "Corporate / enterprise",
]

export const targetMarkets = [
  "Australia",
  "United Kingdom",
  "United Arab Emirates",
  "South Korea",
  "United States",
  "Other / not sure yet",
]

export const goals = [
  "Grow media & press presence",
  "Book celebrity or influencer promotion",
  "Find international buyers",
  "Export compliance & logistics",
  "Full brand strategy",
]
