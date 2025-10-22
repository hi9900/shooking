/**
 * 숫자를 한국 통화 형식의 문자열로 변환하는 함수
 *
 * @param {number} price 포멧할 숫자 값
 * @returns {string} 콤마가 포함되고 '원'이 붙은 문자열
 */
export function formatPrice(price: number): string {
  return `${price.toLocaleString('ko-KR')}원`;
}
