import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartDrawer = ({ cartDrawer, handleCartDrawer }) => {
  const carts = useSelector((state) => state.carts);

  // console.log("carts", carts.cartItems);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQty(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQty(id));
  };
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

      {carts.cartItems.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center">
          No Items Found
        </div>
      ) : (
        carts.cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-center items-center mt-10"
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="w-20 h-24 object-cover mr-4"
              />
            </div>

            <div>
              <div>
                <div className="flex">
                  <h2 className="text-gray-800">{item.name}</h2>
                  <button onClick={() => dispatch(removeFromCart(item._id))}>
                    <RiDeleteBin3Line className="h-6 w-6 mt.5 ml-4 text-red-600" />
                  </button>
                </div>
                <div className="flex space-x-1.5">
                  <p className="text-gray-800 text-sm mt-2">
                    Size : {item.selectedSize} | {item.selectedColor}
                  </p>
                  <p className="text-gray-800 text-sm mt-2 font-bold">
                    $ {Number((item.price * item.qty).toFixed(2))}
                  </p>
                </div>
                <div className="flex items-center mt-2.5 space-x-2">
                  <button
                    onClick={() => handleDecrementQuantity(item._id)}
                    className="border bg-black text-white rounded px-1 py-.5 text-xl font-medium"
                  >
                    -
                  </button>
                  <span className="text-black">{item.qty}</span>
                  <button
                    onClick={() => handleIncrementQuantity(item._id)}
                    className="border bg-black text-white rounded px-1 py-.5 text-xl font-medium"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDrawer;
