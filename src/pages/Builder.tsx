import EffectDisplay from "../components/effects/EffectDisplay";
import { useState } from "react";
import type { EasterEgg } from "../types/pizza";
import { ingredients } from "../data/ingredients";
import { easterEggs } from "../data/easterEggs";
import { findEasterEgg } from "../utils/findEasterEgg";
import { pizzas } from "../data/pizzas";

const BASE_PRICE = 6;

export default function Builder() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]); //liste des ingredients choisis
  const [isValidated, setIsValidated] = useState(false); //la personne a t'elle validée?
  const [egg, setEgg] = useState<EasterEgg | undefined>(undefined); // easter egg trouvé si il y en a un

  const total = ingredients
    .filter((ingredient) => selectedIds.includes(ingredient.id))
    .reduce((sum, ingredient) => sum + ingredient.price, BASE_PRICE);

  const matchingPizza = pizzas.find(
    (pizza) =>
      pizza.ingredientIds.length === selectedIds.length &&
      pizza.ingredientIds.every((id) => selectedIds.includes(id)), // si les pizz   ont les meme ingredients que une dans la liqte alors on prends l'id
  );

  function handleToggle(clickedId: string) {
    //interrupteur
    if (selectedIds.includes(clickedId)) {
      setSelectedIds(
        selectedIds.filter((ingredientId) => ingredientId !== clickedId),
      );
    } else {
      setSelectedIds([...selectedIds, clickedId]);
    }
    setIsValidated(false);
    setEgg(undefined);
  }

  function handleValidate() {
    setEgg(findEasterEgg(selectedIds, easterEggs));
    setIsValidated(true);
  }
  function handleReset() {
    //remet tout comme au depart
    setSelectedIds([]);
    setIsValidated(false);
    setEgg(undefined);
  }

  return (
    <>
      {isValidated && egg && <EffectDisplay effect={egg.effect} />}
      <div className={egg?.effect === "cursed" ? "shake" : ""}>
        <h1>Crée ta pizza</h1>

        <div>
          {ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              onClick={() => handleToggle(ingredient.id)}
              style={{
                fontWeight: selectedIds.includes(ingredient.id)
                  ? "bold"
                  : "normal",
              }}
            >
              {ingredient.emoji} {ingredient.name}
            </button>
          ))}
        </div>

        <p>
          Prix préparation : {BASE_PRICE} € — Total : {total} €
        </p>

        {!isValidated && (
          <button onClick={handleValidate}>Valider la pizza</button>
        )}

        {isValidated && egg && (
          <div className="result">
            <h2>{egg.title}</h2>
            <p>{egg.message}</p>
          </div>
        )}

        {isValidated && !egg && matchingPizza && (
          <div className="result">
            <h2>Tu as recréé la {matchingPizza.name} ! 🍕</h2>
            <p>{matchingPizza.description}</p>
          </div>
        )}

        {isValidated && !egg && !matchingPizza && (
          <p>Ta création est prête ! 🍕</p>
        )}

        {isValidated && (
          <button className="result" onClick={handleReset}>
            Faire une autre pizza
          </button>
        )}
      </div>
    </>
  );
}
