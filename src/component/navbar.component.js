import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <Link className="navbar-brand" to="/products"> Products </Link>
            <Link className="navbar-brand" to="/">Home </Link>
            <Link className="navbar-brand" to="/movies">Posts </Link>
            <Link className="navbar-brand" to="/log-in">Log In</Link>
            <Link className="navbar-brand" to="/sign-up">Sign Up</Link>
        </nav>
    );
}

export default Navbar;
