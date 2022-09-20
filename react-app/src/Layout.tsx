import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const onResetData = (e: any) => {
    localStorage.removeItem("applicationState");
    window.location.pathname = "/";
    alert("All data has been reset to its original state");
  };

  return (
    <div className="ultimate-parent">
      <nav className="ui secondary menu">
        <Link
          role="link"
          to="/"
          className={location.pathname === "/" ? "active item" : "item"}
        >
          Home
        </Link>
        <Link
          role="link"
          to={"/Posts"}
          className={location.pathname === "/Posts" ? "active item" : "item"}
        >
          Posts
        </Link>
        <Link
          role="link"
          to="/Authors"
          className={location.pathname === "/Authors" ? "active item" : "item"}
        >
          Authors
        </Link>
        <Link
          role="link"
          to={"/Posts/Create?userId=2"}
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
          <div className="item">
            <button className="ui button primary" onClick={onResetData}>
              {" "}
              <i className="undo alternate icon"></i>Reset Data
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
                and delete posts. You can view author information as well. It is
                built using the latest React, React-Router, Redux, Axios, and
                Fomantic UI and operates using a mock api. It was built with
                accessibility, responsiveness, and aesthetics in mind. Enjoy!
              </p>
            </section>

            <section className="column">
              <h1>Technologies</h1>
              <ul className="footer-link">
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    Javascript
                  </a>
                </li>
                <li>
                  <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                  <a href="https://redux.js.org/">Redux</a>
                </li>
                <li>
                  <a href="https://redux-toolkit.js.org/">Redux Toolkit</a>
                </li>
                <li>
                  <a href="https://github.com/reduxjs/redux-thunk">
                    Redux-Thunk
                  </a>
                </li>
                <li>
                  <a href="https://www.typescriptlang.org/">Typescript</a>
                </li>
                <li>
                  <a href="https://fomantic-ui.com/">Fomantic UI</a>
                </li>
                <li>
                  <a href="https://reactrouter.com/en/main">React Router</a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/axios">Axios</a>
                </li>
              </ul>
            </section>

            <section className="column">
              <h1>Helpful Links</h1>
              <ul className="footer-link">
                <li>
                  <a href="https://github.com/Thrillseeker419/LatinBlogPortfolio">Code Repository</a>
                </li>
                <li>
                  <a href="mailto:tommy.loalbo@gmail.com">Contact Me</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/thomas-loalbo-230054b9/">
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
                  <a className="google" href="mailto:tommy.loalbo@gmail.com">
                    <i className="google icon"></i>
                  </a>
                </li>
                <li>
                  <a className="github" href="https://github.com/Thrillseeker419/LatinBlogPortfolio">
                    <i className="github icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="stackoverflow"
                    href="https://stackoverflow.com/users/4526910/thrillseeker419"
                  >
                    <i className="stack overflow icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedIn"
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
  );
};

export default Layout;
