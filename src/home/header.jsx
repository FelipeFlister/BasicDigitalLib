import "../assets/css/home/header.css"
import { useState } from 'react'

export function Header() {

    const [isDarkModeOn , setDarkMode] = useState(false)
    const [logoDarkMode , setDarkModeLogo] = useState("dark_mode")
    function ChangeTheme() {
        setDarkMode(!isDarkModeOn)
        setDarkModeLogo(isDarkModeOn ? "dark_mode" : "brightness_5")
    }
    return (
        <header className={isDarkModeOn ? 'dark-mode' : 'light-mode'}>
            <div id="logo-nav">
                <img src="../src/assets/img/Icon.png" alt="" id="Header-Logo"/>
                <nav>
                    <ul>
                        <a href="">
                            <li>Pesquisa Avançada</li>
                        </a>
                        <a href="">
                            <li>Todas Categorias</li>
                        </a>
                    </ul>
                </nav>
            </div>
                
            <i className="material-icons" id="change-theme-btn" onClick={ChangeTheme}>{logoDarkMode}</i>
        </header>
    );
    
}

