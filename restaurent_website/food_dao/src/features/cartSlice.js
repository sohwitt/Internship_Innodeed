import { createSlice } from "@reduxjs/toolkit";
import foodData from "../assets/database/fullMenu.json";

const initialState = {
  cart: [],
  fullMenu: foodData,
  totalQuant: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuant: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decrementQuant: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
            if(item.quantity == 1){
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }
            else{
                return { ...item, quantity: item.quantity - 1};
            }
          
        }
        return item;
      });
    },
    getTaxCart: (state) => {
      let { totalQuant, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {

          const { price, quantity, tax } = cartItem;
          const itemTotal = (price + (price * tax) / 100) * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuant += quantity;
          return cartTotal;
          
        },
        {
          totalPrice: 0,
          totalQuant: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuant = totalQuant;
    },
  },
});

export const { addToCart, getTaxCart, incrementQuant, decrementQuant, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
