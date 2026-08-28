import { useState } from "react";

function useFavorites() {
    // Stores our list of favorite countries.
    // The list starts empty when the component is first loaded.
    const [favorites, setFavorites] = useState([]);

    // Adds a country to the favorites list.
    // The country is only added if it is not already a favorite.
    
    function addFavorite(country) {
    // Check whether this country is already
    // in the Favorites list.
    if (!favorites.includes(country)) {

        // If it is not already there, add it.
        setFavorites([...favorites, country]);

    } else {

        // If it is already there, tell the user.
        alert(`${country.name} is already in your Favorites!`);
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