import mensCollection from "../../assets/mens-collection.webp";
import womensCollection from "../../assets/womens-collection.webp";

const GenderCollection = () => {
  return (
    <section className="dark:bg-gray-600 py-13 px-4 lg:px-0 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img
            className="w-full h-[500px] object-cover rounded-2xl "
            src={mensCollection}
            alt=""
          />
          <div className="absolute left-15 bottom-15 bg-white  p-4 rounded-lg cursor-pointer dark:bg-gray-600 ">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Mens Collection
            </h2>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            className="w-full h-[500px] object-cover rounded-2xl"
            src={womensCollection}
            alt=""
          />
          <div className="absolute left-15 bottom-15 bg-white  p-4 rounded-lg cursor-pointer dark:bg-gray-600">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Women Collection
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
