import Banner from "../Components/Home/Banner";
import BestSeller from "../Components/Home/BestSeller";
import GenderCollection from "../Components/Home/GenderCollection";
import NewArrvalsForMen from "../Components/Home/NewArrvalsForMen";
import NewArrivals from "../Components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Banner />
      <GenderCollection />
      <BestSeller />
      <NewArrivals />
      <NewArrvalsForMen />
    </div>
  );
};

export default Home;
