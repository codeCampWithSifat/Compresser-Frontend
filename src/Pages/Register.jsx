import { Link } from "react-router";
import registerImage from "../assets/signup.png";

const Register = () => {
  return (
    // <div className="max-w-7xl mx-auto ">
    //   <div className="flex md:flex-row flex-col justify-center items-center">
    //     <div className="w-1/2 p-4">
    //       <form className="">
    //         <h2 className="text-2xl mt-20 font-bold text-center mb-6">
    //           Hey There ! 🖐
    //         </h2>
    //         <p className="text-center mb-6 mt-10">Create Your Account</p>
    //         <div className="mb-4">
    //           <label htmlFor="" className="block text-sm font-semibold mb-2">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             className="w-full p-2 border rounded-lg outline-none focus:border-pink-600"
    //             placeholder="Enter Your Name"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="" className="block text-sm font-semibold mb-2">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             className="w-full p-2 border rounded-lg outline-none focus:border-pink-600"
    //             placeholder="example@gmail.com"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="" className=" block text-sm font-semibold mb-2">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             className="w-full p-2 border rounded-lg outline-none focus:border-pink-600"
    //             placeholder="Enter Your Password"
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className=" bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition p-2"
    //         >
    //           Register
    //         </button>

    //         <p className="mt-6 text-center text-sm">
    //           Already have an account ? {""}
    //           <Link
    //             to="/login"
    //             className="text-red-700 font-bold cursor-pointer"
    //           >
    //             Login Please 🏆
    //           </Link>
    //         </p>
    //       </form>
    //     </div>

    //     <div className="w-2/5 mt-10">
    //       <img src={registerImage} alt="" className="w-full object-cover" />
    //     </div>
    //   </div>
    // </div>
    <section className="dark:bg-gray-600">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4">
            <form>
              <h2 className="text-2xl mt-20 font-bold text-center mb-6 dark:text-white">
                Hey There ! 🖐
              </h2>
              <p className="text-center mb-4 dark:text-white">
                Create Your Account
              </p>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border dark:text-white rounded-lg outline-none focus:border-pink-600"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
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
                  className="w-full dark:text-white p-2 border rounded-lg outline-none focus:border-pink-600"
                  placeholder="Enter Your Password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition p-2"
              >
                Register
              </button>

              <p className="mt-6 text-center text-sm dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-700 font-bold cursor-pointer"
                >
                  Login Please 🏆
                </Link>
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 mt-16">
            <img src={registerImage} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
