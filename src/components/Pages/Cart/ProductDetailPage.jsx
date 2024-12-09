import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { useCart } from "./CartContext";

const ProductDetailpage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, selectedSize });
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <div className="absolute top-15 left-4  dark:bg-gray-900 sm:top-20 sm:left-6 md:top-8 md:left-8 lg:top-24 lg:left-10">
    <Link to="/Shopping" >
  <button
     className="bg-orange-500 text-white p-1 sm:p-2 md:p-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base md:text-lg lg:text-xl"
  >
    Back
  </button>
  </Link>
</div>


    <div className="max-w-5xl mx-auto p-5 mb-1 dark:bg-gray-900" >
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 sm:w-1/2 md:w-1/3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full border rounded-lg shadow-lg p-1"
          />
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex-grow sm:w-1/2 md:w-2/3">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-green-600 text-lg font-semibold">Special price</p>
          <div className="flex items-center text-2xl font-bold text-gray-800">
            <BsCurrencyRupee />
            <span>{product.price}</span>
            <span className="text-gray-500 line-through ml-4">₹999</span>
            <span className="ml-2 text-green-600">71% off</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-green-700 text-lg font-semibold mr-1">
              {product.rating.rate}
            </span>
            <FaStar className="text-yellow-500" />
            <span className="text-gray-600 ml-2">
              2,523 ratings and 103 reviews
            </span>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">Color</p>
            <div className="flex gap-2 mt-2">
              <img
                src={product.image}
                alt="Black color"
                className="w-10 h-10 border rounded p-1"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">Size</p>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`border p-2 rounded-md w-12 text-center ${
                    selectedSize === size ? "bg-green-300" : "bg-gray-300"
                  } hover:bg-green-200`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-lg font-semibold">Available offers</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card
              </li>
              <li>
                Bank Offer Flat ₹2,000 off on HDFC Bank Credit Card EMI Txns on
                6 and 9 months tenure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ProductDetailpage;
