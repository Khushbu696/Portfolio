import type { Metadata } from 'next';
import styles from './Projects.module.css';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Khushbu Patel',
  description: 'Explore my latest frontend and full-stack projects.',
};

const projectsData = [
  {
    title: 'CodeQuery – Developer Q&A Platform',
    description: "A full-stack Q&A platform inspired by Stack Overflow, enabling developers to ask questions, share solutions, and engage in discussions. Features an AI-powered moderation system using Groq LLM to detect abusive or spam content, along with a strike-based user control mechanism. Includes authentication, post/reply system, tagging, search, image uploads, and a comprehensive admin dashboard for platform monitoring. Built with a focus on security, scalability, and real-world backend architecture.",
    image: '/projects/codequery.jpeg',
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Groq API", "Cloudinary"],
    githubUrl: 'https://github.com/Khushbu696/CodeQuery',
    liveUrl: 'https://codequery-app.netlify.app/',
    youtubeUrl: 'https://youtu.be/lrIF9ft01cU',
    apiDocUrl: 'https://documenter.getpostman.com/view/39216679/2sBXwnsrid',
    category: 'MERN'
  },
  {
    title: 'API Rate Limiter & Monitoring System',
    description: 'A production-grade API rate limiting and monitoring platform with a real-time dashboard. The system enforces a three-tier rule hierarchy — Global, User, and API Key levels — using a sliding window algorithm to intelligently allow or block requests. Features include Role-Based Access Control (RBAC) with a dedicated admin panel, live traffic analytics with interactive charts, an integrated API tester, and unique API key generation per user. Built with a Spring Boot backend and a Next.js + TypeScript frontend with a premium glassmorphism UI.',
    image: '/projects/rate_limiter.jpeg',
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "Next.js", "TypeScript", "Recharts"],
    githubUrl: 'https://github.com/Khushbu696/Rate_Limiter',
    youtubeUrl: 'https://youtu.be/ScePRdUNRNw?si=0iFxCy3brB3P__K5',
    apiDocUrl: 'https://documenter.getpostman.com/view/39216679/2sBXqCNiTR',
    category: 'Java Full-Stack'
  },
  {
    title: 'EcoTrack – Sustainability Dashboard',
    description: "EcoTrack is a full-stack sustainability dashboard that helps users track eco-friendly habits, set goals, join challenges, and monitor their environmental impact. The app combines a React frontend with an Express and MongoDB backend to provide a polished experience for personal impact tracking and community engagement.",
    image: '/projects/ecotrack.jpeg',
    stack: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    githubUrl: 'https://github.com/Khushbu696/EcoTrack',
    liveUrl: 'https://eco-track-green.netlify.app',
    category: 'MERN'
  },
  {
    title: 'MindBloom – Mental Wellness Tracker',
    description: "A full-stack mental wellness web application designed to help users build healthier habits and track their emotional journey. Users can log daily moods with emoji and notes, maintain habit streaks with automatic daily/weekly resets, engage with an anonymous community, and unlock achievements through a points-based rewards system. A personal dashboard brings everything together with a summary of today's mood, habit progress, and recent milestones.",
    image: '/projects/mindbloom.png',
    stack: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    githubUrl: 'https://github.com/Khushbu696/MindBloom',
    liveUrl: 'https://k-mindbloom.netlify.app',
    youtubeUrl: 'https://youtu.be/zs8yB1loTUY',
    apiDocUrl: 'https://documenter.getpostman.com/view/39216679/2sBXwmRYck',
    category: 'MERN'
  },
  {
    title: 'Leave Management System',
    description: 'An enterprise-style leave management application with a complete workflow for both employees and administrators. Employees can submit leave requests and track their history, while admins can review, approve, or reject requests through a dedicated dashboard. The system is secured with Spring Security for role-based authentication and uses a JPA-backed MySQL database for persistence.',
    image: '/projects/leave_management.jpeg',
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JSP/JSTL"],
    githubUrl: 'https://github.com/Khushbu696/Leave_Management',
    category: 'Java Full-Stack'
  },
  {
    title: 'Student Management System',
    description: 'A full-stack CRUD application for managing student records, featuring both a web UI and RESTful API. The system supports adding, editing, searching, and deleting student records, with the ability to filter by course and search by name. Exposes a clean REST API alongside a JSP-rendered web interface, both backed by the same service layer.',
    image: '/projects/student_management.jpeg',
    stack: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "MySQL", "JSP"],
    githubUrl: 'https://github.com/Khushbu696/Student_Management',
    category: 'Java Full-Stack'
  },
  {
    title: 'Appointment Booking System',
    description: 'A full-stack web application for managing doctor appointments end-to-end. Patients can register, log in, browse doctors by specialization and fees, and book appointments with a preferred time slot and reason. Admins have a dedicated panel to manage bookings and doctor listings. The system uses a normalized relational database schema with foreign key relationships for data integrity.',
    image: '/projects/appointment.png',
    stack: ["Java Servlets", "JSP", "MySQL", "Apache Tomcat"],
    githubUrl: 'https://github.com/Khushbu696/Appointment-Booking-System',
    youtubeUrl: 'https://youtu.be/Q-iE_L3CNxE?si=Y_TbJTRg1PoMcgL3',
    apiDocUrl: 'https://documenter.getpostman.com/view/39216679/2sBXwtoor5',
    category: 'Java Full-Stack'
  },
  {
    title: ' TaskFlow – Modern Todo App',
    description: 'A sleek and feature-rich task management app focused on a smooth user experience. Supports creating, editing, deleting, and completing tasks with drag-and-drop reordering powered by dnd-kit. Tasks persist across sessions via LocalStorage, and users can filter by All / Active / Completed status. Includes a light/dark mode toggle and a live counter for remaining tasks.',
    image: '/projects/todo_list.png',
    stack: ["React", "Vite", "Context API", "LocalStorage"],
    githubUrl: 'https://github.com/Khushbu696/ToDo_List',
    liveUrl: 'https://khushbu-todo-list.netlify.app/',
    category: 'React Web App'
  },
  {
    title: ' BrewBuddy – UI/UX Case Study',
    description: 'A comprehensive Figma UI/UX case study for a mobile app that helps users discover and prepare coffee, tea, and wellness drinks — even without an internet connection. The design covers a full user flow from onboarding to recipe browsing, featuring categorized drink libraries (Coffee, Tea, Milk, Remedy), a smart search, favorites saving, and situational suggestions (e.g., drinks for headaches or a cold). Built with a clean design system using Figma Auto Layout and reusable components.',
    image: '/projects/brewbuddy.png',
    stack: ['Figma', 'UI/UX Design'],
    githubUrl: 'https://github.com/Khushbu696/BrewBuddy-UI-UX',
    liveUrl: 'https://www.figma.com/design/cJMZM1ncpcNg7f7DqegJ9d/My-Projects?node-id=838-205&t=PBTKlr3zh8kTmTES-1',
    category: 'UI/UX'
  },
  {
    title: 'FlipMind – Memory Card Game',
    description: 'A fun and interactive browser-based memory card game where players race against a 3-minute countdown to match all card pairs. Cards are shuffled randomly each round, and flipping two matching cards keeps them revealed. The game tracks turns, disables input during comparisons to prevent cheating, and displays a win/lose modal with images when the game ends.',
    image: '/projects/flipmind.png',
    stack: ['React', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/Khushbu696/FlipMind',
    liveUrl: 'https://flipmind.netlify.app/',
    category: 'React Web App'
  },
  {
    title: 'QuoteCraft – Inspirational Quote Generator',
    description: "A minimal and elegant React app that delivers daily inspiration on demand. Users can generate random motivational quotes from a live API, copy them to clipboard with one click, or share them instantly via the browser's native share API. Simple, fast, and beautifully designed.",
    image: '/projects/quotecraft.png',
    stack: ['React', 'Vite','API Ninjas Quotes API'],
    githubUrl: 'https://github.com/Khushbu696/QuoteCraft',
    liveUrl: 'https://k-quotecraft.netlify.app/',
    category: 'React Web App'
  },
  {
    title: 'Weather App',
    description: 'A clean, responsive weather application that delivers real-time conditions for any city in the world. Users can search by city name to instantly see temperature, humidity, wind speed, and weather condition. Features a modern glassmorphism UI with graceful error handling for invalid city inputs.',
    image: '/projects/weather_app.png',
    stack: ['React', 'Vite', 'OpenWeather API', 'CSS'],
    githubUrl: 'https://github.com/Khushbu696/Weather_app',
    liveUrl: 'https://khushbu-weather-app.netlify.app/',
    category: 'React Web App'
  }
];

export default function Projects() {
  return (
    <div className="section">
      <div className="container">
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.pageSubtitle}>
          Here are some of the projects I've worked on recently. They range from basic frontend interfaces to complex full-stack architectures.
        </p>
        
        <ProjectsClient projects={projectsData} />
      </div>
    </div>
  );
}
