import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const onResetData = (e: any) => {
    localStorage.removeItem("applicationState");
    window.location.pathname = "/LatinBlogPortfolio";
    alert("All data has been reset to its original state");
  };

  return (
    <div className="ultimate-parent">
      <div className="header-outlet-parent">
        <nav className="nav-bar ui secondary menu">
          <Link
            role="link"
            to="/LatinBlogPortfolio"
            title="Home page"
            aria-label="Home page"
            className={location.pathname === "/" ? "active item" : "item"}
          >
            Home
          </Link>
          <Link
            role="link"
            to={"/LatinBlogPortfolio/Posts"}
            title="Search all posts"
            aria-label="Search all posts"
            className={location.pathname === "/Posts" ? "active item" : "item"}
          >
            Posts
          </Link>
          <Link
            role="link"
            to="/LatinBlogPortfolio/Authors"
            title="View all authors"
            aria-label="View all authors"
            className={
              location.pathname === "/Authors" ? "active item" : "item"
            }
          >
            Authors
          </Link>
          <Link
            role="link"
            to={"/LatinBlogPortfolio/Posts/Create?userId=2"}
            title="Create a new post"
            aria-label="Create new post"
            className={
              location.pathname === "/Posts/Create" ? "active item" : "item"
            }
          >
            Create
          </Link>

          {/* Future feature <div className="ui dropdown item">
    <i className="dropdown icon"></i>
    Display Options
    <div className="menu">
      <div className="header">Text Size</div>
      <a className="item">Small</a>
      <a className="item">Medium</a>
      <a className="item">Large</a>
    </div>
  </div> */}
          <div className="right menu">
            <div className="item" style={{ marginRight: "40px" }}>
              <button
                title="Reset all data"
                aria-label="Reset all data"
                className=" ui button compact primary"
                onClick={onResetData}
              >
                {" "}
                <i className="undo alternate icon"></i>Reset
              </button>
            </div>
          </div>
        </nav>

        <main className="App">
          <Outlet />
        </main>

        <footer className="website-footer">
          <div className="container">
            <div className="ui stackable three column grid">
              <section className="column">
                <h1>About</h1>
                <p className="text-justify">
                  This is a demo website that allows you to create, search for,
                  and delete posts. You can view author information as well. It
                  is built using the latest React, React-Router, Redux, Axios,
                  and Fomantic UI and operates using a mock api. It was built
                  with accessibility, responsiveness, and aesthetics in mind.
                  Enjoy!
                </p>
              </section>

              <section className="column">
                <h1>Technologies</h1>
                <ul className="footer-link">
                  <li>
                    <a
                      title="Link to Javascript docs"
                      aria-label="Link to Javascript docs"
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    >
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to React docs"
                      aria-label="Link to React docs"
                      href="https://reactjs.org/"
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Redux docs"
                      aria-label="Link to Redux docs"
                      href="https://redux.js.org/"
                    >
                      Redux
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Redux Toolkit docs"
                      aria-label="Link to Redux Toolkit docs"
                      href="https://redux-toolkit.js.org/"
                    >
                      Redux Toolkit
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Redux Thunk docs"
                      aria-label="Link to Redux Thunk docs"
                      href="https://github.com/reduxjs/redux-thunk"
                    >
                      Redux-Thunk
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Typescript docs"
                      aria-label="Link to Typescript docs"
                      href="https://www.typescriptlang.org/"
                    >
                      Typescript
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Fomantic UI docs"
                      aria-label="Link to Fomantic UI docs"
                      href="https://fomantic-ui.com/"
                    >
                      Fomantic UI
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to React Router docs"
                      aria-label="Link to React Router docs"
                      href="https://reactrouter.com/en/main"
                    >
                      React Router
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Axios docs"
                      aria-label="Link to Axios docs"
                      href="https://www.npmjs.com/package/axios"
                    >
                      Axios
                    </a>
                  </li>
                </ul>
              </section>

              <section className="column">
                <h1>Helpful Links</h1>
                <ul className="footer-link">
                  <li>
                    <a
                      title="Link to the code base"
                      aria-label="Link to the code base"
                      href="https://github.com/Thrillseeker419/LatinBlogPortfolio"
                    >
                      Code Repository
                    </a>
                  </li>
                  <li>
                    <a
                      title="Email Thomas"
                      aria-label="Email Thomas"
                      href="mailto:tommy.loalbo@gmail.com"
                    >
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a
                      title="Link to Thomas's LinkedIn"
                      aria-label="Link to Thomas's LinkedIn"
                      href="https://www.linkedin.com/in/thomas-loalbo-230054b9/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="ui stackable two column grid">
              <div className="column">
                <p className="copyright-text">
                  Copyright &copy; 2022 All Rights Reserved.
                </p>
              </div>

              <div className="column">
                <ul className="social-links">
                  <li>
                    <a
                      title="Email Thomas"
                      aria-label="Email Thomas"
                      className="google"
                      href="mailto:tommy.loalbo@gmail.com"
                    >
                      <i className="google icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="github"
                      title="Link to the code base"
                      aria-label="Link to the code base"
                      href="https://github.com/Thrillseeker419/LatinBlogPortfolio"
                    >
                      <i className="github icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="stackoverflow"
                      title="Link to Thomas's StackOverflow"
                      aria-label="Link to Thomas's stack overflow"
                      href="https://stackoverflow.com/users/4526910/thrillseeker419"
                    >
                      <i className="stack overflow icon"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedIn"
                      title="Link to Thomas's LinkedIn"
                      aria-label="Link to Thomas's LinkedIn"
                      href="https://www.linkedin.com/in/thomas-loalbo-230054b9/"
                    >
                      <i className="linkedin icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
