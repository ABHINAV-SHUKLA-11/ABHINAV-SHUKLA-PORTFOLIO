export const portfolioData = {
  name: 'Abhinav Shukla',
  firstName: 'Abhinav',
  location: 'Kanpur, IN',
  availability: 'Available 2026',
  title: 'Data Science Engineer & AI/ML Developer',
  portrait: 'https://charm-canvas-collection.vercel.app/assets/abhinav-DeOAYDF-.jpg',
  email: 'abhinavshukla76117@gmail.com',
  github: 'https://github.com/abhinavshukla76117',
  linkedin: 'https://linkedin.com/in/abhinav-shukla-785b6830a',
  fullLocation: 'Kanpur, Uttar Pradesh — India',

  marquee: ['Python', 'TensorFlow', 'Gemini AI', 'Google Cloud Run', 'MongoDB', 'LLM Agents', 'FastAPI', 'Computer Vision', 'Prompt Engineering'],

  featured: {
    year: '2026',
    org: 'ISRO',
    tag: 'Featured Achievement',
    title: 'Selected for Bharatiya Antariksh Hackathon 2026 — Pre-Final Round.',
    description: 'Chosen among the **Top 15 out of 900+ teams** nationwide, in a hackathon conducted by the **Indian Space Research Organisation (ISRO)**.'
  },

  about: {
    number: '01',
    label: 'About',
    text: 'A Data Science undergrad at **Maharana Pratap Engineering College**, shipping **AI systems that live on the public internet** — not just notebooks.',
    stats: [
      { value: '2+', label: 'Production AI systems shipped' },
      { value: '46+', label: 'LeetCode DSA problems' },
      { value: '37+', label: 'HackerRank challenges' }
    ]
  },

  projects: [
    {
      title: 'Stadium Sathi',
      tag: 'AI Agent',
      year: '2025',
      description: 'AI agent for managing World Cup stadium operations. Uses the stadium blueprint to guide visitors, optimize crowd flow, and assist staff — built as an intelligent event-management assistant.',
      bullets: [
        'Selected for Amazon Summer School 2025 — First Round.',
        'Blueprint-aware AI agent for stadium navigation and operations.',
        'Not selected in the Second Round of Amazon Summer School.'
      ],
      stack: ['Python', 'AI Agent', 'LLM', 'Blueprint Mapping', 'Flask'],
      links: [{ label: 'Source', href: 'https://github.com/ABHINAV-SHUKLA-11' }]
    },
    {
      title: 'Retail AI Agent',
      tag: 'Live',
      year: '2026',
      description: 'Full-stack AI agent for retail management, deployed to Google Cloud Run. Gemini-powered natural language interface for inventory, orders, billing, and revenue reporting backed by MongoDB.',
      bullets: [
        'Submitted to Google Cloud Rapid Agent Hackathon 2026 — MongoDB partner track.',
        'Natural-language queries: low stock alerts, revenue reports, billing.',
        'Automated dashboards for real-time inventory and orders.'
      ],
      stack: ['Python', 'Flask', 'MongoDB', 'Google Cloud Run', 'Gemini AI'],
      links: [
        { label: 'Live', href: 'https://google-rapid-agent-retail-44551099700.europe-west1.run.app/ui' },
        { label: 'Source', href: 'https://github.com/ABHINAV-SHUKLA-11/GOOGLE-RAPID-AGENT-RETAIL' }
      ]
    },
    {
      title: 'Bus Tracking Application',
      tag: 'ML',
      year: '2025',
      description: 'ML-based bus tracking system for route prediction and real-time arrival time estimation, with a live-location pipeline and automated user notifications.',
      bullets: [
        'Route prediction models trained on live GPS streams.',
        'Notification pipeline for arrival updates.'
      ],
      stack: ['Python', 'Machine Learning'],
      links: []
    }
  ],

  experience: [
    {
      company: 'CodexIntern',
      period: 'Sep — Oct 2025',
      location: 'Remote',
      role: 'Python Development Intern',
      bullets: [
        'Built Python automation scripts and backend modules for real-world applications.',
        'Developed data processing pipelines and RESTful API integrations.',
        'Debugged and improved existing codebase under senior developer mentorship.'
      ]
    },
    {
      company: 'LetsUpgrade',
      period: 'Sep — Dec 2025',
      location: 'Kanpur',
      role: 'Student Ambassador',
      bullets: [
        'Promoted tech learning programs and organized peer learning sessions.',
        'Coordinated workshops and drove student engagement for upskilling.'
      ]
    },
    {
      company: 'International MUN',
      period: 'Aug — Dec 2025',
      location: '',
      role: 'Student Ambassador',
      bullets: [
        'Represented and promoted Model UN events at college level.',
        'Developed leadership and communication through international participation.'
      ]
    }
  ],

  toolkit: [
    { group: 'Languages', items: ['Python', 'SQL', 'C++'] },
    { group: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'AI Agents', 'Prompt Engineering'] },
    { group: 'Frameworks', items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'FastAPI'] },
    { group: 'Cloud & DB', items: ['Google Cloud Run', 'MongoDB', 'REST APIs'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab'] }
  ],

  certifications: [
    'Microsoft SQL Certification — Intellipaat (2025)',
    'AI For All — AI Appreciate 2025 — Intel',
    'Level Up Cybersecurity with Generative AI — IBM SkillsBuild',
    'Power Job Simulation — Deloitte',
    'Cybersecurity Analyst Job Simulation — Forage',
    'Advanced C++ — Learn SkillUP',
    'AI for Beginners — HP LIFE',
    'Industry Essentials — DataCentry'
  ]
};
