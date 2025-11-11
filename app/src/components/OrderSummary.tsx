import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/formatPrice';

export default function OrderSummary() {
  const { subtotal, shipping, total } = useCart();

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-2 p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-neutral-700 text-base font-medium">상품 금액</span>
          <span className="text-black text-xl font-bold">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-neutral-700 text-base font-medium">배송비</span>
          <span className="text-black text-xl font-bold">
            {shipping === 0 ? '무료' : formatPrice(shipping)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center p-5">
        <span className="text-black text-lg font-bold">총 금액</span>
        <span className="text-black text-2xl font-bold">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
