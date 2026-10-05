import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
            </main>
            <Footer />

        </>
    );
}

export default App;