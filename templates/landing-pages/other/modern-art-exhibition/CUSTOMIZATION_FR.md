# Guide de Personnalisation

Ce template est conçu pour être facilement personnalisable via deux fichiers de configuration.

## 1. Branding & Identité
Ouvrez `config/branding.ts` pour mettre à jour :
- **Nom du site** : Change le titre dans le pied de page et les balises meta.
- **Couleurs** : Mettez à jour les couleurs primaires, secondaires et d'arrière-plan.
- **Infos de contact** : Définissez votre email officiel.
- **Réseaux sociaux** : Liez vos profils professionnels.
- **SEO** : Mettez à jour le titre, la description et les mots-clés pour les moteurs de recherche.

## 2. Contenu Texte & Images
Ouvrez `config/content.ts` pour mettre à jour :
- **Navigation** : Modifiez les libellés et liens du menu.
- **Section Hero** : Changez les titres principaux, sous-titres et l'image mise en avant.
- **Galerie** : Mettez à jour les numéros de section, les images et les alts.
- **Footer** : Mettez à jour les dates d'exposition, les détails du lieu et le texte de la newsletter.

## 3. Personnalisation Avancée
### Styles
Le template utilise Tailwind CSS via CDN. Vous pouvez trouver la configuration principale dans `index.html`. Pour des modifications CSS locales, utilisez `index.css`.

### Composants
Tous les composants UI se trouvent dans le dossier `components/`. Ils sont construits avec React et sont hautement modulaires.
