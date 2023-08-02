import { useContext, useEffect, useRef, useState } from "react";
import ShoppingCart from "./cart";
import CartContext from "../context/cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const cartRef = useRef(null);
  useOutsideCart(cartRef, setShowCart);

  const { cart, removeItem } = useContext(CartContext);

  return (
    <nav className="flex justify-between border-b">
      <div className="flex items-center">
        {/* mobile menu */}
        <div className="flex md:hidden mr-4 relative">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <img src="/images/icon-menu.svg" alt="menu icon" />
          </button>

          {/* main menu */}
          <div
            className={`absolute top-8 bg-white shadow-xl p-4 min-w-[16rem] ${
              showMobileMenu ? "block" : "hidden"
            }`}
          >
            <ul>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                Collections
              </li>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                Men
              </li>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                Women
              </li>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                About
              </li>
              <li className="py-4 px-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/images/logo.svg"
          alt="logo image"
          className="cursor-pointer"
        />

        {/* menu */}
        <ul className="ml-16 hidden md:flex space-x-10 h-full">
          <li className="h-full flex items-center hover:text-primary cursor-pointer hover:border-b-4 hover:border-primary">
            Collections
          </li>
          <li className="h-full flex items-center hover:text-primary cursor-pointer hover:border-b-4 hover:border-primary">
            Men
          </li>
          <li className="h-full flex items-center hover:text-primary cursor-pointer hover:border-b-4 hover:border-primary">
            Women
          </li>
          <li className="h-full flex items-center hover:text-primary cursor-pointer hover:border-b-4 hover:border-primary">
            About
          </li>
          <li className="h-full flex items-center hover:text-primary cursor-pointer hover:border-b-4 hover:border-primary">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-8 my-2 md:my-6">
        <div className="relative" ref={cartRef}>
          <button onClick={() => setShowCart(!showCart)}>
            {cart.length > 0 && (
              <span className="absolute bottom-4 left-4 bg-orange-600 px-2 py-1 rounded-full text-xs text-white">
                {cart.length}
              </span>
            )}
            <img src="/images/icon-cart.svg" alt="cart icon" />
          </button>

          {/* cart menu */}
          <ShoppingCart
            showCart={showCart}
            cart={cart}
            removeItem={removeItem}
          />
        </div>
        <button>
          <img
            src="/images/image-avatar.png"
            alt="profile image"
            className="w-16 h-16 border-4 border-primary rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

//   clicked outside of cart
function useOutsideCart(ref, setShowCart) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCart(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default Navbar;
