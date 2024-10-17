describe('Delete Post Form Tests', () => {
    beforeEach(() => {
      // Setup intercepts for monitoring requests
      cy.intercept('GET', '**/posts/**').as('getPost'); // Updated for broader matching
      cy.intercept('DELETE', '**/posts/**').as('deletePost');
      cy.intercept('**').as('anyRequest'); // Catch all requests
  
      // Visit the page with a valid postId and userId query parameter
      cy.visit(
        'http://localhost:3000/LatinBlogPortfolio/Posts/Delete/19?userId=2', 
        { timeout: 15000 }
      );
  
      // Wait for any network requests to ensure they occur
      cy.wait('@anyRequest', { timeout: 15000 }).then((interception) => {
        console.log('Intercepted request:', interception);
      });
    });
  
    it('should display the correct page title', () => {
      // Confirm the single-post-container is visible before checking the title
      cy.get('.single-post-container', { timeout: 10000 }).should('be.visible');
      cy.title().should('eq', 'Delete Your Post');
    });
  
    it('should confirm network requests are made', () => {
        cy.wait('@anyRequest', { timeout: 15000 }).then((interception) => {
          if (interception.response) {
            console.log('Intercepted response status:', interception.response.statusCode);
            expect(interception.response.statusCode).to.be.oneOf([200, 304]);
          } else {
            console.error('No response intercepted!');
            throw new Error('No valid network request was intercepted.');
          }
        });
      });
      
  
    it('should wait for the single-post-container to appear', () => {
      cy.get('.single-post-container', { timeout: 10000 }).should('be.visible');
    });
  
    it('should show the confirmation delete prompt', () => {
      cy.contains('Are you sure you want to delete this post?').should('be.visible');
    });
  
    it('should delete the post when the Confirm Delete button is clicked', () => {
        // Click the delete button
        cy.get('button[aria-label="Confirm delete post"]').click().then(() => {
          console.log('Delete button clicked, post should be deleted locally.');
        });
      
        it('should disable the delete button during the request', () => {
            // Get the button, click it, and then break the chain
            cy.get('button[aria-label="Confirm delete post"]').as('deleteBtn');
          
            cy.wait(500); // Allow time for any UI updates
            // Re-query the button to ensure it exists and hasn't been removed from the DOM
            cy.get('@deleteBtn', { timeout: 10000 }).should('exist').and('be.disabled');
          });

        // Check if user is redirected to /Posts
        cy.url().should('include', '/LatinBlogPortfolio/Posts');
      
      });
      
  
      
      
  
    it('should show a 404 Not Found page if post does not exist', () => {
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/Delete/999?userId=2', { failOnStatusCode: false });
      cy.contains(/404 Page Not Found/i).should('be.visible');
    });
  
    it('should show a 404 Not Found message if userId is not 2', () => {
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/Delete/19?userId=1', { failOnStatusCode: false });
      cy.contains(/404 Page Not Found/i).should('be.visible');
    });
  });
  