import { useSelector } from "react-redux";
import { Link } from "react-router";
import FavouriteWishList from "../Components/Products/FavouriteWishList";

const WishListItems = () => {
  const favouites = useSelector((state) => state.favourites);
  return (
    <section className="dark:bg-gray-600">
      <div className="max-w-6xl mx-auto  p-8 rounded-lg">
        <h2 className="text-3xl dark:text-white text-center font-bold mb-4 text-gray-800">
          Best Seller Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 my-10">
          {favouites.length &&
            favouites.map((product) => (
              <div key={product._id} className="bg-white p-4 rounded-lg ">
                <div className="w-full h-96 ">
                  <img
                    src={product.images[0].url}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-sm mb-2 mt-2">{product.name}</h3>
                <div className="flex ">
                  <div>
                    <p className="text-gray-500 font-medium text-sm tracking-tighter">
                      $ {product.price}
                    </p>
                  </div>
                  <div className="">
                    <Link to={`/product/${product._id}`}>
                      <button className="bg-indigo-400 text-sm rounded px-3 mx-2  text-white">
                        More Info
                      </button>
                    </Link>
                  </div>
                  <div>
                    <FavouriteWishList product={product} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WishListItems;
