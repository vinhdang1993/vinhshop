import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    Cart: [
        // { id:1,img:'product-1.jpg' ,name: 'BELL PEPPER', price: 120, description:"A small river named Duden flows by time", quantity: 3  },
        // {id:2,img:'product-5.jpg' ,name: 'tomatoe', price: 120, description:"A small river named Duden flows by time",quantity:2 }
    ],
    load: false
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state, action) => {
            state.Cart.push(action.payload)
            // console.log(state.Cart)
        },
        getCart:(state, action) =>{
            console.log(action.payload)
        return  {...state.Cart,Cart :action.payload}
        },
        increment:(state, action) =>{
            const newState = state.Cart.map((item) => item.productId === action.payload  
            ? {...item, quantity: item.quantity + 1} 
            : item)
            return {...state,Cart: newState};
        },
        decrement:(state, action) =>{
            const newState = state.Cart.map((item) => item.productId === action.payload 
            ? (item.quantity > 0 ? {...item, quantity  : item.quantity -1 } :  item)
            : item)
            return {...state,Cart : newState}
        },
        deleteCart:(state, action) =>{
            // state.Cart.filter((item) => item.id !== action.payload)
            axios.get(`/api/cart/deletecart=${action.payload}`)
            // const newState = state.Cart.filter((item) => item.productId !== action.payload)
            // return {...state,Cart : newState}
            return state
            // delete state.Cart.id(action.payload)
        }
    }
})

const { actions, reducer  } = cartSlice
export const {  addCart, getCart, increment, decrement, deleteCart} = actions
export default reducer