import { useState } from "react";

function useFavorites() {
    // Stores our list of favorite countries.
    // The list starts empty when the component is first loaded.
    const [favorites, setFavorites] = useState([]);

    // Adds a country to the favorites list.
    // The country is only added if it is not already a favorite.
    function addFavorite(country) {
        if (!favorites.includes(country)) {
            setFavorites([...favorites, country]);
        }
    }

    // Removes a country from the favorites list.
    // filter() creates a new array containing every country
    // except the one we want to remove.
    function removeFavorite(country) {
        setFavorites(favorites.filter(item => item !== country));
    }

    // Make the state and our two functions available
    // to any component that uses this custom hook.
    return {
        favorites,
        addFavorite,
        removeFavorite
    };
}

export default useFavorites;