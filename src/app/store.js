import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import TodoSlice from '../features/Todo/TodoSlice';
import CartSlice from '../features/cart/CartSlice'
import ProductSlice from '../features/product/ProductSlice'
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // todoSlice: TodoSlice,
    CartSlice: CartSlice
    ,
    ProductSlice: ProductSlice
  },
});
export default store
