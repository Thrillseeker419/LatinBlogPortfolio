import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectAllPosts } from "../redux/postsSlice";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorDataRaw, AvatarFallbackUrl } from "./PostData";
const AuthorList = () => {
  const { param1 } = useParams();

  const posts = useSelector(selectAllPosts);

  

  function groupBy(xs: any, key: any) {
    if (!Array.isArray(xs) || xs.length === 0) {
      // If xs is not an array or is empty, return an empty object
      return {};
    }
  
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
  let aggregate = useMemo(()=>groupBy(posts, "userId"), [posts]);

  useEffect(() => {
    document.title = `View ${AuthorDataRaw.length} Authors`;
  }, []);

  if (!posts || !AuthorDataRaw) {
    return <div>Loading authors...</div>;
  }

  return (
    <section>
      <div className="author-list-page"> {/* Change class from 'page-header' to 'author-list-page' */}
        <h1 className="page-title">Meet the Authors</h1>
        <p className="page-description">
          Explore the authors who contribute to this platform and discover their posts.
        </p>
      </div>
  
      <div className="ui link cards author-list-container">
        {AuthorDataRaw &&
          AuthorDataRaw.map((author: any) => (
            <Link
              title={"View " + author.name + " details"}
              aria-label={"View " + author.name + " details"}
              className="card"
              key={author.id}
              to={`${author.id}`}
            >
              <div className="image">
                <img
                  src={
                    author
                      ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" +
                        author.avatar_url
                      : AvatarFallbackUrl
                  }
                  alt={"Avatar for " + author.name}
                />
              </div>
              <div className="content">
                <h2 className="header">{author.name}</h2>
                <div className="meta">
                  <span>{author.email}</span>
                </div>
                <div className="description">
                  {author.company.name} - {author.company.bs}
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">{author.website}</span>
                <span>
                  <i className="comment icon"></i>
                  {aggregate[author.id]?.length || 0} Posts
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
  
};

export default AuthorList;
