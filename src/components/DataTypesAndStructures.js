//  /src/components/DataTypesAndStructures.js

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

const DataTypesAndStructures = ( { title } ) => 
{
    // ***********************************React Hooks***********************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    // ***********************************React Hooks***********************************

    // ***********************************local variables*********************************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let lineNumber = 1;

    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//", firstName = "{firstName}", lastName = "{lastName}", email = "{email}";
    const quotationMarks = "{singleQuotationMarks === doubleQuotationMarks}.";
    const injectedVariable = "{injectedVariable}", age = "{age}";
    const templateString = "{stringConcatenation === templateString }.";
    const isLoggedIn = "{isLoggedIn}", number1a = "{5/10}", number1b = "{10/5}";
    const number1c = "{(10/5).toFixed(1)}", number2a = "{6/5}", number2b = "{-6/5}";
    const number2c = "{Math.floor(6/5)}", number2d = "{Math.ceil(-6/5)}", object1a = "{}";
    const object1b = "{name: 'JST'}", object1c = "{ name: 'JST', gender: 'female' }";
    // ***********************************local variables***************************************

    return (
        <>
            <DividerStyled>
                {/* ***********************************page header*********************** */}
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                {/* page title */}
                {/* ***********************************page header*********************** */}

                {/* lecture content */}
                {/* ***********************************Introduction**************** */}
                <ParagraphStyled>
                    In this lesson, various data types will be presented, including Boolean, 
                    Number, Object, and String.  The Number and Boolean data types are especially 
                    useful for the next lesson, Expressions and Operators. This lesson will 
                    conclude with a brief discussion on the array data structure.
                </ParagraphStyled> 
                {/* ***********************************Introduction********************* */}
            </DividerStyled>

            {/* ***********************************1. String**************************** */}
            <DividerStyled>
                <Header subsection>1. String</Header>

                <ParagraphStyled>
                    In many programming languages, a string is composed of two characters or 
                    more. A character is one symbol from a given character set, such as ASCII. 
                    However, in JS, there is no character data type: there is only the string 
                    type, even if it is an empty string with no content. Unlike typed languages 
                    such as C++ and Java, no type declaration is necessary in JS, and the data 
                    type of the variable is inferred by the assigned value. If no value has been 
                    assigned, the variable has the value of undefined. The String type is 
                    appropriate for saving textual data, such as names and email addresses. The 
                    following program defines three string variables with their stored values 
                    displayed in the console. Variables in JS are defined with the let keyword.
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************string1.js********************** */}
            <DividerStyled>
                <Header filenameBegin>string1.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Declare a variable with 
                    the let keyword.<LineFeeder />
                    let firstName = 'John';<LineFeeder />
                    console.log( `firstName =
                     ${ firstName }.` );<LineFeeder />
                    let lastName = "Doe";<LineFeeder />
                    console.log( `lastName = 
                    ${ lastName }.` );<LineFeeder />
                    let email = `JD@JST.EDU`;<LineFeeder />
                    console.log( `email = ${ email }.` );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>string1.js (end)</Header>
            </DividerStyled>
            {/* ***********************************string1.js*************************** */}

            {/* *****************************string1.js output*************************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    firstName = John.<LineFeeder />
                    lastName = Doe.<LineFeeder />
                    email = JD@JST.EDU.<LineFeeder />
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* *****************************string1.js output************************ */}

            <DividerStyled>
                <ParagraphStyled>
                    Examining the code in string1.js, the astute developer may have noticed that 
                    there is more than one way to declare a String variable in JS. However, while 
                    there appears to be three different ways (using single quotes, using double 
                    quotes, or using backticks), there are effectively only two ways: with 
                    quotation marks (single or double) or with backticks (`). Since JS does not 
                    distinguish between a character and a string, strings delimited by single 
                    quotes and double quotes are completely interchangeable. The following 
                    program verifies their equivalence.
                </ParagraphStyled>
            </DividerStyled>
            
            {/* ***********************************string2.js*************************** */}
            <DividerStyled>
                <Header filenameBegin>string2.js (begin)</Header>

                <ParagraphStyled code>
                    let singleQuotationMarks = 'hello';<LineFeeder />
                    let doubleQuotationMarks = "hello";<LineFeeder />
                    {comment} Use the equality operator to test whether they are equal.
                    <LineFeeder />
                    console.log( <LineFeeder />
                    <IndentStyled two/>`singleQuotationMarks === doubleQuotationMarks:
                    <LineFeeder />
                    <IndentStyled two/>${quotationMarks}` );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>string2.js (end)</Header>
            </DividerStyled>
            {/* ***********************************string2.js**************************** */}

            {/* *****************************string2.js output************************ */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    singleQuotationMarks === doubleQuotationMarks: true.<LineFeeder />
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* *****************************string2.js output*************************** */}

            <DividerStyled>
                <ParagraphStyled>
                    The second type of strings are defined by backticks (`), often known as the 
                    template string. This type of strings allows values to be interpolated inside 
                    the string, similar to the f-string that is available in the Python 
                    programming language. That is, instead of using string concatenation with the 
                    plus operator (+), template strings permit variables of other types to be 
                    injected directly inside the string using the special syntax: 
                    ${ injectedVariable }. The convention used by JST is to use template string 
                    over string concatenation, but the developer is free to choose either. The 
                    following program demonstrates their equivalence.
                </ParagraphStyled>
            </DividerStyled>
    
            {/* ***********************************string3.js***************************** */}
            <DividerStyled>
                <Header filenameBegin>string3.js (begin)</Header>

                <ParagraphStyled code>
                    let age = 11;<LineFeeder />
                    let stringConcatenation = 
                    "I am " + age + ".";<LineFeeder />
                    let templateString = 
                    `I am ${ age }.`;<LineFeeder />
                    console.log( `stringConcatenation === templateString:<LineFeeder />
                    <IndentStyled two/>${templateString}` );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>string3.js (end)</Header>
            </DividerStyled>
            {/* ***********************************string3.js***************************** */}

            {/* *****************************string3.js output**************************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    stringConcatenation === templateString: true.<LineFeeder />
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* *****************************string3.js output********************* */}
            {/* ***********************************1. String************************* */}

            {/* ***********************************2. Boolean************************* */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />

                <Header subsection>2. Boolean</Header>

                <ParagraphStyled>
                    The Boolean data type can hold one of two possible values: true, or false. 
                    This data type may be used for status states which are binary in nature: 
                    for example, whether the user is logged in or not. In addition, the Boolean 
                    variables are indispensable in branching and loops, as the values they hold 
                    determine whether a specific branch needs to be taken, and whether the loop 
                    should terminate, respectively. The following program demonstrates variable 
                    declaration and definition in JS.
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************boolean.js************************** */}
            <DividerStyled>
                <Header filenameBegin>boolean.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} Declare a variable.<LineFeeder />
                    let isLoggedIn;<LineFeeder /><LineFeeder />
                    {comment} Without assignment, 
                    the variable has the value of undefined.<LineFeeder />
                    console.log( `isLoggedIn = ${ isLoggedIn }.` );<LineFeeder />
                    <LineFeeder />
                    {comment} Defining its value.<LineFeeder />
                    isLoggedIn = true;<LineFeeder /><LineFeeder />
                    {comment} Verifying the value assigned<LineFeeder />
                    console.log( `isLoggedIn = ${ isLoggedIn }.` );
                </ParagraphStyled>

                <Header filenameEnd>boolean.js (end)</Header>
            </DividerStyled>
            {/* ***********************************boolean.js****************************** */}

            {/* ***********************************boolean.js output*********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    isLoggedIn = undefined.<LineFeeder />
                    isLoggedIn = true.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************boolean.js output******************** */}

            <DividerStyled>
                <ParagraphStyled>
                    Note that it is also possible to define a variable at the time it was 
                    declared. This has been left as an exercise for the developer to experiment.
                </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************2. Boolean******************************** */}

            {/* ***********************************3. Number******************************** */}
            <DividerStyled>
                <Header subsection>3. Number</Header>

                <ParagraphStyled>
                    Dissimilar to programming languages which distinguish the integer data type 
                    (whole numbers) from the floating-point data type (real numbers), the JS 
                    programming language has one encompassing data type, the Number type. The 
                    Number data type is suitable for information that involves any type of 
                    numerical data, such as age, the zip code, or account balance. All Number 
                    variables are stored in double-precision 64-bit floating point format, and 
                    all mathematical operations are therefore floating-point. However, the 
                    calculated result may appear to be an integer. For example, while the result 
                    of 5 divided by 10 is 0.5 (floating-point), the result of 10 divided by 5 is 
                    2 (integer). Therefore, to render all calculation results in the 
                    floating-point format, the toFixed( ) function can be used: its argument 
                    specifies the number of significant digits after the decimal. The following 
                    program demonstrates its use.
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************number1.js************************ */}
            <DividerStyled>
                <Header filenameBegin>number1.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} 
                    All calculations are floating point.<LineFeeder />
                    console.log( `5/10 = ${number1a}.` );<LineFeeder />
                    {comment} 
                    But the result may still appear to be an integer.<LineFeeder />
                    console.log( `10/5 = ${number1b}.` );<LineFeeder />
                    {comment} 
                    Use toFixed() to remedy this issue.<LineFeeder />
                    console.log( `(10/5).toFixed(1) = ${number1c}.` );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>number1.js (end)</Header>
            </DividerStyled>
            {/* ***********************************number1.js***************************** */}

            {/* ***********************************number1.js output********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    5/10 = 0.5.<LineFeeder />
                    10/5 = 2.<LineFeeder />
                    (10/5).toFixed(1) = 2.0.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************number1.js output********************* */}

            <DividerStyled>
                    <ParagraphStyled>
                        However, the toFixed() function simply renders the result to appear as 
                        if they were integers: if integer division is desired, the appropriate 
                        function needs to be called from the Math library. If the result is 
                        expected to be positive, the Math.floor() function should be used; if 
                        the result is expected to be negative, the Math.ceil() function should 
                        be used. The names of these two library functions are indicative of the 
                        functionalities they provide: the Math.floor() function truncates the 
                        result, and the Math.ceil() function promotes the result. The following 
                        program demonstrates the proper use of these two functions.
                    </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************number2.js****************************** */}
            <DividerStyled>
                <Header filenameBegin>number2.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} 
                    All calculations are floating point.<LineFeeder />
                    console.log( `6/5 = ${number2a}.` );<LineFeeder />
                    console.log( `-6/5 = ${number2b}.` );<LineFeeder /><LineFeeder />
                    {comment} 
                    If an integer result is necessary:<LineFeeder />
                    console.log( `Math.floor(6/5) = ${number2c}.` );<LineFeeder />
                    console.log( `Math.ceil(-6/5) = ${number2d}.` );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>number2.js (end)</Header>
            </DividerStyled>
            {/* ***********************************number2.js*************************** */}

            {/* ***********************************number2.js output********************* */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    6/5 = 1.2.<LineFeeder />
                    -6/5 = -1.2.<LineFeeder />
                    Math.floor(6/5) = 1.<LineFeeder />
                    Math.ceil(-6/5) = -1.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************number2.js output******************* */}

            <DividerStyled>
                    <ParagraphStyled>
                        Using the inappropriate library function will yield the incorrect result 
                        when an integer result is desired, due to the manner in which these 
                        library functions have been implemented. This has been left as an 
                        exercise for the developer to verify.
                    </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************3. Number**************************** */}

            {/* ***********************************4. Object***************************** */}
            <DividerStyled>
                <Header subsection>4. Object</Header>

                <ParagraphStyled>
                    The Object data type is a type that encourages the grouping of related 
                    information, such as the user profile, which can include their first name, 
                    last name, social security number, and age. The individual fields of the 
                    object are known as properties in JS. In an upcoming lesson on functions, 
                    the Object data type will be explored further: in object-oriented 
                    programming (OOJ), an object can have functions that are associated with its 
                    properties, and these functions are called methods. In OOJ, the JS Object 
                    may be considered a data structure, since the variable encapsulates data and 
                    the methods that work on that data. The following program demonstrates how 
                    objects can be declared and modified. Note that not only can an object’s 
                    property be accessed via the member operator (.), the same operator can also 
                    be used to add a property to that object. Objects in JS are defined inside 
                    curly braces ({object1a}). The follow program creates an object, and inserts 
                    a new property into it.
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************object.js******************************* */}
            <DividerStyled>
                <Header filenameBegin>object.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} 
                    Define an object with a property.<LineFeeder />
                    let userProfile = {object1b};<LineFeeder /><LineFeeder />
                    {comment} Print the object.<LineFeeder />
                    console.log( userProfile );<LineFeeder />
                    {comment} Add a property to the object.<LineFeeder />
                    userProfile.gender = "female";<LineFeeder />
                    {comment} Print the object.<LineFeeder />
                    console.log( userProfile );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>object.js (end)</Header>
            </DividerStyled>
            {/* ***********************************object.js************************/}

            {/* ***********************************object.js output**************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (start)</Header>

                <ParagraphStyled>
                    {object1b}<LineFeeder />
                    {object1c}
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************object.js output********************** */}

            <DividerStyled>
                    <ParagraphStyled>
                        As aforementioned, the member operator (.) can be used to change 
                        existing properties of an object. This has been left as an exercise for 
                        the developer to complete.
                    </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************4. Object***************************** */}

            {/* ***********************************5. Array******************************* */}
            <DividerStyled>
                <Header subsection>5. Array</Header>

                <ParagraphStyled>
                    Lists, or arrays, are important because they have many applications: the 
                    list of the patient’s food allergies, the list of courses taken by the 
                    student, the list of accounts associated with the user, the list of items to 
                    purchase, and more. In programming languages such as C++ and Java, an array 
                    is a data structure that holds data of a homogeneous nature: this data 
                    structure can be utilized to keep track of the user’s hobbies, for example. 
                    In JS, however, array elements can be homogeneous or heterogenous. The 
                    following program verifies this fact.
                </ParagraphStyled>
            </DividerStyled>

            {/* array1.js */}
            <DividerStyled>
                <Header filenameBegin>array1.js (begin)</Header>

                <ParagraphStyled code>
                    let homogeneousArray = [ 1, 2 ];<LineFeeder />
                    let hetrogeneousArray = [ 3, 'JST' ];<LineFeeder />
                    <LineFeeder />
                    {comment} Print the arrays.<LineFeeder />
                    console.log( homogeneousArray );<LineFeeder />
                    console.log( hetrogeneousArray );
                </ParagraphStyled>

                <Header filenameEnd>array1.js (end)</Header>
            </DividerStyled>
            {/* array1.js */}

            {/* array1.js output */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    [ 1, 2 ]<LineFeeder />
                    [ 3, 'JST' ]
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* array1.js output */}

            <DividerStyled>
                    <ParagraphStyled>
                        A stack is a common data structure, and JS provides array methods to 
                        work with stacks, namely the push() function to store value onto the top 
                        of the stack, and the pop() function to remove value from the top of the 
                        stack. Using these functions, a stack can be modelled using an array. 
                        The following program demonstrates the use of these functions.
                    </ParagraphStyled>
            </DividerStyled>

            {/* array2.js */}
            <DividerStyled>
                <Header filenameBegin>array2.js (begin)</Header>

                <ParagraphStyled>
                    const array = [ 'J' ];<LineFeeder /><LineFeeder />
                    {comment} Push elements onto the array.<LineFeeder />
                    array.push( 'S' );<LineFeeder />
                    array.push( 'T' );<LineFeeder />
                    console.log( array );<LineFeeder /><LineFeeder />
                    {comment} Pop the most recent element.<LineFeeder />
                    array.pop(); <LineFeeder />
                    console.log( array );
                </ParagraphStyled>

                <Header filenameEnd>array2.js (end)</Header>
            </DividerStyled>
            {/* array2.js */}

            {/* array2.js output */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    ['J', 'S', 'T']<LineFeeder />
                    [ 'J', 'S' ]
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* array2.js output */}
    
            <DividerStyled>
                    <ParagraphStyled>
                        In contrast to the push() function and the pop() function which work 
                        with the top of the stack (end of the array), JS also provides their 
                        counterparts for working with the beginning of the array, namely the 
                        unshift() function and the shift() function. For example, the shift() 
                        function can be used to dequeue an element from a to-do list.
                    </ParagraphStyled>
            </DividerStyled>

            {/* array3.js */}
            <DividerStyled>
                <Header filenameBegin>array3.js (begin)</Header>

                <ParagraphStyled code>
                    let todos = 
                    [ 'study', 'cook', 'sleep' ];<LineFeeder /><LineFeeder />
                    {comment} 
                    Finish one to-do from the top of the list.<LineFeeder />
                    todos.shift();<LineFeeder />
                    console.log( todos );<LineFeeder /><LineFeeder />
                    {comment} 
                    Add one new to-do to the top of the list.<LineFeeder />
                    todos.unshift( 'exercise');<LineFeeder />
                    console.log( todos );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>array3.js (end)</Header>
            </DividerStyled>
            {/* array3.js */}

            {/* array3.js output */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    [ 'cook', 'sleep' ]<LineFeeder />
                    [ 'exercise', 'cook', 'sleep' ]
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* array3.js output */}
            {/* ***********************************5. Array*************************** */}
            {/* lecture content */}

            {/* ***********************************lesson review*********************** */}
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
                                
                                ({lineNumber++}) The String type is appropriate for 
                                textual data.<LineFeeder />
                                ({lineNumber++}) Template strings support real-time 
                                interpolation of variables.<LineFeeder />
                                ({lineNumber++}) The Boolean type is appropriate for 
                                states which have only two possible values.<LineFeeder />
                                ({lineNumber++}) The Number type supports both integers 
                                and floating-point numbers.<LineFeeder />
                                ({lineNumber++}) The Object type allows new properties to 
                                be readily added through the member operator (.).
                                <LineFeeder />
                                ({lineNumber++}) The Array data structure can contain 
                                either homogeneous or heterogenous elements.
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
                                onClick={ toggleReview }
                        >
                                I am done reviewing!
                        </AnchorStyled>
                    )
                }
                {/* hide review */}
            </DividerStyled>
            {/* ***********************************lesson review****************** */}
            
            {/* ***********************************page navigation***************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/hello-world'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/expressions-and-operators'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation******************** */}   
        </>
    )
}
export default DataTypesAndStructures;