//  /src/components/Todo.js

import React from 'react';

//  import the proper styling for the todo item
import TodoItemStyled from './TodoItemStyled';

const Todo = ({ todo, handleToggle }) =>
{
    //  pass in the todo to change from complete to incomplete, or incomplete to complete
    const handleClick = ( e ) => 
    {
        //  prevent the browser default, i. e. refreshing the page
        e.preventDefault();

        //  change the text decoration accordingly
        handleToggle( e.target.id );
    }

    return (
        // style is changed here
        <TodoItemStyled 
            todoitemCompleted={ todo.complete ? "not completed" : "" }
            id={ todo.id }
            key={ todo.id }
            name="todo"
            value={ todo.id }
            onClick={ handleClick }
        >
            { todo.task }
        </TodoItemStyled>
    )
}
export default Todo;