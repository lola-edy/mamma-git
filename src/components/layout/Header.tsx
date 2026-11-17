import type {Page} from "../../App";
import "./Header.css";

type HeaderProps ={
    currentPage: Page;
    onNavigate:(page:Page)=>void;//fonction pour changer de page
};

export default function Header({currentPage, onNavigate}: HeaderProps) {
    return(
        <header className="header">
            <button className="logo" onClick={()=>onNavigate("home")}> 🍕 Mamma Mia Lab</button>
            <nav>
                <button
                className={currentPage==="menu"?"active":""}
                onClick={()=>onNavigate("menu")}>
                    La carte
                </button>
                <button className={currentPage==="builder"?"active":""}
                onClick={()=>onNavigate("builder")}
                >
                    Crée ta pizza
                </button>
            </nav>
        </header>
    );
}