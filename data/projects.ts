import { Projects } from '@/types/projects'

export const projects: Projects[] = [
  {
    id: '1',
    slug: 'weather-app',
    number: '01',
    title: 'Weather App',
    category: 'Web Application',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about:
      'A web app that provides real-time weather updates with an interactive UI.',
    platform: 'Web',
    technologies: ['Next.js', 'Tailwind CSS', 'OpenWeather API'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '2',
    slug: 'task-manager',
    number: '02',
    title: 'Task Manager',
    category: 'Productivity',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about:
      'An efficient task management tool with drag-and-drop functionality.',
    platform: 'Web',
    technologies: ['React', 'TypeScript', 'Redux', 'Firebase'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '3',
    slug: 'portfolio-website',
    number: '03',
    title: 'Portfolio Website',
    category: 'Personal Project',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'A portfolio website to showcase my work and achievements.',
    platform: 'Web',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '4',
    slug: 'ecommerce-site',
    number: '04',
    title: 'E-commerce Site',
    category: 'E-commerce',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'A fully functional e-commerce platform with payment integration.',
    platform: 'Web',
    technologies: ['React', 'Redux', 'Stripe API', 'Node.js'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '5',
    slug: 'chat-app',
    number: '05',
    title: 'Chat Application',
    category: 'Communication',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'A real-time chat app with private and group messaging features.',
    platform: 'Web',
    technologies: ['Next.js', 'Socket.io', 'Firebase'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '6',
    slug: 'finance-tracker',
    number: '06',
    title: 'Finance Tracker',
    category: 'Finance',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'An app to track expenses and analyze financial goals.',
    platform: 'Web',
    technologies: ['Vue.js', 'Pinia', 'Chart.js'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '7',
    slug: 'blog-platform',
    number: '07',
    title: 'Blog Platform',
    category: 'Content Management',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'A blog platform with CMS integration for content management.',
    platform: 'Web',
    technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS'],
    project_images: ['/project.jpg', '/project.jpg']
  },
  {
    id: '8',
    slug: 'fitness-app',
    number: '08',
    title: 'Fitness App',
    category: 'Health & Fitness',
    image: '/my.jpg',
    slug_hero_image: '/project.jpg',
    about: 'A fitness tracking app with workout plans and progress monitoring.',
    platform: 'Mobile',
    technologies: ['React Native', 'Expo', 'Firebase'],
    project_images: ['/project.jpg', '/project.jpg']
  }
]
