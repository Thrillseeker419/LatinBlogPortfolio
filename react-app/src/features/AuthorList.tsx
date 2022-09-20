import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
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
  let aggregate = groupBy(posts, "userId");

  useEffect(() => {
    document.title = 'View All Authors';
  }, []);
  
  return (
    <section>
      <div className="ui link cards author-list-container">
        {AuthorDataRaw &&
          AuthorDataRaw.map((author: any) => (
            <Link className="card" key={nanoid()} to={`${author.id}`}>
              <div className="image">
                <img
                  src={author ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" + author.avatar_url : AvatarFallbackUrl}
                  alt={"Avatar for " + author.name}
                />
              </div>
              <div className="content">
                <div className="header">{author.name}</div>
                <div className="meta">
                  <a>{author.email}</a>
                </div>
                <div className="description">
                  {author.company.name} - {author.company.bs}
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">{author.website}</span>
                <span>
                  <i className="comment icon"></i>
                  {(aggregate[author.id] && aggregate[author.id].length) ||
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
