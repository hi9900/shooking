import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import CardAddPage from './CardAddPage';
import CardListPage from './CardListPage';
import CartPage from './CartPage';

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
    {
      path: '/cards',
      element: <CardListPage />,
    },
    {
      path: '/cards/add',
      element: <CardAddPage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
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
