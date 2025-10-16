import { formatPrice } from './formatPrice';

describe('formatPrice 함수', () => {
  it('숫자에 3자리 콤마를 추가하고 "원"을 붙여 반환한다', () => {
    expect(formatPrice(1000)).toBe('1,000원');
    expect(formatPrice(1234567)).toBe('1,234,567원');
  });

  it('콤마가 필요 없는 숫자도 올바르게 처리한다', () => {
    expect(formatPrice(500)).toBe('500원');
  });

  it('0일 경우 "0원"을 반환한다', () => {
    expect(formatPrice(0)).toBe('0원');
  });

  it('음수일 경우에도 올바르게 처리한다', () => {
    expect(formatPrice(-5000)).toBe('-5,000원');
  });
});
