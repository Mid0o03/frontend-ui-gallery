# 🎨 Guide de Personnalisation - Lumina Botanicals

Lumina Botanicals est conçu pour être facilement personnalisé grâce à un système de configuration centralisé.

## 1. Identité de Marque (White-Label)

L'identité du site est gérée dans `config/branding.ts`.

- **Nom du Site** : Modifiez `name` pour le nom de votre marque.
- **Contact** : Mettez à jour `email`, `phone` et `address`.
- **Réseaux Sociaux** : Mettez à jour les URLs de vos profils.

## 2. Gestion du Contenu

Tous les textes, avantages et données produits se trouvent dans `config/content.ts`.

- **Section Hero** : Modifiez le titre, le sous-titre et les boutons d'appel à l'action.
- **Avantages** : Mettez à jour les icônes (via Material Symbols) et les descriptions de vos valeurs.
- **Produits** : Gérez votre liste de produits, y compris les noms, sous-titres, prix et URLs d'images.
- **Newsletter** : Personnalisez le texte du formulaire d'inscription.

## 3. Identité Visuelle (Couleurs et Polices)

Le thème visuel est contrôlé via Tailwind CSS dans `index.html`.

- **Fichier** : `index.html`
- **Emplacement** : Le script `tailwind.config` dans la balise `<head>`.
- **Couleur Primaire** : Modifiez `primary` pour votre couleur de marque (ex: `#f9f506`).
- **Couleurs de Surface** : Ajustez `background-light` et `background-dark` pour la cohérence du thème.
- **Polices** : Nous utilisons "Spline Sans" de Google Fonts. Vous pouvez la changer en mettant à jour le lien Google Fonts et la section `fontFamily`.

## 4. Images et Médias

- **Images Externes** : Utilisez des URLs absolues dans `config/content.ts`.
- **Images Locales** : Placez vos images dans le dossier `public/` et faites-y référence avec un slash (ex: `"/mon-logo.svg"`).

Besoin d'aide pour une personnalisation spécifique ? Contactez-nous à **contact@midodev.fr**.
