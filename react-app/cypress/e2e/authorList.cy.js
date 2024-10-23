describe('Author List Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Authors', { timeout: 10000 }); // Ensure page loads
    });
  
    it('should display the correct page title', () => {
      cy.contains('Meet the Authors').should('be.visible');
    });
  
    it('should display all authors', () => {
      cy.get('.ui.link.cards.author-list-container .card').should('have.length.greaterThan', 0);
    });
  
    it('should display author details correctly', () => {
      cy.get('.card').first().within(() => {
        cy.get('.header').should('be.visible'); // Check if the author name is visible
        cy.get('.meta span').should('exist');   // Check if email is present
      });
    });
  
    it('should navigate to an author’s details page', () => {
      cy.get('.card').first().click();
      cy.url().should('include', '/Authors/');
    });
  
    it('should correctly display the number of posts by each author', () => {
      cy.get('.card').each(($card) => {
        cy.wrap($card).find('.extra.content span i.comment.icon').should('exist');
      });
    });
  });
  