import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthorData } from "./PostData";
const Test = () => {
  const { param1 } = useParams();
  useEffect(() => {
    document.title = 'The Communal Latin Blog';
  }, []);
  return (
    <section className="home-section">
      <h1 className="ui center aligned icon header">
        <i className="circular book open icon"></i>
        The Communal Latin Blog
      </h1>
      <div className="single-post-container">
        <article className="single-post ui piled segment ">
          <p className="single-post-body">
            Welcome to The Communal Latin Blog! The community gathers here to
            practice their latin. Share your latin thoughts with the world.
            Connect with others. Enjoy learning another language by sharing
            stories with one another.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Test;
