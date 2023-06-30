import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
        <a href="" classname="logo">MyBlogs</a>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    )
}