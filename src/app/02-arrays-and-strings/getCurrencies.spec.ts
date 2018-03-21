import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = getCurrencies();

    expect(result).toContain('EUR');
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
  });
});
