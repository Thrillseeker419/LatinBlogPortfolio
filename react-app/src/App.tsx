import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import PostList from "./features/PostList";
import AddPostForm from "./features/AddPostForm";
import SinglePostPage from "./features/SinglePostPage";
import NotFound from "./features/NotFound";
import Home from "./features/Home";
import AuthorList from "./features/AuthorList";
import SingleAuthorPage from "./features/SingleAuthorPage";
import DeletePostForm from "./features/DeletePostForm";
import TimelinePage from "./features/TimelinePage";

function App() {
  const location = useLocation(); // Get current route location

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Effect runs when `location` changes

  return (
    <Routes>
      <Route path="/LatinBlogPortfolio" element={<Layout />}>
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
        <Route path="Timeline">
          <Route index element={<TimelinePage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
