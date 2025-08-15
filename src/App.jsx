import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./Components/layout/UserLayout";
import Home from "./Pages/Home";
import ProductDetails from "./Components/Products/ProductDetails";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
};

export default App;
