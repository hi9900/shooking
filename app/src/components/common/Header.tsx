import { Link, useNavigate } from 'react-router-dom';

import LogoImage from '@/assets/images/logo.png';
import CartIcon from '@/assets/Icons/cartIcon.svg';
import CrossIcon from '@/assets/Icons/crossIcon.svg';
import BackIcon from '@/assets/Icons/backIcon.svg';
import { useCart } from '../../contexts/CartContext';

export interface HeaderProps {
  type?: 'main' | 'sub';
  back?: boolean;
  title?: string;
  onCloseClick?: () => void;
}

export default function Header({ type = 'main', back = false, title, onCloseClick }: HeaderProps) {
  const { cart } = useCart();
  const navigate = useNavigate();

  // 장바구니에 담긴 상품 종류의 수
  const cartItemCount = cart.length;

  return (
    <header className={`h-16 p-4 ${type === 'main' ? 'bg-black' : 'bg-white'}`}>
      <div className="container h-full mx-auto flex justify-between items-center">
        {/* 왼쪽 영역: type에 따라 로고 또는 뒤로가기 버튼 */}
        <div className="flex justify-start">
          {type === 'main' ? (
            <Link to="/" className="flex items-center gap-2" aria-label="Shooking 홈으로 이동">
              <img
                src={LogoImage || undefined}
                alt="shooking logo"
                className="h-12 w-auto scale-125"
              />
              <h1 className="text-xl font-bold">Shooking</h1>
            </Link>
          ) : back ? (
            <button onClick={() => navigate(-1)} aria-label="뒤로가기" className="w-6">
              <img src={BackIcon || undefined} alt="뒤로가기" className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="w-6" />
          )}
        </div>

        {/* 중앙 영역: sub 타입일 때만 페이지 제목 표시 */}
        <div className="flex-1 flex items-center">
          {type === 'sub' && title && (
            <h1 className="text-neutral-700 text-base font-medium">{title}</h1>
          )}
        </div>

        {/* 오른쪽 영역: main 타입일 때 장바구니 아이콘 표시, sub 타입일 때 닫기 버튼 */}
        <div className="flex-1 flex justify-end">
          {type === 'main' ? (
            <Link to="/cart" className="relative inline-block" aria-label="장바구니로 이동">
              <img src={CartIcon || undefined} alt="장바구니" className="w-6 h-6" />
              {cartItemCount > 0 && (
                <div
                  className="
                    absolute top-0 right-0
                    transform translate-x-1/2 -translate-y-1/2
                    w-5 h-5 bg-white rounded-full
                    grid place-items-center
                  "
                >
                  <span className="text-black text-[10px] font-bold leading-none">
                    {cartItemCount}
                  </span>
                </div>
              )}
            </Link>
          ) : onCloseClick ? (
            <button onClick={onCloseClick} aria-label="닫기">
              <img src={CrossIcon || undefined} alt="닫기" />
            </button>
          ) : (
            <div className="w-6" />
          )}
        </div>
      </div>
    </header>
  );
}
