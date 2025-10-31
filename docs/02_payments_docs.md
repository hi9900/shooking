# 결제 모듈 프로젝트

## 프로젝트 개요

- 이 결제 모듈은 카드를 등록하고 결제 시 사용할 수 있게 도와주는 기능을 제공합니다.

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

- `CardListPage`: 등록된 카드 목록을 보여주는 페이지 컴포넌트입니다.
- `CardAddPage`: 카드를 등록하는 페이지 컴포넌트입니다.
- `CardContext`: 카드 목록 상태를 관리하는 전역 상태 관리자입니다.

## 테스트 방법

```bash
# 유닛 테스트 실행
$ npm test
```

## 유의사항 및 알려진 이슈

- 추후 목 API를 사용한 데이터 처리가 필요합니다.
- 카드를 등록할 때, 카드 번호 마스킹 처리를 위해 추가 라이브러리가 필요합니다.
- 사용성 개선 측면에서 페이지로 구현된 카드 관리를 모달 형태로 변경할 수 있습니다.

## 추가 항목

- `react-imask`: input value에 마스킹을 처리하는 라이브러리 
