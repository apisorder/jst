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
    let lineNumber = 1, lineNumber2 = 1, lineNumber3 = 1, lineNumber4 = 1, lineNumber5 = 1;
    let lineNumber6 = 1;

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
            <DividerStyled programCode>
                <Header fileName>named.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber++}<IndentStyled />{comment} Named function
                    <LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />function fib ( number )
                    <LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>if ( number {lessAndEqualTo} 1 )
                    <LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled three/>return number;<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {'0'+lineNumber++}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>return fib( number - 1 ) + 
                    fib( number - 2 );<LineFeeder />
                    Line {lineNumber++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber++}<LineFeeder />
                    Line {lineNumber++}<IndentStyled />{comment} 
                    Prints the 10th Fibonacci number.<LineFeeder />
                    Line {lineNumber++}<IndentStyled />
                    console.log( `fib(10) = ${ fibonacciCall }.` );
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************named.js***************************** */}

            {/* **************************named.js output***************************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>fib(10) = 55.</ParagraphStyled>
            </DividerStyled>
            {/* **********************************named.js output**************** */}

            {/* **********************************anonymous.js********************* */}
            <DividerStyled programCode>
                <Header fileName>anonymous.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} 
                    Locate even numbers and save them in another array<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />const filterEvens = 
                    function ( source ) <LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/>let result = [];<LineFeeder />
                    Line {'0'+lineNumber2++}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/>for ({forLoopCondition})
                    <LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled three/>if ( source[ i ] % 2 === 0 ) 
                    <LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled three/>{leftBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled four/>result.push( source[ i ] );
                    <LineFeeder />
                    Line {lineNumber2++}<IndentStyled three/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled two/>console.log( result );<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />
                    filterEvens( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************anonymous.js********************** */}

            {/* **************************anonymous.js output*********************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>[ 2, 4, 6, 8, 10 ]</ParagraphStyled>
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
            <DividerStyled programCode>
                <Header fileName>arrow.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber3++}<IndentStyled />{comment} 
                    Calculates the sum of squares.<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />{comment} 
                    With anonymous function.<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />const anonymous = 
                    function ( a, b ) <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled two/>return a * a + b * b;
                    <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {'0'+lineNumber3++}<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />{comment} With arrow function.
                    <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />const arrow = ( a, b ) {arrow} 
                    <LineFeeder />
                    Line {lineNumber3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled two/>return a * a + b * b;<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber3++}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />{comment} 
                    With arrow function, concise form.<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />const arrowConcise = 
                    ( a, b ) {arrow} a * a + b * b;<LineFeeder />
                    Line {lineNumber3++}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />{comment} 
                    Verify the results are equivalent.<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />
                    console.log( `anonymous(1, 2) = ${ anonymousFunctionCall }.`);<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />
                    console.log( `arrow(1, 2) = ${ arrowFunctionCall }.`)<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />
                    console.log( `arrowConcise(1, 2) = ${ arrowConciseFunctionCall }.`)
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************arrow.js************************** */}

            {/* **********************************arrow.js output***************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>
                    anonymous(1, 2) = 5.<LineFeeder />
                    arrow(1, 2) = 5.<LineFeeder />
                    arrowConcise(1, 2) = 5.
                </ParagraphStyled>

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
            <DividerStyled programCode>
                <Header fileName>noneed.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} Create an object.
                    <LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />let userProfile = <LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled two/>name: 'JST',<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled /><LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled two/>named: function print() 
                    <LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled three/>
                    console.log( `Patron is registered.` );<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled two/>{rightBrace},<LineFeeder />
                    Line {lineNumber4++}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled two/>anonymous: function () <LineFeeder />
                    Line {lineNumber4++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled three/>
                    console.log( `Patron is registered.` );<LineFeeder />
                    Line {lineNumber4++}<IndentStyled two/>{rightBrace},<LineFeeder />
                    Line {lineNumber4++}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled two/>arrow: () {arrow} 
                    console.log( `Patron is registered.` ),<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />{rightBrace};<LineFeeder />
                    Line {lineNumber4++}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />{comment} 
                    Manipulation of data is not needed.<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />userProfile.named();<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />userProfile.anonymous();<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />userProfile.arrow();<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************noneed.js***************************** */}

            {/* **********************************noneed.js output************************* */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>
                    Patron is registered.<LineFeeder />
                    Patron is registered.<LineFeeder />
                    Patron is registered.
                </ParagraphStyled>
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
            <DividerStyled programCode>
                <Header fileName>need.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber5++}<IndentStyled />let userProfile = <LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled two/>name: 'JST',<LineFeeder />
                    Line {'0'+lineNumber5++}<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled two/>named: function print() 
                    <LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled three/>
                    console.log( `Patron ${thisName} is registered.` );<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled two/>{rightBrace},<LineFeeder />
                    Line {'0'+lineNumber5++}<LineFeeder />
                    Line {lineNumber5++}<IndentStyled two/>anonymous: function () <LineFeeder />
                    Line {lineNumber5++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber5++}<IndentStyled three/>
                    console.log( `Patron ${ thisName } is registered.` );<LineFeeder />
                    Line {lineNumber5++}<IndentStyled two/>{rightBrace},<LineFeeder />
                    Line {lineNumber5++}<LineFeeder />
                    Line {lineNumber5++}<IndentStyled two/>arrow: () {arrow} <LineFeeder />
                    <IndentStyled five/>console.log(`Patron ${ thisName } is registered.`),
                    <LineFeeder />
                    Line {lineNumber5++}<IndentStyled />{rightBrace};<LineFeeder />
                    Line {lineNumber5++}<LineFeeder />
                    Line {lineNumber5++}<IndentStyled />{comment} Manipulation of data is needed.
                    <LineFeeder />
                    Line {lineNumber5++}<IndentStyled />userProfile.named();<LineFeeder />
                    Line {lineNumber5++}<IndentStyled />userProfile.anonymous();<LineFeeder />
                    Line {lineNumber5++}<IndentStyled />userProfile.arrow();<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************need.js************************** */}

            {/* **********************************need.js output************************ */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>
                    Patron JST is registered.<LineFeeder />
                    Patron JST is registered.<LineFeeder />
                    Patron undefined is registered.
                </ParagraphStyled>
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
                            
                                ({lineNumber6++}) Functions allow the developer to 
                                compartmentalize for easier code reuse.<LineFeeder />
                                ({lineNumber6++}) If a function is defined as part of an object, 
                                it is called a method.<LineFeeder />
                                ({lineNumber6++}) Functions can be named or anonymous, and both 
                                types are interchangeable.<LineFeeder />
                                ({lineNumber6++}) Arrow functions are a recent addition to the JS 
                                language with simplier syntax.<LineFeeder />
                                ({lineNumber6++}) However, although more concise, arrow functions 
                                are unsuitable as object methods.<LineFeeder />
                                ({lineNumber6++}) This is because arrow functions cannot access 
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