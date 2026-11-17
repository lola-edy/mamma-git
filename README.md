# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

🍕 Mamma Mia Lab

La pizzeria où chaque pizza peut cacher un secret.

Mamma Mia Lab est un site de pizzeria réalisé avec React et TypeScript. On peut consulter la carte, mais surtout composer sa propre pizza ingrédient par ingrédient. Certaines combinaisons déclenchent des pizzas secrètes (easter eggs) avec des effets visuels.

Lancer le projet

Il faut avoir Node.js installé.

bash
npm install
npm run dev

Puis ouvrir l'adresse affichée dans le terminal (en général http://localhost:5173).

Fonctionnalités
Accueil : un compteur des pizzas secrètes découvertes (ex. 2 / 5). Les secrets non trouvés restent cachés (« 🔒 ??? »).
La carte : les pizzas sont affichées à partir d'un fichier de données, chacune avec un dessin, ses ingrédients et son prix.
Crée ta pizza :
choix des ingrédients avec des boutons (un clic pour ajouter, un autre pour retirer) ;
dessin de la pizza en direct : la sauce et les ingrédients apparaissent dessus ;
prix calculé automatiquement (pâte à 6 € + ingrédients) ;
bouton « Valider la pizza », puis « Faire une autre pizza » pour recommencer.
Après validation, trois résultats possibles :
une pizza secrète avec son effet animé ;
une pizza de la carte reconnue (« Tu as recréé la Margherita ! ») ;
une création libre.
5 pizzas secrètes à trouver, chacune avec son effet : étoiles qui tombent, flammes, pluie de larmes, fantômes avec la page qui tremble, feuilles zen.
Love mode 💖 : quand toutes les pizzas secrètes sont découvertes, tout le site passe en rose avec des cœurs.
Organisation du code
src/
├── types/        les types TypeScript (Ingredient, Pizza, EasterEgg)
├── data/         les données : ingrédients, pizzas de la carte, easter eggs
├── utils/        la fonction qui cherche un easter egg
├── components/   les composants réutilisables, rangés par thème
│   ├── layout/   Header (navigation)
│   ├── menu/     PizzaCard
│   ├── builder/  IngredientButton, PizzaPreview
│   └── effects/  EffectDisplay, Particles
├── pages/        Home, Menu, Builder
└── App.tsx       choix de la page affichée et état partagé
Le choix technique dont je suis le plus satisfaite

Les easter eggs sont des données, pas du code.

Au lieu d'écrire une suite de if (pepperoni && ananas) dans les composants, chaque pizza secrète est un objet dans data/easterEggs.ts :

ts
{
  id: "hawaii-paillettes",
  title: "Pizza Paillettes ✨",
  message: "Pepperoni et ananas ? Tu as osé. On respecte.",
  requiredIds: ["pepperoni", "ananas"],
  exact: true,
  effect: "glitter",
}

Une seule fonction, findEasterEgg, compare les ingrédients choisis avec cette liste. Pour ajouter une pizza secrète, il suffit d'ajouter un objet dans ce fichier : le compteur de l'accueil se met à jour tout seul, et TypeScript vérifie que l'effet demandé existe bien.

Dans le même esprit, un seul composant Particles sert à tous les effets : il reçoit en props les emojis, leur nombre et leur direction.

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
