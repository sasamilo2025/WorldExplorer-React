function Countries({ addFavorite }) {

    // Receive the addFavorite function from App.jsx.
    // App owns the actual favorites state.
    // Countries only needs to request that a country
    // be added to that shared list.

    // Temporary country data for testing our
    // Favorites functionality.
    const countries = ["Samoa", "Fiji", "New Zealand"];

    return (
        <section className="container mt-4">

            {/* Page heading */}
            <h1>🌎 Explore Countries</h1>

            <p>
                Discover countries from around the world.
            </p>

            {/* Display our temporary country list */}
            {countries.map((country) => (
                <div key={country} className="mb-2">

                    {/* Display country name */}
                    <span>{country}</span>

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