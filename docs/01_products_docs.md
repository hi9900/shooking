# 상품 목록 페이지 프로젝트

## 프로젝트 개요

- 이 상품 목록 페이지는 고객에게 다양한 상품을 표시하고, 상품을 선택하여 장바구니에 추가할 수 있는 기능을 제공합니다.

## 개발 환경

Framework: React 19

Language: TypeScript

Build Tool: Vite

Styling: Tailwind CSS 3

State Management: React Context API

## 설치 및 실행 방법

```bash
# 1. 프로젝트 클론 및 의존성 설치
$ git clone [저장소 URL]
$ cd [프로젝트 폴더]
$ npm install

# 2. 개발 서버 실행
$ npm run dev
```

## 컴포넌트 구조

- `ProductListPage`: 상품 목록을 보여주는 메인 페이지 컴포넌트입니다.

- `ProductCard`: 개별 상품 정보를 표시하는 카드 컴포넌트입니다.

- `CartContext`: 장바구니 상태를 관리하는 전역 상태 관리자입니다.

## 테스트 방법

```bash
# 유닛 테스트 실행
$ npm test
```

## 유의사항 및 알려진 이슈

- 장바구니에서 상품 수량을 변경하거나 삭제하는 기능은 아직 구현되지 않았습니다.

## 추가 항목

- tailwind-merge: Tailwind CSS 클래스의 충돌을 방지하며 병합해주는 유틸리티
