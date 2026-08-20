import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <main className="container mt-4">
                <h1>🌎 World Explorer</h1>
                <p>
                    Explore countries around the world.
                </p>
            </main>

            <Footer />
        </>
    );
}

export default App;