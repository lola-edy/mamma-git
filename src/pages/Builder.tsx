import { useState } from "react";
import type { EasterEgg } from "../types/pizza";
import { ingredients } from "../data/ingredients";
import { easterEggs } from "../data/easterEggs";
import { findEasterEgg } from "../utils/findEasterEgg";

export default function Builder() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);//liste des ingredients choisis
  const [isValidated, setIsValidated] = useState(false);//la personne a t'elle validée?
  const [egg, setEgg] = useState<EasterEgg | undefined>(undefined);// easter egg trouvé si il y en a un
  const BASE_PRICE = 6;

  const total = ingredients
    .filter(ingredient => selectedIds.includes(ingredient.id))
    .reduce((sum, ingredient) => sum + ingredient.price, BASE_PRICE);

  function handleToggle(clickedId: string) {//interrupteur
    if (selectedIds.includes(clickedId)){
        setSelectedIds(selectedIds.filter(ingredientId => ingredientId !== clickedId) )
    } else {
        setSelectedIds([...selectedIds,clickedId])
    }
    setIsValidated(false);
    setEgg(undefined);
  }

  function handleValidate() {
    setEgg(findEasterEgg(selectedIds, easterEggs));
    setIsValidated(true);
  }

  return (
    <div>
      <h1>Crée ta pizza</h1>

      <div>
        {ingredients.map(ingredient => (
          <button
            key={ingredient.id}
            onClick={() => handleToggle(ingredient.id)}
            style={{ fontWeight: selectedIds.includes(ingredient.id) ? "bold" : "normal" }}
          >
            {ingredient.emoji} {ingredient.name}
          </button>
        ))}
      </div>

      <p>Prix préparation : {BASE_PRICE} € — Total : {total} €</p>

      <button onClick={handleValidate}>Valider la pizza</button>

      {isValidated && egg && (
        <div>
          <h2>{egg.title}</h2>
          <p>{egg.message}</p>
          <p>(effet : {egg.effect})</p>
        </div>
      )}

      {isValidated && !egg && <p>Ta création est prête ! 🍕</p>}
    </div>
  );
}