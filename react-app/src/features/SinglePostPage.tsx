import { BallTriangle, useLoading } from "@agney/react-loading";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostById, fetchPosts } from "../redux/postsSlice";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorData, AvatarFallbackUrl } from "./PostData";
import NotFound from "./NotFound";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../redux/store"; // Assuming this is where your RootState is defined
import { AnyAction } from "redux";

const SinglePostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();

  // Log postId from URL params
  console.log("Post ID from URL params:", postId);

  useEffect(() => {
    if (!postId) {
      console.warn("No postId provided, returning early.");
      return;
    }

    console.log("Fetching posts with postId:", postId);
    // Fetch posts if they are not already loaded
    dispatch(fetchPosts());
  }, [postId, dispatch]);

  const post = useSelector((state: RootState) => selectPostById(state, Number(postId)));

  // Log the selected post from the Redux store
  console.log("Selected post from Redux:", post);

  let postsAndAuthors = post && AuthorJoin([post], AuthorData);

  // Log the joined posts and authors
  console.log("Posts and authors after join:", postsAndAuthors);

  const { containerProps, indicatorEl } = useLoading({
    loading: !post,
    indicator: <BallTriangle />,
  });

  const singlePost = post && postsAndAuthors[0];

  // Log singlePost after author join
  console.log("Single post after author join:", singlePost);

  const isPostOwner = (singlePost: { userId: number }) => {
    const isOwner = singlePost.userId === 2;
    console.log("Checking post ownership for userId 2:", isOwner);
    return isOwner;
  };

  useEffect(() => {
    document.title = 'View A Single Post';
  }, []);

  if (!post) {
    console.warn("Post not found, rendering NotFound component.");
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
                  singlePost?.authorInfo
                    ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" +
                      singlePost.authorInfo.avatar_url
                    : AvatarFallbackUrl
                }
                alt={`${singlePost?.authorInfo?.name || "Unknown Author"}'s Avatar`}
                className="single-post-avatar ui circular image"
              />{" "}
              {MakeTitle(singlePost?.title || "")}
              <div className="sub header">
                by{" "}
                {singlePost?.authorInfo ? singlePost.authorInfo.name : "Unknown"}
              </div>
            </h1>
            <div className="single-post-body">
              <p>{CapitalizeFirstLetter(singlePost?.body || "")}</p>
            </div>
            <div className="delete-button-container">
              {isPostOwner(singlePost) && (
                <Link
                  title="Go to delete post"
                  aria-label="Delete post"
                  to={{
                    pathname: "/LatinBlogPortfolio/Posts/Delete/" + postId,
                    search: "?userId=2",
                  }}
                  className="ui red button"
                >
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
