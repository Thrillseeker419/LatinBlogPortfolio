import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Mocking localStorage and alert
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});

// Define and mock window.confirm
beforeAll(() => {
  Object.defineProperty(window, 'confirm', {
    writable: true,
    value: jest.fn(),
  });
});

describe('Layout Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Ensure no mocks leak between tests
  });

  test('renders navigation links', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
          <Layout />
        </MemoryRouter>
      </Provider>
    );

    // Check for navigation links
    expect(screen.getByRole('link', { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /posts/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /authors/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /create/i })).toBeInTheDocument();
  });

  test('clicking Reset Data button clears localStorage and shows alert', () => {
    // Cast window.confirm as jest.Mock and set implementation
    (window.confirm as jest.Mock).mockImplementation(() => true); // User confirms

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
          <Layout />
        </MemoryRouter>
      </Provider>
    );

    const resetButton = screen.getByRole('button', { name: /reset all data/i });

    fireEvent.click(resetButton);

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to reset all data? This action cannot be undone.');
    expect(mockRemoveItem).toHaveBeenCalledWith('applicationState');
    expect(mockAlert).toHaveBeenCalledWith(
      'All data has been reset to its original state. All created posts have been deleted and all original posts have been restored.'
    );
  });

  test('clicking Reset Data button and cancelling does nothing', () => {
    // Cast window.confirm as jest.Mock and set implementation
    (window.confirm as jest.Mock).mockImplementation(() => false); // User cancels

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
          <Layout />
        </MemoryRouter>
      </Provider>
    );

    const resetButton = screen.getByRole('button', { name: /reset all data/i });

    fireEvent.click(resetButton);

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to reset all data? This action cannot be undone.');
    expect(mockRemoveItem).not.toHaveBeenCalled();
    expect(mockAlert).not.toHaveBeenCalled();
  });
});
