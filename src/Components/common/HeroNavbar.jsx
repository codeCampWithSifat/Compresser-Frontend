import { Link } from "react-router";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import DarkMode from "./DarkMode";
import CartDrawer from "./CartDrawer";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const HeroNavbar = () => {
  const [navbarDrawer, setNavbarDrawer] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const favouites = useSelector((state) => state.favourites);
  const countFavourites = favouites && favouites.length;

  const handleNavbarDrawer = () => {
    setNavbarDrawer(!navbarDrawer);
  };

  const handleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };
  return (
    <div className="bg-amber-100 dark:bg-gray-600 dark:text-white fixed top-0 left-0 w-full z-50 ">
      <nav className="container  mx-auto px-5 py-5 w-full flex flex-wrap justify-between items-center gap-y-4">
        {/* Left logo */}
        <div className="flex-shrink-0 ">
          <Link to="/" className="text-2xl font-medium lg:ml-20">
            Sayed Sifat
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-4 flex-grow justify-center ">
          <Link className="text-gray-700 dark:text-white hover:text-black text-sm font-medium uppercase">
            Men
          </Link>
          <Link className="text-gray-700 dark:text-white hover:text-black text-sm font-medium uppercase">
            Women
          </Link>
          <Link className="text-gray-700 dark:text-white hover:text-black text-sm font-medium uppercase">
            Top Wear
          </Link>
          <Link className="text-gray-700 dark:text-white hover:text-black text-sm font-medium uppercase">
            Bottom Wear
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4 flex-shrink-0 lg:mr-20">
          <DarkMode />
          <Link to="/" className="bg-black px-2 rounded-sm text-white">
            Admin
          </Link>
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700 dark:text-white" />
          </Link>
          <div className="relative">
            <button onClick={handleCartDrawer} className="hover:text-black">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 dark:text-white" />
              <span className="absolute -top-2 -right-4 bg_rabbit_red text-black text-sm rounded-full px-2 py-0.5 dark:text-white">
                +20
              </span>
            </button>
          </div>
          <div className="relative">
            <button className="hover:text-black ml-2">
              <FaHeart className="h-6 w-6 text-gray-700 dark:text-white" />
              {favouites.length > 0 && (
                <span className="absolute -top-2 -right-6 bg_rabbit_red text-black text-sm rounded-full px-2 py-0.5 dark:text-white">
                  +{countFavourites}
                </span>
              )}
            </button>
          </div>
          <button onClick={handleNavbarDrawer} className="md:hidden block ">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>
        </div>
      </nav>

      <CartDrawer cartDrawer={cartDrawer} handleCartDrawer={handleCartDrawer} />

      {/* Mobile Navbar Navigation */}

      <div
        className={`fixed shdow-lg bg-white top-0 left-0 w-1/2 sm:1/2 md:1/3 z-10 h-full transform transition-transform duration-300 ${
          navbarDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end m-2">
          <button onClick={handleNavbarDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4 mt-20">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav>
            <Link className="block mt-3 text-gray-600 hover:text-black">
              Men
            </Link>
            <Link className="block mt-3 text-gray-600 hover:text-black">
              Women
            </Link>
            <Link className="block mt-3 text-gray-600 hover:text-black">
              Top Wear
            </Link>
            <Link className="block mt-3 text-gray-600 hover:text-black">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
