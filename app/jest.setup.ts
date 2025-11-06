import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

import { TextEncoder, TextDecoder } from 'util';

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder;
}
if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockedNavigate, // 필요하면 테스트에서 import 해서 검사
    // Link도 필요하면 여기서 가짜 컴포넌트로 대체 가능
  };
});

export {};
