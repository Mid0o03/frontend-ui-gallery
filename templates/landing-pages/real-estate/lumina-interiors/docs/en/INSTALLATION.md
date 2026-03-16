# Installation Guide

## Prerequisites

*   **Node.js**: Version 16.0 or higher
*   **npm**: Version 7.0 or higher

## Step-by-Step Installation

1.  **Unzip the archive**:
    Extract the downloaded `lumina-interiors.zip` file to your desired workspace.

2.  **Navigate to the project directory**:
    ```bash
    cd lumina-interiors
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Troubleshooting

*   **Port already in use**: If the default port is busy, Vite will automatically try the next available port. Check the terminal output for the correct URL.
*   **Module not found**: Ensure you have run `npm install` successfully. If issues persist, delete `node_modules` and `package-lock.json` and try `npm install` again.
*   **Tailwind Styles not loading**: Ensure you have an active internet connection if using the CDN version, or that `npm install` finished correctly for the local version.
