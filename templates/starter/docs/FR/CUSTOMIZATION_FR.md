# Guide de Personnalisation

Ce template est conçu pour être facilement personnalisé grâce à des fichiers de configuration centralisés.

## 1. Branding & Identité

Modifiez `src/config/branding.ts` pour mettre à jour :
- **Nom du Site**: Changez le titre et le texte du logo.
- **Couleurs**: Mettez à jour les couleurs d'accentuation primaires.
- **Infos de Contact**: Configurez votre email et vos liens réseaux sociaux.
- **SEO**: Mettez à jour les balises meta par défaut.

## 2. Contenu des Pages

Modifiez `src/config/content.ts` pour changer le texte de :
- Section Hero (Badge, Titre, Description, Boutons)
- Features (Titres, Descriptions)
- Stats (Valeurs et Libellés)
- Tarification (Titres, Descriptions des plans)
- FAQ (Questions et Réponses)
- Footer (Copyright et description)

## 3. Personnalisation Avancée

### Tailwind CSS
Les styles globaux et les extensions de thème se trouvent dans `index.html` (dans la balise `<script>` pour la version CDN).

### Images
Remplacez les images actuelles en ajoutant vos fichiers dans le dossier `public/` et en mettant à jour les chemins `src` dans les composants.

### Flux d'Authentification
La logique pour Supabase Auth se trouve dans `src/pages/Login.tsx` et `src/pages/Signup.tsx`.

### Logique de Paiement
La redirection Stripe est gérée dans `src/pages/Pricing.tsx`.

Besoin d'aide ? Contactez [contact@midodev.fr](mailto:contact@midodev.fr)
