//  /src/components/TodoList.js

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import ButtonStyled from './ButtonStyled';
import FormStyled from './FormStyled';
import InputStyled from './InputStyled';

const TodoForm = ({ addTodo }) =>
{
    // ***********************************React Hooks**************************
    // for setting and clearning user input
    const [ userInput, setUserInput ] = useState('');
    // ***********************************React Hooks**************************

    //  handle the local state changes, i.e. what user types in the input box
    const handleChange = ( e ) =>
    {
        setUserInput( e.target.value );
    }

    //  handle the submission, i.e. when user presses the Enter key or click the Submit button
    const handleSubmit = ( e ) =>
    {
        //  stop browser refresh
        e.preventDefault();

        //  add the new todo if it exists
        if (userInput !== "")
        {
            addTodo( userInput );
        }

        //  reset the input
        setUserInput("");
    }

    return (
        <>
            {/* a form that allows a single entry to be added, namely the new todo item */}
            <FormStyled>
                <form onSubmit={ handleSubmit }>
                    <InputStyled
                        value={ userInput } 
                        type="text" 
                        onChange={ handleChange } 
                        placeholder="Enter a new todo" 
                    />
                    {/* add the item */}
                    <ButtonStyled>Add New Todo</ButtonStyled>
                </form>
            </FormStyled>
        </>
    )
}
export default TodoForm;