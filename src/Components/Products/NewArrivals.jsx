import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewArrivalsProducts } from "../../redux/slices/productSlice";
import ProductGrid from "./ProductGrid";
import { Link } from "react-router";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { newArrivalsProducts, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchNewArrivalsProducts());
  }, [dispatch]);
  return (
    <section className="dark:bg-gray-600 ">
      <div>
        <div>
          <h2 className="text-3xl text-center font-bold text-gray-800 ">
            <span className="dark:text-white">New Arrivals For Women</span>
          </h2>
        </div>
        <ProductGrid
          products={newArrivalsProducts}
          loading={loading}
          error={error}
        />
      </div>
    </section>
  );
};

export default NewArrivals;
