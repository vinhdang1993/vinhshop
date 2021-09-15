export const addTodo = (todo) => (
    {
    type: 'ADD_TODO',
    payload : todo,
})
export const setActive = (isActive) => ({
    type: 'SET_ACTIVE',
    payload : isActive,
})

