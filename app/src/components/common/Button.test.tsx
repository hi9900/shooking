import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Button from './Button';

describe('Button 컴포넌트', () => {
  // --- 1-2. 렌더링 테스트 ---
  describe('1-2. `Button` 컴포넌트 렌더링 테스트', () => {
    it('CT-01: "담기" prop 전달 시, "담기" 텍스트를 가진 버튼이 렌더링된다.', () => {
      render(<Button text="담기" dataSize="medium" dataType="primary" />);
      const button = screen.getByRole('button', { name: /담기/i });
      expect(button).toBeInTheDocument();
    });

    it('CT-02: dataSize="small" 및 dataType="secondary" prop 전달 시, 올바른 CSS 클래스를 포함한다.', () => {
      render(<Button text="담기" dataSize="small" dataType="secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-3.5'); // small 클래스
      expect(button).toHaveClass('outline-1'); // secondary 클래스
    });

    it('CT-03: disabled={true} prop 전달 시, 버튼은 disabled 속성을 가진다.', () => {
      render(<Button text="담기" dataSize="medium" dataType="primary" disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  // --- 3-1. 상호작용 테스트 ---
  describe('Button 컴포넌트 클릭 테스트', () => {
    it('IT-01: onClick 핸들러를 prop으로 전달하고 클릭하면, 핸들러 함수가 1번 호출되어야 한다.', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(<Button text="Click" dataSize="medium" dataType="primary" onClick={handleClick} />);
      const button = screen.getByRole('button');

      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('IT-02: disabled 상태의 버튼을 클릭하면, onClick 핸들러가 호출되지 않아야 한다.', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Button text="Click" dataSize="medium" dataType="primary" disabled onClick={handleClick} />,
      );
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
