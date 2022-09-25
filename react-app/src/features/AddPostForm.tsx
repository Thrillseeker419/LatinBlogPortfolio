import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewPost, fetchPosts, selectAllPosts } from "../redux/postsSlice";
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  const [content, setContent] = useState("");
  const [validContent, setValdContent] = useState(true);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectAllPosts);

  const onTitleChanged = (e: any) => {
    if (
      e.target.value === "" ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setValidTitle(false);
    } else {
      setValidTitle(true);
    }
    setTitle(e.target.value);
  };
  const onContentChanged = (e: any) => {
    if (
      e.target.value === "" ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setValdContent(false);
    } else {
      setValdContent(true);
    }
    setContent(e.target.value);
  };

  const isValid = (val: any) => val !== "";
  const canSave =
    [title, content].every(isValid) && addRequestStatus === "idle";
  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        let res = dispatch(
          addNewPost({ title: title, body: content, userId: 2 })
        ).unwrap();
        res
          .then((x) => {
            navigate("/LatinBlogPortfolio/Posts");
          })
          .catch((e) => console.log("post add error:", e));
        setTitle("");
        setContent("");
      } catch (err) {
        console.log("post failed");
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      //todo add validation message
    }
  };
  useEffect(() => {
    document.title = "Create A New Post";
  }, []);

  return (
    <section className="single-post-container">
      <div className="single-post ui piled segment">
        <h1>Add a New Post</h1>

        <form className="ui form add-post-body">
          <div className={validTitle ? "field" : "field error"}>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
          </div>
          <div className={validContent ? "field" : "field error"}>
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            ></textarea>
          </div>

          <button
            className={
              !validTitle || !validContent
                ? "ui primary button disabled"
                : "ui primary button"
            }
            type="button"
            title="Save post"
            aria-label="Save post"
            onClick={onSavePostClicked}
          >
            Save Post
          </button>
        </form>
        {(!validTitle || !validContent) && (
          <div className="ui error message">
            <ul className="list">
              {!validTitle && <li>Please enter a title for the post.</li>}
              {!validContent && (
                <li>Please enter content for the body of the post.</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddPostForm;
