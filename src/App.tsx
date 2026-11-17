import { useState } from "react";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Builder from "./pages/Builder";
import {easterEggs} from "./data/easterEggs";
import Particles from "./components/effects/Particles";

export type Page = "home" | "menu" | "builder";

export default function App() {
  const [page, setPage] = useState<Page>("home"); // la page affichée
  const [discoveredIds, setDiscoveredIds]= useState<string[]>([]);
  const [isEffectPlaying, setIsEffectPlaying] = useState(false); // un effet d'easter egg est-il affiché ?
  const allFound = discoveredIds.length === easterEggs.length && !isEffectPlaying; // tous les secrets trouvés ?
  function handleDiscover(eggId:string){
    if(!discoveredIds.includes(eggId)){
      setDiscoveredIds([...discoveredIds,eggId])
    }
  }

  function handleNavigate(newPage: Page) {
  setPage(newPage);
  setIsEffectPlaying(false); // en changeant de page, l'effet du Builder disparaît
}





  return (
    <div className={allFound?"love-mode":""}>
      {allFound && <div className="love-bg"/>}
      {allFound && <Particles emojis={["💖","💘","💕"]} count={30} direction="float"/>}

      <Header currentPage={page} onNavigate={handleNavigate} />

      {page === "home" && <Home discoveredIds={discoveredIds}/>}
      {page === "menu" && <Menu />}
      {page === "builder" && <Builder onDiscover={handleDiscover} onEffectChange={setIsEffectPlaying}/>}
    </div>
  );
}