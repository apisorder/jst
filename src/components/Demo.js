//  /src/components/Demo.js
//  reference:  https://www.educative.io/blog/react-hooks-tutorial-todo-list

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const Demo = ( { title } ) => 
{
    // ***********************************React Hooks**************************
    //  for changing the content of the todo (task) array
    const [ todoList, setTodoList ] = useState( [] );
    // ***********************************React Hooks**************************

    //  changing the todo item (task) from complete to incomplete, vice versa
    const handleToggle = ( todoId ) =>
    {
        //  if the ids match, keep all other properties intact (i.e. id and task). and only
        //  change the complete property
        //  otherwise simply copy the entire todo item
      let mapped = todoList.map( ( todo ) => 
        todo.id === Number( todoId ) ? { ...todo, complete: !todo.complete } : { ...todo }
      )
      //    store it back in the original todo list
      setTodoList( mapped );
    }

    //  filter out all the completed todos, effectively "deleting" them from the todoList
    const handleFilter = ( ) =>
    {
        //  filtering all the completed todos
        let filtered = todoList.filter( ( todo ) => !todo.complete )
        //  store it back in the original todo list
        setTodoList( filtered );
    }

    //  add a new todo item
    const addTodo = ( task ) => 
    {
        let newList = [ ...todoList ];

        //  add the todo with the specified task into the new list
        newList = [ ...newList, { 
            id: Date.now(),
            task: task, 
            complete: false 
        } ];

        //  store it back in the original todo list
        setTodoList( newList );
    }

    return (
        <>
            {/* ***********************************page header************************** */}
            <DividerStyled>
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                <LineFeeder /><LineFeeder />
                {/* page title */}
                {/* ***********************************page header********************** */}

                {/* lecture content */}
                {/* ***********************************Introduction******************* */}
                <ParagraphStyled>
                    This application helps the user keep track of tasks to be completed (todos).  
                    Toggle the todo item changes its state from incomplete to complete 
                    (strike-through), vice versa.  To make it easier to read, the background 
                    also changes accordingly.
                </ParagraphStyled> 
                {/* ***********************************Introduction******************* */}
        </DividerStyled>

        <DividerStyled>
            {/* extra space from the last program output to make the reading easier */}
            <LineFeeder />

            {/* title of the app */}
            <Header subsection>
                The To-Do List Task Manager
            </Header>
            {/* extra space from the last program output to make the reading easier */}
            <LineFeeder /><LineFeeder />
        </DividerStyled>

        <DividerStyled>
            {/* render the todo items list here */}
            {/* pass in the appropriate props (arguments) into the component */}
            <TodoList 
                todoList={ todoList } 
                handleToggle={ handleToggle }
                handleFilter={ handleFilter }
            />

            {/* render the form here (for adding a new todo item) */}
            <TodoForm addTodo={ addTodo }/>
        </DividerStyled>


            {/* ***********************************page navigation********************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/sample-web-application'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/road-ahead'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation********************** */}
        </>
    )
}
export default Demo;
