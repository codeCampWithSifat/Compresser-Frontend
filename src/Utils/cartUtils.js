export const getCartItemFromLocalStorage = () => {
  const getCart = localStorage.getItem("cart");
  return getCart ? JSON.parse(getCart) : [];
};

export const addCartToLocalStorage = (product) => {
  const cart = getCartItemFromLocalStorage();
  if (!cart.some((p) => p._id === product.id)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeCartFromLocalStorage = (productId) => {
  const cart = getCartItemFromLocalStorage();
  const removeCartItem = cart.filter((product) => product._id !== productId);
  localStorage.setItem("cart", JSON.stringify(removeCartItem));
};
