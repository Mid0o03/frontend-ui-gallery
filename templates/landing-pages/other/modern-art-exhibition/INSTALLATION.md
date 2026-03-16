# Installation Guide

Follow these steps to set up the Modern Art Exhibition template on your local machine.

## Prerequisites
- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 9.0.0 or higher.

## Step 1: Initial Setup
Extract the downloaded zip file into your project directory.

## Step 2: Install Dependencies
Open your terminal and run:
```bash
npm install
```

## Step 3: Launch Development Server
Run the following command to start the dev server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Step 4: Build for Production
When you are ready to deploy, run:
```bash
npm run build
```
The output files will be located in the `dist` folder.

## Troubleshooting
- **Node Modules error**: If you encounter issues during `npm install`, try deleting the `node_modules` folder and the `package-lock.json` file, then run `npm install` again.
- **Vite command not found**: Ensure you have run `npm install` correctly.
- **Port already in use**: Vite will automatically try to use the next available port (e.g., 5174).
