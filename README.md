# FC Squad Builder

Un mini squad builder inspiré de l'interface Ultimate Team d'**EA Sports FC 26** (FC 26), réalisé avec **React** et **CSS Grid**.

Permet de visualiser une équipe sur un terrain avec différentes formations (4-2-3-1, 4-3-3, etc.) et des cartes joueurs stylisées.

## Fonctionnalités

- Affichage d'un terrain de football avec positions des joueurs
- Support de plusieurs formations (actuellement : 4-2-3-1 et 4-3-3)
- Changement de formation via boutons
- Cartes joueurs avec rating, position, nom, club et nationalité
- Style inspiré des cartes FC 26 (fond sombre, bordure dorée, glow)

## Technologies utilisées

- React (Create React App ou Vite)
- CSS Grid pour le positionnement des joueurs
- CSS pur (pas de Tailwind ou Material UI)

## Prérequis

- Node.js ≥ 18
- npm ou yarn

## Installation

1. Clone le dépôt (ou dézippe le dossier) :

   ```bash
   git clone <ton-repo-url>
   cd react-squad-builer-template
2. Installe les dépendances :
    ```bash
    npm install
    # ou
    yarn install
3. Lance l'application en mode développement :
    ```bash
    npm start
    # ou
    yarn start

Utilisation

Clique sur les boutons "4-2-3-1" ou "4-3-3" pour changer de formation
Les joueurs sont placés automatiquement selon la formation choisie
Pour le moment, les données des joueurs sont codées en dur dans App.js

## Personnalisation
### Ajouter / modifier des joueurs
Dans src/App.js, modifie le tableau players :
    ```bash
    const players = [
    { id: 1, position: 'GK', rating: 88, name: 'Courtois', club: 'Real de Madrid', nationality: 'Belgium' },
    // ajoute ou modifie ici...
    ];
## Ajouter une nouvelle formation
Dans src/Pitch.js, ajoute une entrée dans l'objet formations :
    ```bash
    '4-4-2': {
    positions: [
        // définis les positions grid pour chaque joueur (11 au total)
    ]
    }
Puis ajoute un bouton dans App.js.
## Changer l'image du terrain
Remplace l'URL dans src/App.css :
    ```bash
    .pitch {
    background: url('/path/to/ton-image-terrain.jpg') center/cover no-repeat;
    }


## Améliorations possibles

Intégrer une API (FUTBIN, EA FC DB, etc.) pour charger de vrais joueurs
Ajouter le drag & drop (avec react-dnd)
Calculer la chimie entre joueurs (liens verts/oranges/rouges)
Sauvegarde / chargement d'équipes (localStorage)
Affichage des stats détaillées sur hover
Support mobile / responsive
Ajout d'images de joueurs / drapeaux / logos de clubs