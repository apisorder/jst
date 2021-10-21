//  /src/components/SampleWebApplicationDemo.js
//  reference:  https://www.educative.io/blog/react-hooks-tutorial-todo-list

import React, { useState } from 'react';
import AnchorStyled from './AnchorStyled';
import ButtonStyled from './ButtonStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';


const SampleWebApplicationDemo = ( { title } ) => 
{ 
    const [ toDoList, setToDoList ] = useState( [] );

    const handleToggle = ( todoId ) =>
    {
      //  create new array with map
      let mapped = toDoList.map( ( todo ) => todo.id === Number( todoId ) ? { ...todo, complete: !todo.complete } : { ...todo }
      )
      setToDoList( mapped );
    }

    //  filter out all the completed todos, effectively "deleting" them from the toDoList
    const handleFilter = ( ) =>
    {
        let filtered = toDoList.filter( ( todo ) => !todo.complete
        // {
        //   return !todo.complete;
        // }
        )
        setToDoList( filtered );
    }

    const addTodo = ( task ) => 
    {
        //  better practice by not mutating the original list
        let newList = [ ...toDoList ];

        //  add the todo with the specified task into the new list
        newList = [ ...newList, { 
        id: Date.now(),
        task: task, 
        complete: false 
        } ];

        //  now assign the new list to the todo list
        setToDoList( newList );
    }
    // ***********************************React hooks************************************************

    return (
        <>
            <DividerStyled>
                {/* ***********************************page header************************************************ */}
                {/* page title */}
                <Header main>
                    { 
                        title && 
                        (<>{ title }</>)
                    }
                </Header>
                <LineFeeder />
                <LineFeeder />
                {/* page title */}
                {/* ***********************************page header************************************************ */}

                {/* lecture content */}
                {/* ***********************************Introduction************************************************ */}
                <ParagraphStyled>
                    This application helps the user keep track of tasks to be completed (todos).  
                    Toggle the todo item changes its state from incomplete to complete 
                    (strike-through), vice versa.  To make it easier to read, the background also 
                    changes accordingly.
                </ParagraphStyled> 
                {/* ***********************************Introduction************************************************ */}
        </DividerStyled>

        <DividerStyled>

            {/* extra space from the last program output to make the reading easier */}
            <LineFeeder />

            <Header subsection>
                The To-Do List Task Manager
            </Header>
            <LineFeeder /><LineFeeder />
        </DividerStyled>

        <DividerStyled>
            
                <ToDoList 
                    toDoList={ toDoList } 
                    handleToggle={ handleToggle }
                    handleFilter={ handleFilter }
                />

            <ToDoForm addTodo={ addTodo }/>
        </DividerStyled>


            {/* ***********************************page navigation*********************************************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/sample-web-application'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/road-ahead'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation*********************************************** */}
        </>
    )
}
export default SampleWebApplicationDemo;

const ToDo = ({ todo, handleToggle }) => 
{
    const handleClick = ( e ) => 
    {
        e.preventDefault();
        // handleToggle( e.currentTarget.id );
        handleToggle( e.target.id );
    }

    return (
        <TodoItemStyled todoitemCompleted={todo.complete ? "not completed" : ""}
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

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => 
{
    return (
        <DividerStyled>
            { toDoList.map(( todo ) => 
                    <ToDo 
                        todo={ todo }
                        handleToggle={ handleToggle }
                        handleFilter={ handleFilter }
                    />
                )
            }
            <DividerStyled>
                <LineFeeder />
                <LineFeeder />
                <LineFeeder />
                <AnchorStyled todoClearSelected onClick={ handleFilter }>Clear Selected</AnchorStyled>
            </DividerStyled>
            
        </DividerStyled>
    )
}

const ToDoForm = ({ addTodo }) =>
{
    //  hooks
    const [ userInput, setUserInput ] = useState('');

    //  handle the local state changes, i.e. user types in the input box
    const handleChange = ( e ) =>
    {
        // setUserInput( e.currentTarget.value );
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

        //  reset the form
        setUserInput("");
    }

    return (
        <>
        <FormStyled>
            <form onSubmit={ handleSubmit }>
                <InputStyled
                    value={ userInput } 
                    type="text" 
                    onChange={ handleChange } 
                    placeholder="Enter a new todo" 
                />
                <ButtonStyled>Add New Todo</ButtonStyled>
            </form>
        </FormStyled>
        </>
    )
}

const InputStyled = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 5px;

  display: inline-block;
  font-size: 29px;
  border: 7px solid white;
  border-radius: 3px;
  margin: 0rem 7rem;
  color: MidnightBlue;
  background: Thistle;
`;

const FormStyled = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

//  default is TodoItemStyled
//  todoItemCompleted only affect completed item
const TodoItemStyled = styled(ParagraphStyled)`
    border: 7px solid white;
    font-size: 29px;
    border-radius: 3px;
    color: MidnightBlue;
    text-align: center;
    background: Thistle;
    margin: 0rem 12rem;

    ${props => props.todoitemCompleted && css`
    border: 7px solid white;
    background: Silver;
    text-align: center;
    text-decoration: line-through;
    `}
`;