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
        debugger;
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
        debugger;
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
          // todo, possible data cleanup
          post.status = "created";
          return post;
        });
        debugger;
        state.posts = [...loadedPosts];
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
        console.log("state.posts nbb", current(state.posts));
        console.log("action.payload", action.payload);
        let maxId = Math.max.apply(
          Math,
          current(state.posts).map(function (o: any) {
            return o.id;
          })
        );
        let currentPost = action.payload;
        currentPost.id = maxId + 1;
        state.posts.push(currentPost);
        console.log("state.posts", current(state.posts));
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
export const selectPostById = (state: any, postId: number) =>
  state.posts.posts.find((post: any) => post.id === postId);
export const { postAdded, postDeleted } = postsSlice.actions;
export default postsSlice.reducer;
