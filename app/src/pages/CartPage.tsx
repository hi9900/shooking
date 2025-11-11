import { useNavigate } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import Button from '@/components/common/Button';

export default function CartPage() {
  const { cart } = useCart();

  const navigate = useNavigate();

  return (
    <Layout type="main2" back={true}>
      <div className="p-4">
        <header className="mb-6">
          <h2 className="text-black text-3xl font-extrabold">장바구니</h2>
        </header>

        <div className="flex flex-col items-start gap-1.5">
          {cart.length === 0 ? (
            <>
              <p className="text-black text-base font-normal">장바구니가 비어있습니다.</p>
              <button
                className="
                  py-2 px-4 mt-2
                  border border-neutral-400 
                  rounded-lg 
                  text-black text-base font-medium
                  hover:bg-neutral-100 transition-colors
                "
                onClick={() => navigate('/')}
              >
                쇼핑 계속하기
              </button>
            </>
          ) : (
            <p className="text-black text-base font-normal">
              현재 {cart.length}개의 상품이 담겨있습니다.
            </p>
          )}
        </div>

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length > 0 && (
          <>
            <OrderSummary />
            <div className="h-8" />
            <Button
              dataSize="medium"
              dataType="primary"
              text="결제하기"
              className="px-16 py-4 text-xl font-medium font-['Raleway'] leading-5 mb-4"
              disabled={!cart.length}
              onClick={() => navigate('/cards')}
            />
          </>
        )}
      </div>
    </Layout>
  );
}
