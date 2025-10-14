import { createContext, useContext, useState } from 'react';
import type { CartItem, Product } from '../types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number | string) => void;
}

// 1. Context 생성
export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

// 2. Provider 컴포넌트 생성
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]); // 장바구니 상태

  // 장바구니에 상품을 추가하는 함수
  const addToCart = (productToAdd: Product) => {
    // 이미 장바구니에 있는 지 확인
    const existingProduct = cart.find((item) => item.id === productToAdd.id);

    if (existingProduct) {
      // 이미 있다면 수량 증가
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      // 없다면 새로 추가
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  // 장바구니에서 상품을 제거하는 함수
  const removeFromCart = (productId: number | string) => {};

  // Provider를 통해 전달할 값들을 객체로 묶음
  const value = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3. Custom Hook 생성
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
