# Guide de Personnalisation

Personnaliser le template GrowthMastery est simple grâce à notre système de configuration centralisé.

## 🎨 Configuration du Branding

Ouvrez `config/branding.ts` pour mettre à jour les éléments suivants :

- **Nom du Site** : Modifiez `siteName` et `logo.text`.
- **Couleurs** : Mettez à jour l'objet `colors` pour correspondre à votre charte graphique.
- **Infos de Contact** : Définissez votre email et votre adresse.
- **Réseaux Sociaux** : Liez vos comptes Twitter, Facebook, LinkedIn, etc.
- **Support** : Définissez vos conditions de support (ex: "6 mois").

## ✍️ Configuration du Contenu

Ouvrez `config/content.ts` pour modifier tout le texte visible sur la page :

- **Barre de Notification** : Changez le texte de l'annonce en haut.
- **Section Hero** : Modifiez le titre, la description, le badge et le bouton d'appel à l'action.
- **Fonctionnalités (Features)** : Ajoutez ou supprimez des éléments de la section "Pourquoi nous choisir".
- **Programme (Curriculum)** : Décrivez les modules de votre cours.
- **Tarifs (Pricing)** : Définissez vos prix et les caractéristiques de vos plans.
- **Footer** : Mettez à jour les descriptions et les liens de fin.

## 🖼 Images

- **Image Hero** : Mettez à jour l'URL `hero.instructor.image` dans `content.ts`.
- **Avatars des Avis** : Modifiez le tableau `hero.reviews.avatars` avec les images de vos propres étudiants.
- **Favicon** : Remplacez `public/favicon.ico` par votre logo.

## 🔍 SEO & Métadonnées

Pour mettre à jour les métadonnées pour les moteurs de recherche et le partage social, ouvrez `index.html` et modifiez les balises `<meta>` dans la section `<head>`.
Mettez également à jour les informations de votre projet dans `package.json`.
