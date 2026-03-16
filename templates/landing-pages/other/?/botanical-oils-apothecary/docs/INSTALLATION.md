# Installation Guide

Follow these steps to get your project up and running.

## Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 8.0.0 or higher.

## Setup Instructions

1. **Unzip the project**
   Extract the archive to your desired project directory.

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/config/`: Branding and content configuration.
- `src/components/`: Reusable UI components.
- `src/pages/`: Main application pages.
- `src/assets/`: Images and fonts.

## Troubleshooting

- **Module not found**: Ensure you ran `npm install`.
- **Port already in use**: Vite will automatically try the next available port, or you can use `npm run dev -- --port 3000`.
- **Styles missing**: Make sure Tailwind is correctly processing your CSS (check `index.css`).
