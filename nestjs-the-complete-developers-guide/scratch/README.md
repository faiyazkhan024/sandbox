# Scratch

This project is part of the "NestJS: The Complete Developer's Guide" course. It serves as a learning exercise for installing individual packages and building a NestJS application from scratch. The project includes a simple API with multiple endpoints to demonstrate the basics of NestJS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [About Stack](#about-stack)
- [Configuration](#configuration)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites

Before getting started with the project, ensure you have the following prerequisites:

- Node.js and npm installed on your machine.
  - Node.js (version 14 or later)
  - npm (version 7 or later)

## Installation

To install and set up the project, follow these steps:

1. Clone the sandbox repository to your local machine:

   ```bash
   git clone git@github.com:faiyazkhan024/sandbox.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sandbox/nestjs-the-complete-developers-guide/scratch
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

- To start the server, run the following command in the project directory:

  ```bash
  npm start
  ```

  This will start the NestJS server at <http://localhost:3000>. You can use tools like Postman or curl to interact with the API.

- **To build the project for production, run the following command:**

  ```bash
  npm run build
  ```

> Explore the project code in the `src` directory. You can modify and experiment with the code to further customize the map and marker functionality.

## API Endpoints

The project exposes the following endpoints:

- **GET /**

  Retrieve a welcome message.

  ```bash
  curl http://localhost:3000/
  ```

- **GET /hi-there**

  Retrieve a "Hi there!" message.

  ```bash
  curl http://localhost:3000/hi-there
  ```

- **GET /bye-there**

  Retrieve a "Bye there!" message.

  ```bash
  curl http://localhost:3000/bye-there
  ```

- **GET /foo**

  Retrieve a JSON object with a key-value pair.

  ```bash
  curl http://localhost:3000/foo
  ```

## Project Structure

The project follows a standard structure for a NestJS application. Here's an overview of the main directories and files:

```plaintext
scratch/
 ├── dist/                             : Compiled output directory.
 ├── node_modules/                     : Directory containing project dependencies.
 ├── src/
 │ ├── app.controller.ts               : Controller for handling HTTP requests.
 │ ├── app.module.ts                   : Module definition for the app.
 │ └── main.ts                         : Entry point of the application.
 ├── .gitignore                        : Specifies files and directories to ignore in Git.
 ├── package-lock.json                 : Lockfile for npm.
 ├── package.json                      : Project dependencies and scripts.
 ├── README.md                         : Project documentation.
 ├── tsconfig.build.json               : TypeScript configuration for building the project.
 └── tsconfig.json                     : TypeScript configuration file.
```

## Deployment

To deploy the project to a production environment, follow these steps:

1. Build the production-ready application bundle:

   ```bash
   npm run build
   ```

   This command will generate a `dist` directory with the bundled files.

2. Copy the contents of the `dist` directory to your web server or hosting platform.

3. Configure your web server to serve the `index.html` file as the entry point of your application.

## About Stack

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **[TypeScript](https://www.typescriptlang.org/)**: A superset of JavaScript that adds type annotations to the language, providing better type checking and code analysis.
- **[Node.js](https://nodejs.org/)**: A JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications.

## Configuration

- `tsconfig.json`: This is the configuration file for TypeScript. It defines how TypeScript should compile the project, including which files to include and exclude, and which version of JavaScript to target.
- `tsconfig.build.json`: This file contains the configuration for building the TypeScript project.

## Testing

Currently, there are no specific tests provided for this project. However, you can write your own tests using testing frameworks such as Jest to cover any additional functionality or customizations you make to the code.

## Troubleshooting

If you encounter any issues or errors while working with the project, consider the following steps:

- Make sure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the `npm install` command.
- Check for any error messages or warnings in the terminal output.
- Consult the documentation or seek help from the course resources or community forums.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
