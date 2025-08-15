export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate the items price
  // state.itemsPrice = addDecimals(
  //   state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  // );
  state.itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + Number(item.price * item.qty),
    0
  );

  // Calculate the shipping price
  state.shippingPrice = state.cartItems.reduce(
    (acc, item) => acc + Number(Number(item.price * item.qty * 0.1).toFixed(2)),
    0
  );

  // Calculate the tax price
  state.taxPrice = state.cartItems.reduce(
    (acc, item) =>
      acc + Number(Number(item.price * item.qty * 0.15).toFixed(2)),
    0
  );

  // Calculate the total price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice);

  // Save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
