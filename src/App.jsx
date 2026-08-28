import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";

import useFavorites from "./hooks/useFavorites";

import "./App.css";

function App() {

    // --------------------------------------------------
    // FAVORITES CUSTOM HOOK
    // --------------------------------------------------
    // The custom Hook manages the favorites state and
    // the functions used to add and remove countries.
    //
    // App uses the Hook because both Countries and
    // Favorites need access to the same favorites data.
    // --------------------------------------------------
    const {
        favorites,
        addFavorite,
        removeFavorite
    } = useFavorites();

    return (
        <>
            {/* Navigation appears on every page */}
            <Navbar />

            <Routes>

                {/* Home page */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Countries receives the addFavorite function */}
                <Route
                    path="/countries"
                    element={
                        <Countries
                            addFavorite={addFavorite}
                        />
                    }
                />

                {/* Favorites receives the shared favorites data
                    and the removeFavorite function */}
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            removeFavorite={removeFavorite}
                        />
                    }
                />

                {/* Contact page */}
                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Routes>

            {/* Footer appears on every page */}
            <Footer />
        </>
    );
}

export default App;