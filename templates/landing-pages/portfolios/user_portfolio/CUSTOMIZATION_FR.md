# Guide de Personnalisation

PortfolioOS facilite la personnalisation de votre portfolio grâce à des fichiers de configuration centralisés.

## 🎨 Configuration du Branding

Modifiez `config/branding.ts` pour changer l'identité visuelle de votre site :

- **name** : Votre nom complet.
- **role** : Votre titre professionnel.
- **email** : Votre adresse e-mail de contact.
- **colors** : Ajustez les couleurs primaire, noir terminal et arrière-plan.
- **socials** : Liez vos profils GitHub, Twitter et LinkedIn.
- **siteMetadata** : Informations SEO (titre, description, mots-clés).

## 📝 Configuration du Contenu

Modifiez `config/content.ts` pour changer le contenu textuel :

- **terminal** : Tout le texte à l'intérieur de la fenêtre terminal, y compris :
  - Messages de bienvenue.
  - Données "Whoami" (stack, statut, localisation).
  - Liste des projets (nom, stack technique, descriptions).
  - Libellés et indicateurs du formulaire de contact.
- **sidebar** : Libellés de l'explorateur et éléments du menu.
- **statusBar** : Langue, encodage et messages d'état.

## 🖼️ Images & Favicons

- **Favicon** : Remplacez `public/favicon.ico` par votre propre icône.
- **Image OG** : Remplacez `public/og-image.png` par votre image d'aperçu pour les réseaux sociaux.
- **Icônes de projet** : Les icônes sont fournies par Lucide React. Vous pouvez les modifier dans la liste des projets dans `config/content.ts`.

## 🛠️ Style Avancé

Pour des modifications profondes de la mise en page ou des animations, modifiez :
- `App.tsx` : Structure principale et superposition CRT.
- `index.css` : Styles globaux et animations de l'effet CRT.
- Les fichiers des composants individuels dans `components/`.

Besoin d'aide pour une personnalisation poussée ? Contactez-nous à **contact@midodev.fr**.
