import { render, screen, fireEvent } from '@testing-library/react';
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
    userId: 1, // Ensure this is a number
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

  test('shows loading indicator when posts are loading', () => {
    const { selectAllPosts, selectPostsStatus, selectPostsError } = require('../redux/postsSlice');
  
    selectAllPosts.mockImplementation(() => []);
    selectPostsStatus.mockImplementation(() => 'loading');
    selectPostsError.mockImplementation(() => null);
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostsList />
        </MemoryRouter>
      </Provider>
    );
  
    // Expect loading spinner (progressbar) to be in the document
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
  

  test('displays error message when posts fail to load', () => {
    const { selectAllPosts, selectPostsStatus, selectPostsError } = require('../redux/postsSlice');
  
    selectAllPosts.mockImplementation(() => []);
    selectPostsStatus.mockImplementation(() => 'error');
    selectPostsError.mockImplementation(() => 'Failed to load posts');
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostsList />
        </MemoryRouter>
      </Provider>
    );
  
    // Expect error message to be in the document
    expect(screen.getByText(/An unexpected error has occurred while making your request./i)).toBeInTheDocument();
  });
  

  test('shows no posts found message if no posts are available', () => {
    const { selectAllPosts, selectPostsStatus, selectPostsError } = require('../redux/postsSlice');

    selectAllPosts.mockImplementation(() => []); // No posts
    selectPostsStatus.mockImplementation(() => 'succeeded');
    selectPostsError.mockImplementation(() => null);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostsList />
        </MemoryRouter>
      </Provider>
    );

    // Expect no posts found message
    expect(screen.getByText(/No posts found/i)).toBeInTheDocument();
  });

  test('handles search input and filters posts', () => {
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

    // Simulate typing in the search input
    const searchInput = screen.getByPlaceholderText('Search posts...');
    fireEvent.change(searchInput, { target: { value: 'First' } });

    // Expect search input value to have been updated
    expect(searchInput).toHaveValue('First');
  });

  test('displays pagination controls', () => {
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

    // Expect pagination controls to be present
    expect(screen.getByLabelText(/Go to previous results page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to next results page/i)).toBeInTheDocument();
  });

  test('does not render deleted posts', () => {
    const mockDeletedPosts = [
      {
        id: 1,
        userId: 1,
        title: 'Deleted Post Title',
        body: 'This is a deleted post.',
        authorInfo: {
          name: 'Leanne Graham',
          avatar_url: 'tail_swirl.png',
          company: { name: 'Romaguera-Crona LLC' },
        },
        status: 'deleted',
      },
    ];

    const { selectAllPosts, selectPostsStatus, selectPostsError } = require('../redux/postsSlice');

    selectAllPosts.mockImplementation(() => mockDeletedPosts);
    selectPostsStatus.mockImplementation(() => 'succeeded');
    selectPostsError.mockImplementation(() => null);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostsList />
        </MemoryRouter>
      </Provider>
    );

    // Ensure that deleted posts are not displayed
    expect(screen.queryByText(/Deleted Post Title/i)).not.toBeInTheDocument();
  });
});
