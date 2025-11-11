import { createContext, useContext, useMemo, useState } from 'react';
import type { CartItem, Product } from '../types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number | string) => void;
  increaseQuantity: (productId: number | string) => void;
  decreaseQuantity: (productId: number | string) => void;

  subtotal: number;
  shipping: number;
  total: number;
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
  const removeFromCart = (productId: number | string) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  // 상품 수량 증가
  const increaseQuantity = (productId: number | string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // 상품 수량 감소
  const decreaseQuantity = (productId: number | string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId && item.quantity > 1 // id가 일치하고, 수량이 1보다 클 때만 1 감소
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // 전체 상품 금액 계산
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  // 배송비 계산
  const shipping = useMemo(() => {
    return subtotal >= 100_000 ? 0 : 3000;
  }, [subtotal]);

  // 전체 금액 계산
  const total = useMemo(() => {
    return subtotal + shipping;
  }, [subtotal, shipping]);

  // Provider를 통해 전달할 값들을 객체로 묶음
  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
    shipping,
    total,
  };

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
