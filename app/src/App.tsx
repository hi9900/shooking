import { CartProvider } from './contexts/CartContext';
import { Routes } from './pages/Routes';

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
