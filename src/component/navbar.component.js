import { Link } from "react-router-dom";
import getCurrentUser from "../service/authService.service";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark  bg-secondary bg-gradient ">
            <Link className="navbar-brand" to="/">
                Home{" "}
            </Link>
            <Link className="navbar-brand" to="/posts">
                Posts{" "}
            </Link>

            {
                console.log(getCurrentUser())
            }

            <div>
                {!getCurrentUser() && (
                    <>
                        <Link className="navbar-brand" to="/log-in">
                            Log In
                        </Link>
                        <Link className="navbar-brand" to="/sign-up">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>

            <div>
                {getCurrentUser() && (
                    <>
                        <p>
                            {getCurrentUser().username}
                        </p>
                        <Link className="navbar-brand" to="/log-out">Log Out</Link>
                    </>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
