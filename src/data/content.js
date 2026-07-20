// All portfolio content lives here. Edit this file to update the site —
// nothing else needs to change.

export const profile = {
  name: 'Suhas Pai',
  title: 'Software Engineer 1 — Java Backend Developer',
  location: 'Pune, India',
  email: 'suhaspai412@gmail.com',
  phone: '+91 89713 17600',
  github: 'https://github.com/SuhasP2002',
  githubUsername: 'SuhasP2002',
  linkedin: 'https://www.linkedin.com/in/suhas-pai-29j02/',
  website: 'https://sage-kitten-0c60b9.netlify.app/',
  summary:
    "Java Backend Developer with 2+ years of experience designing and developing scalable enterprise and SaaS applications using Java, Spring Boot, Microservices, and REST APIs. Experienced in building secure backend systems with Spring Security, JWT Authentication, Spring Data JPA, Hibernate, PostgreSQL, Redis, and Docker. Hands-on with GitHub Actions, Spring AI, and Groq LLM to ship production-ready applications following clean architecture and Agile methodologies."
}

// Small headline metrics shown in the hero strip. Keep these truthful and
// update them as your experience/output grows.
export const heroStats = [
  { label: 'years experience', value: 2 },
  { label: 'production APIs shipped', value: 30, suffix: '+' },
  { label: 'shipped projects', value: 3 },
  { label: 'unit test coverage', value: 90, suffix: '%' }
]

// Personal writing project — shown in the "Writing" section.
export const writing = {
  name: 'Ink & Soul',
  url: 'https://cuddly-ink-soul-scribe.base44.app/',
  tagline: 'A refined space for heartfelt stories, poetic shayris, and quiet reflections on life and love.'
}

export const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Microservices', 'Spring AI'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub Actions', 'Maven', 'Postman'] },
  { category: 'Testing', items: ['JUnit', 'Mockito'] },
  { category: 'API & Architecture', items: ['REST APIs', 'JWT Authentication', 'OAuth2', 'OpenAPI', 'Swagger', 'Design Patterns'] }
]

export const experience = [
  {
    role: 'Software Engineer',
    type: 'Full-time',
    company: 'Lenze',
    location: 'Hybrid • Pune',
    period: 'Jun 2024 — Jul 2026',
    status: '200 OK',
    highlights: [
      'Designed and developed 5+ enterprise application modules using Java, Spring Boot, Spring MVC, and React.js for industrial automation solutions.',
      'Built 15+ secure REST APIs using Spring Security, Spring Data JPA, Hibernate, and PostgreSQL, enabling reliable communication between enterprise applications.',
      'Developed modular backend services following microservice architecture, improving maintainability and code reuse across multiple enterprise projects.',
      'Implemented AI-assisted validation workflows using Spring AI, reducing manual verification effort by 30%.',
      'Built Excel (.xlsx) to JSON transformation utilities, cutting manual data-entry effort by 10%.',
      'Refactored legacy modules and achieved 90% unit test coverage using JUnit and Mockito.'
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Microservices', 'PostgreSQL', 'React.js', 'JUnit']
  },
  {
    role: 'Software Engineer Intern',
    type: 'Internship',
    company: 'Lenze',
    location: 'Pune',
    period: 'Mar 2024 — Jun 2024',
    status: '201 Created',
    highlights: [
      'Contributed to EASY Starter using Java, Spring Boot, Spring MVC, and React.js, improving startup performance by 15%.',
      'Debugged and refactored existing modules, reducing average page load time by 20%.',
      'Developed and maintained unit tests with JUnit and Mockito, reducing regression issues.',
      'Collaborated in Agile sprints, participated in code reviews, and integrated REST APIs across modules.'
    ],
    stack: ['Java', 'Spring Boot', 'Spring MVC', 'React.js', 'JUnit', 'Mockito', 'Maven', 'Git']
  }
]

export const projects = [
  {
    name: 'ePai — AI-Powered Full-Stack E-Commerce Platform',
    method: 'POST',
    endpoint: '/ecommerce',
    status: '201 Created',
    mockup: 'ecommerce',
    accent: '#F2A93B',
    description:
      'Production-ready full-stack e-commerce app with 20+ secured REST APIs (JWT) covering product, cart, wishlist, order, review and user management. Layered Controller–Service–Repository architecture, payment integration, image uploads, search and inventory management.',
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React.js', 'Vite', 'Tailwind CSS', 'Docker', 'GitHub Actions'],
    infra: 'DB on Neon PostgreSQL, frontend on Vercel, backend on Render, UptimeRobot keeps the free-tier backend warm.',
    github: 'https://github.com/SuhasP2002/ePai',
    demo: 'https://e-pai.vercel.app/'
  },
  {
    name: 'WanderAI — AI Travel Planner SaaS',
    method: 'POST',
    endpoint: '/wanderai',
    status: '200 OK',
    mockup: 'travel',
    accent: '#56E8CE',
    description:
      'AI-powered travel planner SaaS generating itineraries with Spring AI + Groq LLM. Includes Razorpay payments, responsive dashboards, role-based access control and 15+ secured RESTful APIs.',
    stack: ['Java 21', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'React.js', 'Docker', 'GitHub Actions', 'Groq LLM'],
    infra: 'Razorpay integrated with webhook verification + idempotency for reliable payments. Containerized and deployed via CI/CD.',
    github: 'https://github.com/SuhasP2002/wanderai',
    demo: null
  },
  {
    name: 'HealthTrack — Full-Stack Wellness Platform',
    method: 'GET',
    endpoint: '/healthtrack',
    status: '200 OK',
    mockup: 'health',
    accent: '#A78BFA',
    description:
      'Full-stack wellness platform with habit tracking, analytics dashboards and progress visualization. 15+ secured REST APIs, JWT auth, and password reset flows.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React.js', 'Docker', 'GitHub Actions', 'Chart.js'],
    infra: 'Docker Compose for local + prod parity; resolved JPA relationship, Docker networking and CORS issues in production.',
    github: 'https://github.com/SuhasP2002/healthtrack',
    demo: null
  }
]

export const education = {
  school: 'NMAM Institute of Technology, Mangalore',
  degree: 'B.E. in Information Science & Engineering',
  period: 'Aug 2020 — Jun 2024',
  gpa: 'CGPA: 8.29 / 10'
}

export const certifications = [
  'Java Spring Framework, Spring Boot & Spring AI',
  'Full Stack Web Development Bootcamp',
  'AI Tools Workshop (be10x)'
]

// Sample blog posts — replace with your own writing. Rendered on the /blog
// section; each post is plain text/markdown-ish content kept simple on purpose.
export const posts = [
  {
    slug: 'clean-controller-service-repository',
    title: 'Why I still reach for Controller–Service–Repository in 2026',
    date: '2026-05-12',
    excerpt:
      'Layered architecture gets called old-fashioned a lot. Here is why it is still the fastest way I ship maintainable Spring Boot APIs.',
    tags: ['spring-boot', 'architecture']
  },
  {
    slug: 'jwt-refresh-tokens-spring-security',
    title: 'Rotating JWTs the boring, correct way with Spring Security',
    date: '2026-03-02',
    excerpt:
      'A walkthrough of the refresh-token flow I use in production, including the two mistakes that cost me a very late Friday.',
    tags: ['security', 'jwt']
  },
  {
    slug: 'render-free-tier-uptime-robot',
    title: 'Keeping a free-tier backend awake without lying to yourself',
    date: '2026-01-20',
    excerpt:
      'UptimeRobot, cold starts, and the actual latency numbers from pinging a Render free instance every 5 minutes.',
    tags: ['devops', 'deployment']
  }
]
