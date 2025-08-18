import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductDetails } from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import FavouriteWishList from "./FavouriteWishList";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something Went Wrong... {error}</p>;
  }

  if (!selectedProduct) {
    return <p>Loading product...</p>;
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      return toast.error(`Selected Your Size And Color `);
    }
    dispatch(
      addToCart({
        _id: id,
        name: selectedProduct.name,
        image: selectedProduct.images[0].url,
        price: selectedProduct.price,
        color: selectedColor,
        size: selectedSize,
        qty: 1,
      })
    );
  };

  return (
    <section className="">
      <div className="p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex flex-col space-y-4 mr-6 mt-10">
              {selectedProduct?.images.length &&
                selectedProduct?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.altText || "I love you"}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer `}
                    onClick={() => setMainImage(image.url)}
                  />
                ))}
            </div>
            {/* Main Image */}
            <div className="md:w-1/2">
              <div className="">
                <img
                  className="w-[500px] h-[600px] object-cover rounded-lg mt-10"
                  src={mainImage || "I Am The Best"}
                  alt="Main Product"
                />
              </div>
            </div>

            {/* Mobile Thumbnai */}
            <div className="md:hidden mt-4 flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || "I love you"}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer`}
                />
              ))}
            </div>

            <div className="md:1/2 md:ml-10 ">
              <div className="flex relative">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2 mt-10">
                  {selectedProduct?.name}
                </h1>
                <div className="flex justify-end absolute top-9 left-100 ">
                  <FavouriteWishList product={selectedProduct} />
                </div>
              </div>
              <p className="text-lg text-gray 600 mb-1 line-through">
                {selectedProduct?.price && `${selectedProduct?.price}`}
              </p>
              <p className="text-xl text-gray-500 mb-2">
                $ {selectedProduct?.price}
              </p>
              <p className="text-gray-600 mb-5">
                {selectedProduct?.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Color : </p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct?.colors?.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color
                          ? "border-4 border-black"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mb-4 ">
                <p className="text-gray-700">Size :</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`uppercase mt-20 bg-black text-white py-2 px-6 rounded w-full $`}
              >
                Add To Cart
              </button>

              <div className="mt-10 text-gray-700">
                <h3 className="text-3xl font-bold mb-4">Features</h3>
                <table className="w-full text-left text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1">Brand</td>
                      <td className="py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Material</td>
                      <td className="py-1">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
