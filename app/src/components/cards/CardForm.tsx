import { useRef } from 'react';

import FormInput from '../common/FormInput';

interface CardFormProps {
  cardNumber: string;
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expirationDate: string;
  onExpirationDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardHolderName: string;
  onCardHolderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cvc: string;
  onCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pass1: string;
  onPass1Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pass2: string;
  onPass2Change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
}

export default function CardForm({
  cardNumber,
  onCardNumberChange,
  expirationDate,
  onExpirationDateChange,
  cardHolderName,
  onCardHolderNameChange,
  cvc,
  onCvcChange,
  pass1,
  onPass1Change,
  pass2,
  onPass2Change,
  onSubmit,
}: CardFormProps) {
  // 비밀번호 1 입력 시 비밀번호 2로 자동 포커스 이동을 위한 ref
  const pass2Ref = useRef<HTMLInputElement>(null);

  const handlePass1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPass1Change(e);
    // 1글자 입력되면 다음 칸으로 포커스 이동
    if (e.target.value.length === 1 && pass2Ref.current) {
      pass2Ref.current.focus();
    }
  };

  return (
    <form id="card-add-form" onSubmit={onSubmit} className="w-full flex flex-col gap-5">
      {/* FIXME: imask 처리 필요 */}
      <FormInput
        className="text-center"
        id="card-number"
        label="카드 번호"
        value={cardNumber}
        onChange={onCardNumberChange}
        required
      />

      <FormInput
        id="expiration-date"
        label="만료일"
        placeholder="MM / YY"
        type="tel"
        value={expirationDate}
        onChange={onExpirationDateChange}
        className="w-1/3 text-center min-w-[7rem]"
        required
      />

      <FormInput
        id="card-holder-name"
        label="카드 소유자 이름"
        type="text"
        maxLengthText={`${cardHolderName.length}/30`}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={cardHolderName}
        onChange={onCardHolderNameChange}
        required
      />

      <div>
        <label htmlFor="cvc" className="block text-xs font-medium text-neutral-600 mb-2">
          보안 코드(CVC/CVV)
        </label>
        <div className="flex items-center gap-3">
          <input
            type="password"
            id="cvc"
            value={cvc}
            onChange={onCvcChange}
            className="w-20 h-12 p-4 bg-gray-200 rounded-md text-center text-3xl"
            maxLength={3}
            required
          />
          {/* TODO: 물음표 아이콘 클릭 시 설명 팝오버 (선행: 팝오버 컴포넌트) */}
          <div className="w-7 h-7 bg-white rounded-full border border-zinc-400 flex items-center justify-center">
            <p className="text-center text-neutral-400 text-l font-medium">?</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="pass1" className="block text-xs font-medium text-neutral-600 mb-2">
          카드 비밀번호
        </label>
        <div className="flex items-center gap-2">
          <input
            type="password"
            id="pass1"
            value={pass1}
            onChange={handlePass1Change}
            className="w-12 h-12 p-4 text-center bg-gray-200 rounded-md text-3xl"
            maxLength={1}
            required
          />
          <input
            type="password"
            id="pass2"
            ref={pass2Ref}
            value={pass2}
            onChange={onPass2Change}
            className="w-12 h-12 p-4 text-center bg-gray-200 rounded-md text-3xl"
            maxLength={1}
            required
          />
          <span className="w-12 h-12 text-center text-4xl text-neutral-400">•</span>
          <span className="w-12 h-12 text-center text-4xl text-neutral-400">•</span>
        </div>
      </div>
    </form>
  );
}
