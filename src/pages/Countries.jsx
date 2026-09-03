import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import CountryCard from "../components/CountryCard";

function Countries({ addFavorite }) {
  // Stores the country data received from the API.
  // It starts as an empty array because the API
  // has not returned any countries yet.
  // this useState is updated when the API returns data.
  const [countries, setCountries] = useState([]);

  // Stores the text entered by the user in the country search box.
  // It starts empty so all countries are displayed initially.
  // this useState is updated whenever the user types in the search box.
  const [searchTerm, setSearchTerm] = useState("");

  // Runs when the Countries page loads.
  // It asks our service to retrieve the country data
  // from the external API.
  //
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

  // Creates the list of countries that should be displayed.
  // The original countries array remains unchanged.
  // Search is only applied when the user has entered 3 or more characters.

  const filteredCountries =
    searchTerm.length >= 3
      ? countries.filter((country) =>
          country.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
        )
      : countries;

  return (
    <section className="container mt-4">
      {/* Page heading */}
      <h1 className="display-5 fw-bold text-dark mb-1">Explore Countries 🌍</h1>

      {/* Page description */}
      <p className="lead mb-4" style={{ fontWeight: "700" }}>
        Discover countries from around the world.
      </p>

      <div className="mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* Display each country using our reusable CountryCard */}
      <div className="row g-4">
        {filteredCountries.map((country) => {
          // Each country is displayed in a column.
          // Return the JSX for each country
          return (
            <div key={country.name} className="col-md-4">
              <CountryCard country={country} addFavorite={addFavorite} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Countries;
