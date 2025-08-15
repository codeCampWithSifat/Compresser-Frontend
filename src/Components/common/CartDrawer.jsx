import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ cartDrawer, handleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white transform transition-transform duration-300 z-30 rounded-lg ${
        cartDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4 text-black">
        <button onClick={handleCartDrawer}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
