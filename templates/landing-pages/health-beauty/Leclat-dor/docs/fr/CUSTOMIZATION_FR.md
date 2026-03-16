# Guide de Personnalisation

L'une des meilleures fonctionnalités de ce template est sa **configuration en marque blanche**. Vous n'avez pas besoin de modifier les composants React pour changer l'identité du site.

[English Version](../en/CUSTOMIZATION.md)

## 🛠️ Configuration Centralisée

Tout le contenu est géré dans le dossier `/config`.

### 1. Marque (`config/branding.ts`)
Modifiez ce fichier pour changer l'identité et les coordonnées :
- **`name`** : Votre nom de marque (ex: "L'Éclat d'Or").
- **`phone` / `email`** : Informations de contact affichées dans l'en-tête et le pied de page.
- **`location`** : Votre adresse physique.
- **`socials`** : Liens vers votre Instagram, Facebook, etc.

### 2. Contenu (`config/content.ts`)
Modifiez ce fichier pour changer les textes du site :
- **Hero** : Titre, sous-titre et texte du bouton d'appel à l'action.
- **Philosophie** : Votre section "À propos" et votre vision.
- **Services** : Descriptions et images pour chaque catégorie de soin.
- **CTA** : La dernière section d'appel à l'action avant le pied de page.

## 🎨 Design

Le template utilise **Tailwind CSS**. Vous trouverez les définitions de couleurs et de polices dans :
- `index.html` (sous `tailwind.config`)
- Pour les utilisateurs avancés, vous pouvez modifier le bloc script de `index.html` pour changer la couleur dorée principale ou les jetons de fond sombre.

## 🖼️ Images

Nous vous recommandons d'utiliser des images de haute qualité provenant d'Unsplash ou vos propres photos professionnelles. Remplacez simplement les URLs dans `config/content.ts`.

---

[Retour au README](../../README_FR.md)
