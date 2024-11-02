describe('Single Post Page Tests', () => {
    beforeEach(() => {
      // Intercept the general posts request
      cy.intercept('GET', '**/posts').as('getPosts');
      cy.intercept('**').as('anyRequest'); // Catch all network requests
    });
  
    it('renders "NotFound" component when post is not found', () => {
      // Visit the page with an invalid post ID
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/999', { failOnStatusCode: false });
  
      // Check that the NotFound component is displayed
      cy.contains('Page not found.').should('be.visible');
    });
  
    it('renders a post when found and shows the Delete button for post owner', () => {
      // Visit the Single Post page
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/19?userId=2', { timeout: 15000 });
  
      // Wait for the requests
      cy.wait('@anyRequest', { timeout: 15000 });
  
      // Ensure the post title is displayed
      cy.contains('Adipisci Placeat Illum Aut Reiciendis Qui', { timeout: 15000 }).should('be.visible');
  
      // Ensure the post body is displayed
      cy.contains('Illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci')
        .should('be.visible');
  
      // Check if the delete button is visible for the post owner
      cy.get('a[aria-label="Delete post"]').should('exist').and('be.visible');
  
      // Click the delete button
      cy.get('a[aria-label="Delete post"]').click();
  
      // Verify that the page redirects or updates state
      cy.wait(1000); // Adjust if necessary
      cy.screenshot('after-clicking-delete');
    });
  
    it('hides the Delete button for non-post owners', () => {
      // Visit the Single Post page as a non-owner
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/1?userId=3', { timeout: 15000 });
  
      // Wait for the general posts request
      cy.wait('@getPosts', { timeout: 15000 });
  
      // Ensure the post content is displayed
      cy.contains('Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio Reprehenderit').should('be.visible');
  
      // Verify that the delete button is not visible for non-owners
      cy.get('a[aria-label="Delete post"]').should('not.exist');
    });
  
    it('handles invalid post IDs gracefully', () => {
      // Visit the page with a non-numeric post ID
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/invalid-id', { failOnStatusCode: false });
  
      // Check that the NotFound component is displayed
      cy.contains(/Page not found/i).should('be.visible');
    });
  
    it('ensures correct state when navigating between posts', () => {
      // Visit the first post
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/19?userId=2', { timeout: 15000 });
  
      // Wait for the requests
      cy.wait('@getPosts', { timeout: 15000 });
  
      // Ensure the post content is displayed
      cy.contains('Adipisci Placeat Illum Aut Reiciendis Qui').should('be.visible');
  
      // Navigate to another post
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/1?userId=2', { timeout: 15000 });
  
      // Wait for the requests
      cy.wait('@getPosts', { timeout: 15000 });
  
      // Verify that the new post content is displayed
      cy.contains('Adipisci Placeat Illum Aut Reiciendis Qui').should('not.exist'); // Old post should be gone
      cy.contains('Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio Reprehenderit').should('be.visible'); // Adjust to match the new post
    });
  });
  