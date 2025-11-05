import { CardProvider } from './contexts/CardContext';
import { CartProvider } from './contexts/CartContext';
import { Routes } from './pages/Routes';

function App() {
  return (
    <CartProvider>
      <CardProvider>
        <Routes />
      </CardProvider>
    </CartProvider>
  );
}

export default App;
