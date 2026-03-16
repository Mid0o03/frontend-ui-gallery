# 🛠 Installation Guide

Follow these steps to set up the Chaos Agency template on your local machine.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Step-by-Step Setup

1. **Extract/Clone the Files**
   Unzip the archive or clone the repository to your local machine.

2. **Navigate to the Directory**
   Open your terminal and enter the project folder:
   ```bash
   cd chaos-agency
   ```

3. **Install Dependencies**
   Run the following command to install all necessary packages:
   ```bash
   npm install
   ```

4. **Environment Variables (Optional)**
   The project includes a `.env.local` file. You can add any custom environment variables there if needed.

5. **Start Development Server**
   Launch the project in development mode:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Troubleshooting

- **Node Version Error**: If you see errors related to Node versions, try using a version manager like `nvm` to switch to Node 18 or 20.
- **Port Already in Use**: If port 5173 is busy, Vite will automatically use another one. Check the console output.
- **Missing Dependencies**: If you encounter "Module not found" errors, delete the `node_modules` folder and `package-lock.json`, then run `npm install` again.

For further assistance, reach out at **contact@midodev.fr**.
