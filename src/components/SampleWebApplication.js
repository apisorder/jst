//  /src/components/SampleWebApplication.js
//  reference:  https://www.udemy.com/course/modern-javascript/

import React from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import ElementDelimiter from './ElementDelimiter';
import Footer from './Footer';
import Header from './Header';
import IndentStyled from './IndentStyled';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const SampleWebApplication = ( { title } ) => 
{
    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//", leftBrace = "{", rightBrace = "}";
    // ***********************************local variables*********************************

    return (
        <>
            {/* ***********************************page header************************** */}
            <DividerStyled>
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                {/* page title */}
                {/* ***********************************page header********************** */}

                 {/* lecture content */}
                {/* ***********************************Introduction***********************/}
                <ParagraphStyled>
                    The strength of JS lies in its ability to facilitate user interaction on the 
                    client side.  In this section, a todo application will be developed to manage 
                    a user’s to-do list.  The app provides three fundamental functionalities:  
                    adding a new todo, marking a todo as completed (and unmarking it), and 
                    deleting todos which have been marked as completed.
                </ParagraphStyled>

                <ParagraphStyled>
                    However, in order to run this application on the local machine, the developer 
                    needs to install a local server, known as live-server, which can be installed 
                    with this command in the Node.js environment:  npm install -g live-server.  
                    The -g makes live-server available globally.  To start the server, simply use 
                    this command:  live-server programDirectory name.  Note that the command must 
                    be issued from one directory level above the program directory.  For example, 
                    if the programs are stored in programming/programDirectory/, the command must 
                    be issued from the programming directory.  The application has two files, 
                    index.html, and the embedded JS file named todo-app.js.
                </ParagraphStyled>
                {/* ***********************************Introduction***********************/}
            </DividerStyled>

            {/* ***********************************The HTML File**************** */}
            {/* *****************************The HTML File******************* */}
            <DividerStyled>
                <Header filenameBegin>The HTML File (begin)</Header>

                <ParagraphStyled code>
                    <ElementDelimiter>!-- index.html --
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>
                    !-- reference: https://www.udemy.com/course/modern-javascript/
                    </ElementDelimiter><LineFeeder /><LineFeeder />
                    <ElementDelimiter>!DOCTYPE html</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>html</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>head</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    !-- center-align all text --</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>style</ElementDelimiter><LineFeeder />
                    <IndentStyled three/>body {leftBrace}<LineFeeder />
                    <IndentStyled six/>text-align: center;<LineFeeder />
                    <IndentStyled five/>{rightBrace}<LineFeeder />
                    <IndentStyled two/><ElementDelimiter>/style</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>/head</ElementDelimiter><LineFeeder />
                    <LineFeeder />
                    <IndentStyled /><ElementDelimiter>body</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>h1
                    </ElementDelimiter>Todos<ElementDelimiter>/h1</ElementDelimiter>
                    <LineFeeder /><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    !-- place to render the list of todos --</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>div id="todos"
                    </ElementDelimiter><ElementDelimiter>/div</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    !-- trigger to clear the selected todos --</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    button id="clear"</ElementDelimiter>Clear Selected
                    <ElementDelimiter>button</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    !-- trigger to add entries to the list of todos --</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled two/><ElementDelimiter>form id="new-todo"
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled three/><ElementDelimiter>
                    input type="text" placeholder="Something to do" name="text"
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled three/><ElementDelimiter>button
                    </ElementDelimiter>Add Todo<ElementDelimiter>button</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled two/><ElementDelimiter>/form
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    !-- where logic is handled --</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    script src="todo-app.js"</ElementDelimiter><ElementDelimiter>/script
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>/body
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/html</ElementDelimiter>
                    <LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>The HTML File (end)</Header>
            </DividerStyled>
            {/* *****************************The HTML File******************* */}

            {/* *************************The JS File********************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
            </DividerStyled>

            <DividerStyled>
                <Header filenameBegin>The JS File (begin)</Header>

                <ParagraphStyled code>
                    {comment} todo-app.js<LineFeeder /><LineFeeder />
                    let todos = [];<LineFeeder /><LineFeeder />
                    {comment} 
                    get the Document Object Model (DOM) elements for an individual todo
                    <LineFeeder />
                    const createTodoDOM = function ( todo )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />const todoElement = document.createElement( 'div' );
                    <LineFeeder />
                    <IndentStyled />
                    const todoText = document.createElement( 'span' );<LineFeeder />
                    <LineFeeder />
                    <IndentStyled />{comment} setup the todo text<LineFeeder />
                    <IndentStyled />todoText.textContent = todo.text;<LineFeeder />
                    <LineFeeder />
                    <IndentStyled />{comment} 
                    if this todo has been completed, strikethrough the todo to indicate it
                    <LineFeeder />
                    <IndentStyled />{comment} 
                    works in conjunction with the event handler defined below<LineFeeder />
                    <IndentStyled />if ( todo.completed === true )<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>
                    todoText.setAttribute('style', 'text-decoration: line-through');
                    <LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder /><LineFeeder />
                    <IndentStyled />{comment} 
                    add the todo element to the parent div element<LineFeeder />
                    <IndentStyled />todoElement.appendChild( todoText );<LineFeeder />
                    <LineFeeder />
                    <IndentStyled />{comment} 
                    add event handler to enable styles to change on the todo<LineFeeder />
                    <IndentStyled />
                    todoElement.addEventListener( 'click', function ( e )<LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>toggleTodo( todo.id );<LineFeeder />
                    <IndentStyled three/>{comment} reflect the changes visually<LineFeeder />
                    <IndentStyled three/>renderTodos( todos );<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    <IndentStyled />return todoElement;<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} render the list of todos<LineFeeder />
                    const renderTodos = function ( todos )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />{comment} 
                    clear the todos currently shown on-screen<LineFeeder />
                    <IndentStyled />
                    document.querySelector( '#todos' ).innerHTML = '';<LineFeeder />
                    <LineFeeder />
                    <IndentStyled />{comment} 
                    create the DOM element by calling createTodoDOM<LineFeeder />
                    <IndentStyled />{comment} and add it to the parent div
                    <LineFeeder />
                    <IndentStyled />todos.forEach( function ( todo, index ) 
                    <LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>
                    document.querySelector( '#todos' ).appendChild(<LineFeeder />
                    <IndentStyled three/>createTodoDOM( todo ));
                    <LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    {rightBrace}<LineFeeder />
                    {comment} initial rendering<LineFeeder />
                    renderTodos( todos );<LineFeeder /><LineFeeder />
                    {comment} 
                    add event handler to handle adding a new todo to the list of todos
                    <LineFeeder />
                    document.querySelector( '#new-todo' ).addEventListener( 'submit', 
                    function ( e ) <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>{comment} 
                    prevent browser refresh default<LineFeeder />
                    <IndentStyled two/>e.preventDefault( );<LineFeeder /><LineFeeder />
                    <IndentStyled two/>{comment} 
                    create an object with attributes of the new todo and add it to the list
                    <LineFeeder />
                    <IndentStyled two/>todos.push({leftBrace}<LineFeeder />
                    <IndentStyled three/>id: Date.now(),<LineFeeder />
                    <IndentStyled three/>text: e.target.elements.text.value<LineFeeder />
                    <IndentStyled three/>completed: false<LineFeeder />
                    <IndentStyled two/>{rightBrace});<LineFeeder /><LineFeeder />
                    <IndentStyled two/>{comment} reflect the change visually<LineFeeder />
                    <IndentStyled two/>renderTodos( todos );<LineFeeder /><LineFeeder />
                    <IndentStyled two/>{comment} 
                    reset input for the user, so no manual deletion is necessary<LineFeeder />
                    <IndentStyled two/>e.target.elements.text.value = '';<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    )<LineFeeder /><LineFeeder />
                    {comment} 
                    toggle the completed value for a given todo<LineFeeder />
                    const toggleTodo = function ( id )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />{comment} 
                    locate the desired todo to allow toggling<LineFeeder />
                    <IndentStyled />const todoTargeted = todos.find ( function ( todo )
                    <LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>return todo.id === id;<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />)<LineFeeder /><LineFeeder />
                    <IndentStyled />{comment} if a match was found, 
                    toggle its completed property<LineFeeder />
                    <IndentStyled />if ( todoTargeted !== undefined )
                    <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>todoTargeted.completed = 
                    !todoTargeted.completed;<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    {rightBrace}<LineFeeder />
                    <LineFeeder />
                    {comment} event handler to clear 
                    completed todos<LineFeeder />
                    document.querySelector( '#clear' )
                    .addEventListener( 'click', function ( e ) <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />{comment} filter out todos which have 
                    not been completed<LineFeeder />
                    <IndentStyled />const incompleteTodos = todos.filter( function ( todo )
                    <LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>return !todo.completed<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />)<LineFeeder /><LineFeeder />
                    <IndentStyled />todos = incompleteTodos;<LineFeeder /><LineFeeder />
                    <IndentStyled />{comment} reflect the change visually<LineFeeder />
                    <IndentStyled />renderTodos( todos );<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    )<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>The JS File (end)</Header>
            </DividerStyled>

            <DividerStyled>
                <ParagraphStyled>
                    The live demo is available below.  If you create the HTML file and
                    the JS file above on your local machine and run the the HTML file 
                    with live-server, your results will be slightly different, as your 
                    application would not have the CSS styling applied in this educational 
                    tool, but the fundamental functionalities remain the same.
                </ParagraphStyled>

            </DividerStyled>
            {/* *************************The JS File********************** */}

            {/* **********************link to demo********************** */}
            <DividerStyled>
                <AnchorStyled demo><Link to='/demo'>Live Demo</Link>
                </AnchorStyled>
            </DividerStyled>
            {/* **********************link to demo********************** */}
            {/* lecture content */}

            {/* ***********************************page navigation********************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/js-programming-techniques'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/road-ahead'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation********************** */}
        </>
    )
}
export default SampleWebApplication;