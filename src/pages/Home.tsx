import { easterEggs } from "../data/easterEggs";

type HomeProps = {
  discoveredIds: string[];
};

export default function Home({ discoveredIds }: HomeProps) {
  return (
    <div>
      <h1>Bienvenue chez Mamma Mia Lab</h1>
      <p>La pizzeria où chaque pizza peut cacher un secret…</p>

      <h2>
        Pizzas secrètes découvertes : {discoveredIds.length} / {easterEggs.length}
      </h2>

      <ul className="secret-list">
        {easterEggs.map(egg => (
          <li key={egg.id}>
            {discoveredIds.includes(egg.id) ? egg.title : "🔒 ???"}
          </li>
        ))}
      </ul>
    </div>
  );
}