function Favorites({ favorites, removeFavorite }) {
    // --------------------------------------------------
    // RECEIVE DATA FROM APP.JSX
    // --------------------------------------------------
    // favorites contains the countries selected by the user.
    // removeFavorite removes a selected country from the
    // shared favorites list in App.jsx.

    return (
        <section className="container mt-4">

            {/* --------------------------------------------------
                PAGE HEADING
                mb-1 keeps the description close to the heading.
            -------------------------------------------------- */}
            <h1 className="display-5 fw-bold text-dark mb-1">
                Favorites ❤️
            </h1>

            {/* --------------------------------------------------
                PAGE DESCRIPTION
                mb-4 creates space between the description
                and the favorites counter.
                fontWeight makes the description bold.
            -------------------------------------------------- */}
            <p
                className="lead mb-4"
                style={{ fontWeight: "700" }}
            >
                Your favorite countries, all in one place.
            </p>

            {/* --------------------------------------------------
                FAVORITES COUNTER
                favorites.length shows the current number
                of selected favorite countries.
            -------------------------------------------------- */}
            <p>
                You currently have {favorites.length} favorite country/countries.
            </p>

            {/* --------------------------------------------------
                EMPTY FAVORITES MESSAGE
                This appears when no countries have been
                selected as favorites.
            -------------------------------------------------- */}
            {favorites.length === 0 && (
                <p>
                    No favorite countries have been added yet.
                </p>
            )}

            {/* --------------------------------------------------
                FAVORITE COUNTRIES
                Each selected country is displayed horizontally.

                Details displayed:
                1. Country name
                2. Country flag
                3. Population
                4. Region
                5. Remove button
            -------------------------------------------------- */}
            {favorites.map((country) => (
                <div
                    key={country.name}
                    className="d-flex align-items-center gap-3 border rounded p-3 mb-3"
                >

                    {/* Country name */}
                    {/*<strong className="flex-grow-1">*/}
                     <strong>
                        {country.name}
                    </strong>

                    {/* Country flag */}
                    <img
                        src={country.flags?.svg}
                        alt={`Flag of ${country.name}`}
                        style={{
                            width: "60px",
                            height: "40px",
                            objectFit: "cover"
                        }}
                    />

                    {/* Country population */}
                    <span>
                        <strong>Population:</strong>{" "}
                        {country.population?.toLocaleString()}
                    </span>

                    {/* Country region */}
                    <span>
                        <strong>Region:</strong> {country.region}
                    </span>

                    {/* Remove button - always last */}
                    <button
                        onClick={() => removeFavorite(country)}
                        className="btn btn-danger btn-sm"
                    >
                        Remove
                    </button>

                </div>
            ))}

        </section>
    );
}

export default Favorites;