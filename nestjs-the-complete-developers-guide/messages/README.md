# Messages

This project is part of the "NestJS: The Complete Developer's Guide" course. It demonstrates how to build a simple API to manage messages using NestJS, providing a practical example of implementing CRUD functionality. The API includes three endpoints:

1. **GET**: Retrieve a message by its unique ID.
2. **POST**: Create a new message.
3. **GET ALL**: Retrieve all messages.

All messages are persistently stored in a file named `messages.json` in JSON format, ensuring data persistence across server restarts. The project structure and codebase offer a clear example of best practices in NestJS development, including separation of concerns, modular design, and effective use of DTOs (Data Transfer Objects) for data validation and transformation. This project is an excellent starting point for anyone looking to understand the fundamentals of building RESTful APIs with NestJS.

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
   cd sandbox/nestjs-the-complete-developers-guide/messages
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

- To build the project for production, run the following command:

  ```bash
  npm run build
  ```

> Explore the project code in the `src` directory. You can modify and experiment with the code to further customize the map and marker functionality.

## API Endpoints

The project exposes the following endpoints:

- **GET /messages/{id}**

  Retrieve a message by its ID.

  ```bash
  curl http://localhost:3000/messages/117
  ```

- **GET /messages**

  Retrieve all messages.

  ```bash
  curl http://localhost:3000/messages
  ```

- **POST /messages**

  Create a new message.

  ```bash
  curl -X POST http://localhost:3000/messages -H "Content-Type: application/json" -d '{"content": "Hello World"}'
  ```

## Project Structure

The project follows a standard structure for a NestJS application. Here's an overview of the main directories and files:

```plaintext
messages/
├── dist/                             : Compiled output directory.
├── node_modules/                     : Directory containing project dependencies.
├── src/
│ ├── messages/
│ │ ├── dto/
│ │ │ └── create-message.dto.ts       : Data Transfer Object for creating messages.
│ │ ├── messages.controller.spec.ts   : Unit tests for the messages controller.
│ │ ├── messages.controller.ts        : Controller for handling HTTP requests.
│ │ ├── messages.module.ts            : Module definition for messages.
│ │ ├── messages.repository.ts        : Repository for managing message data.
│ │ ├── messages.service.ts           : Service for business logic related to messages.
├── test/
│ ├── jest-e2e.json                   : Configuration file for end-to-end tests.
├── .eslintrc.js                      : ESLint configuration file.
├── .gitignore                        : Specifies files and directories to ignore in Git.
├── .prettierrc                       : Prettier configuration file.
├── messages.json                     : JSON file for storing messages.
├── nest-cli.json                     : Nest CLI configuration file.
├── package-lock.json                 : Lockfile for npm.
├── package.json                      : Project dependencies and scripts.
├── README.md                         : Project documentation.
├── requests.http                     : HTTP request file for testing endpoints.
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
- `.prettierrc`: This file contains the configuration for Prettier, a code formatting tool.
- `.eslintrc.js`: This file contains the configuration for ESLint, a tool for identifying and fixing linting issues in your code.
- `jest-e2e.json`: This file contains the configuration for end-to-end testing with Jest.

## Testing

To run the tests for this project, use the following command:

```bash
npm test
```

This will run the unit tests defined in the `messages.controller.spec.ts` file. For end-to-end tests, the configuration is defined in `test/jest-e2e.json`.

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
```

## Troubleshooting

If you encounter any issues or errors while working with the project, consider the following steps:

- Make sure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the npm install command.
- Check for any error messages or warnings in the terminal output.
- Consult the documentation or seek help from the course resources or community forums.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
