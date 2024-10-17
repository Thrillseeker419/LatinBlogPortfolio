import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

// Mocking localStorage and alert
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});

describe('Layout Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Ensure no mocks leak between tests
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
        <Layout />
      </MemoryRouter>
    );

    // Check for navigation links
    expect(screen.getByRole('link', { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /posts/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /authors/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /create/i })).toBeInTheDocument();
  });

  test('clicking Reset Data button clears localStorage and shows alert', () => {
    render(
      <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
        <Layout />
      </MemoryRouter>
    );

    const resetButton = screen.getByRole('button', { name: /reset all data/i });

    fireEvent.click(resetButton);

    expect(mockRemoveItem).toHaveBeenCalledWith('applicationState');
    expect(mockAlert).toHaveBeenCalledWith('All data has been reset to its original state');
  });
});
