import type { Pizza } from "../../types/pizza";
import { ingredients } from "../../data/ingredients";
import PizzaPreview from "../builder/PizzaPreview";

type PizzaCardProps = {
  pizza: Pizza;
};

export default function PizzaCard({ pizza }: PizzaCardProps) {
  // On transforme les id ("tomate") en vrais ingrédients pour avoir leur emoji et leur nom
  const pizzaIngredients = ingredients.filter(ingredient =>
    pizza.ingredientIds.includes(ingredient.id)
  );

  return (
    <article className="pizza-card">
      <PizzaPreview selectedIds={pizza.ingredientIds} size={180}/>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>

      <p className="pizza-ingredients">
        {pizzaIngredients.map(ingredient => ingredient.name).join(", ")}
      </p>

      <p className="price">{pizza.price.toFixed(2)} €</p>
    </article>
  );
}