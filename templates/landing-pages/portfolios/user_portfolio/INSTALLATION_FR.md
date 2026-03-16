# Guide d'Installation

Suivez ces étapes pour configurer PortfolioOS sur votre machine locale.

## Prérequis

- **Node.js**: Version 16.x ou supérieure.
- **npm**: Version 7.x ou supérieure (inclus avec Node.js).
- **Git**: Pour cloner le dépôt.

## Configuration Étape par Étape

1. **Cloner le projet**:
   ```bash
   git clone <url-du-depot>
   cd user_portfolio
   ```

2. **Installer les dépendances**:
   Nous recommandons d'utiliser `npm` pour garantir la compatibilité.
   ```bash
   npm install
   ```

3. **Configuration de l'Environnement**:
   Copiez le fichier d'exemple si fourni:
   ```bash
   cp .env.example .env.local
   ```

4. **Lancer le Serveur de Développement**:
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Dépannage

### L'installation `npm install` échoue
- Assurez-vous d'utiliser une version supportée de Node.js (`node -v`).
- Essayez de vider le cache npm: `npm cache clean --force`.
- Supprimez `node_modules` et `package-lock.json`, puis relancez `npm install`.

### Les styles sont absents ou corrompus
- Assurez-vous que Tailwind CSS est correctement initialisé.
- Vérifiez si `index.css` est importé dans `index.tsx`.

### Commande Vite non trouvée
- Relancez `npm install` pour vous assurer que tous les binaires sont dans `node_modules/.bin`.

Pour toute aide supplémentaire, contactez le support à **contact@midodev.fr**.
