import { useCart } from '../contexts/CartContext';
import type { Product } from '../types/product';
import Button from './common/Button';

/**
 * 상품 카드 컴포넌트
 */
export default function ProductCard(product: Product) {
  const { cart, addToCart } = useCart();

  // 현재 상품이 장바구니에 있는지 확인
  const isInCart = cart.some((item) => item.id === product.id);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className="w-full aspect-[184/247] relative bg-white rounded-2xl outline outline-1 outline-zinc-100 overflow-hidden flex flex-col">
      <div className="w-full flex-grow relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={product.productImg}
          alt={`${product.brand}-${product.name}`}
        />
      </div>
      <div className="ml-[17px] mt-[17px] mr-[12px] mb-[20px] flex flex-col gap-[7px]">
        <h3 className="text-black text-base font-medium truncate">{product.brand}</h3>
        <div className="text-neutral-500 text-xs font-normal leading-none truncate">
          {product.name}
        </div>
        <div className="text-black text-sm font-medium">
          {product.price.toLocaleString('ko-kr')}원
        </div>

        <div className="w-11 h-5">
          <Button
            dataSize="medium"
            dataType="primary"
            text={isInCart ? '담김!' : '담기'}
            className={isInCart ? 'bg-zinc-300 text-black font-bold' : ''}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
