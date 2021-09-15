import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Products: [],
    page: 1, 
    load: false
}
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state, action) => {
            state.push(action.payload)
        },
        getProduct:(state, action) =>{
            state.Products = action.payload
            state.load = true;
            state.page = Math.ceil(state.Products.length / 8)
        },
        getProductId:(state) =>{
            state.load = true;
        },

    }
})

const { actions, reducer  } = productSlice
export const { addProduct, getProduct, getProductId } = actions
export default reducer

