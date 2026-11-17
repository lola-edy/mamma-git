import type { Ingredient } from "../../types/pizza";

type IngredientButtonProps = {
  ingredient: Ingredient;
  isSelected: boolean;             // est-ce que cet ingrédient est choisi ?
  onToggle: (id: string) => void;  // fonction à appeler quand on clique
};

export default function IngredientButton({ ingredient, isSelected, onToggle }: IngredientButtonProps) {
  return (
    <button
      className={isSelected ? "ingredient-btn selected" : "ingredient-btn"}
      onClick={() => onToggle(ingredient.id)}
      aria-pressed={isSelected}  // indique aux lecteurs d'écran si le bouton est activé
    >
      {isSelected && <span className="check">✓</span>}
      {ingredient.emoji} {ingredient.name}
    </button>
  );
}