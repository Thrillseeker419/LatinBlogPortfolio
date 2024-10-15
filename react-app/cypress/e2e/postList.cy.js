describe('Posts List Page Tests', () => {
    const baseUrl = 'http://localhost:3000/LatinBlogPortfolio/Posts';
  
    beforeEach(() => {
      // Visit the Posts List page before each test
      cy.visit(baseUrl);
    });
  
    it('displays the page title and description', () => {
      // Verify that the page title and description are visible
      cy.contains('h1.page-title', 'Explore the Posts').should('be.visible');
      cy.contains('p.page-description', 'Browse through the posts').should('be.visible');
    });
  
    it('displays posts when loaded', () => {
      // Log the HTML before searching for the posts content
      cy.get('body').invoke('html').then((html) => {
        console.log('HTML content at the time of checking posts:', html);
      });
  
      // Ensure that post content is displayed
      cy.get('p.posts-list-item-content', { timeout: 15000 })
        .should('have.length.greaterThan', 0);
    });
  
    it('allows users to search for posts', () => {
        // Enter a search term and press enter
        cy.get('.search-bar-input').type('Voluptatibus ex esse{enter}');
        cy.url().should('include', 'searchTerms=Voluptatibus');

        // Wait for posts to exist
        cy.get('p.posts-list-item-content', { timeout: 15000 }).should('exist');
      
      });
      
      
  
    it('shows a message when no posts match the search', () => {
      // Perform a search with a non-existent term
      cy.get('.search-bar-input').type('NonExistentSearch{enter}'); 
      // Verify that the "No posts found" message is displayed
      cy.contains('div.no-posts-found', 'No posts found.').should('be.visible');
    });
  
    it('navigates between pages using pagination controls', () => {
      // Navigate to the next page using the next button
      cy.get('a[aria-label="Go to next results page"]').click();
      cy.url().should('include', 'pageNumber=2');
  
      // Navigate back to the previous page
      cy.get('a[aria-label="Go to previous results page"]').click();
      cy.url().should('include', 'pageNumber=1');
    });
  
    it('allows users to create a new post', () => {
      // Click on the "Create Post" button and verify navigation
      cy.get('.create-post-link').click();
      cy.url().should('include', '/Posts/Create?userId=2');
    });
  
    it('navigates to the correct post when clicked', () => {
      // Click the first post and verify it navigates to the correct URL
      cy.get('h2.header-content').first().click();
      cy.url().should('include', '/Posts/');
    });
  
    it('displays the correct avatar for each author', () => {
      // Verify that each post contains a valid avatar URL
      cy.get('.image img').each(($img) => {
        cy.wrap($img).should('have.attr', 'src').and('include', 'avatars/');
      });
    });
  });
  