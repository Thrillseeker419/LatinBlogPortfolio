import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DeletePostForm from "./DeletePostForm";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { postDeleted } from "../redux/postsSlice";
import NotFound from "./NotFound";

// Create a mock store with initial state
const mockStore = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState: {
    posts: {
      posts: [
        {
          id: 19,
          title: "Test Post",
          body: "This is a test post body",
          userId: 2,
          status: "created",
          authorInfo: {
            name: "Ervin Howell",
            avatar_url: "avatars/person_beard.png",
            company: {
              name: "Test Company",
            },
          },
        },
      ],
      status: "succeeded",
      error: null,
    },
  },
});

describe("DeletePostForm", () => {
  // Mock the dispatch function
  beforeEach(() => {
    mockStore.dispatch = jest.fn();
  });

  test("renders post details and delete button for authorized user", async () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/LatinBlogPortfolio/Posts/Delete/19?userId=2"]}>
            <Routes>
            <Route path="/LatinBlogPortfolio/Posts/Delete/:postId" element={<DeletePostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Are you sure you want to delete this post/i)).toBeInTheDocument();
      expect(screen.getByText("Test Post")).toBeInTheDocument();
      expect(screen.getByText(/by Ervin Howell/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Confirm Delete/i })).toBeInTheDocument();
    });
  });

  test("deletes post when delete button is clicked", async () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/LatinBlogPortfolio/Posts/Delete/19?userId=2"]}>
        <Routes>
            <Route path="/LatinBlogPortfolio/Posts/Delete/:postId" element={<DeletePostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Confirm Delete/i }));

    await waitFor(() => {
      expect(mockStore.dispatch).toHaveBeenCalledWith(postDeleted("19")); // Changed to "19"
    });
  });

  test("shows not found message for non-owner user", async () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/LatinBlogPortfolio/Posts/Delete/19?userId=3"]}>
          <Routes>
            <Route path="/LatinBlogPortfolio/Posts/Delete/:postId" element={<DeletePostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Page not found.")).toBeInTheDocument();
    });
  });

  test("renders not found page when post doesn't exist", async () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={["/LatinBlogPortfolio/Posts/Delete/999?userId=2"]}>
          <Routes>
            <Route path="/LatinBlogPortfolio/Posts/Delete/:postId" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Page not found.")).toBeInTheDocument();
    });
  });
});
