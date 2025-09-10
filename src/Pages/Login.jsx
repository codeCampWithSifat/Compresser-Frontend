import { Link } from "react-router";
import loginImg from "../assets/login.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(loginUser({ email, password }));
  };
  return (
    <section className="dark:bg-gray-600">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6">
            <form onSubmit={handleLogin}>
              <h2 className="text-2xl mt-20 font-bold text-center mb-6 dark:text-white">
                Hey There ! 🖐
              </h2>
              <p className="text-center mb-4 dark:text-white">
                Login Your Account
              </p>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full dark:text-white p-2 border rounded-lg outline-none focus:border-pink-600"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full dark:text-white p-2 border rounded-lg outline-none focus:border-pink-600"
                  placeholder="Enter Your Password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition p-2"
              >
                Login
              </button>

              <p className="mt-6 text-center text-sm dark:text-gray-300">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-red-700 font-bold cursor-pointer"
                >
                  Register Please 🏆
                </Link>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 mt-16">
            <img src={loginImg} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
