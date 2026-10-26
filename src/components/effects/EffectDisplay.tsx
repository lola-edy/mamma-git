import type { EasterEgg } from "../../types/pizza";
import Particles from "./Particles";
import "./effects.css";

// Ce composant reçoit une seule prop : le nom de l'effet à afficher.
// EasterEgg["effect"] = le type de la propriété "effect" d'un EasterEgg,
// donc forcément "glitter", "flames", "cursed", "zen" ou "cry".
type EffectDisplayProps = {
  effect: EasterEgg["effect"];
};

export default function EffectDisplay({ effect }: EffectDisplayProps) {
  // Le switch choisit quoi afficher selon le nom de l'effet
  switch (effect) {
    case "glitter":
      // Étoiles qui tombent
      return <Particles emojis={["✨", "⭐", "💫", "🌟"]} count={60} direction="fall" />;

    case "flames":
      // Fond orange qui vacille + flammes qui montent
      return (
        <>
          <div className="overlay overlay-flames" />
          <Particles emojis={["🔥"]} count={40} direction="rise" />
        </>
      );

    case "cursed":
      // Bords sombres + crânes, fantômes et chauves-souris qui flottent
      return (
        <>
          <div className="overlay overlay-cursed" />
          <Particles emojis={["💀", "👻", "🦇"]} count={25} direction="float" />
        </>
      );

    case "cry":
      // Fond bleu + pluie de larmes
      return (
        <>
          <div className="overlay overlay-cry" />
          <Particles emojis={["💧", "💧", "😭"]} count={50} direction="fall" />
        </>
      );

    case "zen":
      // Fond vert qui respire + feuilles qui flottent
      return (
        <>
          <div className="overlay overlay-zen" />
          <Particles emojis={["🍃", "🕊️", "🧘"]} count={15} direction="float" />
        </>
      );
  }
}

/*switch : c’est comme une suite de if (effect === "glitter") ... else if (effect === "flames") ..., mais en plus lisible.
Les props de Particles : c’est ici qu’on décide des emojis, du nombre et de la direction. Particles ne fait qu’exécuter.
<> ... </> : un fragment. Un return ne peut renvoyer qu’un seul élément, et le fragment permet d’en regrouper deux (le fond et les particules) sans ajouter de div inutile.
"💧", "💧", "😭" : le 💧 est écrit deux fois pour qu’il y ait deux fois plus de gouttes que de visages qui pleurent. Ça vient du modulo dans createParticles.*/