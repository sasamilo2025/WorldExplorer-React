function Favorites({ favorites, removeFavorite }) {
    // --------------------------------------------------
    // TEMPORARY DEBUG INFORMATION
    // --------------------------------------------------
    // Check whether Favorites.jsx is receiving the
    // updated favorites array from App.jsx through props.
    //console.log("Favorites page received:", favorites);

    // Receive the shared favorites state and the
    // removeFavorite function from App.jsx through props.

    return (
        <section className="container mt-4">

            {/* Page heading */}
            <h1>❤️ Favorite Countries</h1>

            {/* Display the current number of favorites */}
            <p>
                You currently have {favorites.length} favorite country/countries.
            </p>

            {/* If there are no favorites, show this message */}
            {favorites.length === 0 && (
                <p>
                    No favorite countries have been added yet.
                </p>
            )}

            {/* Display each favorite country */}
            {favorites.map((country) => (
                <div key={country} className="mb-2">

                    {/* Display the country name */}
                    <span>{country}</span>

                    {/* Remove the selected country */}
                    <button
                        onClick={() => removeFavorite(country)}
                        className="btn btn-danger btn-sm ms-2"
                    >
                        Remove
                    </button>

                </div>
            ))}

        </section>
    );
}

export default Favorites;