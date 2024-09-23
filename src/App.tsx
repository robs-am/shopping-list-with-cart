import { CartProvider } from './context/CartContext';
import Product from './components/Product';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <CartProvider>
      <div className="productPage">
        <Product />
        <CartWidget />
      </div>
    </CartProvider>
  );
}

export default App;
