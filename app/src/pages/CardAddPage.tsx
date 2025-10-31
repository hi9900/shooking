import { useNavigate } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import CardItem from '@/components/cards/CardItem';
import CardForm from '@/components/cards/CardForm';
import { useFormInput } from '@/hooks/useFormInput';
import {
  formatCardHolderName,
  formatCardNumber,
  formatCvc,
  formatExpirationDate,
  formatPasswordDigit,
} from '@/utils/formatCardData';

export default function CardAddPage() {
  const navigate = useNavigate();

  // 카드 입력 state
  const [cardNumber, handleCardNumberChange] = useFormInput('', formatCardNumber);
  const [expirationDate, handleExpirationDateChange] = useFormInput('', formatExpirationDate);
  const [cardHolderName, handleCardHolderNameChange] = useFormInput('', formatCardHolderName);
  const [cvc, handleCvcChange] = useFormInput('', formatCvc);

  // 비밀번호 한 자리씩
  const [pass1, handlePass1Change] = useFormInput('', formatPasswordDigit);
  const [pass2, handlePass2Change] = useFormInput('', formatPasswordDigit);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.debug({ cardNumber, expirationDate, cardHolderName, cvc, pass1, pass2 });

    // TODO: 폼 데이터 유효성 검사

    // TODO: 데이터 저장 로직
  };

  return (
    <>
      <Layout
        type="sub"
        title="카드 추가"
        back={true}
        onCloseClick={() => navigate(-1)}
        className="mx-2 mb-4"
      >
        <div className="p-4 flex flex-col items-center gap-8">
          {/* 카드 미리보기 */}
          <CardItem
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            expirationDate={expirationDate}
          />

          {/* 카드 입력 폼 */}
          <CardForm
            cardNumber={cardNumber}
            onCardNumberChange={handleCardNumberChange}
            expirationDate={expirationDate}
            onExpirationDateChange={handleExpirationDateChange}
            cardHolderName={cardHolderName}
            onCardHolderNameChange={handleCardHolderNameChange}
            cvc={cvc}
            onCvcChange={handleCvcChange}
            pass1={pass1}
            onPass1Change={handlePass1Change}
            pass2={pass2}
            onPass2Change={handlePass2Change}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="p-4">
          <Button
            dataSize="medium"
            dataType="primary"
            text="저장하기"
            className="px-6 py-3"
            type="submit"
            form="card-add-form"
          />
        </div>
      </Layout>
    </>
  );
}
