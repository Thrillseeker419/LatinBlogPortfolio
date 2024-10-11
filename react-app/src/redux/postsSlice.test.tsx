import reducer, {
    postAdded,
    postDeleted,
    fetchPosts,
    addNewPost,
    selectAllPosts,
    selectPostsStatus,
    selectPostsError,
  } from './postsSlice';
  import axios from 'axios';
  import { nanoid } from '@reduxjs/toolkit';
  import configureStore from 'redux-mock-store';
  import thunk from 'redux-thunk';
  
  jest.mock('axios');
  const mockAxiosGet = axios.get as jest.Mock;
  const mockAxiosPost = axios.post as jest.Mock;
  
  const initialState = {
    posts: [],
    status: 'idle',
    error: null,
  };
  
  // Mock Store
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  // Test Post Data
  const testPost = {
    id: nanoid(),
    title: 'Test Post',
    content: 'This is a test post',
    status: 'created',
  };
  
  // Reducer Tests
  describe('postsSlice reducer', () => {
    it('should handle initial state', () => {
      expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle postAdded', () => {
      const action = postAdded('New Post Title', 'New Post Content');
      const result = reducer(initialState, action);
      expect(result.posts.length).toBe(1);
      expect(result.posts[0].title).toBe('New Post Title');
    });
  
    it('should handle postDeleted', () => {
      const initialStateWithPosts = {
        posts: [
          { id: '1', title: 'Post 1', status: 'created' },
          { id: '2', title: 'Post 2', status: 'created' },
        ],
        status: 'succeeded',
        error: null,
      };
  
      const action = postDeleted('1');
      const result = reducer(initialStateWithPosts, action);
      expect(result.posts.length).toBe(2);
      const deletedPost = result.posts.find((post) => post.id === '1');
      expect(deletedPost?.status).toBe('deleted');
    });
  });
  
  // Async Thunks (fetchPosts, addNewPost)
  describe('async actions', () => {
    let store: ReturnType<typeof mockStore>;
  
    beforeEach(() => {
      store = mockStore({ posts: initialState });
    });
  
    test('should fetch posts successfully', async () => {
      const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
      mockAxiosGet.mockResolvedValueOnce({ data: posts });
  
      await store.dispatch(fetchPosts() as any);
      const actions = store.getActions();
  
      expect(actions[0].type).toEqual(fetchPosts.pending.type);
      expect(actions[1].type).toEqual(fetchPosts.fulfilled.type);
      expect(actions[1].payload).toEqual(posts);
    });
  
    test('should handle fetch posts failure', async () => {
      mockAxiosGet.mockRejectedValueOnce(new Error('Network Error'));
  
      await store.dispatch(fetchPosts() as any);
      const actions = store.getActions();
  
      expect(actions[0].type).toEqual(fetchPosts.pending.type);
      expect(actions[1].type).toEqual(fetchPosts.rejected.type);
      expect(actions[1].error.message).toEqual('Network Error');
    });
  
    test('should add new post successfully', async () => {
      const newPost = { title: 'New Post', content: 'New Post Content' };
      mockAxiosPost.mockResolvedValueOnce({ data: { id: 3, ...newPost } });
  
      await store.dispatch(addNewPost(newPost) as any);
      const actions = store.getActions();
  
      expect(actions[0].type).toEqual(addNewPost.pending.type);
      expect(actions[1].type).toEqual(addNewPost.fulfilled.type);
      expect(actions[1].payload).toEqual({ id: 3, ...newPost });
    });
  
    test('should handle add new post failure', async () => {
      mockAxiosPost.mockRejectedValueOnce(new Error('Network Error'));
  
      await store.dispatch(addNewPost(testPost) as any);
      const actions = store.getActions();
  
      expect(actions[0].type).toEqual(addNewPost.pending.type);
      expect(actions[1].type).toEqual(addNewPost.rejected.type);
      expect(actions[1].error.message).toEqual('Network Error');
    });
  });
  
  // Selector Tests
  describe('selectors', () => {
    const state = {
      posts: {
        posts: [testPost],
        status: 'succeeded',
        error: null,
      },
    };
  
    test('selectAllPosts should return all posts', () => {
      const allPosts = selectAllPosts(state);
      expect(allPosts).toEqual([testPost]);
    });
  
    test('selectPostsStatus should return status', () => {
      const status = selectPostsStatus(state);
      expect(status).toEqual('succeeded');
    });
  
    test('selectPostsError should return error', () => {
      const error = selectPostsError(state);
      expect(error).toBeNull();
    });
  });
  