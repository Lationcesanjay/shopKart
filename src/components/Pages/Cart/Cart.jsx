import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center border border-gray-200 rounded-lg p-4 bg-white shadow-sm dark:bg-gray-900"
            >
              <Link to={`/ProductDetail/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain mr-4"
                />
              </Link>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm">
                  Size: {product.selectedSize}
                </p>
                <p className="text-green-600 font-semibold">
                  ₹{(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                >
                  -
                </button>
                <span className="px-3">{product.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="flex gap-5">
            <p>Your cart is empty.</p>
            <Link to="/Shopping">
              <button className="bg-orange-500 text-white p-1   rounded-lg hover:bg-orange-600 text-sm  ">
                Goto Shopping
              </button>
            </Link>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-4">Price Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Total Price</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Secured Packaging Fee</span>
              <span>₹99.00</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between text-gray-800 font-semibold">
              <span>Total Amount</span>
              <span>₹{(parseFloat(totalAmount) + 99).toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
