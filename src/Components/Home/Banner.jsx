import bannerImage from "../../assets/rabbit-hero.webp";

const Banner = () => {
  return (
    <section className="relative">
      <img
        src={bannerImage}
        alt="Sifat Tap"
        className="w-full md:h[600px] object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-white font-bold">
          Go For Vacation
        </h1>
        <p className="text-center mt-5 text-white">
          Explore Our Vacation Ready Outfits With Fast Worldwide Shipping
        </p>
      </div>
    </section>
  );
};

export default Banner;
