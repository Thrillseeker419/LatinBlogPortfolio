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
                  {aggregate[author.id]?.length ||
                    0}{" "}
                  Posts
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default AuthorList;
