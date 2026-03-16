# Guide de Personnalisation

DevStore est conçu pour être facilement adaptable. Vous pouvez le mettre aux couleurs de votre marque en quelques minutes.

## 1. Branding (Logo, Couleurs, Nom)

Modifiez le fichier [config/branding.ts](config/branding.ts) pour mettre à jour :
- `siteName` : Le nom de votre entreprise.
- `logo` : L'icône (Material Symbols) et le texte.
- `colors` : Les jetons de couleurs primaires.
- `socials` : Liens vers vos profils sociaux.
- `owner` : Vos détails personnels ou d'entreprise.

## 2. Contenu Textuel

Modifiez le fichier [config/content.ts](config/content.ts) pour mettre à jour :
- **Section Hero** : Titres, descriptions et labels des boutons.
- **Galerie** : En-têtes de section.
- **Services** : Listes de caractéristiques et statistiques.
- **Contact** : Labels du formulaire et messages.
- **Footer** : Texte du copyright.

## 3. Produits/Templates

Pour ajouter ou modifier des templates dans la galerie :
1. Ouvrez le composant [components/TemplateGallery.tsx](components/TemplateGallery.tsx).
2. Localisez le tableau `templates`.
3. Ajoutez ou modifiez des objets avec `title`, `techStack`, `price`, et `imageUrl`.

## 4. Styles Visuels (Tailwind)

Les styles sont définis dans `index.html` via le script de configuration Tailwind. Vous pouvez y étendre le thème ou modifier les valeurs de couleur pour correspondre aux codes hexadécimaux exacts de votre marque.

## Support :
Si vous avez besoin d'aide pour personnaliser ce template, contactez-nous à [contact@midodev.fr](mailto:contact@midodev.fr).
