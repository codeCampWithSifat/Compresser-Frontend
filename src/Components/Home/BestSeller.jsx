import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellerProducts } from "../../redux/slices/productSlice";
import { Link } from "react-router";

const BestSeller = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchBestSellerProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading Products....</p>;
  }
  if (error) {
    return <p>Something Went Wrong : {error}</p>;
  }
  return (
    <section className="dark:bg-gray-600">
      <div className="max-w-6xl mx-auto  p-8 rounded-lg">
        <h2 className="text-3xl dark:text-white text-center font-bold mb-4 text-gray-800">
          Best Seller Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {products.length &&
            products.map((product) => (
              <Link
                className="block"
                key={product._id}
                to={`/product/${product._id}`}
              >
                <div className="bg-white p-4 rounded-lg ">
                  <div className="w-full h-96 ">
                    <img
                      src={product.images[0].url}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-sm mb-2 mt-2">{product.name}</h3>
                  <p className="text-gray-500 font-medium text-sm tracking-tighter">
                    $ {product.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
