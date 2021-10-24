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
    // ***********************************local variables**********************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let lineNumber = 1, lineNumber2 = 1;

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
            <DividerStyled programCode>
                <Header fileName>The HTML File</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber++}<IndentStyled /><ElementDelimiter>!-- index.html --
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled /><ElementDelimiter>
                    !-- reference: https://www.udemy.com/course/modern-javascript/
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled /><ElementDelimiter>!DOCTYPE html
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled /><ElementDelimiter>html
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/><ElementDelimiter>head
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled three/><ElementDelimiter>
                    !-- center-align all text --</ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled three/><ElementDelimiter>style
                    </ElementDelimiter><LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled four/>body {leftBrace}<LineFeeder />
                    Line {lineNumber++}<IndentStyled seven/>text-align: center;<LineFeeder />
                    Line {lineNumber++}<IndentStyled six/>{rightBrace}<LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>/style
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled two/><ElementDelimiter>/head
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled /><LineFeeder />
                    Line {lineNumber++}<IndentStyled two/><ElementDelimiter>body
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>h1
                    </ElementDelimiter>Todos<ElementDelimiter>/h1</ElementDelimiter>
                    <LineFeeder />
                    Line {lineNumber++}<LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    !-- place to render the list of todos --</ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>div id="todos"
                    </ElementDelimiter><ElementDelimiter>/div</ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    !-- trigger to clear the selected todos --</ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    button id="clear"</ElementDelimiter>Clear Selected
                    <ElementDelimiter>button</ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    !-- trigger to add entries to the list of todos --</ElementDelimiter>
                    <LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>form id="new-todo"
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled four/><ElementDelimiter>
                    input type="text" placeholder="Something to do" name="text"
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled four/><ElementDelimiter>button
                    </ElementDelimiter>Add Todo<ElementDelimiter>button</ElementDelimiter>
                    <LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>/form
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    !-- where logic is handled --</ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled three/><ElementDelimiter>
                    script src="todo-app.js"</ElementDelimiter><ElementDelimiter>/script
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled two/><ElementDelimiter>/body
                    </ElementDelimiter><LineFeeder />
                    Line {lineNumber++}<IndentStyled /><ElementDelimiter>/html</ElementDelimiter>
                    <LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* *****************************The HTML File******************* */}

            {/* *************************The JS File********************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
            </DividerStyled>

            <DividerStyled programCode>
                <Header fileName>The JS File</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} todo-app.js<LineFeeder />
                    Line {'0'+lineNumber2++}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />let todos = [];<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} 
                    get the Document Object Model (DOM) elements for an individual todo
                    <LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />
                    const createTodoDOM = function ( todo )<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/
                    >const todoElement = document.createElement( 'div' );<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two />
                    const todoText = document.createElement( 'span' );<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} setup the todo text
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>todoText.textContent = todo.text;
                    <LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    if this todo has been completed, strikethrough the todo to indicate it
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    works in conjunction with the event handler defined below<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>if ( todo.completed === true )
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>
                    todoText.setAttribute('style', 'text-decoration: line-through');
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    add the todo element to the parent div element<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>todoElement.appendChild( todoText );
                    <LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    add event handler to enable styles to change on the todo<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>
                    todoElement.addEventListener( 'click', function ( e )<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>toggleTodo( todo.id );
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>{comment} 
                    reflect the changes visually<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>renderTodos( todos );<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>return todoElement;<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{comment} render the list of todos
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled />const renderTodos = function ( todos ) 
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    clear the todos currently shown on-screen<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>
                    document.querySelector( '#todos' ).innerHTML = '';<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    create the DOM element by calling createTodoDOM<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} and add it to the parent div
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>todos.forEach( function ( todo, index ) 
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>
                    document.querySelector( '#todos' ).appendChild(createTodoDOM( todo ));
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{comment} initial rendering<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />renderTodos( todos );<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{comment} 
                    add event handler to handle adding a new todo to the list of todos
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled />
                    document.querySelector( '#new-todo' ).addEventListener( 'submit', 
                    function ( e ) <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{comment} 
                    prevent browser refresh default<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>e.preventDefault( );<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{comment} 
                    create an object with attributes of the new todo and add it to the list
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>todos.push({leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>id: Date.now(),<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>text: e.target.elements.text.value
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>completed: false<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace});<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{comment} 
                    reflect the change visually<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>renderTodos( todos );<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{comment} 
                    reset input for the user, so no manual deletion is necessary<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>e.target.elements.text.value = '';
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />)<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{comment} 
                    toggle the completed value for a given todo<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />const toggleTodo = function ( id )
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} 
                    locate the desired todo to allow toggling<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>const todoTargeted = todos.find ( 
                        function ( todo ) <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>return todo.id === id;<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>)<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} if a match was found, 
                    toggle its completed property<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>if ( todoTargeted !== undefined )
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>todoTargeted.completed = 
                    !todoTargeted.completed;<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{comment} event handler to clear 
                    completed todos<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />document.querySelector( '#clear' )
                    .addEventListener( 'click', function ( e ) <LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} filter out todos which have 
                    not been completed<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>const incompleteTodos = todos.filter( 
                        function ( todo ) <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled five/>return !todo.completed<LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>)<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>todos = incompleteTodos;<LineFeeder />
                    Line {lineNumber2++}<IndentStyled /><LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{comment} reflect the change visually
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>renderTodos( todos );<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />)<LineFeeder />
                </ParagraphStyled>
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