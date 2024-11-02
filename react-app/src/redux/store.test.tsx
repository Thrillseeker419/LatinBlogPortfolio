import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import postsReducer, { addNewPost } from './postsSlice';
import axios from 'axios';

describe('Redux Store', () => {
  // Test Store Configuration
  it('should initialize with default reducers', () => {
    const testStore = configureStore({
      reducer: { counter: counterReducer, posts: postsReducer },
    });

    const state = testStore.getState();
    expect(state).toHaveProperty('counter');
    expect(state).toHaveProperty('posts');
  });

  // Test if localStorageMiddleware works
  it('should save state to localStorage on actions', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const testStore = configureStore({
      reducer: { counter: counterReducer, posts: postsReducer },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat((storeAPI) => (next) => (action) => {
          const result = next(action);
          localStorage.setItem(
            'applicationState',
            JSON.stringify(storeAPI.getState())
          );
          return result;
        }),
    });

    // Dispatch action to trigger localStorageMiddleware
    testStore.dispatch({ type: 'counter/increment' });

    expect(setItemSpy).toHaveBeenCalledWith(
      'applicationState',
      expect.any(String)
    );

    const savedState = JSON.parse(localStorage.getItem('applicationState') || '');
    expect(savedState.counter.value).toBe(1);

    setItemSpy.mockRestore();
  });

  // Test if preloadedState from localStorage is loaded correctly
  it('should load preloaded state from localStorage', () => {
    const preloadedState = {
      counter: { value: 10 },
      posts: { posts: [], status: 'idle', error: null },
    };

    localStorage.setItem('applicationState', JSON.stringify(preloadedState));

    const testStore = configureStore({
      reducer: { counter: counterReducer, posts: postsReducer },
      preloadedState: JSON.parse(localStorage.getItem('applicationState') || ''),
    });

    const state = testStore.getState();
    expect(state.counter.value).toBe(10);
  });

  // Test if localStorage is empty, store initializes with default state
  it('should initialize with default state if localStorage is empty', () => {
    localStorage.removeItem('applicationState');
  
    const testStore = configureStore({
      reducer: { counter: counterReducer, posts: postsReducer },
      preloadedState: undefined,
    });
  
    const state = testStore.getState();
    expect(state.counter.value).toBe(0); // Default value for counter
    expect(state.posts.posts.length).toBe(0); // Default for posts
  });
  
});

describe('Redux Store with real actions', () => {
    it('should increment the counter when dispatching increment action', () => {
      const testStore = configureStore({
        reducer: { counter: counterReducer, posts: postsReducer },
      });
  
      testStore.dispatch({ type: 'counter/increment' });
  
      const state = testStore.getState();
      expect(state.counter.value).toBe(1);
    });
  
    it('should reset the counter when dispatching reset action', () => {
      const testStore = configureStore({
        reducer: { counter: counterReducer, posts: postsReducer },
      });
  
      // Increment first
      testStore.dispatch({ type: 'counter/increment' });
      expect(testStore.getState().counter.value).toBe(1);
  
      // Reset
      testStore.dispatch({ type: 'counter/reset' });
      expect(testStore.getState().counter.value).toBe(0);
    });
  
    it('should add a new post and update the posts state', async () => {
      const testStore = configureStore({
        reducer: { counter: counterReducer, posts: postsReducer },
      });
  
      const newPost = {
        title: "New Post",
        body: "This is a new post content.",
      };
  
      // Mock the API response for addNewPost
      jest.spyOn(axios, 'post').mockResolvedValueOnce({
        data: { id: 101, ...newPost },
      });
  
      await testStore.dispatch(addNewPost(newPost));
  
      const state = testStore.getState();
      expect(state.posts.posts).toHaveLength(1);
      expect(state.posts.posts[0].title).toBe(newPost.title);
      expect(state.posts.posts[0].body).toBe(newPost.body);
    });
  });
  