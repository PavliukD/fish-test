import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, addProduct } from "./operations";

import { Product } from "../utils/types";

type InitialStateType = {
    productsList: Product[],
}

export const initialState: InitialStateType = {
    productsList: [],
}

const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productsList = []
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                const {productsList} = state
                state.productsList = [...productsList, action.payload]
            })
            .addCase(addProduct.rejected, () => {
                return
            })
    }
})

export default Slice.reducer
export const { } = Slice.actions