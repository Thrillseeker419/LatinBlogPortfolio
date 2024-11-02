describe('NotFound Component Tests', () => {
    beforeEach(() => {
      // Visit a non-existent route to trigger the 404 page
      cy.visit('http://localhost:3000/LatinBlogPortfolio/non-existent-route', { failOnStatusCode: false });
    });
  
    it('should display the correct page title', () => {
      cy.title().should('eq', 'Page not found');
    });
  
    it('should display 404 message and text', () => {
      cy.contains('404').should('be.visible');
      cy.contains('Page not found.').should('be.visible');
    });
  
    it('should navigate back to the home page when the link is clicked', () => {
      cy.contains('Return to home page.').click();
      cy.url().should('eq', 'http://localhost:3000/LatinBlogPortfolio');
    });
  });
  