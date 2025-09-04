import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBestSellerProducts = createAsyncThunk(
  "/products/fetchBestSellerProduct",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
    );
    return response.data;
  }
);

export const fetchNewArrivalsProducts = createAsyncThunk(
  "/products/fetchNewArrivalsProducts",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
    );
    return response.data;
  }
);

export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async ({
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query}`
    );
    // console.log("Product Slice Response", response);
    return response.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    bestSellerProducts: [],
    newArrivalsProducts: [],
    selectedProduct: null,
    error: null,
    loading: false,
    filters: {
      category: "",
      size: "",
      color: "",
      gender: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearfilters: (state) => {
      state.filters = {
        category: "",
        size: "",
        color: "",
        gender: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fecth Best Seller Product
      .addCase(fetchBestSellerProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.bestSellerProducts = action.payload;
      })
      .addCase(fetchBestSellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Fetch New Arrivals Product

      .addCase(fetchNewArrivalsProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewArrivalsProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.newArrivalsProducts = action.payload;
      })
      .addCase(fetchNewArrivalsProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Fetch Filter Products
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Product Details
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setFilters, clearfilters } = productSlice.actions;
export default productSlice.reducer;
