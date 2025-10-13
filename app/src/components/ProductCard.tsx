import Button from './common/Button';

interface ProductCardProps {
  productImg: string;
  brand: string;
  name: string;
  price: number;
}

/**
 * 상품 카드 컴포넌트
 */
export default function ProductCard({ productImg, brand, name, price }: ProductCardProps) {
  return (
    <div className="w-full aspect-[184/247] relative bg-white rounded-2xl outline outline-1 outline-zinc-100 overflow-hidden flex flex-col">
      <div className="w-full flex-grow relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={productImg}
          alt={`${brand}-${name}`}
        />
      </div>
      <div className="ml-[17px] mt-[17px] mr-[12px] mb-[20px] flex flex-col gap-[7px]">
        <h3 className="text-black text-base font-medium truncate">{brand}</h3>
        <div className="text-neutral-500 text-xs font-normal leading-none truncate">{name}</div>
        <div className="text-black text-sm font-medium">{price.toLocaleString('kr')}원</div>

        <Button dataSize="medium" dataType="primary" text="담기" className="h-[22px] w-[44px]" />
      </div>
    </div>
  );
}
