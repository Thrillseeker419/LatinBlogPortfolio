import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p> Page not found.</p>
      <Link to={"/"}>Return to home page.</Link>
    </div>
  );
};

export default NotFound;
