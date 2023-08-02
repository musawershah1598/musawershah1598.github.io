import React from "react";

const ShoppingCart = ({ showCart, cart, removeItem }) => {
  return (
    <div
      className={`fixed md:absolute top-20 md:top-6 right-0 py-4 w-full md:w-96 shadow-xl rounded-lg bg-white ${
        showCart ? "block opacity-100" : "hidden opacity-0"
      }`}
    >
      <h1 className="font-bold text-lg px-4 py-2">Cart</h1>
      <hr />

      <div className="py-2 px-4">
        {cart.map((item) => {
          return (
            <div
              className="flex space-x-4 items-center justify-evenly"
              key={item.id}
            >
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt="img"
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div>
                <p className="text-gray-500 tracking-wider">{item.title}</p>

                <div className="flex">
                  <p className="text-gray-500 space-x-2">
                    <span>{item.price}</span>
                    <span>x</span>
                    <span>{item.quantity}</span>
                  </p>

                  <p className="ml-4 font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>

              <button onClick={() => removeItem(item.id)}>
                <img src="images/icon-delete.svg" alt="delete icon" />
              </button>
            </div>
          );
        })}

        <button className="bg-primary w-full mt-4 py-4 rounded-lg text-white hover:bg-orange-400">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
