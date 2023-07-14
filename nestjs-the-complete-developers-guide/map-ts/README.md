# Map TS

This project is part of the "NestJS: The Complete Developer's Guide" course and focuses on the basics of TypeScript. It is a TypeScript project that utilizes the Google Maps JavaScript API to build a map and add a custom marker to it. The project utilizes the Parcel build tool for building and running the application.

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

Before getting started with the project, ensure you have the following prerequisites:

- Node.js and npm installed on your machine.
  - Node.js (version 14 or later)
  - npm (version 7 or later)
- A Google Maps API key. You can obtain one by following the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Installation

To install and set up the project, follow these steps:

1. Clone the sandbox repository to your local machine

   ```bash
   git clone git@github.com:faiyazkhan024/sandbox.git
   ```

2. Navigate to the project directory

   ```bash
   cd sandbox/nestjs-the-complete-developers-guide/map-ts
   ```

3. Install the project dependencies

   ```bash
    npm install
   ```

## Usage

- **To start the server, run the following command in the project directory:**

  ```bash
  npm start
  ```

  This will start the development server at <http://localhost:1234>. You can view the project in your web browser by navigating to this URL.

- **To build the project for production, run the following command:**

  ```bash
  npm run build
  ```

> Explore the project code in the `src` directory. You can modify and experiment with the code to further customize the map and marker functionality.

## Project Structure

The project follows a standard structure for a TypeScript project. Here's an overview of the main directories and files:

`map-ts/`  
 ├── `src/` : Contains the project's source code.  
 │ ├── `app.ts` : Main script being called in index.html.  
 │ ├── `Company.ts` : Handles company initialization.  
 │ ├── `Map.ts` : Handles map initialization and marker creation.  
 │ └── `User.ts` : Handles user initialization.  
 ├── `.gitignore` : Specifies files and directories to ignore in Git.  
 ├── `index.html` : Entry point of the application.  
 ├── `main.css` : CSS styles for the app.  
 ├── `package.json` : Project dependencies and scripts.  
 ├── `README.md` : Project documentation.  
 └── `tsconfig.json` : TypeScript configuration file.

## Deployment

To deploy the project to a production environment, follow these steps:

1. Build the production-ready application bundle:

   ```bash
    npm run build
   ```

   > This command will generate a `dist` directory with the bundled files.

2. Copy the contents of the dist directory to your web server or hosting platform.

3. Configure your web server to serve the index.html file as the entry point of your application.

## Testing

Currently, there are no specific tests provided for this project. However, you can write your own tests using testing frameworks such as Jest or Cypress to cover any additional functionality or customizations you make to the code.

## Troubleshooting

If you encounter any issues or errors while working with the project, consider the following steps:

- Make sure you have the latest version of Node.js and npm installed.
- Make sure you have installed all the project dependencies using the npm install command.
- Double-check your Google Maps API key and ensure it is correctly configured.
- Check for any error messages or warnings in the browser console and the terminal output.
- Consult the documentation or seek help from the course resources or community forums.

## About Stack

- **[Typescript](https://www.typescriptlang.org/)**: is a superset of JavaScript that adds type annotations to the language. It provides better type checking and code analysis than plain JavaScript, and can help catch errors before they occur at runtime.
- **[Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)**: It lets you customize maps with your own content and imagery for display on web pages and mobile devices. It features four basic map types (roadmap, satellite, hybrid, and terrain) which you can modify using layers and styles, controls and events, and various services and libraries.
- **[Parcel](https://parceljs.org/)**: A fast and zero-config bundler that simplifies the build process for web applications. Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.

## Configuration

- `tsconfig.json`: This is the configuration file for Typescript, a superset of JavaScript that adds type annotations to the language. It defines how Typescript should compile the project, including which files to include and exclude, and which version of JavaScript to target.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
