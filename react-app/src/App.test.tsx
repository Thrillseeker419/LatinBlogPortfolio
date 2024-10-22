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

    expect(screen.getByText(/Welcome to The Communal Latin Blog!/i)).toBeInTheDocument();
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

  test('renders PostList page when navigating to "/LatinBlogPortfolio/Posts"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/LatinBlogPortfolio/Posts']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Replace with actual content in your PostList component
    expect(screen.getByText(/Explore the Posts/i)).toBeInTheDocument();
  });

  test('renders AddPostForm page when navigating to "/LatinBlogPortfolio/Posts/Create"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/LatinBlogPortfolio/Posts/Create']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Replace with actual content in your AddPostForm component
    expect(screen.getByText(/Create a New Post/i)).toBeInTheDocument();
  });
});
