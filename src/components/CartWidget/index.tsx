import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartWidget;
