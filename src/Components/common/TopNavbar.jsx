import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const TopNavbar = () => {
  return (
    <div className="bg_rabbit_red text-gray-800 relative">
      <div className="px-5 py-5 w-7xl container mx-auto flex justify-between items-center">
        <div className="hidden md:flex  space-x-4">
          <a href="" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="" className="hover:text-gray-300">
            <RiTwitterXFill className="h-5 w-5" />
          </a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm">
          <span>We Ship Worldwide Fast And Reliable </span>
        </div>
        <div>
          <a href="" className="text-sm hidden md:block">
            01686884706
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
