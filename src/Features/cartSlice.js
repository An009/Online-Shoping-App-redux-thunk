import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItem.find(item => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++
            }
            else {
                state.cartItem.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItem.find(item => item.id === action.payload.id);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItem.find(item => item.id === action.payload.id);
            if (item.quantity === 1) {
                item.quantity = 1
            }
            else {
                item.quantity--;
            }
        },
        getTotal: (state, action) => {
            let { total, quantity } = state.cartItem.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const totalItem = price * quantity;
                cartTotal.total += totalItem;
                cartTotal.quantity += quantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItem.filter(item => item.id !== action.payload.id);
            state.cartItem = removeItem;
            toast.warning('produit supprimé avec succès', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        },
        clearCart: (state, action) => {
            state.cartItem = [];
        }

    }
})
export const selectAllCart = (state) => state.cart.cartItem;
export const getTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const getTotalAmount = (state) => state.cart.cartTotalAmount;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;