// --------------------------------------------------
// COUNTRY CARD COMPONENT
// --------------------------------------------------
// This reusable component is responsible for displaying
// information about ONE country.
//
// Countries.jsx will provide the country object through
// props.
// --------------------------------------------------

function CountryCard({ country, addFavorite }) {

    // --------------------------------------------------
    // COUNTRY DATA
    // --------------------------------------------------
    // The country object comes from the external API.
    //
    // For example:
    // country.name
    // country.capital
    // country.region
    // country.population
    // country.flags
    // --------------------------------------------------
   
    return (
        <div className="card h-100">
            {/* Country flag */}
    {/* Display the SVG flag when available.
        Fall back to PNG if the SVG URL is missing.*/} 
    <img
        src={country.flags?.svg || country.flags?.png}
        className="card-img-top"
        style={{ height: "180px", objectFit: "contain" }}
        alt={`Flag of ${country.name}`}
/>
            <div className="card-body">

                {/* Country name */}
                <h5 className="card-title">
                    {country.name}
                </h5>

               {/* Country population */}
               {/* Format large population numbers with thousands separators.
               If population is unavailable, display a clear fallback. */}

            <p className="card-text">
                Population: {country.population?.toLocaleString() || "N/A"}
            </p>  

                {/* Country region */}
                <p className="card-text">
                    Region: {country.region}
                </p>

                {/* Country currency */}
                {/*currencies is an array, so [0] accesses the first currency.
                 Optional chaining keeps the card safe if currency data is missing. */}
          
                <p className="card-text">
                    Currency: {country.currencies?.[0]
                ? `${country.currencies[0].name} (${country.currencies[0].symbol})`
                : "N/A"}
                </p>

                {/* Add country to Favorites */}
                <button
                    onClick={() => addFavorite(country)}
                    className="btn btn-primary"
                >
                    ❤️ Favorite
                </button>

            </div>
        </div>
    );
}

export default CountryCard;