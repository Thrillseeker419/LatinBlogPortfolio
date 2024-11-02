# LatinBlogPortfolio

A demo site of an imaginary Latin blog community where users can create, delete, and search for posts. Users can also view authors and view a timeline of past events as well as past achievements. This site uses a mock API, so some functionality has been emulated. This website uses mock data that utilizes your cookies to function. If any irrecoverable errors occur, please clear your cookies and make sure cookies are enabled. Built with React, this portfolio emphasizes accessibility, responsiveness, and various aesthetics. It is meant to showcase different design choices. Active deployment is happening on the "deploy" branch.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Unit Testing](#unit-testing)
  - [Cypress Testing](#cypress-testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live demo of the LatinBlogPortfolio hosted on [GitHub Pages](https://Thrillseeker419.github.io/LatinBlogPortfolio/).

![Screenshot of LatinBlogPortfolio](./screenshots/homepage.png)

## Features

- **Create Posts:** Users can compose and publish new blog posts.
- **Delete Posts:** Remove unwanted or outdated posts.
- **Search Functionality:** Easily find posts using the search bar.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
- **Accessible Interface:** Designed following accessibility best practices.
- **Mock API Integration:** Simulates backend interactions for a seamless user experience.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling and layout.
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language.
- **Tools & Services:**
  - [GitHub Pages](https://pages.github.com/) - Hosting the portfolio website.
  - [Mock Service Worker (MSW)](https://mswjs.io/) - Mocking API calls for development.

## Getting Started

To download and run the project on your local machine, follow these steps:

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Thrillseeker419/LatinBlogPortfolio.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd LatinBlogPortfolio/react-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. **Open the application in your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the project.

## Usage

Once the application is running, you can:

- **Create a Post:**
  - Click on the "New Post" button.
  - Fill in the title and content fields.
  - Submit to add the post to the blog.

- **Delete a Post:**
  - Click the "Delete" button on the desired post.
  - Confirm the deletion to remove the post.

- **Search for Posts:**
  - Use the search bar at the top to find posts by keywords.

![Creating a Post](./screenshots/create-post.gif)

## Testing

### Unit Testing

The project includes unit tests for React components using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

To run the unit tests, use the following command:

```bash
npm test
```

This command will run all unit tests in watch mode by default. To run the tests a single time and get a test report, use:

```bash
npm test -- --watchAll=false
```

Tests include:

- **Component rendering** – Ensures that components like `Achievements` and `Timeline` are correctly rendered.
- **Event handling** – Tests actions such as button clicks and form submissions.
- **Keyboard accessibility** – Ensures components respond to keyboard events like `Enter` and `Space` key presses.

### Cypress Testing

End-to-end testing is handled using [Cypress](https://www.cypress.io/), allowing simulation of real user interactions like navigating through the app, clicking buttons, and keyboard accessibility.

To run Cypress tests:

1. **Ensure Cypress is installed** (already included in `devDependencies`):

    ```bash
    npm install cypress --save-dev
    ```

2. **Run Cypress in interactive mode:**

    ```bash
    npx cypress open
    ```

    This will launch the Cypress test runner. You can select the test you want to run interactively.

3. **Run Cypress in headless mode:**

    ```bash
    npx cypress run
    ```

    This runs the tests in the terminal and provides a report after completion.

Example Cypress Test:

```javascript
describe('TimelinePage Component', () => {
  beforeEach(() => {
    cy.visit('/Timeline');
  });

  it('switches to Achievements component when Achievements button is clicked', () => {
    cy.get('.achievements-button').click();
    cy.get('.achievements-header').should('contain.text', 'Achievements');
  });

  it('keyboard accessibility works for switching to Achievements component using Space', () => {
    cy.get('.achievements-button').focus().realPress('Space');
    cy.get('.achievements-header').should('contain.text', 'Achievements');
  });
});
```

## Contributing

Contributions are not currently welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

GitHub: [Thrillseeker419](https://github.com/Thrillseeker419)

