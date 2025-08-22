import { Link } from "react-router";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-600 dark:text-white">
      <section>
        <div className="max-w-6xl mx-auto p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 my-10 lg:mx-0 mx-10">
            <div className="lg:mx-10">
              <h3 className="text-lg text-gray-800 mb-4 dark:text-white">
                Newsletter
              </h3>
              <p className="text-gray-500 mb-4 dark:text-white">
                Be the first to hear about new products
              </p>
              <p>Sign UP And Get 10 % off your first order</p>

              {/* Newsletter */}
              <form className="flex flex-col mt-4">
                <input
                  className="p-3 w-full text-sm border rounded-lg text-white border-gray-300 focus:outline-none focus:ring-2  focus:ring-gray-500 transition-all"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-sm mt-2 text-white px-2 
                  rounded-lg  py-1.5"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* Support */}
            <div>
              <h3 className="textlg text-gray-800 mb-4 dark:text-white">
                Shop
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Mens Top Wear
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Women Top Wear
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Mens Bottom Wear
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Womens Bottom Wear
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-gray-800 mb-4 dark:text-white">
                Support
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-600 transition-colors dark:text-white"
                    to="#"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow Us On */}
            <div>
              <h3 className="text-lg text-gray-800 mb-4 dark:text-white">
                Folow Us On
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-gray-800"
                >
                  <TbBrandMeta className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-gray-800"
                >
                  <IoLogoInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="hover:text-gray-800"
                >
                  <RiTwitterXLine className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-black block dark:text-white p-5">
          All Right Reserved 👍👍 sayedhossainsifat100@gmail.com
        </p>
      </section>
    </footer>
  );
};

export default Footer;
