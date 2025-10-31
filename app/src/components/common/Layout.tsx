import Header, { type HeaderProps } from './Header';

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '', ...rest }: LayoutProps) {
  return (
    <div>
      <Header {...rest} />
      <main className={className}>{children}</main>
    </div>
  );
}
