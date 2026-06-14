import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ cart }) {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <h1 className="title">Souled Store 🎃</h1>
                <Link to="/cart">Cart ({cart.length}) </Link>
            </nav>
        </>
    )
}
export default Navbar;