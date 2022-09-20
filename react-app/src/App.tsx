import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/Counter";
import PostList from "./features/PostList";
import AddPostForm from "./features/AddPostForm";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/SinglePostPage";
import NotFound from "./features/NotFound";
import Home from "./features/Home";
import AuthorList from "./features/AuthorList";
import SingleAuthorPage from "./features/SingleAuthorPage";
import DeletePostForm from "./features/DeletePostForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="LatinBlogPortfolio/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="Posts">
          <Route index element={<PostList />} />
          <Route path="Create" element={<AddPostForm />} />
          <Route path="Delete">
            <Route path=":postId" element={<DeletePostForm />} />
          </Route>
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
        <Route path="Authors">
          <Route index element={<AuthorList />} />
          <Route path=":authorId" element={<SingleAuthorPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
