import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p> Page not found.</p>
      <Link to={"/"}>Return to home page.</Link>
    </div>
  );
};

export default NotFound;
