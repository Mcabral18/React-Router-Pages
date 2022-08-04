import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="posts">Posts</Link>
            <Link to="inputs">Inputs</Link>
        </div>
    );
}

export default Nav;