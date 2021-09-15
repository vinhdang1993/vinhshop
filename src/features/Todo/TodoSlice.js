import {  createSlice } from "@reduxjs/toolkit"
const initialState = {
    todoList: [
        { id:1, name: 'vinh', age: 23 },
        { id:2, name: 'ut', age: 25 },
        { id:3, name: 'ut dai ca', age: 31 },
        { id:4, name: 'thinh cho', age: 31 },
    ],
    activeId: null
}
const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo:(state, action ) => {
            state.todoList.push(action.payload)
            console.log(state)
        },
        removeTodo: (state, action) => {
            const newState = state.todoList
            newState.splice(action.payload,1);

        }
    }
})

const { actions, reducer } = TodoSlice ;
export  const { addTodo, removeTodo } = actions;
export default reducer
