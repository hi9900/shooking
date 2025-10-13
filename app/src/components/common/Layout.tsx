import Header from './Header';

export default function Layout({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: 'main' | 'sub';
}) {
  return (
    <div>
      <Header type={type} />
      <main>{children}</main>
    </div>
  );
}
