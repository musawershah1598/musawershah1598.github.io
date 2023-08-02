import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const found = cart.find((i) => i.id == item.id);
    if (!found) {
      setCart([...cart, item]);
      alert("Item added to cart");
    } else {
      alert("Item already in the cart");
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart);
    alert("Item removed from cart");
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
