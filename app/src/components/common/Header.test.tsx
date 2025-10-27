import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
import { CartProvider } from '@/contexts/CartContext';

describe('1-3. Header 컴포넌트 렌더링 테스트', () => {
  const renderHeader = () => {
    return render(
      <MemoryRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </MemoryRouter>,
    );
  };

  it('CT-04: 로고와 장바구니 아이콘이 화면에 표시된다.', () => {
    renderHeader();
    expect(screen.getByAltText('shooking logo')).toBeInTheDocument();
    expect(screen.getByAltText('장바구니')).toBeInTheDocument();
  });

  it('CT-05: 장바구니가 비어있을 때, 숫자 뱃지가 표시되지 않아야 한다.', () => {
    renderHeader();
    const badgeCount = screen.queryByText('1');
    expect(badgeCount).not.toBeInTheDocument();
  });
});
