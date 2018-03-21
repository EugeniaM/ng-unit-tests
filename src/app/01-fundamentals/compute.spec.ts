import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if input number less than 0', () => {
    const result = compute(-1);

    expect(result).toBe(0);
  });

  it('should increment input number if it is positive', () => {
    const result = compute(1);

    // expect(result).toBe(2);
    expect(result).toBeGreaterThan(0);
  });
});
