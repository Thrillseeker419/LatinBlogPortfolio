import { fireEvent, render, screen } from '@testing-library/react';
import  Home   from './Home';
import '@testing-library/jest-dom/extend-expect';

// Mock the image imports
jest.mock('../assets/images/latinWriting.png', () => 'latinWriting.png');
jest.mock('../assets/images/latinWriting3.png', () => 'latinWriting3.png');
jest.mock('../assets/images/latinWriting4.png', () => 'latinWriting4.png');

describe('HomePage Component', () => {
  test('renders the home page correctly', () => {
    render(<Home />);

    // Check for the main heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Communal Latin Blog');
    expect(screen.getByText(/Welcome to The Communal Latin Blog!/i)).toBeInTheDocument();
    expect(screen.getByText(/Post your own writings/i)).toBeInTheDocument();
    expect(screen.getByText(/How to use the site:/i)).toBeInTheDocument();
  });

  
  test('renders the carousel and navigates through slides', () => {
    render(<Home />);

    // Check if the carousel is rendered
    expect(screen.getByTestId('carousel-home')).toBeInTheDocument();

    // Check the initial slide content
    expect(screen.getByAltText('First picture of Latin writing')).toBeInTheDocument();
    expect(screen.getByText(/Write to your heart's content/i)).toBeInTheDocument();

    // Simulate carousel navigation to the next slide
    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    // Check second slide content
    expect(screen.getByAltText('Second picture of Latin writing')).toBeInTheDocument();
    expect(screen.getByText(/Read someone else's Latin/i)).toBeInTheDocument();

    // Simulate another carousel navigation to the third slide
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Third picture of Latin writing')).toBeInTheDocument();
    expect(screen.getByText(/Meet the community/i)).toBeInTheDocument();
  });

  test('pauses and resumes the carousel', () => {
    render(<Home />);

    // Check that the Pause button exists
    const pauseButton = screen.getByRole('button', { name: /Pause/i });
    expect(pauseButton).toBeInTheDocument();

    // Simulate pausing the carousel
    fireEvent.click(pauseButton);
    expect(pauseButton).toHaveTextContent('Play');
    expect(pauseButton).toHaveAttribute('aria-pressed', 'true');

    // Simulate resuming the carousel
    fireEvent.click(pauseButton);
    expect(pauseButton).toHaveTextContent('Pause');
    expect(pauseButton).toHaveAttribute('aria-pressed', 'false');
  });

});


