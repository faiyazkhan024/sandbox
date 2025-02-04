# Todo Timer

**Todo Timer** is a React and TypeScript application bootstrapped with Vite. This project enables users to create and manage tasks with specific due times (in seconds). Set deadlines for your tasks, track expired tasks, and monitor both ongoing and completed tasks. With Todo Timer, you can effectively manage your time-bound tasks to ensure timely completion.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Technology Stack](#technology-stack)
- [Configuration](#configuration)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 7 or later)

## Installation

To set up the project locally:

1. **Clone the repository:**

   Follow the instructions in the main branch of the sandbox repository.

2. **Switch to the `todo-timer` branch:**

   ```bash
   cd sandbox
   git checkout assignment/todo-timer
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Usage

### Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

### Production Build

To create a production-ready build, run:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
```

This will start a local server at [http://localhost:4173](http://localhost:4173).

### Linting

To run the linting process and check for code style and quality issues, run:

```bash
npm run lint
```

## Project Structure

The project structure is organized as follows:

```graphql
todo-timer/
├── public/                   # Public files and static assets
├── src/                      # Source code
│   ├── components/           # React components
│   ├── contexts/             # Context and provider components
│   ├── hooks/                # Custom hooks
│   ├── interfaces/           # TypeScript interfaces
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   ├── style.css             # Global styles
│   └── vite-env.d.ts         # Vite environment types
├── .gitignore                # Files and folders to ignore by Git
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── LICENSE                   # Project license
├── package.json              # Project manifest and scripts
├── package-lock.json         # Dependency lock file
├── tsconfig.app.json         # TypeScript configuration for the app
├── tsconfig.json             # Base TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js
└── vite.config.ts            # Vite configuration file
```

## Deployment

You can deploy Todo Timer on any static hosting service such as [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/). Simply build the project with `npm run build` and deploy the contents of the `dist` folder.

## Testing

To run tests (if implemented), use:

```bash
npm run test
```

> **Note:** A testing library has not been integrated yet. Future updates may include comprehensive test suites.

## Troubleshooting

If you encounter issues:

- Verify that you have the latest versions of Node.js and npm installed.
- Ensure all dependencies are correctly installed (`npm install`).
- Check the console output for any error messages.
- Review the configuration files for any misconfigurations.

## Technology Stack

- **[Vite](https://vitejs.dev/):** A fast build tool offering an optimized development experience.
- **[React](https://react.dev/):** A JavaScript library for building user interfaces with a component-based architecture.
- **[TypeScript](https://www.typescriptlang.org/):** A superset of JavaScript that provides static typing and enhanced code quality.
- **[Context API](https://react.dev/reference/react/createContext):** A React feature for global state management and data sharing.
- **[React-Bootstrap](https://react-bootstrap.github.io/):** A library of Bootstrap components as reusable React components for streamlined UI development.

## Configuration

Key configuration files include:

- **`vite.config.ts`**: Configures Vite for development and production builds.
- **`tsconfig.json`**: Base TypeScript configuration.
- **`tsconfig.app.json`**: TypeScript settings specific to the application.
- **`tsconfig.node.json`**: TypeScript configuration optimized for Node.js.

## License

This project is licensed under the [MIT License](./LICENSE).
