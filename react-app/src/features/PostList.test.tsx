import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PostsList from './PostList';
import '@testing-library/jest-dom/extend-expect';
import { Store, AnyAction } from '@reduxjs/toolkit';

// Mock data and dependencies
const mockStore = configureStore([thunk]);

const mockPosts = [
  {
    id: 1,
    userId: 1, // Make sure this is a number
    title: 'First Post Title',
    body: 'This is the body of the first post.',
    authorInfo: {
      name: 'Leanne S Graham',
      avatar_url: 'tail_swirl.png',
      company: { name: 'Romaguera-Crona LLC' },
    },
    status: 'created',
  },
];

// Mock the selectors from postsSlice
jest.mock('../redux/postsSlice', () => ({
  selectAllPosts: jest.fn(),
  selectPostsStatus: jest.fn(),
  selectPostsError: jest.fn(),
  fetchPosts: jest.fn(),
}));


describe('PostsList Component', () => {
  let store: Store<any, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      posts: {
        posts: mockPosts,
        status: 'succeeded',
        error: null,
      },
    });
  });

  test('renders posts correctly', () => {
    // Mock the posts selectors
    const { selectAllPosts, selectPostsStatus, selectPostsError } = require('../redux/postsSlice');

    selectAllPosts.mockImplementation(() => mockPosts);
    selectPostsStatus.mockImplementation(() => 'succeeded');
    selectPostsError.mockImplementation(() => null);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostsList />
        </MemoryRouter>
      </Provider>
    );

    // Assertions for the rendered content
    expect(screen.getByRole('heading', { name: /Explore the Posts/i })).toBeInTheDocument();
    expect(screen.getByText(/First Post Title/i)).toBeInTheDocument();
    expect(screen.getByText(/This is the body of the first post./i)).toBeInTheDocument();
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.getByText(/Romaguera-Crona LLC/i)).toBeInTheDocument();
  });
});
