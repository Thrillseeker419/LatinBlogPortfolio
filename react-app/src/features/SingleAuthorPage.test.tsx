import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SingleAuthorPage from './SingleAuthorPage'; 
import '@testing-library/jest-dom/extend-expect';

// Mock the PostData
jest.mock('./PostData', () => ({
  AuthorDataRaw: [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe123',
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'john.doe.com',
      avatar_url: 'avatars/john_doe.png',
      company: {
        name: 'John Inc',
        bs: 'synergize scalable solutions',
      },
      address: {
        street: '123 Main St',
        suite: 'Apt 1',
        city: 'Anytown',
        stateAbbr: 'NY',
        zipcode: '12345',
      },
    },
  ],
  AvatarFallbackUrl: 'fallback-avatar.png',
}));

describe('SingleAuthorPage Component', () => {
  test('renders author details correctly', () => {
    render(
      <MemoryRouter initialEntries={['/author/1']}>
        <Routes>
          <Route path="/author/:authorId" element={<SingleAuthorPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if author's name is displayed
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('John Doe');
    // Check if the avatar is displayed
    expect(screen.getByAltText('Avatar of John Doe')).toBeInTheDocument();
    // Check if other details are displayed
    expect(screen.getByText(/John Inc/i)).toBeInTheDocument();
    expect(screen.getByText(/synergize scalable solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/johndoe123/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    
    // Use getByRole to target the website link
    const websiteLink = screen.getByRole('link', { name: /john.doe.com/i });
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute('href', 'https://john.doe.com');

    // Check for phone number
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
  });

  test('renders NotFound component when author is not found', () => {
    render(
      <MemoryRouter initialEntries={['/author/999']}>
        <Routes>
          <Route path="/author/:authorId" element={<SingleAuthorPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if NotFound component is rendered
    expect(screen.getByText('Page not found.')).toBeInTheDocument();
  });
});
