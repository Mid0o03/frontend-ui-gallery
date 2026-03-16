# Guide d'Installation

Suivez ces étapes pour configurer le template BentoGrid SaaS sur votre machine locale.

## 1. Prérequis

- **Node.js**: Version 18 ou supérieure.
- **npm** ou **yarn**.
- **Compte Supabase**: Pour l'authentification et la base de données.
- **Compte Stripe**: Pour le traitement des paiements.

## 2. Configuration

### Installer les Dépendances
```bash
npm install
```

### Variables d'Environnement
Créez un fichier `.env` à la racine et ajoutez vos identifiants :
```bash
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
VITE_STRIPE_PUBLISHABLE_KEY=votre_cle_stripe_publique
STRIPE_SECRET_KEY=votre_cle_stripe_secrete
```

## 3. Configuration Supabase

1. Créez un nouveau projet dans Supabase.
2. Activez **Email Auth** dans les paramètres d'Authentification.
3. (Optionnel) Configurez les fournisseurs OAuth Google/GitHub.

## 4. Configuration Stripe

1. Allez sur le Dashboard Stripe.
2. Créez vos produits et tarifs.
3. Copiez l' `ID de tarif` (Price ID) pour chaque plan et collez-les dans `src/pages/Pricing.tsx`.

## 5. Lancer l'Application

### Développement
```bash
npm run dev
```

### Build de Production
```bash
npm run build
```

## Dépannage

- **Erreurs ImportMeta**: Assurez-vous d'utiliser Vite et que la syntaxe `import.meta.env` est correctement gérée par votre IDE.
- **Page Blanche**: Vérifiez la console pour toute erreur d'initialisation liée aux clés Supabase ou Stripe.

Besoin d'aide ? Contactez [contact@midodev.fr](mailto:contact@midodev.fr)
