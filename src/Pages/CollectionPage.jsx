import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";

const CollectionPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      </div>
    </div>
  );
};

export default CollectionPage;
