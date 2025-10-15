import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // icon?: 'right' | 'left' | 'off'; // TODO: 아이콘이 있는 버튼 사용 시 처리
  dataSize: 'small' | 'medium';
  dataType: 'primary' | 'secondary';
  text: string;
  className?: string;
}

const styles = {
  base: 'w-full h-full inline-flex justify-center items-center gap-2.5 rounded-[10px] font-bold uppercase transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-nowrap',
  size: {
    small: 'px-3.5 py-1.5 text-[10px]',
    medium: 'px-3 py-1 text-[10px] rounded-full',
  },
  type: {
    primary: 'bg-black text-white hover:opacity-80',
    secondary:
      'bg-transparent text-black outline outline-1 outline-offset-[-1px] outline-black hover:bg-black hover:text-white',
  },
};

export default function Button({
  // icon = 'off',
  dataSize,
  dataType,
  text,
  className = '',
  ...rest
}: ButtonProps) {
  const buttonClassName = `${styles.base} ${styles.size[dataSize]} ${styles.type[dataType]}`;
  const finalClassName = twMerge(buttonClassName, className);

  return (
    <button
      // data-icon={icon}
      data-size={dataSize}
      data-type={dataType}
      className={finalClassName}
      {...rest}
    >
      <span>{text}</span>
    </button>
  );
}
