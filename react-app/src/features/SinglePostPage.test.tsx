import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import { MemoryRouter, useParams } from 'react-router-dom';
import SinglePostPage from './SinglePostPage';
import { AuthorData } from './PostData';
import { AuthorJoin } from '../utils/authorJoin';

// Mock `useSelector` from Redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock `useParams` from React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));


describe('SinglePostPage', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });


  it('renders "NotFound" component when post is not found', () => {
    (useParams as jest.Mock).mockReturnValue({ postId: '999' });
    (useSelector as jest.Mock).mockReturnValue(undefined);

    render(
      <MemoryRouter>
        <SinglePostPage />
      </MemoryRouter>
    );

    // Ensure that the NotFound component renders
    expect(screen.getByText('Page not found.')).toBeInTheDocument();

  });

  it('renders a post when found and shows the Delete button for post owner', () => {
    (useParams as jest.Mock).mockReturnValue({ postId: '1' });

    const mockPost = {
      id: 1,
      title: 'Test Post',
      body: 'This is a test post body.',
      userId: 2, 
      status: 'created'
    };
    (useSelector as jest.Mock).mockReturnValue(mockPost);

    const mockPostsAndAuthors = AuthorJoin([mockPost], AuthorData);

    render(
      <MemoryRouter>
        <SinglePostPage />
      </MemoryRouter>
    );

    // Ensure the post title and body are rendered
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test post body.')).toBeInTheDocument();

    // Check that the delete button is present for the post owner
    const deleteButton = screen.getByRole('link', { name: /delete post/i });
    expect(deleteButton).toBeInTheDocument();
  });

  it('hides the Delete button for non-post owners', () => {
    (useParams as jest.Mock).mockReturnValue({ postId: '1' });

    const mockPost = {
      id: 1,
      title: 'Another User Post',
      body: 'This is another user post body.',
      userId: 3, // Different user ID
    };
    (useSelector as jest.Mock).mockReturnValue(mockPost);

    render(
      <MemoryRouter>
        <SinglePostPage />
      </MemoryRouter>
    );

    // Ensure the delete button is not rendered for non-owners
    expect(screen.queryByRole('link', { name: /delete post/i })).not.toBeInTheDocument();
  });
});
