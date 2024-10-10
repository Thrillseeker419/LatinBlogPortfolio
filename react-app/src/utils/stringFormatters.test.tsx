import { MakeTitle, CapitalizeFirstLetter } from './stringFormatters';

describe('MakeTitle', () => {
  it('capitalizes the first letter of each word', () => {
    const input = 'hello world';
    const result = MakeTitle(input);
    expect(result).toBe('Hello World');
  });

  it('handles an empty string', () => {
    const input = '';
    const result = MakeTitle(input);
    expect(result).toBe('');
  });

  it('handles a single word', () => {
    const input = 'javascript';
    const result = MakeTitle(input);
    expect(result).toBe('Javascript');
  });

  it('handles strings with multiple spaces', () => {
    const input = 'hello   world';
    const result = MakeTitle(input);
    expect(result).toBe('Hello   World'); // Ensure extra spaces are preserved
  });

  it('handles strings with mixed case', () => {
    const input = 'hELLo WoRLD';
    const result = MakeTitle(input);
    expect(result).toBe('Hello World');
  });
});

describe('CapitalizeFirstLetter', () => {
  it('capitalizes the first letter of the string', () => {
    const input = 'hello';
    const result = CapitalizeFirstLetter(input);
    expect(result).toBe('Hello');
  });

  it('handles an empty string', () => {
    const input = '';
    const result = CapitalizeFirstLetter(input);
    expect(result).toBe('');
  });

  it('handles strings with a single letter', () => {
    const input = 'a';
    const result = CapitalizeFirstLetter(input);
    expect(result).toBe('A');
  });

  it('handles strings with already capitalized first letter', () => {
    const input = 'Hello';
    const result = CapitalizeFirstLetter(input);
    expect(result).toBe('Hello');
  });

  it('handles strings with special characters', () => {
    const input = 'hello!';
    const result = CapitalizeFirstLetter(input);
    expect(result).toBe('Hello!');
  });
});
