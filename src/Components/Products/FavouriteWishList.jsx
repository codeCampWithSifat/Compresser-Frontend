import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../Utils/favouriteUtils";
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "../../redux/slices/favouriteSlice";
import { toast } from "react-toastify";

const FavouriteWishList = ({ product }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some((p) => p._id === product._id);

  useEffect(() => {
    const favouritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favouritesFromLocalStorage));
  }, [dispatch]);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavorites(product));
      removeFavoriteFromLocalStorage(product._id);
      toast("Removed From WishList");
    } else {
      dispatch(addToFavorites(product));
      addFavoriteToLocalStorage(product);
      toast("Add To WishList");
    }
  };
  return (
    <div
      className="absolute top-2 right-2 cursor-pointer z-10" // always position in top right
      onClick={toggleFavourite}
    >
      {isFavourite ? (
        <FaHeart className="text-pink-500 text-2xl" />
      ) : (
        <FaRegHeart className="text-gray-700 text-2xl" /> // darker so visible on white
      )}
    </div>
  );
};

export default FavouriteWishList;
