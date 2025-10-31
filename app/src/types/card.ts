/**
 * ContextAPI에서 사용할 카드 정보 타입입
 */
export type Card = {
  id: string;
  first8Digits: string; // 카드 번호 첫 8자리만
  expirationDate: string;
  cardHolderName: string;
};

/**
 * API (POST /cards) 요청 시
 * 폼에서 서버로 전송하는 일회성 데이터 타입
 */
export type NewCardData = {
  cardNumber: string; // 16자리 원본 숫자
  expirationDate: string;
  cardHolderName: string;
  cvc: string;
  password: string;
};
