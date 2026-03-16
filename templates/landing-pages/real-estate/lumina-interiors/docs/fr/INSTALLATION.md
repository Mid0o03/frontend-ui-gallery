# Guide d'Installation

## Prérequis

*   **Node.js** : Version 16.0 ou supérieure
*   **npm** : Version 7.0 ou supérieure

## Installation Étape par Étape

1.  **Décompresser l'archive** :
    Extrayez le fichier `lumina-interiors.zip` téléchargé dans votre espace de travail.

2.  **Naviguer vers le répertoire du projet** :
    ```bash
    cd lumina-interiors
    ```

3.  **Installer les dépendances** :
    ```bash
    npm install
    ```

4.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Ouvrez votre navigateur et accédez à l'URL affichée dans le terminal (généralement `http://localhost:5173`).

## Dépannage

*   **Port déjà utilisé** : Si le port par défaut est occupé, Vite essaiera automatiquement le suivant. Vérifiez la sortie du terminal pour l'URL correcte.
*   **Module non trouvé** : Assurez-vous d'avoir exécuté `npm install` avec succès. Si les problèmes persistent, supprimez `node_modules` et `package-lock.json` et relancez `npm install`.
*   **Styles Tailwind non chargés** : Vérifiez que vous avez une connexion internet active si vous utilisez la version CDN, ou que `npm install` s'est terminé correctement pour la version locale.
