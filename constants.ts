import { Service, CaseStudy, ProcessStep, TechItem } from './types';

export const HERO_DATA = {
  name: "SHAKIB",
  title: "AI Automation Specialist",
  tagline: "I turn operational chaos into scalable systems.",
  intro: "Your team is drowning in repetitive work. Calls go unanswered. Leads slip through cracks. I build AI systems that eliminate these bottlenecks—so your business can scale without hiring more people.",
  differentiation: "I don't just build automations. I build systems that actually work. Not flashy demos—real systems that run 24/7, handle thousands of tasks, and pay for themselves within weeks."
};

export const SERVICES: Service[] = [
  {
    id: 'voice-ai',
    title: 'Voice AI Agents',
    description: '24/7 call handling, appointment booking, and intelligent lead qualification without human intervention.',
    iconName: 'Mic'
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description: 'Connect your disparate tools and eliminate manual data entry to create a unified operational flow.',
    iconName: 'Workflow'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Systems',
    description: 'Automated inventory management, order processing, and customer support for high-volume stores.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'lead-gen',
    title: 'Content & Lead Gen',
    description: 'Automated content posting, precise lead scraping, and systematic outreach pipelines.',
    iconName: 'Users'
  },
  {
    id: 'audit',
    title: 'Process Audits',
    description: 'Deep dive analysis to identify bottlenecks, design optimal solutions, and implement fixes.',
    iconName: 'Search'
  }
];

export const TECH_STACK: TechItem[] = [
  {
    category: "Core Tools",
    tools: ["n8n", "LangChain", "RAG", "OpenAI API", "Anthropic API"]
  },
  {
    category: "Voice & Comm",
    tools: ["ElevenLabs", "Twilio", "WhatsApp API", "Speech-to-Text"]
  },
  {
    category: "Data & Workflow",
    tools: ["Airtable", "Notion", "Google Apps Script", "Web Scraping"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: "Audit", description: "I map your current workflow and find the bottlenecks." },
  { id: 2, title: "Design", description: "I build a system blueprint focused on ROI and reliability." },
  { id: 3, title: "Build", description: "I develop, test, and refine until it works perfectly." },
  { id: 4, title: "Deploy", description: "I launch with monitoring and comprehensive documentation." },
  { id: 5, title: "Support", description: "I maintain and optimize based on real-world performance." }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dental',
    title: 'Voice AI for Dental Clinic',
    emoji: '🦷',
    challenge: 'Missing 40% of calls during business hours. Lost revenue, frustrated patients.',
    solution: 'Built 24/7 Voice AI that answers questions, books appointments, and routes urgent cases to staff.',
    results: [
      'Zero missed calls',
      '20-30 new patients/month from after-hours',
      '25-35 hours saved per week',
      'ROI recovered in 3 weeks'
    ]
  },
  {
    id: 'real-estate',
    title: 'AI Receptionist for Real Estate',
    emoji: '🏠',
    challenge: 'Leads waiting hours for responses. Agents buried in repetitive questions.',
    solution: 'Instant-response AI that answers FAQs, qualifies leads, and routes hot prospects to agents.',
    results: [
      'Response time: 4 hours → 30 seconds',
      '~30 hours saved weekly',
      'Agents focus on closing',
      '40% increase in qualified leads'
    ]
  },
  {
    id: 'shopify',
    title: 'Shopify Automation',
    emoji: '🛍️',
    challenge: 'Manual product updates across 200+ SKUs. Constant inventory confusion.',
    solution: 'WhatsApp-controlled AI that updates products, checks inventory, and manages store.',
    results: [
      'Product updates: 2 hours → 2 minutes',
      'Real-time stock alerts',
      'Remote store management'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Automation',
    emoji: '📱',
    challenge: 'Inconsistent posting killing engagement. Team had no time for content.',
    solution: 'AI system that generates posts, creates graphics, schedules content—fully automatic.',
    results: [
      'Posted 5x per week (up from 1-2x)',
      'Engagement up 60%',
      'Zero manual work required'
    ]
  },
  {
    id: 'invoice',
    title: 'Invoice Automation',
    emoji: '📄',
    challenge: '20-40 hours/week spent on invoice processing. Errors causing payment delays.',
    solution: 'Automated extraction, validation, and sending system with error detection.',
    results: [
      '20-40 hours saved weekly',
      '95% reduction in errors',
      'Faster payment cycles'
    ]
  },
  {
    id: 'email',
    title: 'Email AI Manager',
    emoji: '📧',
    challenge: '300+ daily emails. Important messages buried. Constant overwhelm.',
    solution: 'AI that sorts, summarizes, flags urgency, and drafts responses.',
    results: [
      '20+ hours saved per week',
      'Zero missed critical emails',
      'Inbox Zero achieved'
    ]
  },
  {
    id: 'maps',
    title: 'Google Maps Lead Scraper',
    emoji: '🗺️',
    challenge: 'Manual lead sourcing taking days. Outdated contact info.',
    solution: 'Automated scraper with enrichment, validation, and clean export.',
    results: [
      '500+ leads/day (vs. 20-30 manually)',
      'Verified contact info',
      'Consistent pipeline'
    ]
  }
];
