import { formatPrice } from './formatPrice';

describe('1-1. 유틸리티 함수: formatPrice()', () => {
  it('UT-01: 1000을 인자로 전달하면, "1,000원"을 반환해야 한다.', () => {
    expect(formatPrice(1000)).toBe('1,000원');
  });

  it('UT-02: 1234567을 인자로 전달하면, "1,234,567원"을 반환해야 한다.', () => {
    expect(formatPrice(1234567)).toBe('1,234,567원');
  });

  it('UT-03: 0을 인자로 전달하면, "0원"을 반환해야 한다.', () => {
    expect(formatPrice(0)).toBe('0원');
  });

  it('UT-04: -5000을 인자로 전달하면, "-5,000원"을 반환해야 한다.', () => {
    expect(formatPrice(-5000)).toBe('-5,000원');
  });
});
