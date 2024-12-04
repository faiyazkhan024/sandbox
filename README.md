# Todo Timer

Todo Timer is a React TypeScript project bootstrapped using ViteJS. This project allows you to create and manage todo's with a specific due time in seconds. You can set deadlines for your tasks, and the application tracks tasks that have expired, as well as those that have been completed or are currently ongoing. With Todo Timer, you can effectively manage your tasks with time-bound deadlines and ensure timely completion of your todo's.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [About Stack](#about-stack)
- [Configuration](#configuration)
- [License](#license)

## Prerequisites

To use the Todo Timer project, you'll need to have the following installed on your machine:

- Node.js (version 14 or later)
- npm (version 7 or later)

## Installation

To install the Todo Timer project, follow these steps:

1. Clone the Sandbox repository:

   ```bash
   git clone https://github.com/faiyazkhan024/sandbox.git
   ```

2. Navigate to the todo-timer branch:

   ```bash
   cd sandbox
   git checkout assignment/todo-timer
   ```

3. Install the project dependencies

   ```bash
    npm install
   ```

## Usage

- **To start the development server for the "Todo Timer" project, run the following command in the project directory:**

  ```bash
  npm start
  ```

  This will start the development server at <http://localhost:3000>. You can view the project in your web browser by navigating to this URL.

- **To build the project for production, run the following command:**

  ```bash
  npm run build
  ```

  This will create a production-ready build of the project in the `dist` directory.

- **To preview the production build, run the following command:**

  ```bash
  npm run preview
  ```

  This will start a local server at <http://localhost:5000> where you can preview the production build of the project.

- **To run the linting process, run the following command:**

  ```bash
  npm run lint
  ```

  This command will execute the code linting process to check for errors, style inconsistencies, and code quality issues in your project.

## Project Structure

The todo-timer project exists in its own branch. Here's the structure of this branch:

- `public/`: Contains public files and static assets.
- `src/`: Contains the project's source code.
  - `components/`: Contains React components.
  - `contexts/`: Contains context and provider components.
  - `interfaces/`: Contains custom interfaces.

## Deployment

To deploy the project, you can use any hosting service that supports static site hosting. Some popular options include Netlify, Vercel, and GitHub Pages.

## Testing

To run the tests for the Todo Timer project, run the following command in the project directory:

```bash
npm test
```

This will run the test suite and output the results to the console.

> Note: currently no testing library is implemented.

## Troubleshooting

If you encounter any issues while using the Todo Timer project, try the following:

- Ensure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the npm install command.
- Check the console output for any error messages.

## About Stack

- **[ViteJS](https://vitejs.dev/)**: A build tool that focuses on fast development and building. It provides features like hot module replacement and fast server-side rendering.
- **[ReactJS](https://react.dev/)**: A popular JavaScript library for building user interfaces. It provides a declarative syntax for describing the UI and a component-based architecture for organizing code.
- **[Typescript](https://www.typescriptlang.org/)**: A superset of JavaScript that adds type annotations to the language. It provides better type checking and code analysis than plain JavaScript and can help catch errors before they occur at runtime.
- **[Context API](https://react.dev/reference/react/createContext)**: React's built-in feature for managing global state and sharing data between components. You can create context and provider components in the contexts/ directory to facilitate global state management in your project.
- **[React-Bootstrap](https://react-bootstrap.github.io/)**: A library that provides Bootstrap components as reusable React components, enabling easy integration of Bootstrap's CSS styling and pre-built UI components into your React application.

## Configuration

The "Todo Timer" project uses the following configuration files:

- `viet.config.js`: The ViteJS configuration file that specifies the build and development options for the project.
- `tsconfig.json`: This is the configuration file for Typescript, a superset of JavaScript that adds type annotations to the language. It defines how Typescript should compile the project, including which files to include and exclude, and which version of JavaScript to target.
- `tsconfig.node.json`: This is the configuration file for Typescript, specific to node.js. It specifies the target version of node.js, so that the Typescript compiler can generate code that is compatible with node.js.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
