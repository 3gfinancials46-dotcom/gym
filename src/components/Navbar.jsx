import "./Navbar.css";

function Navbar() {
    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="brand">
                        <h2>ROY PRATT</h2>
                        <span>Certified Fitness Trainer</span>
                    </div>

                    <nav className="nav-menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#plans">Plans</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            <button className="menu-btn">
            ☰
            </button>
        </>
    );
}

export default Navbar;