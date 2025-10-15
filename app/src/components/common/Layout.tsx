import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  type?: 'main' | 'sub';
}

export default function Layout({ children, type }: LayoutProps) {
  return (
    <div>
      <Header type={type} />
      <main>{children}</main>
    </div>
  );
}
