# Installation Guide

Follow these steps to set up the BentoGrid SaaS template on your local machine.

## 1. Prerequisites

- **Node.js**: Version 18 or higher.
- **npm** or **yarn**.
- **Supabase Account**: For authentication and database.
- **Stripe Account**: For payment processing.

## 2. Setup

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add your credentials:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 3. Supabase Configuration

1. Create a new project in Supabase.
2. Enable **Email Auth** in the Authentication settings.
3. (Optional) Set up Google/GitHub OAuth providers.

## 4. Stripe Configuration

1. Go to the Stripe Dashboard.
2. Create your products and pricing plans.
3. Copy the `Price ID` for each plan and paste them into `src/pages/Pricing.tsx`.

## 5. Running the App

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Troubleshooting

- **ImportMeta Errors**: Ensure you are using Vite and the `import.meta.env` syntax is correctly handled by your IDE.
- **Blank Page**: Check the console for any initialization errors related to Supabase or Stripe keys.

Need help? Contact [contact@midodev.fr](mailto:contact@midodev.fr)
