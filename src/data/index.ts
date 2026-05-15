import type { Project, Experience, Skill, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contact' },
];

export const skills: Skill[] = [
  {
    category: 'Основные',
    items: ['TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    category: 'Фреймворки',
    items: ['React 18', 'Next.js', 'Vite', 'React Router'],
  },
  {
    category: 'Состояние и данные',
    items: ['Redux Toolkit', 'Zustand', 'React Query', 'REST API'],
  },
  {
    category: 'Инструменты',
    items: ['Git / GitHub', 'Webpack', 'ESLint', 'Figma'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'TaskFlow',
    description:
      'Минималистичное приложение для продуктивности, созданное с React и TypeScript. Включает доски задач с перетаскиванием, синхронизацию в реальном времени и навигацию с клавиатуры.',
    tags: ['React', 'TypeScript', 'SCSS', 'Zustand'],
    link: 'https://github.com/islamsaginbekov',
    year: '2024',
  },
  {
    id: 2,
    title: 'WeatherGrid',
    description:
      'Чистая панель погоды с почасовыми прогнозами, поиском местоположения и анимированными состояниями погоды. Интегрировано с OpenWeather API.',
    tags: ['React', 'TypeScript', 'CSS Grid', 'API'],
    link: 'https://github.com/islamsaginbekov',
    year: '2024',
  },
  {
    id: 3,
    title: 'DevLinks',
    description:
      'Инструмент для разработчиков link-in-bio с перетаскиванием для переупорядочивания, живым просмотром и настройкой профиля. Создано как полнофункциональный челлендж.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/islamsaginbekov',
    year: '2023',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Фронтенд-разработчик',
    company: 'Фриланс',
    period: '2023 — Настоящее время',
    description:
      'Создание адаптивных, доступных веб-приложений для клиентов из различных отраслей. Фокус на чистой архитектуре и производительности.',
    stack: ['React', 'TypeScript', 'Next.js', 'SCSS'],
  },
  {
    id: 2,
    role: 'Младший фронтенд-разработчик',
    company: 'Цифровое агентство',
    period: '2022 — 2023',
    description:
      'Разработка UI-компонентов и интеграция REST API для клиентов e-commerce и SaaS. Сотрудничество в agile-команде из 6 разработчиков.',
    stack: ['React', 'JavaScript', 'CSS Modules', 'Git'],
  },
  {
    id: 3,
    role: 'Стажер веб-разработчика',
    company: 'Стартап-лаборатория',
    period: '2021 — 2022',
    description:
      'Создание и поддержка лендингов и внутренних инструментов. Получил практический опыт с современными frontend-процессами.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];
