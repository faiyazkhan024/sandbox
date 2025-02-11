# React Cropper

**React Cropper** is a web application built with React that allows users to upload images, zoom in for a detailed view, and retrieve image coordinates. It provides an intuitive interface for image cropping and zooming.

---

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

---

## Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v14 or later)
- **[npm](https://www.npmjs.com/)** (v7 or later)

---

## Installation

To set up the project locally:

1. **Clone the repository**  
   Follow the instructions in the main branch of the **Sandbox** repository.

2. **Switch to the `react-cropper` branch**

   ```bash
   cd sandbox
   git checkout assignment/react-cropper
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

---

## Usage

### Start Development Server

Run the following command to start the development server:

```bash
npm run dev
```

Then, open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The output will be generated in the `dist` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

This will start a local server at [http://localhost:4173](http://localhost:4173).

### Linting

To check for code style and quality issues:

```bash
npm run lint
```

---

## Project Structure

The project follows a modular structure:

```graphql
react-cropper/
├── public/                   # Public files and static assets
├── src/                      # Source code
│   ├── assets/               # Images and other assets
│   ├── components/           # Reusable React components
│   ├── App.module.css        # Component-specific styles
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   ├── style.css             # Global styles
│   └── vite-env.d.ts         # Vite environment types
├── .gitignore                # Git ignore file
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── LICENSE                   # License file
├── package.json              # Project manifest and scripts
├── package-lock.json         # Dependency lock file
├── README.md                 # Project documentation (this file)
├── tsconfig.app.json         # TypeScript configuration for the app
├── tsconfig.json             # Base TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js
└── vite.config.ts            # Vite configuration file
```

---

## Deployment

React Cropper can be deployed to static hosting services such as:

- **[Netlify](https://www.netlify.com/)**
- **[Vercel](https://vercel.com/)**
- **[GitHub Pages](https://pages.github.com/)**

### Steps to Deploy

1. Build the project:

   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` directory to your preferred hosting service.

---

## Testing

To run tests (if implemented):

```bash
npm run test
```

> **Note:** A testing library has not been integrated yet. Future updates may include test suites.

---

## Troubleshooting

If you encounter issues:

- Ensure you have the latest versions of **Node.js** and **npm**.
- Verify that dependencies are installed correctly using `npm install`.
- Check the browser console and terminal output for error messages.
- Review configuration files for misconfigurations.

---

## Technology Stack

React Cropper is built using:

- **[Vite](https://vitejs.dev/)** – A fast build tool optimized for modern web development.
- **[React](https://react.dev/)** – A JavaScript library for building interactive UIs.
- **[TypeScript](https://www.typescriptlang.org/)** – A superset of JavaScript with static typing.
- **[React Cropper](https://github.com/react-cropper/react-cropper)** – A React wrapper for **Cropper.js**, an image cropping library.

---

## Configuration

Key configuration files:

- **`vite.config.ts`** – Vite configuration for development and production.
- **`tsconfig.json`** – Base TypeScript configuration.
- **`tsconfig.app.json`** – TypeScript settings specific to the application.
- **`tsconfig.node.json`** – TypeScript configuration optimized for Node.js.

---

## License

This project is licensed under the **[MIT License](./LICENSE)**.
