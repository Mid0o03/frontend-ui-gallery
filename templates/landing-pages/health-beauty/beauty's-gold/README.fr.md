# Beauty's Gold - Template de Landing Page Premium

<div align="center">

![Aperçu Beauty's Gold](docs/screenshots/hero-section.png)

**Un template de landing page luxueux et animé pour les instituts de beauté, les spas et les centres de bien-être**

[Démo en Direct](#) • [Documentation](#documentation) • [Support](#support)

[![License](https://img.shields.io/badge/license-Commercial-gold)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-38bdf8)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Latest-88ce02)](https://greensock.com/gsap/)

[English](README.md) • **Français**

</div>

---

## ✨ Fonctionnalités

- 🎨 **Design Premium** - Esthétique de luxe avec mode sombre et accents dorés
- ⚡ **Animations Fluides** - Animations propulsées par GSAP (performance 60fps)
- 📱 **Entièrement Responsable** - Parfait sur tous les appareils et tailles d'écran
- 🎯 **Optimisé pour le SEO** - Balises meta, Open Graph et HTML sémantique
- 🔧 **Personnalisation Facile** - Fichiers de configuration centralisés
- 🎭 **Prêt pour le White-Label** - Rebranding rapide avec les fichiers de config
- ⚛️ **Stack Moderne** - React 19, TypeScript, Vite, Tailwind CSS
- 🚀 **Prêt pour la Production** - Build optimisé, temps de chargement rapides

## 🎬 Démo en Direct

**[Voir la Démo en Direct →](#)** *(Bientôt disponible)*

## 📸 Captures d'Écran

<details>
<summary>Cliquez pour voir les captures d'écran</summary>

### Section Hero
![Hero Section](docs/screenshots/hero-section.png)

### Section Services
![Services](docs/screenshots/services-section.png)

### Vue Mobile
![Mobile](docs/screenshots/mobile-view.png)

</details>

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

1. **Téléchargez et extrayez** les fichiers du template

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Lancez le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur :**
   ```
   http://localhost:3000
   ```

Et voilà ! Le template fonctionne maintenant localement. 🎉

## 📚 Documentation

- **[Guide d'Installation](INSTALLATION.fr.md)** - Instructions de configuration détaillées
- **[Guide de Personnalisation](CUSTOMIZATION.fr.md)** - Comment personnaliser les couleurs, le contenu et la marque
- **[Guide des Animations](ANIMATIONS.fr.md)** - Travailler avec les animations GSAP
- **[Guide de Déploiement](DEPLOYMENT.fr.md)** - Déployer sur Vercel, Netlify ou votre propre hébergement

## 🎨 Personnalisation

### Changement Rapide de l'Identité Visuelle

Toute l'identité visuelle est centralisée dans `config/branding.ts` :

```typescript
export const BRANDING = {
  siteName: "Votre Nom de Marque",
  colors: {
    primary: "#votre-couleur",
    // ...
  },
  contact: {
    email: "votre@email.com",
    // ...
  }
}
```

### Mises à jour du Contenu

Tout le contenu textuel est dans `config/content.ts` :

```typescript
export const CONTENT = {
  hero: {
    title: "Votre Titre",
    subtitle: "Votre sous-titre",
    // ...
  }
}
```

**[Lire le guide de personnalisation complet →](CUSTOMIZATION.fr.md)**

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| **React 19** | Framework UI |
| **TypeScript** | Sécurité de typage |
| **Vite** | Outil de build & serveur dev |
| **Tailwind CSS** | Stylisation |
| **GSAP** | Animations |
| **React Router** | Navigation |

## 📦 Contenu du Paquet

```
beauty's-gold-landing-page/
├── config/              # Configuration de l'identité et du contenu
├── src/
│   ├── components/      # Composants React
│   ├── hooks/          # Hooks React personnalisés (GSAP)
│   ├── pages/          # Composants de page
│   └── types.ts        # Types TypeScript
├── public/             # Actifs statiques
├── docs/               # Documentation & captures d'écran
└── README.fr.md        # Ce fichier
```

## 🌐 Support Navigateur

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## 📄 Licence

Ceci est un **template commercial**. Voir [LICENSE](LICENSE) pour les conditions complètes.

**En résumé :**
- ✅ Utilisation pour des projets clients illimités
- ✅ Modifier et personnaliser librement
- ❌ Pas de redistribution ou de revente
- ❌ Pas d'utilisation SaaS sans licence étendue

## 💬 Support

Besoin d'aide ? Nous sommes là pour vous !

- 📧 **Email :** support@yourtemplate.com
- 📖 **Documentation :** [Docs complètes](CUSTOMIZATION.fr.md)
- 🐛 **Problèmes :** Signaler les bugs par email

## 🎯 Idéal Pour

- Instituts de beauté & spas
- Centres de bien-être
- Salons de luxe
- Studios d'architecture
- Entreprises de services premium

## 🔄 Mises à jour

Ce template reçoit des mises à jour régulières. Consultez [CHANGELOG.md](CHANGELOG.md) pour l'historique des versions.

---

<div align="center">

**Fait avec ❤️ pour les professionnels de la beauté**

[Commencer](#démarrage-rapide) • [Voir la Démo](#) • [Documentation](CUSTOMIZATION.fr.md)

</div>
