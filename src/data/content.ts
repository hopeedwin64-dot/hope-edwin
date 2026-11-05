export interface ServiceItem {
  id: string;
  letter: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  category: 'setup' | 'classroom' | 'management' | 'growth';
}

export interface PortfolioItem {
  id: string;
  title: string;
  categoryTag: 'Concept Design' | 'Personal Design Project';
  sectionType: 'setup' | 'classroom' | 'landing' | 'onboarding';
  shortDescription: string;
  fullDescription: string;
  image: string;
  keyFeatures: string[];
  accentColor?: string;
  isFullLandingPage?: boolean;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export const SITE_METADATA = {
  name: 'Patricia Slyvia',
  title: 'Skool Community Setup, Management & Growth Expert',
  tagline: 'Helping business owners build, organize, and grow better Skool communities.',
  profilePhoto: '/assets/aistudio/424936_a94214e4.png',
  email: 'patricia.slyvia@example.com', // Placeholder easily customizable
  phone: '+1 (555) 234-5678',
  location: 'Available Worldwide · Remote Consultant',
  socialLinks: {
    skool: 'https://www.skool.com/@patriciaslyvia',
    linkedin: 'https://www.linkedin.com/in/patricia-slyvia',
    x: 'https://twitter.com/patriciaslyvia',
    youtube: 'https://youtube.com/@patriciaslyvia',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'community-setup',
    letter: 'A',
    title: 'Skool Community Setup',
    shortDesc: 'Complete foundational setup, custom branding, and structured channel architecture for a professional launch.',
    fullDesc: 'From initial configuration to visual presentation, I set up your community correctly so it reflects your brand standards and provides a welcoming atmosphere from day one.',
    deliverables: [
      'Complete Skool community creation and setup',
      'Community settings and customization',
      'Community branding and presentation',
      'Organization of community spaces & discussion categories',
      'Professional community structure & navigation hierarchy',
    ],
    category: 'setup',
  },
  {
    id: 'classroom-setup',
    letter: 'B',
    title: 'Skool Classroom Setup',
    shortDesc: 'Intuitive classroom structure, syllabus categorization, and logical learning progression for your students.',
    fullDesc: 'I configure your classroom so students never feel lost. Clean module sequences, categorized study tracks, and easy-to-find coursework make learning effortless.',
    deliverables: [
      'Classroom creation and configuration',
      'Course categories and module organization',
      'Lesson structure and organization',
      'Learning resource arrangement',
      'Easy-to-navigate classroom setup',
    ],
    category: 'classroom',
  },
  {
    id: 'course-uploading',
    letter: 'C',
    title: 'Course Uploading & Organization',
    shortDesc: 'Meticulous lesson video uploads, downloadable resource attachments, and clear student study materials.',
    fullDesc: 'Save hours of administrative work. I handle lesson uploads, file attachments, formatted lesson notes, and PDF worksheets with strict quality control.',
    deliverables: [
      'Uploading course videos and lessons',
      'Organizing course modules & sequencing',
      'Uploading PDFs, worksheets, and learning materials',
      'Structuring course content for high completion rates',
      'Creating a smooth learning experience for members',
    ],
    category: 'classroom',
  },
  {
    id: 'community-management',
    letter: 'D',
    title: 'Skool Community Management',
    shortDesc: 'Daily moderation, discussion stimulation, announcements, and maintaining an active, warm environment.',
    fullDesc: 'A community thrives when someone is actively nurturing conversations. I monitor discussions, highlight key takeaways, and ensure your members feel supported.',
    deliverables: [
      'Community organization and maintenance',
      'Managing discussions and community content',
      'Supporting member engagement & conversation starters',
      'Organizing announcements and weekly updates',
      'Helping maintain a welcoming and active community environment',
    ],
    category: 'management',
  },
  {
    id: 'membership-onboarding',
    letter: 'E',
    title: 'Membership Setup & Member Onboarding',
    shortDesc: 'Streamlined orientation paths, welcome sequences, and clear member instructions to prevent drop-off.',
    fullDesc: 'The first 48 hours dictate member retention. I establish an unmistakable onboarding workflow that shows new members exactly where to start and what to do first.',
    deliverables: [
      'Membership structure and access configuration',
      'Supported membership pricing and payment settings',
      'Welcome messages and onboarding instructions',
      'New-member orientation checklist and start guide',
      'Helping members understand where to start and how to navigate',
    ],
    category: 'setup',
  },
  {
    id: 'payment-configuration',
    letter: 'F',
    title: 'Skool Payment Configuration',
    shortDesc: 'Clear assistance configuring native Skool membership pricing, tiers, and transparent checkout presentations.',
    fullDesc: 'I assist you in configuring your paid community access using Skool’s officially supported pricing parameters, ensuring clear terms and frictionless access for subscribers.',
    deliverables: [
      'Assistance configuring Skool’s supported membership pricing & payment settings',
      'Membership access tiers and pricing configuration',
      'Reviewing the member checkout & access grant experience',
      'Helping ensure membership setup is clearly presented',
      'Strict adherence to native supported platform settings',
    ],
    category: 'setup',
  },
  {
    id: 'landing-page-design',
    letter: 'G',
    title: 'Custom Landing Page Design',
    shortDesc: 'Compelling community "About" pages and external landing copy designed to turn visitors into active members.',
    fullDesc: 'Your community’s front door should immediately communicate value. I write and structure persuasive landing presentations that outline benefits, syllabus, and member perks.',
    deliverables: [
      'Professional community landing pages & about page copy',
      'Clear service and offer presentation',
      'Attractive page layouts tailored to your target audience',
      'Strong calls to action and registration pathways',
      'Landing pages designed to encourage visitors to join or enquire',
    ],
    category: 'growth',
  },
  {
    id: 'growth-support',
    letter: 'H',
    title: 'Community Growth Support',
    shortDesc: 'Practical retention strategies, gamification structuring, and member experience optimization.',
    fullDesc: 'Building sustainable growth requires consistent member satisfaction. I provide actionable recommendations to optimize member journeys and increase active participation.',
    deliverables: [
      'Improving community presentation and visual hierarchy',
      'Organizing the member experience for higher retention',
      'Improving the new-member journey and milestone tracking',
      'Helping community owners communicate their value clearly',
      'Practical recommendations for attracting and retaining members',
    ],
    category: 'growth',
  },
];

export const WHY_CHOOSE_ME = [
  {
    title: 'Complete Skool Community Support',
    description: 'From blank workspace setup to classroom course population and ongoing member support, every detail is managed end-to-end.',
  },
  {
    title: 'One Professional for Multiple Needs',
    description: 'No need to hire separate copywriters, tech assistants, and moderators. You work directly with one dedicated specialist.',
  },
  {
    title: 'Organized & User-Friendly Structures',
    description: 'Thoughtfully planned spaces, pinned guides, and clear naming conventions ensure members easily find whatever they need.',
  },
  {
    title: 'Clear & Professional Classroom Presentation',
    description: 'Well-structured lessons, clean module thumbnails, and organized supplementary downloads create an exceptional learning flow.',
  },
  {
    title: 'Better Member Onboarding Experiences',
    description: 'Actionable orientation steps ensure new signups immediately introduce themselves, dive into the material, and stay engaged.',
  },
  {
    title: 'Meticulous Attention to Detail',
    description: 'From formatting lesson summaries to checking permission gates and links, nothing slips through the cracks.',
  },
  {
    title: 'Practical, Client-Focused Solutions',
    description: 'Customized configurations designed around your specific business model, coaching framework, or educational goals.',
  },
  {
    title: 'Reliable Communication & Quality',
    description: 'Clear project milestones, transparent updates, and a steadfast commitment to delivering work you are proud to show your members.',
  },
];

export const SETUP_SHOWCASES = [
  {
    id: 'setup-jazz',
    title: 'Live Skool Community Setup: Jazz Guitar Academy',
    badge: 'Live Community Architecture',
    image: '/assets/aistudio/Jazz_Guitar_Academy_Dashboard_5bcd82a4.png',
    description: 'Complete community build with custom branding, discussion channels (Lessons, Backing Tracks, Jam Sessions), pinned orientation video, leaderboard gamification, and classroom courses.',
    highlights: [
      'Custom header banner and brand lockup',
      'Categorized discussion spaces (Backing Tracks, Practice Tips)',
      'Pinned welcome video and member guidelines',
      'Classroom course preview with progress tracking',
      'Right-rail community metrics & member leaderboard',
    ],
  },
  {
    id: 'setup-suite',
    title: 'Skool Platform Suite: Complete 5-in-1 Setup Architecture',
    badge: 'Multi-Space Platform Suite',
    image: '/assets/aistudio/Skool_Platform_Suite_Showcase_0068a5be.png',
    description: 'An all-in-one breakdown demonstrating course uploading, custom landing pages, community feed organization, classroom lesson players, and new-member onboarding checklists.',
    highlights: [
      'Course Upload & Organization: modules & progress bars',
      'Custom Landing Page Design: desktop & mobile responsive',
      'Community Setup & Organization: feed, spaces & rules',
      'Professional Classroom Setup: video players & lesson notes',
      'Member Onboarding & Management: step-by-step checklists',
    ],
  },
];

export const PORTFOLIO_CONCEPTS: PortfolioItem[] = [
  {
    id: 'concept-1',
    title: 'Jazz Guitar Academy – Skool Community Setup',
    categoryTag: 'Personal Design Project',
    sectionType: 'setup',
    shortDescription: 'Comprehensive Skool community setup with branded banner, custom categories, welcome video, and classroom tracks.',
    fullDescription: 'A premier example of a well-organized Skool community for Jazz Guitar Academy. Features branded banner art, structured discussion channels (Lessons, Backing Tracks, Practice Tips, Jam Sessions), pinned welcome video, direct classroom integration, and member leaderboard gamification.',
    image: '/assets/aistudio/Jazz_Guitar_Academy_Dashboard_5bcd82a4.png',
    keyFeatures: [
      'Branded custom banner and cohesive visual hierarchy',
      '5 categorized discussion spaces: Lessons, Backing Tracks, Jam Sessions',
      'Pinned welcome orientation video and community guidelines',
      'Classroom course tracks (Basics, Progressions, Improvisation, Styles)',
      'Community leaderboard gamification (1.2K members active)',
    ],
  },
  {
    id: 'concept-setup-suite',
    title: 'Skool Platform Suite – Complete Setup Architecture',
    categoryTag: 'Personal Design Project',
    sectionType: 'setup',
    shortDescription: 'All-in-one setup architecture: Course Uploading, Custom Landing Page, Community Feed, Classroom, and Onboarding.',
    fullDescription: 'An end-to-end visual breakdown illustrating the complete Skool ecosystem: Course Upload & Organization, Custom Landing Page Design, Community Setup & Organization, Professional Classroom Setup, and Member Onboarding & Management.',
    image: '/assets/aistudio/Skool_Platform_Suite_Showcase_0068a5be.png',
    keyFeatures: [
      'Comprehensive 5-in-1 modular platform architecture',
      'Course upload sequencing & progress completion meters',
      'Matching desktop and mobile custom landing page designs',
      'New member orientation flow and activation checklists',
    ],
  },
  {
    id: 'concept-2',
    title: 'Online Course Classroom Organization',
    categoryTag: 'Concept Design',
    sectionType: 'classroom',
    shortDescription: 'Multi-tiered classroom layout featuring structured modules, clear progress tracking, and easy-access resource tabs.',
    fullDescription: 'A clean, intuitive classroom architecture concept designed for educational programs. Modules are organized sequentially with progress meters, concise lesson headings, and embedded video containers.',
    image: '/src/assets/images/concept_community_classroom_1793892764345.jpg',
    keyFeatures: [
      'Sequential module numbering and sub-topic breakdown',
      'Integrated video lesson views with clean typography',
      'Direct-download resource attachments (PDFs & sheets)',
      'Built-in lesson notes and action checklists',
    ],
  },
  {
    id: 'concept-landing-ai',
    title: 'AI Learning Academy – Community Landing Page',
    categoryTag: 'Personal Design Project',
    sectionType: 'landing',
    isFullLandingPage: true,
    shortDescription: 'High-converting EdTech community landing page featuring learning paths, benefits, and streamlined enrollment.',
    fullDescription: 'A custom landing page design for an AI Learning Academy community. Built with strong visual storytelling: clear value proposition, course track explorer, interactive why-join section, and high-impact calls to action.',
    image: '/assets/aistudio/AI_Learning_Academy_Homepage_50a9f7ce.png',
    keyFeatures: [
      'Persuasive hero with clear value proposition and intro video trigger',
      'Interactive 4-path course explorer (Fundamentals, Creators, Business, Tools)',
      'Strategic social proof and community benefits architecture',
      'High-contrast enroll CTAs and cohesive navy & electric blue styling',
    ],
  },
  {
    id: 'concept-landing-pet',
    title: 'My Pet and I – Pet Lovers Community Landing Page',
    categoryTag: 'Personal Design Project',
    sectionType: 'landing',
    isFullLandingPage: true,
    shortDescription: 'Engaging, warm community homepage with course catalog previews, care resources, and member perks.',
    fullDescription: 'A complete landing page design concept for a thriving pet parent community. Highlights expert pet care tips, supportive forums, educational courses, and a warm, trustworthy community atmosphere.',
    image: '/assets/aistudio/My_Pet_and_I_Pet_Community_Homepage_6fae675f.png',
    keyFeatures: [
      'Warm and welcoming emotional appeal tailored to pet owners',
      'Curriculum showcase featuring basic care, nutrition, and training guides',
      'Community discussion pillars and resource access breakdown',
      'High-engagement membership enrollment section',
    ],
  },
  {
    id: 'concept-landing-art',
    title: 'Hossanah Art – Creative Community Landing Page',
    categoryTag: 'Personal Design Project',
    sectionType: 'landing',
    isFullLandingPage: true,
    shortDescription: 'Artistic community homepage showcasing step-by-step tutorial tracks, gallery showcase, and member perks.',
    fullDescription: 'A creative monograph-inspired community landing page designed for artists and painters. Combines elegant editorial typography with step-by-step tutorial previews, community galleries, and clear enrollment paths.',
    image: '/assets/aistudio/Hossanah_Art_Creative_Community_Homepage_b6ca15bd.png',
    keyFeatures: [
      'Visual-first hero highlighting artistic workshops and masterclasses',
      '4 core community pillars: Techniques, Art Sharing, Expert Advice, Community',
      'Preview of beginner to advanced step-by-step art modules',
      'Warm watercolor brush aesthetic aligned with artist sensibilities',
    ],
  },
  {
    id: 'concept-landing-health',
    title: 'Your Health & Finances – Wellness Community Landing Page',
    categoryTag: 'Personal Design Project',
    sectionType: 'landing',
    isFullLandingPage: true,
    shortDescription: 'Clean, modern dual-pillar landing presentation balancing wellness guidance with financial education.',
    fullDescription: 'A high-trust landing page designed for adults pursuing balanced living. Features structured resource hubs for Healthy Living, Smart Money Tips, Financial Planning, and Stress Management.',
    image: '/assets/aistudio/Your_Health__Finances__and_Wellness_Journey_6f9b618b.png',
    keyFeatures: [
      'Dual-pillar structure: Health & Financial wellness in harmonious synergy',
      'Categorized resource hub cards with direct exploration pathways',
      'Actionable "Why Join Our Community" value checklist',
      'Inspiring "Take the First Step" conversion container',
    ],
  },
  {
    id: 'concept-3',
    title: 'Course Module & Lesson Layout',
    categoryTag: 'Personal Design Project',
    sectionType: 'classroom',
    shortDescription: 'Micro-learning lesson layout with video embeds, action item checklists, and downloadable templates.',
    fullDescription: 'A detailed design concept focusing on high completion rates. Each lesson combines a video player with formatted transcript notes, a 3-point action checklist, and downloadable exercises.',
    image: '/src/assets/images/hero_skool_workspace_1793892762090.jpg',
    keyFeatures: [
      'Action-oriented lesson structure to drive student results',
      'Uniform module thumbnails and visual hierarchy',
      'Embedded supplementary links and cheat sheets',
      'Optimized for mobile and desktop learners',
    ],
  },
  {
    id: 'concept-4',
    title: 'Community Welcome & Member Onboarding',
    categoryTag: 'Concept Design',
    sectionType: 'onboarding',
    shortDescription: 'Interactive 4-step onboarding sequence designed to activate new members within their first 24 hours.',
    fullDescription: 'A dedicated welcome framework guiding new subscribers through profile completion, self-introductions, touring the classroom, and finding their first milestone.',
    image: '/src/assets/images/concept_onboarding_welcome_1793892764379.jpg',
    keyFeatures: [
      'Step-by-step orientation checklist',
      'Automated welcome greeting and instructions',
      'Community ground rules and code of conduct',
      'Quick-start guide directing to core classroom modules',
    ],
  },
  {
    id: 'concept-6',
    title: 'Membership Presentation & Community Branding',
    categoryTag: 'Concept Design',
    sectionType: 'setup',
    shortDescription: 'Cohesive visual identity system across community banners, icon marks, course thumbnails, and tier cards.',
    fullDescription: 'A unified branding concept showcasing how typography, color harmony, and thumbnail graphics give a Skool community a premium, trustworthy look that justifies premium membership fees.',
    image: '/src/assets/images/concept_community_classroom_1793892764345.jpg',
    keyFeatures: [
      'Custom header banners and square community avatars',
      'Color-coded module and thumbnail system',
      'Branded resource PDF covers and worksheets',
      'Consistent visual language throughout the entire platform',
    ],
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: 'Step 1',
    number: '01',
    title: 'Discovery',
    description: 'We discuss your business, community goals, current setup, and what you need help with.',
    deliverable: 'Initial consultation, requirement analysis & project scope confirmation.',
  },
  {
    step: 'Step 2',
    number: '02',
    title: 'Planning',
    description: 'I organize the project requirements and create a clear setup or improvement plan.',
    deliverable: 'Custom roadmap, channel map, syllabus structure & milestone timeline.',
  },
  {
    step: 'Step 3',
    number: '03',
    title: 'Setup & Implementation',
    description: 'I work on your Skool community, classroom, courses, membership settings, landing page, or management requirements.',
    deliverable: 'Hands-on configuration, asset uploads, lesson styling & platform polish.',
  },
  {
    step: 'Step 4',
    number: '04',
    title: 'Review & Refinement',
    description: 'We review the work together and make agreed adjustments to ensure everything is perfect.',
    deliverable: 'Collaborative walkthrough, link checks & refinement iterations.',
  },
  {
    step: 'Step 5',
    number: '05',
    title: 'Handover & Support',
    description: 'I provide the agreed handover, guidance, or ongoing management support.',
    deliverable: 'Admin guidelines walkthrough, launch checklist or ongoing retainer support.',
  },
];

export const SERVICE_OPTIONS = [
  'Skool Community Setup',
  'Classroom Setup',
  'Course Uploading',
  'Community Management',
  'Membership Setup & Onboarding',
  'Payment Configuration',
  'Landing Page Design',
  'Community Growth Support',
  'Multiple Services',
  'Other',
];
