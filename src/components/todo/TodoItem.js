import React from 'react'
import propTypes from 'prop-types';

TodoItem.propTypes = {
    todoList: propTypes.array,
    handleOnclick:propTypes.func,
    activeId:propTypes.number,
    handleRemoveTodo: propTypes.func
};
function TodoItem(props) {

const {todoList, handleOnclick, activeId , handleRemoveTodo} = props
    return (
        <>
        {todoList.map((e,k) => 
        <li key={k} > 
            <span onClick={() => handleOnclick(e.id)}
            className={e.id === activeId  ? 'active' : 'a'}
            >{e.name}: {e.age}</span>  
            <button onClick={() => handleRemoveTodo(k)}>delete</button>
        </li >)}
        
          
        </>
    )
}

export default TodoItem
