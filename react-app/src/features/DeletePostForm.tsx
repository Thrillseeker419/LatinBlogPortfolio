import { BallTriangle, useLoading } from "@agney/react-loading";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { postDeleted, selectPostById } from "../redux/postsSlice";
import { AppDispatch } from "../redux/store";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";
import { AuthorData, AvatarFallbackUrl } from "./PostData";

const DeletePostForm = () => {
  const { postId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  let userId = searchParams.get("userId");

  const post = useSelector((state: any) =>
    selectPostById(state, Number(postId))
  );
  let postsAndAuthors = post && AuthorJoin([post], AuthorData);
  const { containerProps, indicatorEl } = useLoading({
    loading: post === undefined,
    indicator: <BallTriangle />,
  });

  const singlePost = post && postsAndAuthors[0];
  const onDeletePostClicked = () => {
    try {
      let res = dispatch(postDeleted(singlePost.id.toString() as string));
      //todo handle different delete responses
      navigate("/Posts");
    } catch (err) {
      console.log("delete failed", err);
    } finally {
      //todo add status tracking for deletes like was done for create requests
      // setDeleteRequestStatus("idle");
    }
  };
  return (
    <section>
      <div className="loader-wrapper" {...containerProps}>
        {indicatorEl}
      </div>{" "}
      {post && userId === "2" ? (
        <div className="single-post-container">
          <article className="single-post ui piled segment">
            <h1> Are you sure you want to delete this post?</h1>
            <div className="ui segment">
              <h2 className="ui header">
                <img
                  src={
                    singlePost.authorInfo
                      ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public + singlePost.authorInfo.avatar_url
                      : AvatarFallbackUrl
                  }
                  alt="Avatar"
                  className="single-post-avatar ui circular image"
                />{" "}
                {MakeTitle(singlePost.title)}
                <div className="sub header">
                  by{" "}
                  {singlePost.authorInfo
                    ? singlePost.authorInfo.name
                    : "Unknown"}
                </div>
              </h2>
              <div className="single-post-body">
                <p>
                  {CapitalizeFirstLetter(singlePost.body).slice(0, 50)}...
                  <br />
                </p>
              </div>
              <div className="delete-button-container">
                {singlePost.userId === 2 && (
                  <button
                    onClick={onDeletePostClicked}
                    className=" ui red button"
                  >
                    <i className="trash icon"></i>Delete Post
                  </button>
                )}
              </div>
            </div>
          </article>
        </div>
      ) : post && userId !== "2" ? (
        <h1 style={{ marginLeft: "10px" }}>401 Unauthorized</h1>
      ) : (
        <h1 style={{ marginLeft: "10px" }}>404 Not Found</h1>
      )}
    </section>
  );
};

export default DeletePostForm;
