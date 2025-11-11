import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { CartContext, CartProvider } from '@/contexts/CartContext';
import type { CartItem, Product } from '@/types/product';
import ProductCard from './ProductCard';
import Header from './common/Header';

// 테스트용 Mock 데이터
const mockProduct: Product = {
  id: 1,
  brand: '나이키',
  name: '나이키 신발',
  price: 100000,
  productImg: 'test-image.jpg',
};

describe('ProductCard 컴포넌트', () => {
  // --- 1-4. 렌더링 테스트
  describe('단위 및 기본 렌더링 테스트', () => {
    it('CT-06: 상품 정보가 모두 화면에 표시되어야 한다.', () => {
      render(
        <CartProvider>
          <ProductCard {...mockProduct} />
        </CartProvider>,
      );

      expect(screen.getByText('나이키')).toBeInTheDocument();
      expect(screen.getByText('나이키 신발')).toBeInTheDocument();
      expect(screen.getByText('100,000원')).toBeInTheDocument();
    });
    it('CT-07: 장바구니가 비어있을 때, "담기" 버튼이 표시되어야 한다.', () => {
      render(
        <CartProvider>
          <ProductCard {...mockProduct} />
        </CartProvider>,
      );

      const button = screen.getByRole('button', { name: /담기/i });
      expect(button).toBeInTheDocument();
    });
  });

  // --- 3-2. 장바구니 담기 기능 (통합 테스트) ---
  describe('상호작용 및 통합 테스트', () => {
    it('IT-03: "담기" 버튼 클릭 시, 텍스트가 "담김!"으로 변경되고 스타일이 변경되어야 한다.', async () => {
      const user = userEvent.setup();
      render(
        <CartProvider>
          <ProductCard {...mockProduct} />
        </CartProvider>,
      );
      const button = screen.getByRole('button', { name: /담기/i });

      await user.click(button);
      const clickedButton = screen.getByRole('button', { name: /담김!/i });
      expect(clickedButton).toBeInTheDocument();
      expect(clickedButton).toHaveClass('bg-zinc-300');
    });

    it('IT-04: 장바구니에 상품이 이미 있으면, "담김!" 버튼이 표시되어야 한다.', () => {
      const mockCart: CartItem[] = [{ ...mockProduct, quantity: 1 }];
      const mockContextValue = {
        cart: mockCart,
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
        increaseQuantity: jest.fn(),
        decreaseQuantity: jest.fn(),
        subtotal: 0,
        shipping: 0,
        total: 0,
      };

      render(
        <CartContext.Provider value={mockContextValue}>
          <ProductCard {...mockProduct} />
        </CartContext.Provider>,
      );

      const button = screen.getByRole('button', { name: /담김!/i });
      expect(button).toBeInTheDocument();
    });

    it('IT-05: 상품을 담으면 헤더의 카트 뱃지가 "1"로 변경되어야 한다.', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <CartProvider>
            <Header />
            <ProductCard {...mockProduct} />
          </CartProvider>
        </MemoryRouter>,
      );

      const header = screen.getByRole('banner');
      const badge = within(header).queryByText('1');
      expect(badge).not.toBeInTheDocument();

      const button = screen.getByRole('button', { name: /담기/i });
      await user.click(button);

      const changedBadge = within(header).getByText('1');
      expect(changedBadge).toBeInTheDocument();
    });
  });
});
