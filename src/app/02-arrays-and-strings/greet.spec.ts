import { greet } from './greet';

describe('greet', () => {
  it('should return phrase with passed name', () => {
    const result = greet('John');

    expect(result).toContain('John');
  });
});
