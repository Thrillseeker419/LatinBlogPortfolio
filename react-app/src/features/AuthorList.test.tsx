import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AuthorList from './AuthorList';
import { AuthorDataRaw } from './PostData';

// Mock `useSelector` from Redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('AuthorList', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  it('renders loading state when posts are not available', () => {
    // Mock the selector to return no posts
    (useSelector as jest.Mock).mockReturnValue(undefined);

    render(
      <MemoryRouter>
        <AuthorList />
      </MemoryRouter>
    );

    // Ensure that the loading text renders using a regular expression for flexibility
    expect(screen.getByText(/loading authors/i)).toBeInTheDocument();
  });

  it('renders author list correctly', () => {
    // Mock the selector to return some posts
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'This is a test post body.', userId: 1, status: 'created' },
      { id: 2, title: 'Test Post 2', body: 'Another test post body.', userId: 2, status: 'created' },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockPosts);

    render(
      <MemoryRouter>
        <AuthorList />
      </MemoryRouter>
    );

    // Check if authors from AuthorDataRaw are rendered
    AuthorDataRaw.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument();
      expect(screen.getByText(author.email)).toBeInTheDocument();
      // Use a more flexible regular expression to match the company name
      expect(screen.getByText(new RegExp(author.company.name, 'i'))).toBeInTheDocument();
    });
  });

  it('shows the correct post count for each author', () => {
    // Mock the selector to return posts for the authors
    const mockPosts = [
      { id: 1, title: 'Test Post 1', body: 'This is a test post body.', userId: 1, status: 'created' },
      { id: 2, title: 'Test Post 2', body: 'Another test post body.', userId: 1, status: 'created' },
      { id: 3, title: 'Test Post 3', body: 'Yet another test post body.', userId: 2, status: 'created' },
    ];
    (useSelector as jest.Mock).mockReturnValue(mockPosts);

    render(
      <MemoryRouter>
        <AuthorList />
      </MemoryRouter>
    );

    // Verify post count for each author using a regex to handle spaces or extra elements
    const author1 = AuthorDataRaw.find((author) => author.id === 1);
    const author2 = AuthorDataRaw.find((author) => author.id === 2);

    expect(screen.getByText(`${author1?.company.name} - ${author1?.company.bs}`)).toBeInTheDocument();
    expect(screen.getByText(/2\s*Posts/)).toBeInTheDocument(); // 2 posts for userId 1

    expect(screen.getByText(`${author2?.company.name} - ${author2?.company.bs}`)).toBeInTheDocument();
    expect(screen.getByText(/1\s*Post/)).toBeInTheDocument(); // 1 post for userId 2
  });
});
