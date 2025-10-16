import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button /> 컴포넌트', () => {
  // 렌더링 테스트
  it('prop으로 전달된 텍스트를 올바르게 렌더링한다.', () => {
    render(<Button text="Click Me" dataSize="medium" dataType="primary" />);
    // "Click Me"라는 텍스트를 가진 버튼 요소가 문서에 있는 지 확인
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
