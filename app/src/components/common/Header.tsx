import CartIcon from '@/assets/Icons/cartIcon.svg';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  type?: 'main' | 'sub';
}

export default function Header({ type = 'main' }: HeaderProps) {
  const { cart } = useCart();

  // 장바구니에 담긴 상품 종류의 수
  const cartItemCount = cart.length;

  return (
    <header className="h-16 p-4 bg-black">
      <div className="container h-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="shooking logo" className="h-12 w-auto scale-125" />
          <h1 className="text-xl font-bold text-white">Shooking</h1>
        </div>

        {type === 'main' ? (
          <div className="justify-end relative inline-block">
            <img src={CartIcon} alt="장바구니" className="w-6 h-6" />

            {cartItemCount > 0 && (
              <div
                className="
                  absolute bottom-0 right-0
                  transform translate-x-1/2 translate-y-1/2
                  w-5 h-5 bg-white rounded-full
                  flex justify-center items-center
                "
              >
                <span className="text-black text-[10px] font-bold">{cartItemCount}</span>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}
