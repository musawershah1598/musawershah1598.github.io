import ProductDetail from "./ProductDetail";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/cart";

function App() {
  const product = {
    title: "Fall Limited Edition Snickers",
    description:
      "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    category: {
      title: "Sneaker Company",
    },
    price: 250.0,
    sale: 25,
  };
  return (
    <CartProvider>
      <div className="mx-6 md:mx-44 my-2 md:my-24">
        <Navbar />
        <div className="my-24">
          <ProductDetail product={product} />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
