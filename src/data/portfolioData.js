// Central data source for Mukesh's Portfolio
// You can edit any details, skills, links, or image paths here!

export const personalInfo = {
  name: "Mukesh",
  role: "Web Developer",
  tagline: "I design and code beautifully simple things, and I love what I do. I use animation as a third dimension by which Lorem ipsum dolor sit amet consectetur adipisicing.",
  heroSubtitle: "WELCOME TO MY WORLD",
  availableForHire: true,
  aboutMeSubtitle: "VISIT MY PORTFOLIO & HIRE ME",
  aboutMeHeading: "About Me",
  aboutBio: [
    "I am a passionate Web Developer with experience in creating modern, responsive, and user-friendly websites. I enjoy building attractive web designs and developing functional websites using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL.",
    "My focus is to deliver clean, fast, and professional websites that provide the best user experience across all devices. I continuously learn new technologies and improve my skills to create better digital solutions."
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Client Satisfaction", value: "99%" }
  ],
  contact: {
    name: "Mukesh",
    title: "Full Stack Web Developer",
    statusText: "I am available for freelance work. Connect with me and let's bring your ideas to life.",
    phone: "+91 98765 43210", // Edit with your actual phone number
    email: "mukesh.developer@example.com", // Edit with your actual email
    location: "India",
    resumeUrl: "/images/Mukesh_Resume.pdf"
  },
  socialLinks: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    github: "https://github.com/"
  }
};

export const skillsData = [
  {
    name: "HTML5",
    level: 95,
    iconType: "html",
    category: "Frontend",
    description: "Semantic markup, accessibility, modern HTML5 APIs"
  },
  {
    name: "CSS3",
    level: 90,
    iconType: "css",
    category: "Frontend",
    description: "Flexbox, Grid, Animations, Responsive layouts"
  },
  {
    name: "JavaScript",
    level: 85,
    iconType: "javascript",
    category: "Frontend",
    description: "ES6+, DOM manipulation, Async/Await, APIs"
  },
  {
    name: "React.js",
    level: 85,
    iconType: "react",
    category: "Frontend",
    description: "Hooks, State management, Components, SPA architecture"
  },
  {
    name: "PHP",
    level: 80,
    iconType: "php",
    category: "Backend",
    description: "Server-side scripting, authentication, RESTful APIs"
  },
  {
    name: "Bootstrap",
    level: 92,
    iconType: "bootstrap",
    category: "Frontend",
    description: "Rapid UI prototyping, responsive grid systems"
  },
  {
    name: "DBMS",
    level: 78,
    iconType: "dbms",
    category: "Database",
    description: "Relational modeling, normalization, query optimization"
  },
  {
    name: "MySQL",
    level: 82,
    iconType: "mysql",
    category: "Database",
    description: "Complex queries, indexing, database security"
  }
];

export const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    description: "I create responsive and modern website designs using HTML, CSS, Bootstrap, JavaScript, and React.js with clean UI/UX.",
    icon: "Layout"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "I build secure and scalable backend systems using PHP, Laravel, Node.js, and MySQL database integration.",
    icon: "Server"
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Complete website development from frontend design to backend functionality with responsive and dynamic features.",
    icon: "Code2"
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Mobile-friendly and fully responsive websites optimized for all devices, screen sizes, and modern mobile browsers.",
    icon: "Smartphone"
  },
  {
    id: 5,
    title: "Database Management",
    description: "Efficient database design, optimization, and management using MySQL, PostgreSQL, and seamless API integration.",
    icon: "Database"
  },
  {
    id: 6,
    title: "SEO Optimization",
    description: "SEO-friendly website structure and performance optimization for higher visibility, rapid indexing, and top search ranking.",
    icon: "Search"
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Indian Cuisine Experience",
    category: "Food Delivery & Restaurant App",
    subtitle: "The services provide for Design & Development",
    description: "A complete mobile and web food ordering platform with modern authentic Mughlai & Indian cuisine experience. Features online ordering, live menu, cart, checkout, table reservations, and responsive design.",
    image: "/images/projects/project-1.jpg",
    tags: ["Responsive Design", "App Builder", "Certification", "Stats & Reports", "Retina Ready"],
    liveDemo: "https://example.com/demo-food-app",
    github: "https://github.com/mukesh/indian-cuisine-app",
    featured: true
  },
  {
    id: 2,
    title: "Modern E-Commerce Store",
    category: "Web Application",
    subtitle: "Online Retail Platform",
    description: "Feature-rich online store with product filtering, cart drawer, Razorpay/Stripe checkout integration, and an intuitive customer dashboard.",
    image: "/images/projects/project-2.jpg",
    tags: ["React.js", "Node.js", "MySQL", "Payment Gateway"],
    liveDemo: "https://example.com/ecommerce-demo",
    github: "https://github.com/mukesh/ecommerce-store",
    featured: false
  },
  {
    id: 3,
    title: "Agency & Business Portfolio",
    category: "UI/UX & Branding",
    subtitle: "Corporate Brand Identity",
    description: "High-conversion corporate agency website featuring sleek glassmorphism, micro-animations, fast loading speed, and dynamic lead capture forms.",
    image: "/images/projects/project-3.jpg",
    tags: ["Modern UI", "SEO Optimized", "JavaScript", "Animations"],
    liveDemo: "https://example.com/agency-demo",
    github: "https://github.com/mukesh/agency-portfolio",
    featured: false
  },
  {
    id: 4,
    title: "Analytics & SaaS Dashboard",
    category: "Web App & Dashboard",
    subtitle: "Real-time Metrics Tracking",
    description: "Interactive analytics dashboard for web metrics, user activity charts, database management, and role-based access control.",
    image: "/images/projects/project-4.jpg",
    tags: ["Dashboard", "Charts", "API Integration", "MySQL"],
    liveDemo: "https://example.com/saas-dashboard",
    github: "https://github.com/mukesh/analytics-dashboard",
    featured: false
  }
];

export const clientsData = [
  { id: 1, name: "Marth Smitha", company: "MS Studio", role: "Creative Director" },
  { id: 2, name: "Sumith Saha", company: "JES Wedding Story", role: "Founder" },
  { id: 3, name: "John Doe", company: "Studio BY A.LIN", role: "Art Director" },
  { id: 4, name: "Janen Jora", company: "Fashion LIVE Style", role: "Lead Stylist" },
  { id: 5, name: "Jora Sultana", company: "MS Tech Hub", role: "Product Manager" },
  { id: 6, name: "Sr Director", company: "JES Media Global", role: "Managing Director" }
];
