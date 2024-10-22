describe('TimelinePage Component', () => {

    beforeEach(() => {
      // Visiting the Timeline page before each test
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Timeline', { timeout: 10000 }); // Wait for the page to load
    });
  
    it('displays the Timeline component by default', () => {
      // Check that the Timeline header is visible by default
      cy.get('.timeline-header').should('contain.text', 'Historical Timeline of Our Community');
    });
  
    it('switches to Achievements component when Achievements button is clicked', () => {
      // Click the Achievements button
      cy.get('.achievements-button').click();
  
      // Add a small wait to ensure the component switches
      cy.wait(500);
  
      // Check that the Achievements header is visible
      cy.get('.achievements-header').should('contain.text', 'Achievements');
    });
  
    it('switches back to Timeline component when Timeline button is clicked', () => {
      // First, click the Achievements button to switch
      cy.get('.achievements-button').click();
  
      // Add a small wait to ensure the component switches
      cy.wait(500);
  
      // Now, click the Timeline button to switch back
      cy.get('.timeline-button').click();
  
      // Add another small wait to ensure the component switches
      cy.wait(500);
  
      // Check that the Timeline header is visible again
      cy.get('.timeline-header').should('contain.text', 'Historical Timeline of Our Community');
    });
  
    it('keyboard accessibility works for switching to Achievements component using Enter', () => {
        // Focus on the Achievements button
        cy.get('.achievements-button').focus().should('have.focus');
    
        // Use the realPress() to simulate the Enter key press
        cy.get('.achievements-button').realPress('Enter');
    
        // Check that the Achievements header is visible
        cy.get('.achievements-header').should('contain.text', 'Achievements');
    });
  
  
    it('keyboard accessibility works for switching back to Timeline component using Enter', () => {
        // First, switch to Achievements
        cy.get('.achievements-button').click();
      
        // Add a small wait to ensure the component switches
        cy.wait(500);
      
        // Focus on the Timeline button and press the Enter key using realPress
        cy.get('.timeline-button').focus().realPress('Enter');
      
        // Add another small wait to ensure the component switches
        cy.wait(500);
      
        // Check that the Timeline header is visible again
        cy.get('.timeline-header').should('contain.text', 'Historical Timeline of Our Community');
      });
      
  });
  