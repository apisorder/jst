//  /src/components/Functions.js

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import IndentStyled from './IndentStyled';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const Functions = ( { title } ) => 
{
    // ***********************************React Hooks**************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    // ***********************************React Hooks**************************

    // ***********************************local variables**********************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let lineNumber = 1;

    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//", leftBrace = "{", rightBrace = "}";
    const forLoopCondition = "let i = 0; i < source.length; i++";
    const lessAndEqualTo = "<=", fibonacciCall = "{fib(10)}", arrow = "=>";
    const anonymousFunctionCall = "{ anonymous( 1, 2 ) }";
    const arrowFunctionCall = "{ arrow( 1, 2 ) }";
    const arrowConciseFunctionCall = "{ arrowConcise( 1, 2 ) }";
    const thisName = "{this.name}", curlyBraces = "{}";
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
                {/* ***********************************Introduction******************* */}
                <ParagraphStyled>
                    Loops facilitate code reuse based on some condition, but if the developer 
                    simply wants to reuse the code, functions may be a more preferred option: 
                    functions are containers of code that may also simplify logic, separating 
                    the source code into smaller components to work with. In addition, 
                    functions can be defined as part of an object. In this context, the functions 
                    are called methods: since an object’s methods only work with its data, data 
                    encapsulation is realized.
                </ParagraphStyled> 
            </DividerStyled>
            {/* ***********************************Introduction**************************** */}

            {/* **********************1. Named and Anonymous Functions********* */}
            <DividerStyled>
                <Header subsection>1. Named and Anonymous Functions</Header>

                <ParagraphStyled>
                    A function can be named or anonymous: the syntax is similar, but the 
                    anonymous function is normally used in methods. For named functions, the 
                    function name follows the function keyword, and for anonymous functions, the 
                    function is referenced by a variable. The following two programs demonstrate 
                    their use. The named function (named.js) calculates the Fibonacci sequence, 
                    and the anonymous function (anonymous.js) collects the even numbers from an 
                    array and store them in another array.
                </ParagraphStyled>
            </DividerStyled>

            {/* ****************************named.js******************************* */}
            <DividerStyled>
                <Header filenameBegin>named.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Named function<LineFeeder />
                    function fib ( number )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />if ( number {lessAndEqualTo} 1 )<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>return number;<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder /><LineFeeder />
                    <IndentStyled />return fib( number - 1 ) + fib( number - 2 );
                    <LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} Prints the 10th Fibonacci number.<LineFeeder />
                    console.log( `fib(10) = ${ fibonacciCall }.` );
                </ParagraphStyled>

                <Header filenameEnd>named.js (end)</Header>
            </DividerStyled>
            {/* **********************************named.js***************************** */}

            {/* **************************named.js output***************************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>fib(10) = 55.</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************named.js output**************** */}

            {/* **********************************anonymous.js********************* */}
            <DividerStyled>
                <Header filenameBegin>anonymous.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Locate even numbers and save them in another array
                    <LineFeeder />
                    const filterEvens = function ( source ) <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />let result = [];<LineFeeder /><LineFeeder />
                    <IndentStyled />for ({forLoopCondition})<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>if ( source[ i ] % 2 === 0 ) <LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>result.push( source[ i ] );<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder /><LineFeeder />
                    <IndentStyled />console.log( result );<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    filterEvens( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>anonymous.js (end)</Header>
            </DividerStyled>
            {/* **********************************anonymous.js********************** */}

            {/* **************************anonymous.js output*********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>[ 2, 4, 6, 8, 10 ]</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************anonymous.js output************** */}
            {/* *************************1. Named and Anonymous Functions************* */}

            {/* ******************************2. Arrow Functions*********************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <LineFeeder />
                <Header subsection>2. Arrow Functions</Header>

                <ParagraphStyled>
                    A more recent addition to the JS programming language is the arrow function, 
                    with more simplified syntax. With the arrow function, the function keyword is 
                    no longer present, and if the function body has only a single statement, both 
                    the curly braces ({curlyBraces}) and the return keyword can also be eliminated. 
                    The following program compares the syntax between regular anonymous functions 
                    and both versions of the arrow function. Observe the minute differences 
                    between the three versions, and note that the condition necessary to use the 
                    concise version of the arrow function, as noted above.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************arrow.js**************************** */}
            <DividerStyled>
                <Header filenameBegin>arrow.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Calculates the sum of squares.<LineFeeder />
                    {comment} With anonymous function.<LineFeeder />
                    const anonymous = function ( a, b ) <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />return a * a + b * b;<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} With arrow function.<LineFeeder />
                    const arrow = ( a, b ) {arrow}<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />return a * a + b * b;<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} With arrow function, concise form.<LineFeeder />
                    const arrowConcise = ( a, b ) {arrow} a * a + b * b;<LineFeeder />
                    <LineFeeder />
                    {comment} Verify the results are equivalent.<LineFeeder />
                    console.log( `anonymous(1, 2) = ${ anonymousFunctionCall }.`);
                    <LineFeeder />
                    console.log( `arrow(1, 2) = ${ arrowFunctionCall }.`)<LineFeeder />
                    console.log( `arrowConcise(1, 2) = ${ arrowConciseFunctionCall }.`)
                </ParagraphStyled>

                <Header filenameEnd>arrow.js (end)</Header>
            </DividerStyled>
            {/* **********************************arrow.js************************** */}

            {/* **********************************arrow.js output***************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    anonymous(1, 2) = 5.<LineFeeder />
                    arrow(1, 2) = 5.<LineFeeder />
                    arrowConcise(1, 2) = 5.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************arrow.js output********************** */}
            {/* **********************************2. Arrow Functions******************** */}

            {/* ***********************3. Functions as Methods*********************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <LineFeeder />
                <Header subsection>3. Functions as Methods</Header>

                <ParagraphStyled>
                    While named functions and anonymous functions are interchangeable, arrow 
                    functions are less suitable as object methods that require access to the 
                    object’s data: such retrieval requires the use of the this keyword. Similar 
                    to C++ and Java, the this keyword refers to the current object. However, 
                    arrow functions do not have access to the this reference, unlike named 
                    functions or anonymous functions. This inability limits the arrow function’s 
                    suitability as object methods.
                </ParagraphStyled>

                <ParagraphStyled>
                    Although by definition object methods are functions that manipulate data 
                    (properties) inside the object, not all methods require such access, and under 
                    such circumstances an arrow function can be a valid choice. The following two 
                    programs demonstrate the use of named, anonymous, and arrow functions as 
                    object methods, one of them (noneed.js) does not require manipulation of the 
                    internal data, and another (need.js) does. It will be shown that since arrow 
                    functions cannot access the object’s properties, using them as such will yield 
                    the result of undefined.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************noneed.js***************************** */}
            <DividerStyled>
                <Header filenameBegin>noneed.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Create an object.<LineFeeder />
                    let userProfile = <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />name: 'JST',<LineFeeder /><LineFeeder />
                    <IndentStyled />named: function print() <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log( `Patron is registered.` );
                    <LineFeeder />
                    <IndentStyled />{rightBrace},<LineFeeder /><LineFeeder />
                    <IndentStyled />anonymous: function () <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log( `Patron is registered.` );
                    <LineFeeder />
                    <IndentStyled />{rightBrace},<LineFeeder /><LineFeeder />
                    <IndentStyled />arrow: () {arrow} 
                    console.log( `Patron is registered.` ),<LineFeeder />
                    {rightBrace};<LineFeeder /><LineFeeder />
                    {comment} Manipulation of data is not needed.<LineFeeder />
                    userProfile.named();<LineFeeder />
                    userProfile.anonymous();<LineFeeder />
                    userProfile.arrow();<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>noneed.js (end)</Header>
            </DividerStyled>
            {/* **********************************noneed.js***************************** */}

            {/* **********************************noneed.js output************************* */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Patron is registered.<LineFeeder />
                    Patron is registered.<LineFeeder />
                    Patron is registered.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************noneed.js output******************** */}

            <DividerStyled>
                <ParagraphStyled>
                    To reiterate, the output is identical for all three methods in the previous 
                    program, because an object’s properties need not be accessed. The output in 
                    the next program will, however, differ for the same three methods, because 
                    such access is now required. As arrow functions do not have access to the 
                    this keyword, which grants access to the data that an object stores, the 
                    expected output will be undefined. The developer should verify this fact to 
                    ensure understanding.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************need.js*************************** */}
            <DividerStyled>
                <Header filenameBegin>need.js (begin)</Header>

                <ParagraphStyled code>
                    let userProfile = <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />name: 'JST',<LineFeeder /><LineFeeder />
                    <IndentStyled />named: function print() <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log( `Patron ${thisName} is registered.` );
                    <LineFeeder />
                    <IndentStyled />{rightBrace},<LineFeeder /><LineFeeder />
                    <IndentStyled />anonymous: function () <LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log( `Patron ${ thisName } is registered.` );
                    <LineFeeder />
                    <IndentStyled />{rightBrace},<LineFeeder /><LineFeeder />
                    <IndentStyled />arrow: () {arrow} <LineFeeder />
                    <IndentStyled four/>console.log(`Patron ${ thisName } is registered.`),
                    <LineFeeder />
                    {rightBrace};<LineFeeder /><LineFeeder />
                    {comment} Manipulation of data is needed.<LineFeeder />
                    userProfile.named();<LineFeeder />
                    userProfile.anonymous();<LineFeeder />
                    userProfile.arrow();<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>need.js (end)</Header>
            </DividerStyled>
            {/* **********************************need.js************************** */}

            {/* **********************************need.js output************************ */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Patron JST is registered.<LineFeeder />
                    Patron JST is registered.<LineFeeder />
                    Patron undefined is registered.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************need.js output********************* */}
    
            {/* **********************************3. Functions as Methods**************** */}
            {/* lecture content */}

             {/* *******************lesson review********************************* */}
            <DividerStyled>
                {/* show review */}
                    { 
                        !showReview && (
                            <AnchorStyled
                                recap
                                onClick={ toggleReview }
                            >
                                Let's Recap
                            </AnchorStyled>
                        )
                    }
                {/* show review */}

                {/* lesson review */}
                {
                    showReview && (
                        <>
                            <ParagraphStyled review>
                                <Header main>Recap</Header>
                            
                                ({lineNumber++}) Functions allow the developer to 
                                compartmentalize for easier code reuse.<LineFeeder />
                                ({lineNumber++}) If a function is defined as part of an object, 
                                it is called a method.<LineFeeder />
                                ({lineNumber++}) Functions can be named or anonymous, and both 
                                types are interchangeable.<LineFeeder />
                                ({lineNumber++}) Arrow functions are a recent addition to the JS 
                                language with simplier syntax.<LineFeeder />
                                ({lineNumber++}) However, although more concise, arrow functions 
                                are unsuitable as object methods.<LineFeeder />
                                ({lineNumber++}) This is because arrow functions cannot access 
                                the object's properties.<LineFeeder />
                            </ParagraphStyled>
                        </>
                    )
                }
                {/* lesson review */}

                {/* hide review */}
                {
                    showReview && (
                        <AnchorStyled 
                                recapDone
                                onClick={ toggleReview }>
                                I am done reviewing!
                        </AnchorStyled>
                    )
                }
                {/* hide review */}
            </DividerStyled>
            {/* ***********************************lesson review**************** */}

            {/* ***********************************page navigation******************* */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/loops'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/js-programming-techniques'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation***************** */}
        </>
    )
}
export default Functions;