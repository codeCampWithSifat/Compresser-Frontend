import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./Components/layout/UserLayout";
import Home from "./Pages/Home";
import ProductDetails from "./Components/Products/ProductDetails";
import { ToastContainer } from "react-toastify";
import WishListItems from "./Pages/WishListItems";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="wishList" element={<WishListItems />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
};

export default App;
