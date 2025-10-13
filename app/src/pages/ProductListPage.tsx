import ProductImg from '@/assets/images/defaultProduct.jpg';
import ProductCard from '../components/ProductCard';
import Layout from '../components/common/Layout';

const defaultProps = {
  productImg: ProductImg,
  brand: '브랜드A',
  name: '편안하고 착용감이 좋은 신발편안하고 착용감이 좋은 신발편안하고 착용감이 좋은 신발',
  price: 35000,
};

export default function ProductListPage() {
  // TODO: 상품 데이터
  const productsList = [defaultProps, defaultProps, defaultProps, defaultProps];
  const productCount = productsList.length;

  return (
    <Layout type="main">
      <main className="p-4">
        <header className="inline-flex flex-col justify-start items-start gap-1.5 mb-6">
          <h2 className="text-black text-3xl font-extrabold">신발 상품 목록</h2>
          <p className="text-black text-base font-normal">
            현재 {productCount}개의 상품이 있습니다.
          </p>
        </header>

        <ul className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(184px,1fr))] gap-4">
          {productsList.map((product, idx) => (
            <li key={idx}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
