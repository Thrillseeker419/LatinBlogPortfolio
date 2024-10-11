import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound'; // Adjust the path as per your file structure
import '@testing-library/jest-dom/extend-expect';

describe('NotFound Component', () => {
  test('renders the NotFound page correctly', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the 404 heading is displayed
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');

    // Check if the "Page not found" text is displayed
    expect(screen.getByText('Page not found.')).toBeInTheDocument();

    // Check if the link to the homepage is displayed and correct
    const linkElement = screen.getByRole('link', { name: /Return to home page/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/LatinBlogPortfolio');
  });
});
