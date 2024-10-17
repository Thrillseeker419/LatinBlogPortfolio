describe('Add Post Form Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/LatinBlogPortfolio/Posts/Create?userId=2', { timeout: 10000 });
    });
  
    it('should display the correct page title', () => {
      cy.contains('Add a New Post').should('be.visible');
    });
  
    it('should show validation errors for empty fields', () => {
      cy.get('button[aria-label="Save post"]').click();
      cy.contains('Please enter a title for the post.').should('be.visible');
      cy.contains('Please enter content for the body of the post.').should('be.visible');
    });
  
    it('should allow typing in the post title and content', () => {
      cy.get('input[aria-label="Post title"]').type('My New Post');
      cy.get('textarea[aria-label="Post content"]').type('This is the content of my new post.');
      cy.get('input[aria-label="Post title"]').should('have.value', 'My New Post');
      cy.get('textarea[aria-label="Post content"]').should('have.value', 'This is the content of my new post.');
    });
  
    it('should save the post and navigate to the posts page', () => {
      cy.get('input[aria-label="Post title"]').type('My New Post');
      cy.get('textarea[aria-label="Post content"]').type('This is the content of my new post.');
  
      cy.intercept('POST', '**/posts').as('savePost'); // Mock the API call
  
      cy.get('button[aria-label="Save post"]').click();
  
      cy.wait('@savePost').its('response.statusCode').should('eq', 201); // Ensure the post request was successful
      cy.url().should('include', '/LatinBlogPortfolio/Posts'); // Check if navigation occurred
    });
  });
  