import {useState} from "react";

type ParticlesProps ={
    emojis: string[];
    count:number;
    direction:"fall"|"rise"|"float";
};

type Particle={
    id: number;
    emoji: string;
    left:number; //position horizontale en %
    delay:number;// attente avant de demarer en sec
    duration:number;// duree du passage
    size:number;//taille
}

function createParticles(emojis:string[],count:number):Particle[]{
    const particles: Particle[]=[]; //on part d'une liste vide

    for (let i = 0; i<count ;i++){
        particles.push({
            id:i,
            emoji: emojis[i % emojis.length],
            left: Math.random() * 100,
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 3,
            size: 1 + Math.random() * 1.5,
        })
    }
    return particles;
}

export default function Particles({ emojis, count, direction }: ParticlesProps) {
    
  // les positions sont tirées au hasard une seule fois, à l'apparition du composant
  const [particles] = useState(() => createParticles(emojis, count));
  // useState garde la liste des particules en mémoire.
  // Le () => fait que createParticles n'est appelée qu'UNE fois, au premier affichage :
  // les positions au hasard ne changent donc pas quand le composant se redessine.
  // On ne prend que la valeur (pas de setParticles) car on ne modifie jamais la liste.

  return (
    // Calque qui couvre tout l'écran et contient toutes les particules
    <div className="effect-layer">
    {/* On transforme chaque particule de la liste en un <span> affiché à l'écran */}
      {particles.map(particle => (
        <span
          key={particle.id}
          className={`particle ${direction}`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}rem`,//taille de l'emoji
          }}
        >
        {/*l'emoji affiché*/}
          {particle.emoji}
        </span>
      ))}
    </div>
  );
}