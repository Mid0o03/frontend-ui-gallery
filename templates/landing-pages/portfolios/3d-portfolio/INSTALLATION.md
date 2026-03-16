# Installation Guide

## Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

## Step-by-Step Installation

1.  **Unzip the project file**
    Extract the downloaded `3d-portfolio-template.zip` to your desired folder.

2.  **Open Terminal**
    Navigate to the project directory:
    ```bash
    cd path/to/3d-portfolio-template
    ```

3.  **Install Dependencies**
    Run the following command to install all necessary packages:
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start Development Server**
    Run the local development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Troubleshooting

- **Error: "command not found: npm"**
  - Make sure Node.js is installed correctly.

- **Dependency Conflicts**
  - Delete `node_modules` folder and `package-lock.json`, then run `npm install` again.
