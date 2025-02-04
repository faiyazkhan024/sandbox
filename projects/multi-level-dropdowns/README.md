# Multi-Level Dropdowns

Multi-Level Dropdowns is a web application built with [ViteJS](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). The project demonstrates how to create multi-level dropdown menus using a **CSS-only approach** for the dropdown functionality. Styling is achieved through [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/), ensuring modular and maintainable code.

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

Before getting started, ensure that you have the following installed on your machine:

- **Node.js** (version 14 or later)
- **npm** (version 7 or later)

## Installation

To install the Multi-Level Dropdowns project, follow these steps:

1. **Clone the repository:**

   Follow the instructions in the main branch of the sandbox repository.

2. **Clone the Repository**

   **Switch to the `multi-level-dropdowns` branch:**

   ```bash
   cd sandbox
   git checkout assignment/multi-level-dropdowns
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

### Development

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the project.

### Production Build

To build the project for production, run:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview Production Build

After building the project, preview the production build with:

```bash
npm run preview
```

This will start a local server at [http://localhost:4173](http://localhost:4173).

### Linting

To run the linting process and check for style and code quality issues, execute:

```bash
npm run lint
```

## Project Structure

The project is organized as follows:

```graphql
├── public/                  # Public files and static assets
├── src/                     # Application source code
│   ├── components/          # Reusable React components
│   ├── contexts/            # Context and provider components
│   ├── data/                # Default state and data for the project
│   ├── hooks/               # Custom hooks
│   ├── interfaces/          # TypeScript interfaces
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   ├── style.css            # Global styles
│   └── vite-env.d.ts        # Vite environment definitions
├── .gitignore               # Specifies intentionally untracked files to ignore
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── LICENSE                  # Project license file
├── package-lock.json        # npm package lock file
├── package.json             # Project manifest
├── tsconfig.app.json        # TypeScript configuration for the application
├── tsconfig.json            # Base TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for Node.js
└── vite.config.js           # ViteJS configuration file
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

The Multi-Level Dropdowns project leverages the following technologies:

- **[ViteJS](https://vitejs.dev/):** AA fast build tool offering an optimized development experience.
- **[ReactJS](https://react.dev/):** A JavaScript library for building user interfaces with a component-based architecture.
- **[TypeScript](https://www.typescriptlang.org/):** A superset of JavaScript that provides static typing and enhanced code quality.
- **[Context API](https://react.dev/reference/react/createContext):** A React feature for global state management and data sharing.
- **[CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/):** A CSS methodology for scoping styles locally to components, ensuring maintainability and avoiding global conflicts.

## Configuration

Key configuration files include:

- **`vite.config.ts`**: Configures Vite for development and production builds.
- **`tsconfig.json`**: Base TypeScript configuration.
- **`tsconfig.app.json`**: TypeScript settings specific to the application.
- **`tsconfig.node.json`**: TypeScript configuration optimized for Node.js.

## License

This project is licensed under the [MIT License](./LICENSE).
