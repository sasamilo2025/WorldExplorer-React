function Contact() {
    return (
        <section className="container mt-4">

            {/* --------------------------------------------------
                PAGE HEADING
                💬 represents modern communication/contact.
                mb-1 keeps the description close to the heading.
            -------------------------------------------------- */}
            <h1 className="display-5 fw-bold text-dark mb-1">
                💬 Contact World Explorer
            </h1>

            {/* --------------------------------------------------
                PAGE DESCRIPTION
                Bold description matches the Home, Countries,
                and Favorites pages.
                mb-4 provides comfortable spacing below it.
            -------------------------------------------------- */}
            <p
                className="lead mb-4"
                style={{ fontWeight: "700" }}
            >
                Get in touch with the World Explorer team.
            </p>

        </section>
    );
}

export default Contact;