import { BallTriangle, useLoading } from "@agney/react-loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { postDeleted, fetchPosts, selectPostById } from "../redux/postsSlice";
import { AppDispatch } from "../redux/store";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorData, AvatarFallbackUrl } from "./PostData";
import NotFound from "./NotFound";

const DeletePostForm = () => {
  const { postId } = useParams();
  const [searchParams] = useSearchParams();
  const [deleteRequestStatus, setDeleteRequestStatus] = useState("idle");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  let userId = searchParams.get("userId");

  useEffect(() => {
    if (!postId) return;
    // Fetch posts if they are not already loaded
    dispatch(fetchPosts());
  }, [postId, dispatch]);

  const post = useSelector((state: any) =>
    selectPostById(state, Number(postId))
  );

  console.log("Selected post:", post);
  
  let postsAndAuthors = post && AuthorJoin([post], AuthorData);
  console.log("Posts and authors:", postsAndAuthors);

  const { containerProps, indicatorEl } = useLoading({
    loading: post === undefined,
    indicator: <BallTriangle />,
  });

  const singlePost = post && postsAndAuthors?.[0];

  const onDeletePostClicked = async () => {
    try {
      setDeleteRequestStatus("pending");
      await dispatch(postDeleted(singlePost.id.toString()));
      navigate("/LatinBlogPortfolio/Posts");
    } catch (err) {
      console.log("delete failed", err);
      alert("Failed to delete the post. Please try again.");
    } finally {
      setDeleteRequestStatus("idle");
    }
  };

  useEffect(() => {
    document.title = 'Delete Your Post';
  }, []);

  if (!post) {
    return <NotFound />;
  }

  if (userId !== "2") {
    return <NotFound />;
  }

  return (
    <section>
      <div className="loader-wrapper" {...containerProps}>
        {indicatorEl}
      </div>
      {post && userId === "2" ? (
        <div className="single-post-container">
          <article className="single-post ui piled segment">
            <h1> Are you sure you want to delete this post?</h1>
            <div className="ui segment">
              <h2 className="ui header">
                <img
                  src={
                    singlePost?.authorInfo
                      ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/avatars/person_beard.png?raw=true" + singlePost?.authorInfo.avatar_url
                      : AvatarFallbackUrl
                  }
                  alt="Avatar"
                  className="single-post-avatar ui circular image"
                />{" "}
                {MakeTitle(singlePost?.title)}
                <div className="sub header">
                  by{" "}
                  {singlePost?.authorInfo
                    ? singlePost?.authorInfo.name
                    : "Unknown"}
                </div>
              </h2>
              <div className="single-post-body">
                <p>
                  {singlePost?.body}
                  <br />
                </p>
              </div>
              <div className="delete-button-container">
                {singlePost?.userId === 2 && (
                  <>
                    <button
                      title="Confirm delete post"
                      aria-label="Confirm delete post"
                      onClick={onDeletePostClicked}
                      className="ui red button"
                      disabled={deleteRequestStatus === "pending"}
                    >
                      {deleteRequestStatus === "pending" ? (
                        <>
                          <i className="spinner loading icon"></i> Deleting...
                        </>
                      ) : (
                        <>
                          <i className="trash icon"></i> Confirm Delete
                        </>
                      )}
                    </button>
                    <Link
                      to={`/LatinBlogPortfolio/Posts/${postId}`}
                      className="ui basic black button"
                      title="Cancel and go back"
                      aria-label="Cancel and go back"
                      style={{ marginLeft: '10px' }}
                    >
                      No, Go Back
                    </Link>
                  </>
                )}
              </div>
            </div>
          </article>
        </div>
      ) : post && userId !== "2" ? (
        <h1 style={{ marginLeft: "10px" }}>404 Not Found</h1>
      ) : (
        <h1 style={{ marginLeft: "10px" }}>404 Not Found</h1>
      )}
    </section>
  );
};

export default DeletePostForm;
