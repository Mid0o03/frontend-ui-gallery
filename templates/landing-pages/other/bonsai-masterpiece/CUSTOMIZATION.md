# Customization Guide / Guide de Personnalisation

## 🇬🇧 English

Bonsai Masterpiece is designed to be easily "white-labeled", meaning you can change the branding, text, and images without diving deep into the code.

### 1. Branding & Co. (`src/config/branding.ts`)
This file controls the global identity of the site.
- **`siteName`**: The name displayed in the header and metadata.
- **`tagline`**: Used in SEO and sometimes in the UI.
- **`contactEmail`**: Your contact email.
- **`socialLinks`**: Links to your social media profiles.
- **`colors`**: Modify `primary` and `secondary` hex codes here to change the branding color scheme across the site.

### 2. Text Content (`src/config/content.ts`)
All text content for the landing page is centralized here.
- **`hero`**: Title, subtitle, description for the top section.
- **`history`, `styles`, `care`**: Edit texts for these respective sections.
- **`gallery`**: Update titles and subtitles for gallery items.

### 3. Images (`src/assets/images/`)
To replace images:
1.  Place your new image in `src/assets/images/`.
2.  Open the component where the image is used (e.g., `components/Hero.tsx` or `constants.ts`).
3.  Update the import statement to point to your new filename.

### 4. Advanced Styling (Tailwind CSS)
If you need deeper design changes, edit `tailwind.config.js` (or in this template, the configuration inside `index.html` or `tailwind.config.ts`) to adjust the theme, fonts, and breakpoints.

---

## 🇫🇷 Français

Bonsai Masterpiece est conçu pour être facilement personnalisé ("white-label"), ce qui signifie que vous pouvez changer la marque, le texte et les images sans toucher au code complexe.

### 1. Marque & Identité (`src/config/branding.ts`)
Ce fichier contrôle l'identité globale du site.
- **`siteName`** : Le nom affiché dans l'en-tête et les métadonnées.
- **`colors`** : Modifiez les codes hexadécimaux `primary` et `secondary` ici pour changer la palette de couleurs du site.

### 2. Contenu Texte (`src/config/content.ts`)
Tout le contenu textuel est centralisé ici.
- Modifiez les objets `hero`, `history`, `styles`, etc. pour mettre à jour les textes sans risque de casser la mise en page.

### 3. Images (`src/assets/images/`)
Pour remplacer les images :
1.  Placez votre nouvelle image dans `src/assets/images/`.
2.  Ouvrez le fichier du composant concerné (ex: `components/Hero.tsx`).
3.  Mettez à jour l'import pour pointer vers votre nouveau fichier.
