import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onResetData = (e: any) => {
    localStorage.removeItem("applicationState");
    navigate("/LatinBlogPortfolio"); // This handles navigation smoothly
    alert("All data has been reset to its original state");
  };

  // Help screen readers stay oriented on redirects
  useEffect(() => {
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
      mainHeading.focus();
    }
  }, [location]);

  // Function to determine the current page for visual indicator
  const getCurrentPage = () => {
    const matchCreate = location.pathname === "/LatinBlogPortfolio/Posts/Create";
    const matchPosts = location.pathname === "/LatinBlogPortfolio/Posts";
    const matchAuthors = location.pathname.startsWith("/LatinBlogPortfolio/Authors");
    const matchTimeline = location.pathname.startsWith("/LatinBlogPortfolio/Timeline");
  
    if (matchCreate) {
      return "Create a Post";
    } else if (matchPosts) {
      return "Posts";
    } else if (matchAuthors) {
      return "Authors";
    } else if (matchTimeline) {
      return "Timeline";
    } else {
      return "Home";
    }
  };

  return (
    <div className="ultimate-parent">
      <div className="outlet-parent">
        <header className="header-outlet-parent">
          <nav className="nav-bar ui secondary menu" role="navigation">
            <Link
              role="link"
              to="/LatinBlogPortfolio"
              title="Home page"
              aria-label="Home page"
              aria-current={location.pathname === "/LatinBlogPortfolio" ? "page" : undefined}
              className={location.pathname === "/LatinBlogPortfolio" ? "active item" : "item"}
            >
              Home
            </Link>
            <Link
              role="link"
              to="/LatinBlogPortfolio/Posts"
              title="Search all posts"
              aria-label="Search all posts"
              aria-current={
                location.pathname === "/LatinBlogPortfolio/Posts" ||
                (location.pathname.includes("/Posts") && !location.pathname.includes("/Posts/Create"))
                  ? "page"
                  : undefined
              }
              className={
                location.pathname === "/LatinBlogPortfolio/Posts" ||
                (location.pathname.includes("/Posts") && !location.pathname.includes("/Posts/Create"))
                  ? "active item"
                  : "item"
              }
            >
              Posts
            </Link>
            <Link
              role="link"
              to="/LatinBlogPortfolio/Posts/Create?userId=2"
              title="Create a new post"
              aria-label="Create new post"
              aria-current={location.pathname.includes("/Posts/Create") ? "page" : undefined}
              className={location.pathname.includes("/Posts/Create") ? "active item" : "item"}
            >
              Create
            </Link>
            <Link
              role="link"
              to="/LatinBlogPortfolio/Authors"
              title="View all authors"
              aria-label="View all authors"
              aria-current={location.pathname.includes("/Authors") ? "page" : undefined}
              className={location.pathname.includes("/Authors") ? "active item" : "item"}
            >
              Authors
            </Link>
            <Link
              role="link"
              to="/LatinBlogPortfolio/Timeline"
              title="View the timeline"
              aria-label="View the timeline"
              aria-current={location.pathname.includes("/Timeline") ? "page" : undefined}
              className={location.pathname.includes("/Timeline") ? "active item" : "item"}
            >
              Timeline
            </Link>

            <div className="right menu">
              <div className="item" style={{ marginRight: "40px" }}>
                <button
                  title="Reset all data"
                  aria-label="Reset all data and return to the original state"
                  className="ui basic button compact primary"
                  onClick={onResetData}
                >
                  <i className="undo alternate icon reset-icon"></i> Reset Data
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="App" role="main">
          <Outlet />
        </main>

        <footer className="website-footer" role="contentinfo">
          <div className="container">
            <div className="ui stackable three column grid">
              <section className="column">
                <h1>About</h1>
                <p className="text-justify">
                  This is a demo website that allows you to create, search for, and delete
                  posts. You can view author information as well. It is built using React,
                  React-Router, Redux, Axios, Fomantic UI and more! It operates using 
                  a mock API that uses cookies. It was built with accessibility, 
                  responsiveness, and aesthetics in mind. Enjoy! Find the code base&nbsp;
                  <a href="https://github.com/Thrillseeker419/LatinBlogPortfolio">here</a>.
                </p>
              </section>

              <section className="column">
                <h1>Technologies Used</h1>
                <ul className="footer-link">
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Javascript docs"
                      aria-label="Link to Javascript docs"
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    >
                      Javascript
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to React docs"
                      aria-label="Link to React docs"
                      href="https://reactjs.org/"
                    >
                      React
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Redux docs"
                      aria-label="Link to Redux docs"
                      href="https://redux.js.org/"
                    >
                      Redux
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Redux Toolkit docs"
                      aria-label="Link to Redux Toolkit docs"
                      href="https://redux-toolkit.js.org/"
                    >
                      Redux Toolkit
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Redux Thunk docs"
                      aria-label="Link to Redux Thunk docs"
                      href="https://github.com/reduxjs/redux-thunk"
                    >
                      Redux-Thunk
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Typescript docs"
                      aria-label="Link to Typescript docs"
                      href="https://www.typescriptlang.org/"
                    >
                      Typescript
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Fomantic UI docs"
                      aria-label="Link to Fomantic UI docs"
                      href="https://fomantic-ui.com/"
                    >
                      Fomantic UI
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to React Router docs"
                      aria-label="Link to React Router docs"
                      href="https://reactrouter.com/en/main"
                    >
                      React Router
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
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
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to the code base"
                      aria-label="Link to the code base"
                      href="https://github.com/Thrillseeker419/LatinBlogPortfolio"
                    >
                      Code Repository
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Email Thomas"
                      aria-label="Email Thomas"
                      href="mailto:tommy.loalbo@gmail.com"
                    >
                      Contact Me
                    </a>
                  </li>
                  <li className="footer-link-li">
                    <a
                      className="footer-link-anchor"
                      title="Link to Thomas's LinkedIn"
                      aria-label="Link to Thomas Loalbo's LinkedIn profile"
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
                      aria-label="Link to Thomas Loalbo's StackOverflow profile"
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
