import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    🌎 World Explorer
                </NavLink>

                <div className="navbar-nav ms-auto">

                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>

                    <NavLink className="nav-link" to="/countries">
                        Explore
                    </NavLink>

                    <NavLink className="nav-link" to="/favorites">
                        Favorites
                    </NavLink>

                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;