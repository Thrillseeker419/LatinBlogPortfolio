import { BallTriangle, useLoading } from "@agney/react-loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "../redux/postsSlice";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorData, AvatarFallbackUrl } from "./PostData";
import NotFound from "./NotFound";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state: any) =>
    selectPostById(state, Number(postId))
  );
  
  let postsAndAuthors = post && AuthorJoin([post], AuthorData);
  const { containerProps, indicatorEl } = useLoading({
    loading: !post,
    indicator: <BallTriangle />,
  });


  const singlePost = post && postsAndAuthors[0];

  const isPostOwner = (singlePost: { userId: number; }) => singlePost.userId === 2

  useEffect(() => {
    document.title = 'View A Single Post';
  }, []);

  if (!post) {
    return <NotFound />;
  }
  
  return (
    <section>
      <div className="loader-wrapper" {...containerProps}>
        {indicatorEl} 
      </div>{" "}
      {(
        <div className="single-post-container">
          <article className="single-post ui piled segment">
            <h1 className="ui header">
              <img
                src={
                  singlePost.authorInfo
                    ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" + singlePost.authorInfo.avatar_url
                    : AvatarFallbackUrl
                }
                alt={`${singlePost.authorInfo?.name || "Unknown Author"}'s Avatar`}
                className="single-post-avatar ui circular image"
              />{" "}
              {MakeTitle(singlePost.title)}
              <div className="sub header">
                by{" "}
                {singlePost.authorInfo ? singlePost.authorInfo.name : "Unknown"}
              </div>
            </h1>
            <div className="single-post-body">
              <p>{CapitalizeFirstLetter(singlePost.body)}</p>
            </div>
            <div className="delete-button-container">
              { isPostOwner(singlePost)&& (
                <Link title="Go to delete post"
                aria-label="Go to delete post" to={{
                    pathname: "/LatinBlogPortfolio/Posts/Delete/"+postId,
                    search: "?userId=2",
                  }} className=" ui red button">
                  <i className="trash icon"></i>Delete Post
                </Link>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default SinglePostPage;
