import axios from 'axios';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { fetchPosts } from './counterSlice';

jest.mock('axios'); // This mocks the entire Axios module

const mockAxiosGet = axios.get as jest.Mock; // Cast axios.get to jest.Mock to use mock methods

// Use redux-mock-store to create a mock store for testing
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
  let store: ReturnType<typeof mockStore>; // Correctly type the store to avoid TypeScript issues

  beforeEach(() => {
    store = mockStore({ counter: { value: 0 } }); // Initialize the mock store with a state
  });

  test('should handle fetchPosts success', async () => {
    const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    
    // Mock axios.get to resolve with mock data
    mockAxiosGet.mockResolvedValue({ data: posts });

    await store.dispatch(fetchPosts() as any);
    const actions = store.getActions(); // This works with the mock store from redux-mock-store

    expect(actions[0].type).toEqual(fetchPosts.pending.type); // Verify pending action
    expect(actions[1].type).toEqual(fetchPosts.fulfilled.type); // Verify fulfilled action
    expect(actions[1].payload).toEqual(posts); // Verify payload with mock data
  });

  test('should handle fetchPosts error', async () => {
    mockAxiosGet.mockRejectedValue(new Error('Network Error')); // Mock axios.get to reject

    await store.dispatch(fetchPosts() as any);
    const actions = store.getActions(); // This works with the mock store from redux-mock-store

    expect(actions[0].type).toEqual(fetchPosts.pending.type); // Verify pending action
    expect(actions[1].type).toEqual(fetchPosts.rejected.type); // Verify rejected action
  });
});
