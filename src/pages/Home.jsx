function Home() {
    return (
        <section className="container mt-4">

            {/* --------------------------------------------------
                PAGE HEADING
                🌍 globe emoji is included with the heading.
                mb-1 keeps the description close to the heading.
            -------------------------------------------------- */}
            <h1 className="display-5 fw-bold text-dark mb-1">
                🌎 World Explorer
            </h1>

            {/* --------------------------------------------------
                PAGE DESCRIPTION
                The description is bold to match the
                Favorites and Countries pages.
                mb-4 provides comfortable spacing below it.
            -------------------------------------------------- */}
            <p
                className="lead mb-4"
                style={{ fontWeight: "700" }}
            >
                Explore countries around the world.
            </p>

        </section>
    );
}

export default Home;