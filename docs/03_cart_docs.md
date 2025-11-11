# 장바구니 프로젝트

## 프로젝트 개요

- 확장 가능하고 테스트 용이한 장바구니 및 결제 준비 기능을 제공합니다.

- 주요 기능:
  - 장바구니 상품 추가, 수량 변경(증가/감소), 삭제
  - 장바구니 금액 실시간 계산 (상품 금액, 배송비, 총 금액)
  - 10만원 기준 배송비 무료/부과 로직 적용
  - `react-router-dom`을 이용한 페이지 라우팅
  
- 페이지 URL: hi9900.github.io/shooking/

## 개발 환경

Framework: React 19, React Router DOM (v6)

Language: TypeScript

Build Tool: Vite

Styling: Tailwind CSS (v3)

State Management: React Context API

Testing: Jest, React Testing Library

## 설치 및 실행 방법

```bash
# 1. 프로젝트 클론 및 의존성 설치
$ git clone [저장소 URL]
$ cd [프로젝트 폴더]
$ npm install

# 2. 개발 서버 실행
$ npm run dev

# 3. 프로덕션 빌드
npm run build
````

## 컴포넌트 구조

- `CartProvider`: 장바구니 전역 상태(`cart`)를 관리합니다.
- `useFormInput`: `useState`와 `onChange` 핸들러, 포맷팅 함수를 캡슐화한 커스텀 훅입니다.
- `CartPage`: 장바구니 메인 페이지. `CartItem` 목록과 `OrderSummary`를 렌더링합니다.
- `CartItem`: 장바구니 내 개별 상품 UI. `useCart` 훅을 직접 호출하여 "수량 변경" 및 "상품 삭제" 기능을 수행합니다.
- `OrderSummary`: 주문 요약 컴포넌트. `useCart` 훅에서 이미 계산된 `subtotal`, `shipping`, `total` 값을 가져와 표시(Presentational)하는 역할만 합니다.

## 테스트 방법

```bash
# 유닛 테스트 실행
$ npm test
```

## 유의사항 및 알려진 이슈

  - 공통 `Button` 컴포넌트 이슈:
      - 공통 `Button` 컴포넌트의 불안정성 있습니다.
      - 임시 해결책으로 `button` 태그에 `className`을 직접 적용하여 스타일링했습니다. 공통 `Button` 컴포넌트의 안정화 및 리팩토링이 필요합니다.
  - 폼 유효성 검사:
      - `FormInput` 컴포넌트에 `errorMessage` prop을 전달받아, 유효성 검사 실패 시 사용자에게 시각적인 피드백을 제공하는 기능이 구현되어야 합니다.
  - 결제 기능 (미구현):
      - "결제하기" 버튼 클릭 이후의 실제 결제 모달 UI 및 PG사 연동 로직은 아직 구현되지 않았습니다.
  - 스토리북(Storybook):
    - 현재 프로젝트에서는 스토리북을 사용하고 있지 않습니다. (추가 예정)

<!-- 
## 추가 항목
-->

