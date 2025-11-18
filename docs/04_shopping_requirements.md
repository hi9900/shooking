# 쇼핑몰 연동 요구사항 분석 및 기능 목록

## 📌 기본 정보

### 프로젝트명: 
패션 쇼핑몰 연동 및 제품 상세 페이지

### 사용하게 될 기술: 

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

## 📝 고객 요구사항 정리

1. 페이지 연동: 상품 목록, 장바구니, 결제 등 모든 페이지에서 이동이 자연스럽게 이루어져야 합니다.
  예를 들어, 상품 목록에서 장바구니로 이동하면서도 사용자가 선택한 상품 데이터가 유지되어야 합니다.
2. 데이터 일관성: 페이지 간 이동이 있어도 데이터가 일관되게 유지되어야 합니다.
  상품 목록에서 장바구니에 상품을 담았을 때 다른 페이지에서도 그 상품이 장바구니에 담겨 있음을 명확히 보여주는 것처럼
3. 상세 페이지 추가: 상품을 클릭했을 때 나타나는 상세 페이지에서는 상품에 대한 상세 정보와 관련 상품 등을 보여주어야 합니다.
  관련 상품은 같은 브랜드의 상품을 보여주시면 됩니다. 피그마 시안에, 브랜드별로 관련 상품을 추가해두었으니 확인해주세요.
4. 테스트 URL 제공: 작업하시면서 중간에 테스트 URL을 제공해주세요.

## 📋 기능 목록

### 1. 공통 및 페이지 라우팅

* 클라이언트 사이드 라우팅 구축: `React Router DOM`을 사용하여 페이지 간 이동 시 새로고침이 없는 SPA(Single Page Application) 환경을 구축합니다.
* 주요 페이지 라우트(Route) 정의:
    * `/` : 상품 목록 페이지 (홈)
    * `/products/:id` : 개별 상품 상세 페이지 (동적 라우트)
    * `/cart` : 장바구니 페이지
    * `/cards` : 결제 모듈 (카드 선택) 페이지
    * `/checkout` : 결제 페이지
* 페이지 간 데이터 연동:
    * 상품 목록 페이지에서 특정 상품 클릭 시, 해당 상품의 `id`를 `URL Parameter` (예: `/products/123`)로 전달하여 상세 페이지로 이동시킵니다.
    * 상품 상세 페이지 또는 목록 페이지에서 "장바구니 담기" 선택 시, 관련 데이터를 `Context API`로 전달합니다.

### 2. 전역 상태 관리

* 장바구니 전역 상태 관리: `React Context API` (또는 Zustand/Recoil 등)를 사용하여 장바구니 상태(`cartItems`)를 전역으로 관리합니다.
* 실시간 데이터 동기화:
    * 어떤 페이지(목록, 상세)에서 장바구니에 상품을 추가하거나 제거해도, 전역 상태가 즉시 업데이트됩니다.
    * `Header`의 장바구니 아이콘(뱃지)은 전역 `cartItems`의 수량을 실시간으로 구독(subscribe)하여, 어느 페이지에 있든 항상 정확한 개수를 표시합니다.

### 3. 상품 상세 페이지

* 동적 데이터 페칭: `URL Parameter` (:id)를 기준으로 해당 상품의 상세 정보를 서버(API)로부터 조회하여 렌더링합니다.
* 상세 정보 UI 구현:
    * 상품 이미지 갤러리 (메인 이미지 및 썸네일)
    * 상품 기본 정보 (브랜드명, 상품명, 가격)
    * 상품 상세 설명 (텍스트 및 이미지)
* 액션 버튼:
    * "장바구니 담기" 버튼 (클릭 시 `useCart` 컨텍스트의 `addToCart` 함수 호출)
* 관련 상품 섹션 (Same Brand):
    * 페이지 하단에 "관련 상품" 섹션을 구현합니다.
    * **로직:** 현재 보고 있는 상품(`product.brand`)과 동일한 브랜드의 다른 상품 목록을 API로부터 조회하여 렌더링합니다. (피그마 시안 참조)
