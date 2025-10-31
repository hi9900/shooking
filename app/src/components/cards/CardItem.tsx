interface CardItemProps {
  cardNumber: string;
  expirationDate: string;
  cardHolderName: string;
}

export default function CardItem({ cardNumber, expirationDate, cardHolderName }: CardItemProps) {
  const digits = cardNumber?.replace(/\D/g, '') ?? ''; // 공백, 하이픈 등 제거
  // 앞 8자리 (혹은 입력된 만큼)
  const firstGroup = digits.substring(0, 4).padEnd(4, '•');
  const secondGroup = digits.substring(4, 8).padEnd(4, '•');
  // 마스킹용 점 8개 (4개씩 2묶음)
  const maskingDots = Array(8).fill(null);

  const displayName = cardHolderName || 'NAME';
  const displayExpiration = expirationDate || 'MM / YY';

  return (
    <div className="w-full max-w-xs mx-auto aspect-[85.6/53.98] rounded-lg shadow-xl bg-zinc-800 text-white p-6 flex flex-col justify-between">
      {/* 카드 칩 */}
      <div className="mt-12 w-12 h-8 bg-yellow-400 rounded-md" />

      {/* 카드 번호 */}
      <div className="h-6 text-xl flex items-center justify-between">
        {/* 그룹 1 (앞 4자리) */}
        <span className="tracking-widest">{firstGroup}</span>
        {/* 그룹 2 (다음 4자리) */}
        <span className="tracking-widest">{secondGroup}</span>
        {/* 그룹 3 (마스킹) */}
        <div className="flex items-center space-x-1.5">
          {maskingDots.slice(0, 4).map((_, index) => (
            <div key={`dot1-${index}`} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
        {/* 그룹 4 (마스킹) */}
        <div className="flex items-center space-x-1.5">
          {maskingDots.slice(4, 8).map((_, index) => (
            <div key={`dot2-${index}`} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
      </div>

      {/* 하단 정보: 이름 및 만료일 */}
      <div className="flex justify-between items-end">
        <span className="text-white text-xs font-medium tracking-wide">{displayName}</span>
        <span className="text-xs font-medium tracking-wide">{displayExpiration}</span>
      </div>
    </div>
  );
}
