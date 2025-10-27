import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import CardAddPage from './CardAddPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ProductListPage />,
    },
    {
      path: '/products',
      element: <ProductListPage />,
    },
    // TODO: 제품 상세 페이지
    // {
    //   path: '/products/:id',
    //   element: ,
    // },
    // TODO: 카드 목록 조회 페이지
    // {
    //   path: '/cards',
    //   element: ,
    // },
    {
      path: '/cards/add',
      element: <CardAddPage />,
    },
    // TODO: 장바구니 목록 조회 페이지
    // {
    //   path: '/cart',
    //   element: ,
    // },
    {
      path: '*',
      element: <Navigate to="/products" replace={true} />,
    },
  ],
  {
    basename: '/shooking',
  },
);

export function Routes() {
  return <RouterProvider router={router} />;
}
