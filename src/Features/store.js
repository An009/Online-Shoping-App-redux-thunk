import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import productsReducer from './productSlice'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        products:productsReducer,
        cart:cartReducer
    }
})
export default store;