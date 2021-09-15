import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { setActive } from '../../action/todoReducer';
import { addTodo,removeTodo } from '../../features/Todo/TodoSlice'
import TodoItem from './TodoItem';
function TodoList() {
    const todoList = useSelector(state => state.todoSlice.todoList)
    const activeId = useSelector(state => state.todoSlice.activeId)
    const [userName, setuserName] = useState('')

    const dispatch = useDispatch()
    const handleChangeValue = (e) => setuserName(e.target.value)
    const handleAddTodo= () => {
            const list = { name: userName, age:Math.round( Math.random()*20)}
            const action = addTodo(list)
            dispatch(action)
            setuserName('') 
    }
    const handleOnclick= (e) =>{ 
        const action = setActive(e)
        dispatch(action)
        console.log('active: ',activeId)
        // console.log(e)
    }
    const  handleRemoveTodo = (e) =>{
        const action = removeTodo(e)
        dispatch(action)
        // console.log(e)

    }
    return (
        <>
        <input type='test' onChange={handleChangeValue} value={userName}  />
         <button onClick={handleAddTodo}>add</button>
            <TodoItem todoList={todoList} handleOnclick={handleOnclick} handleRemoveTodo={handleRemoveTodo} activeId={activeId}/>
        </>
    )
}

export default TodoList
