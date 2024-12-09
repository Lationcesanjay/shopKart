import React from "react";
import { useTheme } from "./ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 font-bold text-2xl text-gray-700 dark:text-gray-300 hover:text-white hover:bg-orange-500 hover:rounded-3xl transition-all duration-300 ease-in-out"
    >
       {theme === "light" ? (
        <MdOutlineDarkMode className="text-yellow-500 dark:text-gray-300" />
      ) : (
         <MdDarkMode className="text-yellow-500 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
