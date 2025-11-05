import { createContext, useContext, useState } from 'react';

import type { Card } from '@/types/card';

interface CardContextType {
  cardList: Card[];
  addCard: (card: Card) => void;
}

export const CardContext = createContext<CardContextType | null>(null);

interface CardProviderProps {
  children: React.ReactNode;
}

export function CardProvider({ children }: CardProviderProps) {
  const [cardList, setCardList] = useState<Card[]>([]);

  // 카드 목록에 카드를 추가하는 함수
  const addCard = (newCard: Card) => {
    setCardList((prev) => [...prev, newCard]);
  };

  const value = { cardList, addCard };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCard() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
}
