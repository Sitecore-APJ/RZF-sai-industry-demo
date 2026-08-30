export const MANDAI_SITE_NAME = 'Mandai Wildlife Reserve';

export const MANDAI_HOME_META = {
  title: 'Imagine Singapore but Wilder | Mandai Wildlife Reserve',
  description:
    'Step into the Mandai Wildlife Reserve, a world-leading nature and wildlife destination and your window into the wild.',
};

export const MANDAI_OFFERS = [
  'Destination Pass — enjoy multiple parks and attractions',
  'What’s new: WILDerful Singaporeans this National Day',
  'Plan your wild day out across five iconic parks',
];

export type MandaiNavChild = {
  title: string;
  href: string;
};

export type MandaiNavItem = {
  title: string;
  href: string;
  children?: MandaiNavChild[];
};

export const MANDAI_NAV: MandaiNavItem[] = [
  {
    title: 'Discover Mandai',
    href: '/discover',
    children: [
      { title: 'Singapore Zoo', href: '/discover#singapore-zoo' },
      { title: 'Night Safari', href: '/discover#night-safari' },
      { title: 'River Wonders', href: '/discover#river-wonders' },
      { title: 'Bird Paradise', href: '/discover#bird-paradise' },
      { title: 'Rainforest Wild Adventure', href: '/discover#rainforest-wild' },
      { title: 'Exploria', href: '/discover#exploria' },
    ],
  },
  { title: 'Tickets & Passes', href: '/tickets' },
  { title: 'Plan Your Visit', href: '/plan-your-visit' },
  { title: 'See & Do', href: '/see-and-do' },
  { title: 'Dine & Shop', href: '/dine-and-shop' },
  { title: 'Stay', href: '/stay' },
];

export const MANDAI_STATIC_PATHS = [
  '/',
  '/discover',
  '/tickets',
  '/plan-your-visit',
  '/see-and-do',
  '/dine-and-shop',
  '/stay',
  '/about',
] as const;

export type MandaiStaticPath = (typeof MANDAI_STATIC_PATHS)[number];

export const MANDAI_FOOTER_DESCRIPTION =
  'A world-leading nature and wildlife destination — five iconic parks, indoor attractions, dining, and stays in the heart of Singapore.';

export const MANDAI_FOOTER_COLUMNS = [
  {
    title: 'Parks & Attractions',
    links: [
      { title: 'Singapore Zoo', href: '/discover#singapore-zoo' },
      { title: 'Night Safari', href: '/discover#night-safari' },
      { title: 'River Wonders', href: '/discover#river-wonders' },
      { title: 'Bird Paradise', href: '/discover#bird-paradise' },
      { title: 'Rainforest Wild Adventure', href: '/discover#rainforest-wild' },
    ],
  },
  {
    title: 'Plan Your Visit',
    links: [
      { title: 'Getting here', href: '/plan-your-visit' },
      { title: 'Visitor guide', href: '/plan-your-visit' },
      { title: 'Maps', href: '/plan-your-visit' },
      { title: 'Contact us', href: '/plan-your-visit' },
    ],
  },
  {
    title: 'Tickets',
    links: [
      { title: 'All tickets & passes', href: '/tickets' },
      { title: 'Destination Pass', href: '/tickets' },
      { title: 'Memberships', href: '/tickets' },
    ],
  },
  {
    title: 'See & Do',
    links: [
      { title: 'Experiences', href: '/see-and-do' },
      { title: 'Dine & Shop', href: '/dine-and-shop' },
      { title: 'Stay', href: '/stay' },
    ],
  },
  {
    title: 'About Mandai',
    links: [
      { title: 'Mandai Wildlife Group', href: '/about' },
      { title: 'Care for Planet', href: '/about' },
      { title: 'Conservation', href: '/about' },
    ],
  },
];

export const MANDAI_COPYRIGHT = '© 2026 Mandai Wildlife Reserve. All rights reserved.';
export const MANDAI_TERMS = { text: 'Terms of Use', href: '/about' };
export const MANDAI_POLICY = { text: 'Personal Data Protection Policy', href: '/about' };

export type MandaiCard = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  id?: string;
};

export type MandaiPageContent = {
  path: MandaiStaticPath;
  title: string;
  eyebrow?: string;
  lede: string;
  heroImage: string;
  sections: {
    heading: string;
    intro?: string;
    cards: MandaiCard[];
  }[];
};

export const MANDAI_HOME = {
  eyebrow: 'Mandai Wildlife Reserve',
  title: 'Imagine Singapore but Wilder',
  lede: 'Step into a world-leading nature and wildlife destination — your window into the wild. From iconic parks to immersive attractions, dining and stays, experience nature in ways you never imagined.',
  heroImage: '/images/mandai/hero.jpg',
  cta: { label: 'Explore parks & attractions', href: '/discover' },
  secondaryCta: { label: 'Get tickets', href: '/tickets' },
  whatsNew: [
    {
      title: 'WILDerful Singaporeans',
      description: 'This National Day, get to know native animals at our interactive booths.',
      image: '/images/mandai/singapore-zoo.jpg',
    },
    {
      title: 'Destination Pass',
      description:
        'Enjoy multiple parks and attractions — the more you explore, the more you save.',
      href: '/tickets',
      image: '/images/mandai/rainforest.jpg',
    },
    {
      title: 'What’s wild in our public spaces',
      description: 'Discover nature beyond the park gates, across the Mandai destination.',
      image: '/images/mandai/stay.jpg',
    },
  ],
  pillars: [
    {
      title: 'Explore Wilder',
      description:
        'Discover 5 iconic wildlife parks and 2 indoor attractions, including Singapore Zoo, Night Safari, Exploria and more.',
      href: '/discover',
      image: '/images/mandai/singapore-zoo.jpg',
    },
    {
      title: 'Play Wilder',
      description:
        'Turn every nature-inspired playscape into moments of curiosity and shared discovery.',
      href: '/see-and-do',
      image: '/images/mandai/bird-paradise.jpg',
    },
    {
      title: 'Immerse Wilder',
      description:
        'Go beyond the ordinary with backstage tours, keeper talks and up-close wildlife encounters.',
      href: '/see-and-do',
      image: '/images/mandai/night-safari.jpg',
    },
    {
      title: 'Unwind Wilder',
      description:
        'Extend your time in nature with a stay at Mandai Rainforest Resort or Glamping in the Wild.',
      href: '/stay',
      image: '/images/mandai/stay.jpg',
    },
  ],
  experiences: [
    {
      title: 'Breakfast in the Wild at Singapore Zoo',
      description: 'Start the day among our wildlife residents.',
      href: '/see-and-do',
    },
    {
      title: 'Safari Adventure Tour at Night Safari',
      description: 'Explore the after-dark world of Mandai.',
      href: '/see-and-do',
    },
    {
      title: 'Backstage Pass: Manatee Mania at River Wonders',
      description: 'Go behind the scenes with our river residents.',
      href: '/see-and-do',
    },
    {
      title: 'Mandai Rainforest Resort',
      description: 'Wake up among the treetops.',
      href: '/stay',
    },
  ],
  itineraries: [
    {
      title: 'Epic Day Out: A Full Day of Wildlife Wonders',
      description: 'Experience the highlights across five wildlife attractions. Too wild to miss.',
      image: '/images/mandai/hero.jpg',
    },
    {
      title: 'Take flight to Bird Paradise',
      description:
        'Asia’s largest bird park — 3,500 birds across 400 species and eight walk-through aviaries.',
      image: '/images/mandai/bird-paradise.jpg',
    },
    {
      title: 'A river adventure at River Wonders',
      description:
        'Asia’s only river-themed park, home to one of the world’s largest freshwater collections.',
      image: '/images/mandai/river-wonders.jpg',
    },
  ],
  animals: [
    { title: 'Malayan Tigers', image: '/images/mandai/tiger.jpg' },
    { title: 'Asian Elephants', image: '/images/mandai/singapore-zoo.jpg' },
    { title: 'Tasmanian Devils', image: '/images/mandai/night-safari.jpg' },
  ],
  visitorGuide: [
    {
      title: 'Mandai Wildlife Reserve Map',
      description: 'Find every highlight across East and West Mandai.',
      href: '/plan-your-visit',
    },
    {
      title: 'Getting to & around',
      description: 'Mandai Khatib Bus, public transport, and easy hops between parks.',
      href: '/plan-your-visit',
    },
    {
      title: 'Maximise your visit',
      description: 'Ranger talks, animal sightings, and wayfinding in the Mandai App.',
      href: '/plan-your-visit',
    },
  ],
};

export const MANDAI_PAGES: Record<Exclude<MandaiStaticPath, '/'>, MandaiPageContent> = {
  '/discover': {
    path: '/discover',
    title: 'Discover Mandai',
    eyebrow: 'Parks & attractions',
    lede: 'Five iconic wildlife parks and two indoor attractions — Singapore Zoo, Night Safari, River Wonders, Bird Paradise, Rainforest Wild Adventure, Exploria and more.',
    heroImage: '/images/mandai/singapore-zoo.jpg',
    sections: [
      {
        heading: 'Wildlife parks & indoor attractions',
        cards: [
          {
            id: 'singapore-zoo',
            title: 'Singapore Zoo',
            description:
              'Award-winning open-concept habitats and close encounters with wildlife from around the world.',
            image: '/images/mandai/singapore-zoo.jpg',
          },
          {
            id: 'night-safari',
            title: 'Night Safari',
            description:
              'The world’s first nocturnal wildlife park — tram trails and walking paths after dark.',
            image: '/images/mandai/night-safari.jpg',
          },
          {
            id: 'river-wonders',
            title: 'River Wonders',
            description:
              'Asia’s only river-themed park, with one of the world’s largest collections of freshwater species.',
            image: '/images/mandai/river-wonders.jpg',
          },
          {
            id: 'bird-paradise',
            title: 'Bird Paradise',
            description:
              'Asia’s largest bird park: 3,500 birds, 400 species, and eight walk-through aviaries.',
            image: '/images/mandai/bird-paradise.jpg',
          },
          {
            id: 'rainforest-wild',
            title: 'Rainforest Wild Adventure',
            description:
              'An adventure through rainforest habitats, trails, and up-close wildlife moments.',
            image: '/images/mandai/rainforest.jpg',
          },
          {
            id: 'exploria',
            title: 'Exploria',
            description:
              'An indoor, nature-themed multimedia attraction that takes you into hidden realms of the natural world.',
            image: '/images/mandai/stay.jpg',
          },
        ],
      },
    ],
  },
  '/tickets': {
    path: '/tickets',
    title: 'Tickets & Passes',
    eyebrow: 'Plan and save',
    lede: 'The more you explore, the more you save — up to 60% off. Pick a 1-Day Pass for non-stop discovery, or a 5-Day Pass for leisurely exploration at your own pace.',
    heroImage: '/images/mandai/rainforest.jpg',
    sections: [
      {
        heading: 'Ways to visit',
        cards: [
          {
            title: 'Single attraction tickets',
            description:
              'Choose Singapore Zoo, Night Safari, River Wonders, Bird Paradise, and more.',
          },
          {
            title: 'Destination Pass',
            description:
              'Enjoy multiple parks and attractions with one pass across Mandai Wildlife Reserve.',
          },
          {
            title: 'Memberships',
            description:
              'Year-round escapades with exclusive discounts and perks for return visits.',
          },
        ],
      },
    ],
  },
  '/plan-your-visit': {
    path: '/plan-your-visit',
    title: 'Plan Your Visit',
    eyebrow: 'Visitor guide',
    lede: 'Getting to Mandai Wildlife Reserve has never been easier. Whether you are taking public transport, hopping on our shuttle buses, or driving, we have the routes covered.',
    heroImage: '/images/mandai/hero.jpg',
    sections: [
      {
        heading: 'Discover your wild',
        cards: [
          {
            title: 'Getting to & around',
            description:
              'Choose from the Mandai Khatib Bus and public transport. Hop between Mandai Wildlife EAST and WEST with ease.',
          },
          {
            title: 'Maps',
            description:
              'Our detailed map guides you to every corner of the attractions so you do not miss a highlight.',
          },
          {
            title: 'Mandai App',
            description:
              'Wayfinding, ranger-talk alerts, animal sightings, and insider tips to maximise your visit.',
          },
          {
            title: 'Know before you go',
            description:
              'What to wear, what to pack, and facilities for a seamless day among the wildlife.',
          },
        ],
      },
    ],
  },
  '/see-and-do': {
    path: '/see-and-do',
    title: 'See & Do',
    eyebrow: 'Experiences',
    lede: 'From dining with wildlife residents to waking up among the treetops, here are unique experiences you can have with us.',
    heroImage: '/images/mandai/night-safari.jpg',
    sections: [
      {
        heading: 'Mandai-exclusive experiences',
        cards: [
          {
            title: 'Breakfast in the Wild',
            description: 'A morning among the residents at Singapore Zoo.',
            image: '/images/mandai/singapore-zoo.jpg',
          },
          {
            title: 'Safari Adventure Tour',
            description: 'Guided exploration after dark at Night Safari.',
            image: '/images/mandai/night-safari.jpg',
          },
          {
            title: 'Backstage Pass: Manatee Mania',
            description: 'Go behind the scenes at River Wonders.',
            image: '/images/mandai/river-wonders.jpg',
          },
          {
            title: 'Wild Apex Adventure',
            description: 'An adrenaline trail through Rainforest Wild Adventure.',
            image: '/images/mandai/rainforest.jpg',
          },
        ],
      },
    ],
  },
  '/dine-and-shop': {
    path: '/dine-and-shop',
    title: 'Dine & Shop',
    eyebrow: 'A wilder way to eat and shop',
    lede: 'Explore dining and shopping across the Mandai Wildlife Reserve — from local classics to international menus, and Mandai-exclusive collections to take home.',
    heroImage: '/images/mandai/bird-paradise.jpg',
    sections: [
      {
        heading: 'Eat, shop, linger',
        cards: [
          {
            title: 'Dine',
            description:
              'Savour dining in and around the attractions, from local classics to international cuisines and child-friendly options.',
            image: '/images/mandai/singapore-zoo.jpg',
          },
          {
            title: 'Shop',
            description:
              'Mandai-exclusive collections and a piece of the wild to take home — in park or online.',
            image: '/images/mandai/bird-paradise.jpg',
          },
          {
            title: 'Cavern Restaurant',
            description: 'A signature dining moment at Rainforest Wild Adventure WEST.',
            image: '/images/mandai/rainforest.jpg',
          },
        ],
      },
    ],
  },
  '/stay': {
    path: '/stay',
    title: 'Stay',
    eyebrow: 'Unwind wilder',
    lede: 'Extend your time in nature with a stay at Mandai Rainforest Resort or a Glamping in the Wild experience.',
    heroImage: '/images/mandai/stay.jpg',
    sections: [
      {
        heading: 'Sleep in the wild',
        cards: [
          {
            title: 'Mandai Rainforest Resort',
            description: 'Wake up among the treetops at Singapore’s wildlife destination.',
            image: '/images/mandai/stay.jpg',
          },
          {
            title: 'Glamping in the Wild',
            description: 'A night under the canopy, steps from the parks.',
            image: '/images/mandai/rainforest.jpg',
          },
        ],
      },
    ],
  },
  '/about': {
    path: '/about',
    title: 'About Mandai',
    eyebrow: 'Care for planet',
    lede: 'Every visit to our destination comes with a commitment to wildlife and the planet. Together we are creating a better future for the animals in our care.',
    heroImage: '/images/mandai/tiger.jpg',
    sections: [
      {
        heading: 'Mandai Wildlife Group',
        cards: [
          {
            title: 'Animal welfare',
            description: 'World-leading care for the animals who call Mandai home.',
          },
          {
            title: 'Conservation included',
            description: 'Your visit supports conservation programmes in Singapore and the region.',
          },
          {
            title: 'Sustainable operations',
            description: 'How we run a wildlife destination with the planet in mind.',
          },
        ],
      },
    ],
  },
};
