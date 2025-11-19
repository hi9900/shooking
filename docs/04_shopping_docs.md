# 쇼핑몰 연동

## 프로젝트 개요

기존 쇼핑몰 시스템과 연동하여 상품 목록, 상세 조회, 장바구니, 결제 수단 등록까지 끊김 없는 SPA(Single Page Application)를 구축합니다.

데이터의 일관성을 유지하며 페이지 간 자연스러운 이동을 보장합니다.

## 개발 환경

Framework: React 19

Language: TypeScript

Build Tool: Vite

Styling: Tailwind CSS

State Management: React Context API

Routing: React Router DOM v6

Testing: Jest, React Testing Library

## 설치 및 실행 방법

예시:
```
# 1. 프로젝트 클론 및 의존성 설치
$ git clone [저장소 URL]
$ cd [프로젝트 폴더]
$ npm install

# 2. 개발 서버 실행
$ npm run dev
```

## 프로젝트 구조

```
src/
├── assets/             # 이미지, 아이콘 등 정적 파일
├── components/
│   ├── common/         # Header, Layout, Button, FormInput 등 공통 컴포넌트
│   ├── cards/          # ProductCard, CardItem(신용카드) 등 카드 UI
│   └── features/       # OrderSummary, CardForm 등 도메인 특화 컴포넌트
├── contexts/           # 전역 상태 관리 (CartContext, CardContext)
├── hooks/              # 커스텀 훅 (useCart, useFormInput)
├── pages/              # 페이지 단위 컴포넌트 (ProductList, ProductDetail, Cart, CardAdd)
├── types/              # TypeScript 인터페이스 정의
└── utils/              # formatPrice, formatters 등 유틸리티 함수
```

## 주요 함수와 기능

### 1. 장바구니 로직 (`CartContext`)

- **`increaseQuantity` / `decreaseQuantity`**: 불변성을 유지하며 수량을 조절합니다. (수량 1개 미만 감소 방지)
- **금액 자동 계산 (`useMemo`)**: `cart` 상태가 변경될 때만 아래 값들을 재계산하여 성능을 최적화했습니다.
    - `subtotal`: 전체 상품 금액
    - `shipping`: 100,000원 미만 시 3,000원, 이상 시 0원 적용
    - `total`: 최종 결제 금액

### 2. 상품 상세 및 추천

  - **동적 라우팅**: URL 파라미터(`/product/:id`)를 통해 상품 데이터를 조회합니다.
  - **관련 상품 추천**: 현재 보고 있는 상품의 `brand` 값을 기준으로 동일 브랜드 상품을 필터링하여 하단에 노출합니다.

## 테스트 방법

```
# 유닛 테스트 실행
$ npm test
```

## 유의사항 및 알려진 이슈

1.  **공통 컴포넌트 스타일링:** `CartPage` 내 "쇼핑 계속하기" 버튼은 현재 공통 `Button` 컴포넌트 대신 HTML `button` 태그에 Tailwind 클래스를 직접 적용하여 구현했습니다. 추후 `Button` 컴포넌트의 variant 확장이 필요합니다.
2.  **결제 모듈:** 현재 "결제하기" 버튼 클릭 시 실제 PG사 연동은 되어있지 않으며, 결제 모달 UI 연동 단계까지만 구현되어 있습니다.
3.  **데이터 영속성:** 새로고침 시 Context 상태가 초기화됩니다. 추후 `localStorage` 연동이 권장됩니다.

## 추가 항목

- **접근성(A11y):** 버튼 태그 사용, `aria-label` 적용, `input` 레이블 연결 등 웹 접근성을 준수하여 개발되었습니다.
