# 장바구니 페이지 요구사항 분석 및 기능 목록

## 📌 기본 정보

### 프로젝트명: 

패션 쇼핑몰 장바구니 페이지

### 사용하게 될 기술: 

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

## 📝 고객 요구사항 정리

1. 금액을 정확하게 계산해서 보여주세요
2. 총 금액이 10만원 미만이라면 배송비 3,000원, 10만원 이상은 배송비 무료입니다.
3. 뒤로가기 버튼을 이용해 메인 상품 목록 페이지로 이동할 수 있게 해주세요.
4. 결제하기 버튼을 누르면, 결제 모듈을 모달로 사용할 수 있게 연동해주세요.

## 📋 기능 목록

### 1. 장바구니 목록 (`<CartPage />`)

- 장바구니에 담은 상품을 수직 리스트 형태로 보여준다.
- 장바구니가 비어있을 경우, "장바구니가 비어있습니다."라는 메시지와 함께
  '쇼핑 계속하기' 버튼(상품 목록 페이지로 이동)을 표시한다.

#### 1-1. 상품 수량 변경 및 삭제 (`<CartItem />`)
- 수량 증가: `+` 버튼 클릭 시, 해당 상품의 `quantity`를 1 증가시키고, '주문 요약' 금액을 실시간으로 업데이트한다.
- 수량 감소: `-` 버튼 클릭 시, 해당 상품의 `quantity`를 1 감소시키고, '주문 요약' 금액을 실시간으로 업데이트한다.
    - 상품 수량이 1일 때 `-` 버튼은 `disabled` (비활성화) 처리된다.
- 상품 제거: `휴지통` 아이콘 버튼 클릭 시, "이 상품을 장바구니에서 삭제하시겠습니까?" 확인 모달을 표시한 후, 상품을 장바구니에서 완전히 제거한다.

### 2. 주문 요약 및 금액 계산 (`<OrderSummary />`)

- '전체 상품 금액'(Subtotal): `cartItems`의 `price * quantity`를 모두 합산하여 실시간으로 표시한다.
- '배송비'(Shipping Fee):
    - '전체 상품 금액'이 100,000원 미만일 경우 "3,000원"을 표시한다.
    - '전체 상품 금액'이 100,000원 이상일 경우 "무료" (또는 "0원")를 표시한다.
- '최종 결제 금액' (Total): '전체 상품 금액'과 '배송비'를 합산한 최종 금액을 표시한다.

### 3. 페이지 이동 및 결제 연동

- '뒤로가기' 버튼 클릭 시, 상품 목록 페이지로 이동한다.
- '결제하기' 버튼 (`<OrderSummary />`):
    - 장바구니가 비어있을 경우 `disabled` (비활성화) 처리한다.
    - 클릭 시, 이전에 구현한 결제 카드 목록(`CardListPage`)을 모달 창으로 화면에 띄웁니다.

## 참고 사항

- 카드 목록은 모달 창 혹은 페이지 형태로 화면에 표시할 수 있습니다.
- 장바구니 상태는 이전에 만들어 둔 `CartContext.tsx`를 사용합니다.
- 변경사항 적용 시, 상품 목록에서의 "장바구니 담기" 기능 테스트를 진행합니다.
