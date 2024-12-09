import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/Context";
import { IoMdSearch } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import ThemeToggleButton from "./Theme/ThemeButton";
import { useTheme } from "./Theme/ThemeContext";
import { useSearch } from "./Pages/Cart/SearchContext";
import { useCart } from "./Pages/Cart/CartContext";

const Navbar = () => {
  const { currentUser, logout } = useUserContext();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState("");
  const { cartItems } = useCart();

  const handleSearch = () => {
    setSearchQuery(localSearch);  
    navigate("/Shopping");  
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "black" : "#fff",
      }}
    >
      <h1 className="bg-blue-500 w-full text-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg py-1">
        Free shipping on orders over $75. Free Returns
      </h1>

      <div className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row items-center lg:mx-32 px-4 sm:px-8 md:px-12 lg:px-0 lg:gap-6 py-2">
           <div className="flex w-full lg:w-auto items-center mb-2 lg:mb-0">
            <input
              className="w-full lg:w-56 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
              type="search"
              placeholder="Search your Required"
              value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="text-2xl lg:text-4xl ml-2 text-gray-500 hover:text-blue-500"
            >
              <IoMdSearch />
            </button>
          </div>

           {currentUser && (
            <span className="text-center lg:text-left font-bold uppercase text-1 lg:text-base lg:ml-2 mb-2 lg:mb-0">
              Welcome, {currentUser?.username}
            </span>
          )}

           <ul
            className={`flex flex-col lg:flex-row items-center lg:justify-end w-full lg:w-auto text-sm lg:text-base font-serif gap-2 lg:gap-6 ${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-6`}
          >
            <li>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                to="/Shopping"
              >
                Shopping
              </Link>
            </li>
            <li>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                to="/Contact"
              >
                Contact
              </Link>
            </li>

            {currentUser ? (
              <li>
                <button
                  className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                    to="/SignUP"
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}

             <li className="flex items-center gap-4 text-3xl">
              <Link to="/FAQ">
                <BiHelpCircle className="hover:text-white hover:bg-orange-500 hover:rounded-3xl p-1" />
              </Link>
              <li className="relative">
              <Link to="/Cart">
                <MdShoppingCart className=" hover:text-white hover:bg-orange-500 hover:rounded-3xl p-1" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 ">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
              <ThemeToggleButton />
            </li>
          </ul>

           <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
