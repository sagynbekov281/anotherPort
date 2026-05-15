# Ислам Сагинбеков — Портфолио

Минималистичное, типографическое портфолио, созданное с **React + TypeScript + Vite + SCSS + React Router**.

## Стек

- React 18
- TypeScript (strict mode)
- Vite
- SCSS Modules
- React Router v6

## Начало работы

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Структура проекта

```
src/
├── components/         # UI компоненты (каждый с .tsx + .module.scss)
│   ├── Cursor/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Contact/
│   └── Footer/
├── data/               # Все содержимое портфолио (редактируйте здесь)
├── hooks/              # Пользовательские React хуки
├── pages/              # Страницы маршрутов
├── styles/             # Глобальные стили и переменные
└── types/              # TypeScript интерфейсы
```

## Настройка

Редактируйте `src/data/index.ts`, чтобы обновить свои проекты, опыт и навыки.
