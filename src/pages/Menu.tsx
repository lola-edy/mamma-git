import { pizzas } from "../data/pizzas";
import PizzaCard from "../components/menu/PizzaCard";
import "../components/menu/menu.css";

export default function Menu() {
  return (
    <div>
      <h1>Notre carte</h1>

      <div className="pizza-list">
        {pizzas.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}