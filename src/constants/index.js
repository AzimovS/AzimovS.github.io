import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  python,
  sklearn,
  git,
  figma,
  docker,
  nokia,
  dar,
  nazarbayevuni,
  fizmat,
  threejs,
  mui,
  footballproject,
  hotels,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'ML Engineer',
    icon: mobile,
  },
  {
    title: 'Blockchain Enthusiast',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Sklearn',
    icon: sklearn,
  },
  {
    name: 'Material UI',
    icon: mui,
  },
];

const experiences = [
  {
    title: 'Advanced Technology Group Trainee',
    company_name: 'Nokia',
    icon: nokia,
    iconBg: '#383E56',
    date: 'May 2023 - Present',
    points: [
      'Researched the state-of-the-art text-to-3D models.',
      'Developed a full-stack application for the interaction with 3D models in extended reality.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'DAR',
    icon: dar,
    iconBg: '#383E56',
    date: 'March 2022 - March 2023',
    points: [
      'Worked on the client-side of the billing service, where the merchant can create an invoice, subscription, and discount for customers in a team of 2 backend developers, Quality Assurance engineer, development manager.',
      `Contributed to the company's  main website dar.io and naiza.tv.`,
      'Contributed to more than 25 releases.',
    ],
  },
  {
    title: 'Research Assistant',
    company_name: 'Nazarbayev University',
    icon: nazarbayevuni,
    iconBg: '#E6DEDD',
    date: 'Jun 2020  - Jun 2022',
    points: [
      'Created a desktop application for data verification for a group of 6 researchers.',
      'Applied Machine learning algorithms for Football Action Classification.',
      'Tested state-of-the-art object detection algorithms on Pneumonia Detection and used meta-learning with data generation.',
      'Fine-tuned the BERT for PoS tagging with different datasets and different hyperparameters.',
    ],
  },
  {
    title: 'Yandex Lyceum Teacher',
    company_name: 'National School of Physics & Math (FIZMAT)',
    icon: fizmat,
    iconBg: '#383E56',
    date: 'Sep 2020 - Apr 2022',
    points: [
      'Taught a Python-based industrial programming course (includes pyqt, pygame, and flask) developed by Yandex to a group of 17+ high school students (80+ lessons).',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Football Action Classification',
    description:
      'Desktop application that allows users to interact with the ML and DL algorithms that train, visualize and predict football actions on provided data.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pyqt',
        color: 'green-text-gradient',
      },
      {
        name: 'torch',
        color: 'pink-text-gradient',
      },
    ],
    image: footballproject,
    source_code_link: 'https://github.com/AzimovS/senior-project',
  },
  {
    name: 'Hotel Management',
    description:
      'Web application that enables guests can book hotel rooms, desk clerks can approve reservations and managers can control hotel employees (for example, working hours of desk clerks).',
    tags: [
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
      {
        name: 'spring-boot',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'blue-text-gradient',
      },
    ],
    image: hotels,
    source_code_link: 'https://github.com/ironsoul0/hotel-management',
  },
];

export { services, technologies, experiences, testimonials, projects };
