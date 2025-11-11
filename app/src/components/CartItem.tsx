import { useCart } from '../contexts/CartContext';
import type { CartItem } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

export default function CartItem({ item }: { item: CartItem }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const updateQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'increase':
        increaseQuantity(item.id); // Context의 함수 호출
        break;
      case 'decrease':
        // (컨텍스트에서 0이하로 내려가지 않도록 방지 로직이 있겠지만,
        //  버튼 자체가 비활성화되므로 여기서 따로 체크할 필요는 없습니다)
        decreaseQuantity(item.id); // Context의 함수 호출
        break;
    }
  };

  const handleRemove = () => {
    if (window.confirm('이 상품을 장바구니에서 삭제하시겠습니까?')) {
      removeFromCart(item.id); // Context의 함수 호출
    }
  };

  return (
    <div className="w-full h-48 relative bg-white border-b border-gray-200">
      <button
        onClick={handleRemove}
        aria-label="상품 삭제"
        className="
          absolute top-5 right-5 w-6 h-6 z-[1]
          text-neutral-500 hover:text-black
          flex items-center justify-center text-xl
        "
      >
        {/* TODO: 이곳에 휴지통 아이콘 SVG 또는 <img> 삽입 */}✕
      </button>
      <div className="w-full h-full p-5 relative flex items-center justify-start gap-8">
        <img className="w-36 h-36 aspect-[1/1] rounded-[30px]" src={item.productImg || undefined} />

        <div className="inline-flex flex-col justify-start items-start gap-6 overflow-hidden relative">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-center justify-start text-black text-base font-medium">
                {item.brand}
              </h3>
              <div className="text-neutral-500 text-xs font-normal leading-none truncate">
                {item.name}
              </div>
            </div>

            <div className="text-center text-neutral-800 text-2xl font-bold leading-6">
              {formatPrice(item.price)}
            </div>
          </div>

          <div className="inline-flex justify-start items-center gap-4">
            {/* TODO: 버튼 아이콘 교체 */}
            <button
              className="
                w-6 h-6 relative bg-zinc-500/20 rounded-[10px] text-center
                disabled:opacity-30 disabled:cursor-not-allowed
              "
              name="decrease"
              onClick={updateQuantity}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <div className="text-center text-neutral-800 text-sm font-bold leading-6">
              {item.quantity}
            </div>
            <button
              className="w-6 h-6 relative bg-neutral-200 rounded-[10px] text-center"
              name="increase"
              onClick={updateQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
