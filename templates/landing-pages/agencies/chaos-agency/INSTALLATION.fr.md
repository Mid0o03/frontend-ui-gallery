# 🛠 Guide d'Installation

Suivez ces étapes pour configurer le template Chaos Agency sur votre machine locale.

## Prérequis

Assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (Version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Configuration Étape par Étape

1. **Extraire/Cloner les Fichiers**
   Décompressez l'archive ou clonez le dépôt sur votre machine locale.

2. **Naviguer dans le Répertoire**
   Ouvrez votre terminal et entrez dans le dossier du projet :
   ```bash
   cd chaos-agency
   ```

3. **Installer les Dépendances**
   Exécutez la commande suivante pour installer tous les paquets nécessaires :
   ```bash
   npm install
   ```

4. **Variables d'Environnement (Optionnel)**
   Le projet inclut un fichier `.env.local`. Vous pouvez y ajouter des variables d'environnement personnalisées si nécessaire.

5. **Lancer le Serveur de Développement**
   Lancez le projet en mode développement :
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur pour voir le résultat.

## Dépannage (Troubleshooting)

- **Erreur de version Node** : Si vous voyez des erreurs liées aux versions de Node, essayez d'utiliser un gestionnaire comme `nvm` pour passer à Node 18 ou 20.
- **Port déjà utilisé** : Si le port 5173 est occupé, Vite en utilisera automatiquement un autre. Vérifiez la sortie de la console.
- **Dépendances manquantes** : Si vous rencontrez des erreurs de type "Module not found", supprimez le dossier `node_modules` et le fichier `package-lock.json`, puis relancez `npm install`.

Pour toute assistance supplémentaire, contactez-nous à **contact@midodev.fr**.
