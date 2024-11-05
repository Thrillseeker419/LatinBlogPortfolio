import { BallTriangle, useLoading } from "@agney/react-loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostById } from "../redux/postsSlice";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorDataRaw, AvatarFallbackUrl } from "./PostData";
import NotFound from "./NotFound";
import { Link } from 'react-router-dom';

const SingleAuthorPage = () => {
  const { authorId } = useParams();

  const author = AuthorDataRaw.find((x) => x.id.toString() === authorId);

  const { containerProps, indicatorEl } = useLoading({
    loading: !author,
    indicator: <BallTriangle />,
  });
  
  useEffect(() => {
    document.title = 'View An Author\'s Details';
  }, []);

  if(!author){
    return <NotFound />
  }

  return (
    <section>
      <div className="loader-wrapper" {...containerProps}>
        {indicatorEl}
      </div>{" "}
      {author ? (
        <div className="single-post-container">
          <article className="single-post ui piled segment">
            <div className="ui items">
              <div className="item">
                <div className="image">
                  <img
                    src={author ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" + author.avatar_url : AvatarFallbackUrl}
                    alt={`Avatar of ${author.name}`}
                    className="single-post-avatar ui medium circular image"
                  />
                </div>
                <div className="content">
                  <h2 className="header">{author.name}</h2>
                  <div className="meta">
                    <p>
                      {author.company.name} -{" "}
                      {CapitalizeFirstLetter(author.company.bs)}
                    </p>
                  </div>
                  <div className="ui list">
                    <div className="item">
                      <i className="user icon"></i>
                      <div className="content">@{author.username}</div>
                    </div>
                    <div className="item">
                      <i className="marker icon"></i>
                      <div className="content">
                        <address>
                          {author.address.street}, {author.address.suite},<br />
                          {author.address.city}, {author.address.stateAbbr && `${author.address.stateAbbr} `}
                          {author.address.zipcode}
                        </address>
                      </div>
                    </div>
                    <div className="item">
                      <i className="mail icon"></i>
                      <div className="content">
                      <a href={`mailto:${author.email}`}>{author.email}</a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="linkify icon"></i>
                      <div className="content">
                        <a href={"https://" + author.website}>
                          {author.website}
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <i className="phone icon"></i>
                      <div className="content">{author.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={`/LatinBlogPortfolio/Posts?authorId=${author.id}`}
              className="ui button"
              title={`View posts by ${author.name}`}
              aria-label={`View posts by ${author.name}`}
            >
              View {author.name}'s Posts
            </Link>
          </article>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SingleAuthorPage;
