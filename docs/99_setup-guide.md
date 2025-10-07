## 프로젝트 설정 가이드

이 문서는 Vite 기반 React + TypeScript 프로젝트의 초기 환경을 재현하기 위한 설정 가이드입니다.  
개발 효율성과 코드 품질, 일관된 스타일 유지를 목표로 합니다.

구성 요소:

- Vite: 빠른 빌드 및 HMR(Hot Module Replacement)
- React + TypeScript: 타입 안정성과 컴포넌트 기반 UI
- ESLint + Prettier: 코드 품질 및 스타일 관리
- Tailwind CSS: 유틸리티 기반 CSS 프레임워크

### 1. 프로젝트 생성

Vite를 이용해 React와 TypeScript 기반의 기본 프로젝트를 생성합니다.

```bash
# react + typescript
npx create-vite@latest app -- --template react-ts
cd app
npm install
```

> Node 버전: 22.20.0 이상 권장. 엔진 경고가 보이면 Node 업데이트를 권장합니다.

```bash
# .nvmrc
22.20.0
```

### 2. 기본 의존성 설치

라우팅, 코드 품질, 스타일 관리에 필요한 패키지를 설치합니다.

```bash
# 라우터
npm i react-router-dom

# ESLint + Prettier
npm i -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### 3. ESLint 설정

코드 일관성과 품질 유지를 위해 ESLint를 설정합니다.

```js
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]);
```

### 4. Prettier 설정

Prettier를 통해 코드 포맷을 자동 정렬합니다.

```json
// .prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### 5. 경로 별칭 설정 (Alias)

절대 경로를 사용하여 유지보수성을 높입니다.

```json
// tsconfig.json
{
  "files": [],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  ...
}
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### 6. tailwind CSS 설정

Tailwind CSS를 설치하고 기본 설정을 추가합니다.

```bash
npm i -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

...
```

### 7. 설정 검증

아래 명령어를 실행하여 설정이 정상적으로 동작하는지 확인합니다.

```
npm run dev
npm run lint
```

<!-- ### N. 상태 관리 라이브러리 -->
