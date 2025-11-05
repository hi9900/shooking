/**
 * 카드 번호
 * - 4자리씩 끊어 '-'를 표시하고, TODO: 마지막 8자리는 마스킹
 * @param value
 * @returns
 */
export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  let formattedValue = '';

  for (let i = 0; i < digits.length; i++) {
    // 4자리마다 하이픈 추가
    if (i > 0 && i % 4 === 0) {
      formattedValue += '-';
    }
    formattedValue += digits[i];
  }

  return formattedValue.substring(0, 19);
};

/**
 * 만료일
 * - 숫자 4자리를 2자리씩 끊어 MM/YY 형태로 표시
 * NOTE: 숫자가 0으로 시작될 때의 처리
 */
export const formatExpirationDate = (value: string): string => {
  const digits = value.replace(/\D/g, ''); // 숫자만 추출
  let formattedValue = digits;

  if (digits.length > 2) {
    formattedValue = `${digits.substring(0, 2)} / ${digits.substring(2, 4)}`;
  }

  return formattedValue.substring(0, 7);
};

// FIXME: 한글이 입력되면, 이전 글자가 지워짐
/**
 * 카드 소유자 이름
 * - 영문 대문자로 변환
 */
export const formatCardHolderName = (value: string): string => {
  const formattedValue = value.replace(/[^a-zA-Z\s]/g, ''); // 영문, 공백만 추출
  return formattedValue.toUpperCase().substring(0, 30);
};

/**
 * cvc: 숫자 3자리
 * @param value
 * @returns
 */
export const formatCvc = (value: string): string => {
  return value.replace(/\D/g, '').substring(0, 3);
};

// 비밀번호 1자리: 숫자 1자리
export const formatPasswordDigit = (value: string): string => {
  return value.replace(/\D/g, '').substring(0, 1);
};
