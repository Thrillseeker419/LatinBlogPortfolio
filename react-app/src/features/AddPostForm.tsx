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
  const [validContent, setValidContent] = useState(true);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectAllPosts);
  const validateField = (value: string) => value.trim() !== "";

  const onTitleChanged = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    setTitle(value);
    setValidTitle(validateField(value));
  };
  
  const onContentChanged = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    setContent(value);
    setValidContent(validateField(value));
  };

  const canSave =
    [title, content].every(validateField) && addRequestStatus === "idle";

    const resetForm = () => {
      setTitle("");
      setContent("");
    };

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ title, body: content, userId: 2 })).unwrap();
        navigate("/LatinBlogPortfolio/Posts");
        resetForm();
      } catch (err) {
        console.log("post failed");
        alert("Failed to save the post. Please try again.");
      } finally {
        setAddRequestStatus("idle");
      }
    } else {
      //todo add validation message
      setValidTitle(validateField(title));
      setValidContent(validateField(content));
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
              aria-label="Post title"
              value={title}
              onChange={onTitleChanged}
            />
          </div>
          <div className={validContent ? "field" : "field error"}>
            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              aria-label="Post content"
              value={content}
              onChange={onContentChanged}
            ></textarea>
          </div>

          <button
            className="ui primary button"
            type="button"
            title="Save post"
            aria-label="Save post"
            onClick={onSavePostClicked}
            disabled={ addRequestStatus === "pending" || !validTitle || !validContent}
          >
            {addRequestStatus === "pending" ? (
    <>
                <i className="spinner loading icon"></i>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <i className="save icon"></i>
                <span>Save Post</span>
              </>
            )}
          </button>
        </form>
        {(!validTitle || !validContent) && (
          <div className="ui error message" aria-live="polite">
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
