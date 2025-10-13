import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon.svg';

interface HeaderProps {
  type?: 'main' | 'sub';
}

export default function Header({ type = 'main' }: HeaderProps) {
  const RightArea = () => {
    if (type === 'main') {
      return (
        // FIXME: 장바구니 페이지로 이동
        <div className="flex justify-end">
          <a href="#">
            <img src={ShoppingCartIcon} alt="장바구니" />
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <header className="p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Shooking
        </a>

        <RightArea />
      </div>
    </header>
  );
}
