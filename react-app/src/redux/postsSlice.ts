import {
  createSlice,
  nanoid,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"; //api that accepts gets and posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return [...response.data];
});
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost: any) => {
    const response = await axios.post(POSTS_URL, initialPost);
    return response.data;
  }
);

export interface IPostState {
  posts: Array<any>;
  status: string | null;
  error: string | null | undefined;
}
const initialState: IPostState = {
  posts: [],
  status: "idle",
  error: null,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state: any, action: any) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            status: "created",
            title,
            content,
          },
        };
      },
    },
    postDeleted: {
      reducer(state: any, action: any) {
        let posts = current(state.posts);
        let post = posts.find(
          (post: any) => post.id.toString() === action.payload?.id
        );
        let postsUpdated = current(state.posts).filter(
          (post: any) => post.id.toString() !== action.payload?.id
        );
        if (post !== undefined) {
          let newPost = { ...post, status: "deleted" };
          state.posts = [...postsUpdated, newPost];
        }
      },
      prepare(id: string) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post: any) => {
          post.status = "created";
          return post;
        });
      
        // Create a map of existing posts by ID for quick lookup
        const existingPostsMap = new Map();
        state.posts.forEach((post: any) => {
          existingPostsMap.set(post.id, post);
        });
      
        // Merge loaded posts into the existing posts map without overwriting local changes
        loadedPosts.forEach((loadedPost: any) => {
          const existingPost = existingPostsMap.get(loadedPost.id);
      
          if (existingPost) {
            if (existingPost.status !== "deleted") {
              // Update existing post only if it's not deleted
              existingPostsMap.set(loadedPost.id, loadedPost);
            }
            // If the existing post is deleted, do not overwrite it
          } else {
            // If the post doesn't exist locally, add it
            existingPostsMap.set(loadedPost.id, loadedPost);
          }
        });
      
        // Update state.posts with the merged posts
        state.posts = Array.from(existingPostsMap.values());
      })
      
      
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = "loading"; //todo create an extra status
      })
      .addCase(addNewPost.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        let maxId = Math.max.apply(
          Math,
          current(state.posts).map(function (o: any) {
            return o.id;
          })
        );
        let currentPost = action.payload;
        currentPost.id = maxId + 1;
        currentPost.status = "created"
        state.posts.push(currentPost);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//selectors
export const selectAllPosts = (state: any) => state.posts.posts;
export const selectPostsStatus = (state: any) => state.posts.status;
export const selectPostsError = (state: any) => state.posts.error;
export const selectPostById = (state: any, postId: number | string) =>
  state.posts.posts.find((post: any) => post.id.toString() === postId.toString());
export const { postAdded, postDeleted } = postsSlice.actions;
export default postsSlice.reducer;
