//  /src/components/RoadAhead.js
//  reference:  https://www.udemy.com/course/modern-javascript/

import React, { useState } from 'react';

import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import IndentStyled from './IndentStyled';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const RoadAhead = ( { title } ) => 
{
    // ***********************************React hooks************************************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    // ***********************************React hooks************************************************

    // ***********************************local variables************************************************
    //  convenience variables -> also possible to use React hooks to change the value, but doing so may
    //  create too many function calls, since each increment and reset would each require a call
    let lineNumber = 1, lineNumber2 = 1, lineNumber3 = 1, lineNumber4 = 1, lineNumber5 = 1, lineNumber6 = 1;
    let lineNumber7 = 1, lineNumber8 = 1, lineNumber9 = 1, lineNumber10 = 1;

    //  to better work with React, since JSX (not JS) always interpolates the value in template string,
    //  and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these string variables,
    //  but template string is a useful feature to demonstrate to the students, hence the decision
    const comment = "//";
    const firstName = "{firstName}";
    const lastName = "{lastName}";
    const email = "{email}";
    const quotationMarks = "{singleQuotationMarks === doubleQuotationMarks}.";
    const injectedVariable = "{injectedVariable}";
    const age = "{age}";
    const templateString = "{stringConcatenation === templateString }.";
    const isLoggedIn = "{isLoggedIn}";
    const number1a = "{5/10}";
    const number1b = "{10/5}";
    const number1c = "{(10/5).toFixed(1)}";
    const number2a = "{6/5}";
    const number2b = "{-6/5}";
    const number2c = "{Math.floor(6/5)}";
    const number2d = "{Math.ceil(-6/5)}";
    const object1a = "{}";
    const object1b = "{name: 'JST'}";
    const object1c = "{ name: 'JST', gender: 'female' }";
    // ***********************************local variables************************************************

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
                {/* page title */}
                {/* ***********************************page header************************************************ */}

                {/* lecture content */}
                {/* ***********************************Introduction************************************************ */}
                <ParagraphStyled>
                    In this lesson, various data types will be presented, including Boolean, Number, Object, and String. 
                    The Number and Boolean data types are especially useful for the next lesson, Expressions and 
                    Operators. This lesson will conclude with a brief discussion on the array data structure.
                </ParagraphStyled> 
                {/* ***********************************Introduction************************************************ */}

            </DividerStyled>

            {/* ***********************************1. String************************************************ */}
            <DividerStyled>

                <Header subsection>
                    1. String
                </Header>

                <ParagraphStyled>
                    In many programming languages, a string is composed of two characters or more. A character is one symbol 
                    from a given character set, such as ASCII. However, in JS, there is no character data type: there is only 
                    the string type, even if it is an empty string with no content. Unlike typed languages such as C++ and 
                    Java, no type declaration is necessary in JS, and the data type of the variable is inferred by the 
                    assigned value. If no value has been assigned, the variable has the value of undefined. The String type is 
                    appropriate for saving textual data, such as names and email addresses. The following program defines 
                    three string variables with their stored values displayed in the console. Variables in JS are defined with 
                    the let keyword.
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************string1.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    string1.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber++}<IndentStyled />{comment} Declare a variable with the let keyword.<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />let firstName = 'John';<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />console.log( `firstName = ${ firstName }.` );<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />let lastName = "Doe";<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />console.log( `lastName = ${ lastName }.` );<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />let email = `JD@JST.EDU`;<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />console.log( `email = ${ email }.` );<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************string1.js************************************************ */}

            {/* *****************************string1.js output************************************************ */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    firstName = John.<LineFeeder />
                    lastName = Doe.<LineFeeder />
                    email = JD@JST.EDU.<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* *****************************string1.js output************************************************ */}

            <DividerStyled>

                <ParagraphStyled>
                    Examining the code in string1.js, the astute developer may have noticed that there is more than one way to declare a String variable 
                    in JS. However, while there appears to be three different ways (using single quotes, using double quotes, or using backticks), there are 
                    effectively only two ways: with quotation marks (single or double) or with backticks (`). Since JS does not distinguish between a 
                    character and a string, strings delimited by single quotes and double quotes are completely interchangeable. The following program 
                    verifies their equivalence.
                </ParagraphStyled>

            </DividerStyled>
            
            {/* ***********************************string2.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    string2.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber2++}<IndentStyled />let singleQuotationMarks = 'hello';<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />let doubleQuotationMarks = "hello";<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} Use the equality operator to test whether they are equal.<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />console.log( <LineFeeder />
                    <IndentStyled three/>`singleQuotationMarks === doubleQuotationMarks:<LineFeeder />
                    <IndentStyled three/>${quotationMarks}` );<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************string2.js************************************************ */}

            {/* *****************************string2.js output************************************************ */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    singleQuotationMarks === doubleQuotationMarks: true.<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* *****************************string2.js output************************************************ */}

            <DividerStyled>
                <ParagraphStyled>
                    The second type of strings are defined by backticks (`), often known as the template string. This type of strings allows values to be 
                    interpolated inside the string, similar to the f-string that is available in the Python programming language. That is, instead of using 
                    string concatenation with the plus operator (+), template strings permit variables of other types to be injected directly inside the 
                    string using the special syntax: ${ injectedVariable }. The convention used by JST is to use template string over string concatenation, 
                    but the developer is free to choose either. The following program demonstrates their equivalence.
                </ParagraphStyled>
            </DividerStyled>
    
            {/* ***********************************string3.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    string3.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber3++}<IndentStyled />let age = 11;<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />let stringConcatenation = "I am " + age + ".";<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />let templateString = `I am ${ age }.`;<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />console.log( `stringConcatenation === templateString:<LineFeeder />
                    <IndentStyled three/>${templateString}` );<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************string3.js************************************************ */}

            {/* *****************************string3.js output************************************************ */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    stringConcatenation === templateString: true.<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* *****************************string3.js output************************************************ */}
            {/* ***********************************1. String************************************************ */}

            {/* ***********************************2. Boolean************************************************ */}
            <DividerStyled>

                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />

                <Header subsection>
                    2. Boolean
                </Header>

                <ParagraphStyled>
                    The Boolean data type can hold one of two possible values: true, or false. This data type may be used for 
                    status states which are binary in nature: for example, whether the user is logged in or not. In addition, 
                    the Boolean variables are indispensable in branching and loops, as the values they hold determine whether a 
                    specific branch needs to be taken, and whether the loop should terminate, respectively. The following 
                    program demonstrates variable declaration and definition in JS.
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************boolean.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    boolean.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} Declare a variable.<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />let isLoggedIn;<LineFeeder />
                    Line {'0'+lineNumber4++}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} Without assignment, the variable has the value of undefined.<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />console.log( `isLoggedIn = ${ isLoggedIn }.` );<LineFeeder />
                    Line {'0'+lineNumber4++}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} Defining its value.<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />isLoggedIn = true;<LineFeeder />
                    Line {'0'+lineNumber4++}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />{comment} Verifying the value assigned<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />console.log( `isLoggedIn = ${ isLoggedIn }.` );
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************boolean.js************************************************ */}

            {/* ***********************************boolean.js output******************************************* */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    isLoggedIn = undefined.<LineFeeder />
                    isLoggedIn = true.
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************boolean.js output******************************************* */}

            <DividerStyled>

                <ParagraphStyled>
                    Note that it is also possible to define a variable at the time it was declared. This has been left as an 
                    exercise for the developer to experiment.
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************2. Boolean************************************************ */}

            {/* ***********************************3. Number************************************************ */}
            <DividerStyled>

                <Header subsection>
                    3. Number
                </Header>

                <ParagraphStyled>
                    Dissimilar to programming languages which distinguish the integer data type (whole numbers) from the 
                    floating-point data type (real numbers), the JS programming language has one encompassing data type, 
                    the Number type. The Number data type is suitable for information that involves any type of numerical 
                    data, such as age, the zip code, or account balance. All Number variables are stored in double-precision 
                    64-bit floating point format, and all mathematical operations are therefore floating-point. However, the 
                    calculated result may appear to be an integer. For example, while the result of 5 divided by 10 is 0.5 
                    (floating-point), the result of 10 divided by 5 is 2 (integer). Therefore, to render all calculation 
                    results in the floating-point format, the toFixed( ) function can be used: its argument specifies the 
                    number of significant digits after the decimal. The following program demonstrates its use.
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************number1.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    number1.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber5++}<IndentStyled />{comment} All calculations are floating point.<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />console.log( `5/10 = ${number1a}.` );<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />{comment} But the result may still appear to be an integer.<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />console.log( `10/5 = ${number1b}.` );<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />{comment} Use toFixed() to remedy this issue.<LineFeeder />
                    Line {'0'+lineNumber5++}<IndentStyled />console.log( `(10/5).toFixed(1) = ${number1c}.` );<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************number1.js************************************************ */}

            {/* ***********************************number1.js output******************************************* */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    5/10 = 0.5.<LineFeeder />
                    10/5 = 2.<LineFeeder />
                    (10/5).toFixed(1) = 2.0.
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************number1.js output******************************************* */}

            <DividerStyled>

                    <ParagraphStyled>
                        However, the toFixed() function simply renders the result to appear as if they were integers: if integer division is desired, the 
                        appropriate function needs to be called from the Math library. If the result is expected to be positive, the Math.floor() function 
                        should be used; if the result is expected to be negative, the Math.ceil() function should be used. The names of these two library 
                        functions are indicative of the functionalities they provide: the Math.floor() function truncates the result, and the Math.ceil() 
                        function promotes the result. The following program demonstrates the proper use of these two functions.
                    </ParagraphStyled>
            
            </DividerStyled>

            {/* ***********************************number2.js******************************************* */}
            <DividerStyled programCode>

                <Header fileName>
                    number2.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber6++}<IndentStyled />{comment} All calculations are floating point.<LineFeeder />
                    Line {'0'+lineNumber6++}<IndentStyled />console.log( `6/5 = ${number2a}.` );<LineFeeder />
                    Line {'0'+lineNumber6++}<IndentStyled />console.log( `-6/5 = ${number2b}.` );<LineFeeder />
                    Line {'0'+lineNumber6++}<LineFeeder />
                    Line {'0'+lineNumber6++}<IndentStyled />{comment} If an integer result is necessary:<LineFeeder />
                    Line {'0'+lineNumber6++}<IndentStyled />console.log( `Math.floor(6/5) = ${number2c}.` );<LineFeeder />
                    Line {'0'+lineNumber6++}<IndentStyled />console.log( `Math.ceil(-6/5) = ${number2d}.` );<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************number2.js******************************************* */}

            {/* ***********************************number2.js output******************************************* */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    6/5 = 1.2.<LineFeeder />
                    -6/5 = -1.2.<LineFeeder />
                    Math.floor(6/5) = 1.<LineFeeder />
                    Math.ceil(-6/5) = -1.
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************number2.js output******************************************* */}

            <DividerStyled>
                    <ParagraphStyled>
                        Using the inappropriate library function will yield the incorrect result when an integer result is 
                        desired, due to the manner in which these library functions have been implemented. This has been 
                        left as an exercise for the developer to verify.
                    </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************3. Number************************************************ */}

            {/* ***********************************4. Object************************************************ */}
            <DividerStyled>

                <Header subsection>
                    4. Object
                </Header>

                <ParagraphStyled>
                    The Object data type is a type that encourages the grouping of related information, such as the user 
                    profile, which can include their first name, last name, social security number, and age. The 
                    individual fields of the object are known as properties in JS. In an upcoming lesson on functions, the 
                    Object data type will be explored further: in object-oriented programming (OOJ), an object can have 
                    functions that are associated with its properties, and these functions are called methods. In OOJ, the 
                    JS Object may be considered a data structure, since the variable encapsulates data and the methods that 
                    work on that data. The following program demonstrates how objects can be declared and modified. Note 
                    that not only can an object’s property be accessed via the member operator (.), the same operator can 
                    also be used to add a property to that object. Objects in JS are defined inside curly braces ({object1a}). The 
                    follow program creates an object, and inserts a new property into it.
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************object.js************************************************ */}
            <DividerStyled programCode>

                <Header fileName>
                    object.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber7++}<IndentStyled />{comment} Define an object with a property.<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />let userProfile = {object1b};<LineFeeder />
                    Line {'0'+lineNumber7++}<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />{comment} Print the object.<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />console.log( userProfile );<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />{comment} Add a property to the object.<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />userProfile.gender = "female";<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />{comment} Print the object.<LineFeeder />
                    Line {'0'+lineNumber7++}<IndentStyled />console.log( userProfile );<LineFeeder />
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************object.js************************************************ */}

            {/* ***********************************object.js output***************************************** */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    {object1b}<LineFeeder />
                    {object1c}
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************************object.js output***************************************** */}

            <DividerStyled>

                    <ParagraphStyled>
                        As aforementioned, the member operator (.) can be used to change existing properties of an object. 
                        This has been left as an exercise for the developer to complete.
                    </ParagraphStyled>
            
            </DividerStyled>
            {/* ***********************************4. Object************************************************ */}

            {/* ***********************************5. Array************************************************ */}
            <DividerStyled>

                <Header subsection>
                    5. Array
                </Header>

                <ParagraphStyled>
                    Lists, or arrays, are important because they have many applications: the list of the patient’s food 
                    allergies, the list of courses taken by the student, the list of accounts associated with the user, 
                    the list of items to purchase, and more. In programming languages such as C++ and Java, an array is a 
                    data structure that holds data of a homogeneous nature: this data structure can be utilized to keep 
                    track of the user’s hobbies, for example. In JS, however, array elements can be homogeneous or 
                    heterogenous. The following program verifies this fact.
                </ParagraphStyled>

            </DividerStyled>

            {/* array1.js */}
            <DividerStyled programCode>

                <Header fileName>
                    array1.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber8++}<IndentStyled />let homogeneousArray = [ 1, 2 ];<LineFeeder />
                    Line {'0'+lineNumber8++}<IndentStyled />let hetrogeneousArray = [ 3, 'JST' ];<LineFeeder />
                    Line {'0'+lineNumber8++}<LineFeeder />
                    Line {'0'+lineNumber8++}<IndentStyled />{comment} Print the arrays.<LineFeeder />
                    Line {'0'+lineNumber8++}<IndentStyled />console.log( homogeneousArray );<LineFeeder />
                    Line {'0'+lineNumber8++}<IndentStyled />console.log( hetrogeneousArray );
                </ParagraphStyled>

            </DividerStyled>
            {/* array1.js */}

            {/* array1.js output */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    [ 1, 2 ]<LineFeeder />
                    [ 3, 'JST' ]
                </ParagraphStyled>

            </DividerStyled>
            {/* array1.js output */}

            <DividerStyled>

                    <ParagraphStyled>
                        A stack is a common data structure, and JS provides array methods to work with stacks, namely 
                        the push() function to store value onto the top of the stack, and the pop() function to remove 
                        value from the top of the stack. Using these functions, a stack can be modelled using an array. 
                        The following program demonstrates the use of these functions.
                    </ParagraphStyled>
            
            </DividerStyled>

            {/* array2.js */}
            <DividerStyled programCode>

                <Header fileName>
                    array2.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber9++}<IndentStyled />const array = [ 'J' ];<LineFeeder />
                    Line {'0'+lineNumber9++}<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />{comment} Push elements onto the array.<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />array.push( 'S' );<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />array.push( 'T' );<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />console.log( array );<LineFeeder />
                    Line {'0'+lineNumber9++}<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />{comment} Pop the most recent element.<LineFeeder />
                    Line {'0'+lineNumber9++}<IndentStyled />array.pop(); <LineFeeder />
                    Line {lineNumber9++}<IndentStyled />console.log( array );
                </ParagraphStyled>

            </DividerStyled>
            {/* array2.js */}

            {/* array2.js output */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    ['J', 'S', 'T']<LineFeeder />
                    [ 'J', 'S' ]
                </ParagraphStyled>

            </DividerStyled>
            {/* array2.js output */}
    
            <DividerStyled>
                    <ParagraphStyled>
                        In contrast to the push() function and the pop() function which work with the top of the stack (end of 
                        the array), JS also provides their counterparts for working with the beginning of the array, namely 
                        the unshift() function and the shift() function. For example, the shift() function can be used to 
                        dequeue an element from a to-do list.
                    </ParagraphStyled>
            </DividerStyled>

            {/* array3.js */}
            <DividerStyled programCode>

                <Header fileName>
                    array3.js
                </Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber10++}<IndentStyled />let todos = [ 'study', 'cook', 'sleep' ];<LineFeeder />
                    Line {'0'+lineNumber10++}<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />{comment} Finish one to-do from the top of the list.<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />todos.shift();<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />console.log( todos );<LineFeeder />
                    Line {'0'+lineNumber10++}<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />{comment} Add one new to-do to the top of the list.<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />todos.unshift( 'exercise');<LineFeeder />
                    Line {'0'+lineNumber10++}<IndentStyled />console.log( todos );<LineFeeder />

                </ParagraphStyled>

            </DividerStyled>
            {/* array3.js */}

            {/* array3.js output */}
            <DividerStyled programOutput>

                <Header output>
                    output
                </Header>

                <ParagraphStyled>
                    [ 'cook', 'sleep' ]<LineFeeder />
                    [ 'exercise', 'cook', 'sleep' ]
                </ParagraphStyled>

            </DividerStyled>
            {/* array3.js output */}
            {/* ***********************************5. Array************************************************ */}

            {/* lecture content */}

            {/* ***********************************lesson review*********************************************** */}
            <DividerStyled>
                {/* show review */}
                { !showReview &&
                    <AnchorStyled
                        recap
                        onClick={ toggleReview }>
                        Let's Recap
                    </AnchorStyled>
                }
                {/* show review */}

                {/* lesson review */}
                {
                    showReview && (
                        <>
                        <ParagraphStyled review>
                            <Header main>
                                Recap
                            </Header>
                            
                            ({lineNumber5++}) Loops can be used to simplify running the identical code for multiple times.<LineFeeder />
                            ({lineNumber5++}) Additionally, loops can be used to repeat the same code until some condition fails.<LineFeeder />
                            ({lineNumber5++}) While and do-while loops both execute the code until some condition fails.<LineFeeder />
                            ({lineNumber5++}) In contrast, the for loop executes the code for a specified number of times.<LineFeeder />
                            ({lineNumber5++}) In the case of an array, the forEach( ) method may be simplier than the for loop.<LineFeeder />
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
            {/* ***********************************lesson review*********************************************** */}

            {/* ***********************************page navigation*********************************************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/sample-web-application'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/quiz'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation*********************************************** */}
        </>
    )
}
export default RoadAhead;