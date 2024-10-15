describe('Homepage Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/LatinBlogPortfolio', { timeout: 10000 }); // Wait for the page to load
    });
  
    it('should display the correct homepage title', () => {
      cy.contains('The Communal Latin Blog').should('be.visible');
    });
  
    it('should navigate to the posts page', () => {
      cy.get('a[aria-label="Search all posts"]').click();
      cy.url().should('include', '/Posts');
    });
  
    it('should reset data when Reset Data button is clicked', () => {
      cy.get('button[aria-label="Reset all data and return to the original state"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('All data has been reset to its original state');
      });
    });
  
    it('should render the carousel with all images', () => {
      cy.get('[data-testid="carousel-home"] .carousel-item').should('have.length', 3); // Verify three slides
    });
  
    it('should pause and play the carousel when the button is clicked', () => {
      cy.get('button[aria-label="Pause the carousel"]').click();
      cy.get('button').should('contain', 'Play');
  
      cy.get('button[aria-label="Play the carousel"]').click();
      cy.get('button').should('contain', 'Pause');
    });
  
    it('should display the carousel captions correctly', () => {
        // Ensure the first slide is active and visible
        cy.get('[data-testid="carousel-home"] .carousel-item')
          .first()
          .should('have.class', 'active'); // Ensure it's active
      
        cy.get('[data-testid="carousel-home"] .carousel-item.active').within(() => {
          cy.contains("Write to your heart's content!").should('be.visible');
          cy.contains('People are here for it!').should('be.visible');
        });
      
        // Move to the next slide
        cy.get('[data-testid="carousel-home"] .carousel-control-next').click();
        cy.get('[data-testid="carousel-home"] .carousel-item')
          .eq(1)
          .should('have.class', 'active'); // Wait for second slide to be active
      
        cy.get('[data-testid="carousel-home"] .carousel-item.active').within(() => {
          cy.contains("Read someone else's Latin").should('be.visible');
          cy.contains('Explore various blogs').should('be.visible');
        });
      
        // Move to the third slide
        cy.get('[data-testid="carousel-home"] .carousel-control-next').click();
        cy.get('[data-testid="carousel-home"] .carousel-item')
          .last()
          .should('have.class', 'active'); // Wait for third slide to be active
      
        cy.get('[data-testid="carousel-home"] .carousel-item.active').within(() => {
          cy.contains('Meet the community').should('be.visible');
          cy.contains('Connect with others of common interests!').should('be.visible');
        });
      });
      
  });
  