describe('Single Author Page Tests', () => {
    const baseUrl = 'http://localhost:3000/LatinBlogPortfolio/Authors';
    const authorName = 'Leanne Graham';
    const authorEmail = 'SincereLeanne@april.biz';
    const companyName = 'Romaguera-Crona';
    const companyBs = 'Harness real-time e-markets';
  
    beforeEach(() => {
      cy.intercept('GET', '**/Authors/*').as('getAuthor');
      cy.intercept('**').as('anyRequest'); // Catch all requests

      // Visit the page with a valid postId and userId query parameter
      cy.visit(`${baseUrl}/1`, { timeout: 15000 });
  
      // Wait for any network requests to ensure they occur
      cy.wait('@anyRequest', { timeout: 15000 }).then((interception) => {
        console.log('Intercepted request:', interception);
      });
  
    });
  
    it('renders an author when found and shows the correct details', () => {
      cy.visit(`${baseUrl}/1`, { timeout: 15000 });
  
      // Wait for the author data to load
      cy.wait('@getAuthor');
  
      // Verify the author's name and email
      cy.contains(authorName, { timeout: 10000 }).should('be.visible');

      cy.contains('a', 'april.biz').should('exist'); // Match based on domain

  
      // Verify company information
      cy.contains(companyName).should('be.visible');
      cy.contains(companyBs).should('be.visible');
  
      // Verify the address details
      cy.contains('Kulas Light').should('be.visible');
      cy.contains('Apt. 556').should('be.visible');
      cy.contains('Gwenborough').should('be.visible');
  
      // Verify the avatar image source
      cy.get('.single-post-avatar')
        .should('have.attr', 'src')
        .and('include', 'avatars/person_ponytail_swirl.png');
    });
  
    it('renders NotFound component if the author does not exist', () => {
      cy.visit(`${baseUrl}/999`, { failOnStatusCode: false });
  
      // Verify the NotFound message is displayed
      cy.contains('Page not found.').should('be.visible');
    });
  
  });
  