import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-info mb-4">
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <h1 className="py-4 text-center text-light">🏠 Home</h1>
      </Link>
    </nav>
  );
};

export default Header;
