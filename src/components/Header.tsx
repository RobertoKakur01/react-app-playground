import computer from "../assets/computer.png"

export function Header() {
    return (
        <header>
            <h1>Meine Webseite</h1>
            <div>
                <img src={computer} alt="" className="navbar" />
                <nav className="horizontal-navbar">
                    <ul>
                        <a href="/">Home</a>
                        <br />
                        <a href="Content">Lebenslauf</a>
                        <br />
                        <a href="Contact">Contact</a>
                        <br />
                        {/*  < a href="Products">Produkte</a><br /> */}
                        <a href="Apicall">APiCall</a>
                    </ul>
                </nav>
            </div>
            <hr />
        </header>
    );
}
