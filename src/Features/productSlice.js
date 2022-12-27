import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = "http://localhost:3005/products";
const initialState = {
    products:[],
    isLoading:null,
    error:null
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    try{
        const response = await axios.get(BASE_URL)
        return response.data
    }
    catch(err){
        return err.message
    }
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.err = action.error;
        })
    }
})
export const selectAllProducts = (state)=>state.products.products;
export const getIsLoading = (state)=> state.products.isLoading;
export const getError = (state)=>state.products.error;
export default productSlice.reducer;
