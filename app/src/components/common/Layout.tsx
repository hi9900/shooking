import Header, { type HeaderProps } from './Header';

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export default function Layout({ children, ...rest }: LayoutProps) {
  return (
    <div>
      <Header {...rest} />
      <main>{children}</main>
    </div>
  );
}
