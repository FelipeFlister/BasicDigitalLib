// src/home/header.jsx
import "../assets/css/home/header.css";
import { Link } from "react-router-dom"; // Importar Link do react-router-dom

export function Header() {
    return (
        <header>
            <div id="logo-nav">
                <img src="../src/assets/img/Icon.png" alt="" id="Header-Logo" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Pesquisa Avançada</Link>
                        </li>
                        <li>
                            <Link to="/about">Todas Categorias</Link> {/* Link para About */}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
