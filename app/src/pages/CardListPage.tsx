import { useNavigate } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import { useCard } from '@/contexts/CardContext';
import CardItem from '@/components/cards/CardItem';
import Button from '@/components/common/Button';

export default function CardListPage() {
  const navigate = useNavigate();

  const { cardList } = useCard();

  return (
    <Layout type="sub" title="보유 카드" onCloseClick={() => navigate('/')} className="mx-2 mb-4">
      <div className="w-full max-w-xs mx-auto p-4 flex flex-col items-center gap-8">
        {cardList.length === 0 && <p>새로운 카드를 등록해주세요</p>}

        {cardList.map((card) => (
          <div key={card.id} className="w-full flex flex-col gap-4">
            <CardItem
              cardNumber={card.first8Digits}
              expirationDate={card.expirationDate}
              cardHolderName={card.cardHolderName}
            />
            <Button
              dataSize="medium"
              dataType="primary"
              text="이 카드로 결제하기"
              className="py-3 bg-yellow-300 text-black text-[10px]"
              onClick={() => console.log('TODO: 결제 페이지로 이동')}
            />
          </div>
        ))}

        {/* 카드 등록 */}
        <button
          className="
            w-full max-w-xs mx-auto aspect-[85.6/53.98] rounded-lg 
            shadow-xl bg-neutral-200 p-6 
            grid place-items-center 
            text-zinc-600 text-3xl font-normal
          "
          onClick={() => navigate('/cards/add')}
          aria-label="새 카드 추가하기"
        >
          +
        </button>
      </div>
    </Layout>
  );
}
