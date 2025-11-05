import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock('react-router-dom', () => ({
  // 1. react-router-dom의 다른 기능들도 모킹 (필요에 따라)
  ...jest.requireActual('react-router-dom'),

  // 2. useNavigate 훅을 가짜 함수로 대체
  useNavigate: () => jest.fn(),

  // 3. (만약 쓴다면) Link 컴포넌트도 가짜 컴포넌트로 대체
  // Link: ({ children, to }: { children: React.ReactNode, to: string }) =>
  //   React.createElement('a', { href: to }, children),
}));
