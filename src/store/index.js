import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../reducers/todoReducer'
// import { createSlice } from '@reduxjs/toolkit'
// const todosSlice = createSlice({
// name: 'todos',
// initialState:{
//     todoList: [
//         { name:'vinh',age:23},
//         { name:'ut',age:25},
//         { name:'vasdthinhasinh',age:31},
//     ]
// }

// })

// const todosReducer = todosSlice.reducer


const store = configureStore({
    reducer: {
        todoReducer
    }
    
})

// const todoSelector = state => state.todosReducer.todoList

export default store