import React, { useContext, useEffect, useState } from "react";
import CartContext from "./context/cart";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, addItem, removeItem } = useContext(CartContext);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row space-x-6 md:space-x-24 mx-2 md:mx-8">
        <div className="flex-1">
          <img
            src="images/image-product-1.jpg"
            alt="images"
            className="h-96 w-full md:w-[30vw] md:h-[30vw] rounded-xl object-cover"
          />
        </div>

        <div className="flex-1 my-12 md:my-2">
          <p className="text-primary font-semibold tracking-wider">
            {product.category.title}
          </p>

          <h1 className="text-5xl mt-4 font-bold">{product.title}</h1>

          <p className="mt-8 text-gray-400 text-xl">{product.description}</p>

          <div className="mt-4">
            <div className="flex items-center space-x-8">
              <p className="text-4xl font-bold">
                ${" "}
                {product.sale > 0
                  ? product.price - (product.price * product.sale) / 100
                  : product.price}
              </p>
              {product.sale > 0 && (
                <p className="p-2 bg-orange-100 rounded-lg text-primary font-bold">
                  {product.sale}%
                </p>
              )}
            </div>

            {product.sale > 0 && (
              <p className="text-gray-400 line-through font-semibold">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex mt-4">
            <div className="flex items-center bg-gray-100 rounded-xl shadow-lg">
              <p
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-xl font-bold hover:text-primary text-2xl"
                onClick={decrementQuantity}
              >
                -
              </p>
              <p className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-xl font-bold">
                {quantity}
              </p>
              <p
                className="py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-xl font-bold hover:text-primary text-2xl"
                onClick={incrementQuantity}
              >
                +
              </p>
            </div>

            <button
              className="ml-8 bg-primary text-white font-bold px-8 py-4 rounded-xl w-full hover:bg-orange-400"
              onClick={() => {
                addItem({
                  id: 1,
                  title: product.title,
                  price: product.price,
                  sale: product.sale,
                  quantity,
                });
                setQuantity(1);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
