import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {fetchData} from './cartAPI'
const initialState = {
    Cart: [],
    load: false,
    count:0,
}
export const fetchDataAsync = createAsyncThunk(
    'cart/fetchData',
    async () => {
        const response = await fetchData();
        return response;
    }
  );

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state) => {
            return {...state,count : state.count + 1}
        },
        getCart:(state, action) =>{
            // console.log(action.payload)
        let sum = 0
        action.payload.map((item) => sum += item.quantity)
        return  {...state,Cart :action.payload, count : sum}
        },
        increment:(state, action) =>{
            const newState = state.Cart.map((item) => item.productId === action.payload  
            ? {...item, quantity: item.quantity + 1} 
            : item)
            return {...state,Cart: newState,count : state.count + 1};
        },
        decrement:(state, action) =>{
            const newState = state.Cart.map( (item) => item.productId === action.payload 
            ? (item.quantity > 0 ? {...item, quantity  : item.quantity -1 } :  item)
            : item )
            return {...state,Cart : newState,count : state.count > 0 ? state.count - 1 : state.count}
        },
        deleteCart:(state, action) =>{
            // state.Cart.filter((item) => item.id !== action.payload)
            axios.get(`/api/cart/deletecart=${action.payload}`)
            // const newState = state.Cart.filter(item => item.productId !== action.payload)
            return state
         
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchDataAsync.pending, (state) => {
            state.load = true;
          })
         .addCase(fetchDataAsync.fulfilled, (state, action) => {
            let sum = 0
            action.payload.map((item) => sum += item.quantity)
            state.Cart = action.payload
            state.count = sum
          });
      },
})

const { actions, reducer  } = cartSlice
export const {  addCart, getCart, increment, decrement, deleteCart} = actions
export default reducer