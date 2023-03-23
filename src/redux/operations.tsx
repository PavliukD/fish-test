import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

import { Product, NewProduct } from "../utils/types";

type Data = Product[]

export const fetchProducts = createAsyncThunk<Data, undefined, {rejectValue: string}>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        const data = await api.get() as Data

        if (!data) {
            return rejectWithValue('Can`t get data. Server error')
        }
        return data
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (newProduct: Product, { rejectWithValue }) => {
        const data = await api.add(newProduct) as unknown

        if (!data) {
            return rejectWithValue('Can`t add new product. Server error')
        }
        return data as Product
    }
)