import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/feeds.json";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: data || null,
  },
  reducers: {
    addProduct: (state, action) => {},
  },
});

// export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
