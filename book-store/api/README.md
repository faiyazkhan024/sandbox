# Book Store API

The Book Store API is a RESTful web service that allows users to create an account and purchase books using points. This API is built using the NestJS framework and provides a simple and secure way to interact with the book store system.

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

Before running the application, make sure you have the following prerequisites installed on your system:

- Node.js (v14 or above)
- npm (Node Package Manager)

## Installation

To install the Book Store project, clone the sandbox repository to your local machine:

1. Clone the sandbox repository to your local machine

   ```bash
   git clone https://github.com/faiyazkhan024/sandbox.git
   ```

2. Navigate to the "Book Store" project directory

   ```bash
   cd sandbox/book-store
   ```

3. Install the project dependencies

   ```bash
    npm install
   ```

## Usage

To builds the application by transpiling the TypeScript code to JavaScript, use the following command:

```bash
npm run build
```

To formats the source code using Prettier, use the following command:

```bash
npm run format
```

To starts the application, use the following command:

```bash
npm start
```

To starts the application in development mode with auto-reload on file changes, use the following command:

```bash
npm run start:dev
```

To starts the application in debug mode with auto-reload on file changes, use the following command:

```bash
npm run start:debug
```

To starts the application in production mode, use the following command:

```bash
npm run start:prod
```

To runs ESLint to lint the source code and automatically fix linting issues, use the following command:

```bash
npm run lint
```

> Note: Make sure you are in the project directory and have installed the project dependencies by running npm install before using these script commands.

## Project Structure

In a typical NestJS application, the folder structure follows a modular and organized approach. Here's a common folder structure for a NestJS application:

- `src/`
  - `main.ts` : Entry point of the application
  - `app.module.ts` : Root module of the application
  - `app.controller.ts` : Root controller of the application
  - `app.service.ts` : Root service of the application
  - `shared/` : Shared modules, services, and utilities
  - `modules/`
    - `module1/`
      - `module1.module.ts` : Module 1 module file
      - `module1.controller.ts` : Module 1 controller(s)
      - `module1.service.ts` : Module 1 service(s)
      - `module1.entity.ts` : Module 1 entity/model(s)
      - `module1.repository.ts` : Module 1 repository (if using a database)
      - `module1.dto.ts` : Module 1 data transfer object(s)
    - `module2/`
      - `module2.module.ts` : Module 2 module file
      - `module2.controller.ts` : Module 2 controller(s)
      - `module2.service.ts` : Module 2 service(s)
      - `module2.entity.ts` : Module 2 entity/model(s)
      - `module2.repository.ts` : Module 2 repository (if using a database)
      - `module2.dto.ts` : Module 2 data transfer object(s)
    - `...`
  - `middlewares/` : Custom middlewares
  - `guards/` : Custom guards for authentication and authorization
  - `filters/` : Custom exception filters
  - `interceptors/` : Custom interceptors
  - `decorators/` : Custom decorators
  - `utils/` : Utility functions and helper classes
- `test/` : Test files and test-related configurations
- `.env` : Environment variables file
- `.gitignore` : Git ignore file
- `package.json` : Package.json file
- `tsconfig.json` : TypeScript configuration file
- `README.md` : Project README file

## Deployment

To deploy the Book Store API to a production environment, follow the deployment process suitable for your infrastructure and hosting provider. Ensure to set the appropriate environment variables and configure the necessary resources.

## Testing

To run the unit tests for the application, use the following command:

```bash
npm run test
```

This will execute the test cases and provide the test results, including code coverage information.

To run tests continuously and automatically re-run them whenever you make changes to the test or source code files, use the following command:

```bash
npm run test:watch
```

To run tests and generate code coverage reports, use the following command:

```bash
npm run test:cov
```

The coverage reports will be saved in the `coverage` directory.

To run tests in debug mode, use the following command:

```bash
npm run test:debug
```

This allowing you to debug your tests using breakpoints. You can use a debugger tool like Chrome DevTools to connect to the running tests and inspect the code execution.

To run end-to-end (e2e) tests using a custom Jest configuration file (jest-e2e.json), use the following command:

```bash
npm run test:e2e
```

This allows you to define separate configurations for e2e tests if needed.

## Troubleshooting

If you encounter any issues while using the Book Store API, consider the following troubleshooting steps:

1. Ensure that all the dependencies are installed correctly.
2. Verify that the database connection is properly configured.
3. Check the server logs for any error messages or warnings.

If the issue persists, please contact the project author for further assistance.

## About Stack

The Book Store API is built using the following technologies and frameworks:

- `NestJS`: A progressive Node.js framework for building efficient and scalable server-side applications.
- `TypeScript`: A typed superset of JavaScript that compiles to plain JavaScript.
  MongoDB: A popular NoSQL database used for storing and retrieving data.

## Configuration

The Book Store API can be configured using environment variables. The following variables can be set:

- `PORT`: The port number on which the API should listen (default: 3000).
- `MONGODB_URI`: The connection URI for the MongoDB database.
- `JWT_SECRET`: The secret key used for JWT (JSON Web Token) encryption.

  - Bellow code can be used to generate a random JWT Secret

    ```javascript
    require('crypto').randomBytes(64).toString('hex');
    ```

    > Run the following code in Node REPL

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
