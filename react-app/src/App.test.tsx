import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Add this
import { store } from './redux/store';
import App from './App';

describe('App Routing', () => {
  test('renders Home page when navigating to "/LatinBlogPortfolio"', () => {
    render(
      <Provider store={store}> {/* Wrap with Provider */}
        <MemoryRouter initialEntries={['/LatinBlogPortfolio']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Connect with others. Enjoy learning another/i)).toBeInTheDocument();
  });

  test('renders AuthorList page when navigating to "/LatinBlogPortfolio/Authors"', () => {
    render(
      <Provider store={store}> {/* Wrap with Provider */}
        <MemoryRouter initialEntries={['/LatinBlogPortfolio/Authors']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/ervin.howell@melissa.tv/i)).toBeInTheDocument();
  });

  test('renders Not Found page for invalid routes', () => {
    render(
      <Provider store={store}> {/* Wrap with Provider */}
        <MemoryRouter initialEntries={['/invalid-route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

});
