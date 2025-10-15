import { CartProvider } from './contexts/CartContext';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <CartProvider>
      <ProductListPage />
    </CartProvider>
  );
}

export default App;
