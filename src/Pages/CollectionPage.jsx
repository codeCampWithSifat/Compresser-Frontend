import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import { useDispatch, useSelector } from "react-redux";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";
import { fetchProductsByFilters } from "../redux/slices/productSlice";
import { useParams, useSearchParams } from "react-router";

const CollectionPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div>
        <h3 className="mt-20 text-center">This is collection page component</h3>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Mobile Filter Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden border p-2 flex justify-center items-center"
        >
          <FaFilter className="mr-2" /> Filters
        </button>

        {/* Filter Side bar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
        >
          <FilterSidebar />
        </div>
        <div className="flex-grow p-4">
          <h2 className="text-2xl uppercase mb-4">All collection</h2>
          {/* Sort Options */}
          <SortOptions />

          {/* Product Grid */}
          <ProductGrid products={products} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
