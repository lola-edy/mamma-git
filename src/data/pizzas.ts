import type {Pizza} from "../types/pizza";

export const pizzas: Pizza[] = [
  {id: "margherita",
    name: "Margherita",
    description: "La classique : tomate, mozzarella et basilic frais.", ingredientIds: ["tomate", "mozzarella", "basilic"],
    price: 9.5
  },
  {id: "fromage",
    name: "Fromage",
    description: "Les produits laitiers sont nos amis pour la vie! : mozzarella et chevre", 
    ingredientIds: ["chevre", "mozzarella"],
    price: 11.5
  },
  {id: "reine",
    name: "Reine",
    description: "La meilleure: tomate, mozzarella, champignon et basilic frais.", 
    ingredientIds: ["tomate", "mozzarella", "champignon","basilic"],
    price: 10.5
  },
  {id: "chevre-miel",
    name: "Chèvre miel",
    description: "Pour ceux qui n'aiment pas la classique", ingredientIds: ["chevre", "miel"],
    price: 11.5
  },
  {id: "latotale",
    name: "La totale",
    description: "Tous ensemble on est plus fort (ou pas)", 
    ingredientIds: ["tomate", "mozzarella", "chevre","pepperoni","ananas","basilic","piment","chocolat","anchois","champignon","miel"],
    price: 20
  },
];
