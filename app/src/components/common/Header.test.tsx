import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '@/contexts/CartContext';

describe('<Header /> 컴포넌트', () => {
  it('h1 타이틀 "Shooking"이 올바르게 렌더링된다.', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>,
    );
    const titleElement = screen.getByText(/Shooking/i);
    expect(titleElement).toBeInTheDocument();
  });
});
