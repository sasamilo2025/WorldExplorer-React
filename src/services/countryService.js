// --------------------------------------------------
// COUNTRY SERVICE
// --------------------------------------------------
// This file is responsible for communicating with
// the external country API.
//
// Keeping the API code here means our React pages
// do not need to know the API URL or how the request
// is made.
// --------------------------------------------------

const COUNTRIES_API_URL =
    "https://countries.dev/countries?fields=name,capital,region,population,flags,currencies";

// --------------------------------------------------
// GET COUNTRIES
// --------------------------------------------------
// Fetches country data from the external API.
//
// async/await allows us to wait for the API response
// before continuing.
// --------------------------------------------------

export async function getCountries() {

    // Send a request to the country API.
    const response = await fetch(COUNTRIES_API_URL);

    // Check whether the server responded successfully.
    if (!response.ok) {
        throw new Error("Failed to fetch countries.");
    }

    // Convert the response into JavaScript data.
    const data = await response.json();

    // Return the country data to the component
    // that requested it.
    return data;
}