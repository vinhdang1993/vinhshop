const initialState = {
    todoList: [
        { id:0, name: 'vinh', age: 23 },
        { id:1, name: 'ut', age: 25 },
        { id:2, name: 'ut dai ca', age: 31 },
    ],
    activeId: null
}
// { type, payload }
const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            const newList = [...state.todoList]
            newList.push(action.payload)
            // console.log(newList)
            return  {...state,todoList:newList}
        // return newList
        case 'SET_ACTIVE':
            
            const isActiveId = action.payload
            
            // console.log(isActiveId)
            // return state
            return { ...state, activeId: isActiveId }
        default:
           return state
    }
}
export default todoReducer
