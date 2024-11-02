// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock window.scrollTo
Object.defineProperty(document.body, 'scrollTo', {
    value: jest.fn(),
    writable: true,
  });

  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    // Add a mock implementation
    value: jest.fn().mockImplementation(() => Promise.resolve()),
  });
