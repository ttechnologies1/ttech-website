export const site = {
  name: "T Technologies",
  shortName: "T Tech",
  tagline: "Technology built for the way you work.",
  description:
    "T Technologies designs and builds websites, applications, and business software for teams in Nigeria and beyond.",
  location: "Nigeria · Working worldwide",
  email: "", // Add an approved public email address.
  phone: "", // Add an approved phone number in international format.
  whatsapp: "", // Add an approved wa.me URL.
  socials: [] as { label: string; href: string }[], // Add approved social profiles.
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Client = { name: string; logoSrc: string };
export const clients: Client[] = []; // Add only approved client names and logo files in /public.

export type Testimonial = { quote: string; name: string; role: string; company: string; photoSrc?: string; logoSrc?: string };
export const testimonials: Testimonial[] = []; // Add only approved client quotations and attribution.

export const services = [
  {
    slug: "web-development",
    number: "01",
    name: "Web development",
    short: "Fast, considered websites that make a clear case for your business.",
    detail:
      "From a focused company site to a content-rich platform, we design and build web experiences that are easy to use, easy to manage, and ready to grow.",
    deliverables: ["Marketing websites", "Content platforms", "Performance and accessibility"],
    icon: "web",
  },
  {
    slug: "mobile-app-development",
    number: "02",
    name: "Mobile apps",
    short: "Useful iOS and Android experiences shaped around real user needs.",
    detail:
      "We turn a product idea or existing workflow into a mobile experience with clear navigation, reliable foundations, and room to evolve.",
    deliverables: ["iOS and Android", "Product design", "Launch support"],
    icon: "mobile",
  },
  {
    slug: "custom-software",
    number: "03",
    name: "Custom software",
    short: "Purpose-built tools for the work your team actually does.",
    detail:
      "When off-the-shelf software creates friction, we plan and build applications around your processes, people, and priorities.",
    deliverables: ["Web applications", "Internal tools", "Dashboards"],
    icon: "software",
  },
  {
    slug: "ecommerce",
    number: "04",
    name: "E-commerce",
    short: "Shopping experiences that make discovery and checkout feel simple.",
    detail:
      "We create online storefronts with a coherent customer journey and practical tools for managing products, orders, and growth.",
    deliverables: ["Storefronts", "Checkout flows", "Commerce integrations"],
    icon: "commerce",
  },
  {
    slug: "ui-ux-design",
    number: "05",
    name: "UI/UX design",
    short: "Interfaces that turn complex requirements into intuitive moments.",
    detail:
      "We map user journeys, explore the details, and design interfaces that balance usefulness, clarity, and a distinct visual character.",
    deliverables: ["Research and flows", "Interface systems", "Interactive prototypes"],
    icon: "design",
  },
  {
    slug: "automation-integrations",
    number: "06",
    name: "Automation & integrations",
    short: "Connected systems that reduce repetitive work and manual handoffs.",
    detail:
      "We identify where information gets stuck, then connect the tools and processes that keep your business moving.",
    deliverables: ["Workflow automation", "API integrations", "System improvements"],
    icon: "automation",
  },
] as const;

export const projects = [
  {
    slug: "commerce-experience",
    number: "01",
    title: "Commerce experience",
    category: "E-commerce / Experience design",
    description: "A concept storefront exploring a calmer path from product discovery to checkout.",
    art: "commerce",
    tone: "sand",
    technologies: ["Next.js", "TypeScript", "Commerce API"],
  },
  {
    slug: "operations-dashboard",
    number: "02",
    title: "Operations dashboard",
    category: "Custom software / Dashboard",
    description: "A concept workspace for seeing priorities, activity, and next actions in one place.",
    art: "dashboard",
    tone: "blue",
    technologies: ["React", "TypeScript", "Data visualization"],
  },
  {
    slug: "mobile-booking-flow",
    number: "03",
    title: "Mobile booking flow",
    category: "Mobile app / Product design",
    description: "A concept mobile journey designed to make a multi-step booking feel effortless.",
    art: "mobile",
    tone: "sage",
    technologies: ["React Native", "TypeScript", "Design system"],
  },
  {
    slug: "learning-platform",
    number: "04",
    title: "Learning platform",
    category: "Web application / Education",
    description: "A concept learning interface focused on progress, clarity, and the next lesson.",
    art: "learning",
    tone: "peach",
    technologies: ["Next.js", "TypeScript", "Content platform"],
  },
] as const;

export const differentiators = [
  ["Business comes first", "We start with the problem, the people it affects, and what a useful outcome would look like."],
  ["Design has a job", "Every interaction should help someone understand, decide, or get something done."],
  ["Built to keep working", "Clear structure and maintainable code make future changes less painful."],
  ["You stay in the loop", "We share progress, explain trade-offs, and make decisions with you."],
  ["After launch matters", "We can help refine, maintain, and support the product as needs change."],
] as const;

export const process = [
  ["01", "Discover & understand", "We listen, ask useful questions, and define the problem together."],
  ["02", "Plan & design", "We shape the experience, scope the work, and make the direction tangible."],
  ["03", "Develop & test", "We build in clear stages, check the details, and keep you involved."],
  ["04", "Launch & support", "We prepare the release and stay available for what comes next."],
] as const;

export const industries = [
  "Retail & e-commerce",
  "Education",
  "Finance & fintech",
  "Healthcare",
  "Logistics",
  "Professional services",
  "Startups & SMEs",
];

export const faqs = [
  {
    question: "How much does a website or mobile app cost?",
    answer: "It depends on what the product needs to do, the content and integrations involved, and the level of design and development required. Tell us what you have in mind and we can discuss a suitable scope and estimate.",
  },
  {
    question: "How long does development take?",
    answer: "The timeline follows the scope. A focused website and a complex application need different plans. After an initial conversation, we can outline milestones and a realistic schedule.",
  },
  {
    question: "Can you improve an existing website or application?",
    answer: "Yes. We can review what exists, identify the biggest points of friction, and recommend targeted improvements or a more substantial rebuild when that makes sense.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. Maintenance and technical support can be included in the scope. We will agree what is covered, how requests are handled, and the level of support you need.",
  },
  {
    question: "Can you integrate online payments?",
    answer: "Yes. We can discuss suitable payment providers and integration needs for your business, market, and platform before choosing an approach.",
  },
  {
    question: "Can you work with clients outside Nigeria?",
    answer: "Yes. We work with teams remotely and can plan communication and delivery around your time zone and working style.",
  },
];
