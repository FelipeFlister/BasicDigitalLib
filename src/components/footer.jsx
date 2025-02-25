import "../assets/css/home/footer.css"

export function Footer() {
    return (
        <footer>
            <div id="Credits">
                <img src="../src/assets/img/Icon.png" alt="" id="Header-Logo" />
                <span id="Authors">
                    <h4>Basic Digital Libray - Version: 0.1</h4>
                    <ul>
                        <a href="https://github.com/FelipeFlister" target="blank"><li>Felipe.F</li></a>
                        <li>João.P</li>
                        <li>Rafael.C</li>
                    </ul>
                    <h5>O Basic Digital Libray tem apenas fins educativos, confira o nosso <a href="../README.md">README</a></h5>
                </span>
            </div>
            <div id="Copy">
                <h4>Copyright © Basic Digital Libray ™</h4>
                <h5>2025</h5>
            </div>
            <div id="GitHub-Project">
                <a href="https://github.com/FelipeFlister/BasicDigitalLib" target="blank"><h4>Confira o projeto:</h4></a>
                <a href="https://github.com/FelipeFlister/BasicDigitalLib" target="blank"><img src="../src/assets/img/github-icon.png" alt="" id="GitHub-Logo" /></a>
            </div>
        </footer>
    )
}