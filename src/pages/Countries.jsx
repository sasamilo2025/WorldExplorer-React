    import { useEffect, useState } from "react";
    import { getCountries } from "../services/countryService";

    function Countries({ addFavorite }) {
    // Stores the country data received from the API.
    // It starts as an empty array because the API
    // has not returned any countries yet.
    const [countries, setCountries] = useState([]);
    
    // Runs when the Countries page loads.
    // It asks our service to retrieve the country data
    // from the external API.
    useEffect(() => {

        getCountries()
            .then((data) => {
                // Store the API results in React state.
                setCountries(data);
            })
            .catch((error) => {
                // Display any API error in the browser console.
                console.error("Error loading countries:", error);
            });

    }, []);

    // Receive the addFavorite function from App.jsx.
    // App owns the actual favorites state.
    // Countries only needs to request that a country
    // be added to that shared list.

    return (
        <section className="container mt-4">

            {/* Page heading */}
            <h1>🌎 Explore Countries</h1>

            <p>
                Discover countries from around the world.
            </p>

            {/* Display our temporary country list */}
            {countries.map((country) => (
                <div key={country.name} className="mb-2">

                    {/* Display country name */}
                    <span>{country.name}</span>

                    {/* Add the selected country to Favorites */}
                    <button
                        onClick={() => addFavorite(country)}
                        className="btn btn-primary btn-sm ms-2"
                    >
                        ❤️ Favorite
                    </button>

                </div>
            ))}

        </section>
    );
}

export default Countries;