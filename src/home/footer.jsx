import "../assets/css/home/footer.css"

export function Footer() {
    return (
        <footer>
            <div>
                <img src="../src/assets/img/Icon.png" alt="" id="Header-Logo" />
                <span>
                    <h4>Basic Digital Libray - Version: 0.1</h4>
                    <ul>
                        <li>Felipe.F</li>
                        <li>João.P</li>
                        <li>Rafael.C</li>
                    </ul>
                    <q>O Basic Digital Libray tem apenas fins educativos, confira o nosso <a href="../README.md">README</a></q>
                </span>
            </div>
            <div>
                <h4>Copyright © Basic Digital Libray ™</h4>
                <h5>2025</h5>
            </div>
            <div>
                <h4>Confira o projeto:</h4>
                <a href=""><img src="../src/assets/img/github-icon.png" alt="" id="Header-Logo" /></a>
            </div>
                
        </footer>
    )
}