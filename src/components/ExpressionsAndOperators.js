//  /src/components/ExpressionsAndOperators.js

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
import Underliner from './Underliner';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const ExpressionsAndOperators = ( { title } ) => 
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
    const comment = "//", comparisons = "<, <=, >, and >=", myVariable = "{myVariable}";
    const myVariable2 = "{myVariable2}", myDeclarations = "{--myVariable === myVariable2--}";
    const userLoggedInequality = "{isUserLogged === false}";
    const userLoggedNegation = "{!isUserLogged}";
    const addition = "{a + b}", subtraction = "{a - b}", multiplication = "{a * b}";
    const division = "{a / b}", modulo = "{a % b}", lessThan = "<";
    const lessAndEqualTo = "<=", greaterThan = " >", greaterAndEqualTo = ">=";
    const lessThanOperation = "a < b:", lessThanOperationResult = "{a < b}";
    const lessAndEqualToOperation = "a <= b: ", lessAndEqualToOperationResult = "{a <= b}";
    const greaterThanOperation = "a > b: ", greaterThanOperationResult = "{a > b}";
    const greaterAndEqualToOperation = "a >= b: ", greaterAndEqualToOperationResult = "{a >= b}";
    const equality = "{a == b}", inequality = "{a != b}", strictEquality = "{a === b}";
    const strictInequality = "{a !== b}", logicalAnd = "{a && b}", logicalOr = "{a || b}";
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
                    An expression is one that which evaluates to a value. For example, 
                    assuming myVariable has already been declared with the let keyword, 
                    myVariable = 11 is an expression, which, in addition to assigning the value 
                    of 11 to myVariable, also evaluates to 11 itself. In addition to the 
                    assignment operator (=), JS has many other operators, some of which will be 
                    discussed in this lesson, including the member operator (.), the negation 
                    operator (!), the increment operator (++) and the decrement operator (--), 
                    the arithmetic operators (+, -, *,  /, and %, for addition, subtraction, 
                    multiplication, division, and modulus, respectively), the equality and  
                    inequality operators (==, !=, ===, and !==), the comparison operators 
                    ({comparisons}), the logical-and operator (&&), the logical-or operator (||), 
                    and the shorthand versions of the assignment operator 
                    (+=, -=, *=, /=, %=, &&=, and ||=). This lesson briefly covers the topics of 
                    operator precedence and associativity.
                </ParagraphStyled> 
            </DividerStyled>
            {/* ***********************************Introduction****************************** */}

            {/* **************************Operator Precedence and Associativity************* */}
            <DividerStyled>
                <Header subsection>Operator Precedence and Associativity</Header>

                <ParagraphStyled>
                    In evaluating an expression, the operator precedence has the primary effect, 
                    and if two operators are of equal precedence, the operator associativity is 
                    considered. An operator that has left associativity is evaluated from left 
                    to right; an operator that has right associativity is evaluated from right 
                    to left. For example, if an expression has the following composition: 
                    operandA someOperator operandB someOperator operandC, with left associativity, 
                    the expression is the same as (operandA someOperator operand) someOperator 
                    operand, while with right associativity, the expression is identical to 
                    operandA someOperator (operandB someOperator operand), where the 
                    parenthesized expression is evaluated first. For ease of remembering, the 
                    operators have been given a numerical precedence from 1 through 10, with 10 
                    being the highest operator precedence.
                </ParagraphStyled>
            </DividerStyled>
            {/* **************************Operator Precedence and Associativity************ */}

            {/* *********************************1. The Member Operator***************** */}
            <DividerStyled>
                <Header subsection>1. The Member Operator (.)</Header>

                <ParagraphStyled>
                    The member operator (.) has operator precedence of 10, the highest among 
                    all operators covered in this lesson, and has left associativity. In the 
                    previous lesson, the member operator was used to both access and add 
                    properties of an object.
                </ParagraphStyled>
            </DividerStyled>
            {/* *********************************1. The Member Operator**************** */}

            {/* *****2. The Increment Operator (++) and the Decrement Operator (--)****** */}
            <DividerStyled>
                <Header subsection>
                    2. The Increment Operator (++) and the Decrement Operator (--) 
                </Header>

                <ParagraphStyled>
                    The postfix versions of the increment operator (++) and the decrement 
                    operator (--) have the next highest operator precedence of 9, and both modify 
                    the value stored in the variable by one. For example, assuming myVariable has 
                    the value of 6.5, myVariable++ (or ++myVariable, the prefix version, which is 
                    discussed next) will change its value to 7.5. The prefix versions have the 
                    next highest operator precedence of 8, and while the postfix versions have no 
                    operator associativity, the prefix ones are right associative. The difference 
                    between the prefix operators and postfix operators can be significant: the 
                    prefix operators modify the value before it is used, but the postfix operators 
                    use the value before it is modified. The developer should verify the result of 
                    the following program to ensure understanding.
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************incrementDecrement.js******************************* */}
            <DividerStyled>
                <Header filenameBegin>incrementDecrement.js (begin)</Header>

                <ParagraphStyled code>
                    let myVariable = 6.5;<LineFeeder />
                    let myVariable2 = 6.5;<LineFeeder />
                    <LineFeeder />
                    {comment} 
                    On the line by itself, the operators have the same effect.<LineFeeder />
                    myVariable++;<LineFeeder />
                    ++myVariable2;<LineFeeder />
                    <LineFeeder />
                    console.log( `myVariable = ${myVariable}.` );<LineFeeder />
                    console.log( `myVariable2 = ${myVariable2}.` );<LineFeeder />
                    {comment} 
                    However, when used in conjunction, the effects are different.<LineFeeder />
                    console.log(<LineFeeder />
                    <IndentStyled two/>`--myVariable === myVariable2--: ${myDeclarations}.` );
                </ParagraphStyled>

                <Header filenameEnd>incrementDecrement.js (end)</Header>
            </DividerStyled>
            {/* ***********************************incrementDecrement.js*************************** */}

            {/* ***********************************incrementDecrement.js output********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    myVariable = 7.5.<LineFeeder />
                    myVariable2 = 7.5.<LineFeeder />
                    --myVariable === myVariable2--: false.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************incrementDecrement.js output********************* */}
            {/* ******2. The Increment Operator (++) and the Decrement Operator (--)****** */}

            {/* ************3. The Negation Operator (!)******************************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>3. The Negation Operator (!)</Header>

                <ParagraphStyled>
                    Similar to the prefix versions of the increment operator (++) and the 
                    decrement operator (--), the negation operator (!) has operator precedence 
                    of 8, and it is the logical NOT: changing from true to false, or from false 
                    to true. Its use, however, can be optional. For example, if the default 
                    value of isUserLoggedIn is true, and the developer wishes to check if the 
                    user has logged off, both !isUserLoggedIn or isUserLoggedIn === false can 
                    be used. However, since preexisting code may use either style, it may be 
                    beneficial to become familiar with both formats. Like the prefix versions of 
                    the increment operator (++) and the decrement operator (--), the negation 
                    operator (!) not only has the same level of operator precedence, but also 
                    has the same direction of associativity, which is right associative. The 
                    following program demonstrates the use of the negation operator against 
                    checking the condition directly using the equality operator (discussed 
                    later).
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************negation.js************************* */}
            <DividerStyled>
                <Header filenameBegin>negation.js (begin)</Header>

                <ParagraphStyled code>
                    let isUserLogged = false; <LineFeeder /><LineFeeder />
                    {comment} 
                    Check if user is logged in.<LineFeeder />
                    {comment} 
                    Both styles can be used, but know how to interpret the result.
                    <LineFeeder />
                    console.log( `isUserLogged === false: ${ userLoggedInequality }.` );
                    <LineFeeder />
                    console.log( `!isUserLogged: ${ userLoggedNegation }.` );
                </ParagraphStyled>

                <Header filenameEnd>negation.js (end)</Header>
            </DividerStyled>
            {/* ***********************************negation.js********************* */}

            {/* *****************************negation.js output********************* */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    isUserLogged === false: true.<LineFeeder />
                    !isUserLogged: true.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* *****************************negation.js output****************** */}
            {/* ************************3. The Negation Operator (!)*********** */}

            {/* *************4. The Arithmetic Operators (+, -, *, /, and %)********* */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>
                    4. The Arithmetic Operators (+, -, *, /, and %)
                </Header>

                <ParagraphStyled>
                    The multiplication operator (*), the division operator (/), and modulus 
                    operator (%) all have the next highest operator precedence of 7 and are 
                    left associative. In comparison, the addition operator (+) and the 
                    subtraction operator (-) are both one operator precedence lower than the 
                    former three, with operator precedence of 6. While all five operators are 
                    left associative, parentheses are not needed in expressions that involve 
                    both groups, due to higher operator precedence of the first group: for 
                    example, multiplication will always be performed before addition, unless 
                    forced by parentheses. The following program demonstrates the use of the 
                    arithmetic operators.
                </ParagraphStyled>
            </DividerStyled>

            {/* ********************************arithmetic.js************************** */}
            <DividerStyled>
                <Header filenameBegin>arithmetic.js (begin)</Header>

                <ParagraphStyled code>
                    let a = 11;<LineFeeder />
                    let b = 22;<LineFeeder /><LineFeeder />
                    console.log( `a * b = ${ multiplication }.` );<LineFeeder />
                    console.log( `a / b = ${ division }.` );<LineFeeder />
                    console.log( `a % b = ${ modulo }.` );<LineFeeder />
                    console.log( `a + b = ${ addition }.` );<LineFeeder />
                    console.log( `a - b = ${ subtraction }.` );
                </ParagraphStyled>

                <Header filenameEnd>arithmetic.js (end)</Header>
            </DividerStyled>
            {/* ********************************arithmetic.js*********************** */}

            {/* ********************************arithmetic.js output************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    a * b = 242.<LineFeeder />
                    a / b = 0.5.<LineFeeder />
                    a % b = 11.<LineFeeder />
                    a + b = 33.<LineFeeder />
                    a - b = -11.    
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ********************************arithmetic.js output***************** */}
            {/* *****************4. The Arithmetic Operators (+, -, *, /, and %)********** */}

            {/* *********5. The Comparison Operators (<, <=, >, and >=)***************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>
                    5. The Comparison Operators ({comparisons})
                </Header>

                <ParagraphStyled>
                    The less than operator ({lessThan}), the less and equal to operator 
                    ({lessAndEqualTo}), the greater than operator ({greaterThan}), and the 
                    greater and equal to operator ({greaterAndEqualTo}) are all comparison 
                    operators; these operators all have the same operator precedence of 5 and 
                    are left associative. The comparison operators and the equality (and also 
                    inequality) operators play an important role in branching and loops: they 
                    determine whether a specific portion of code should be executed, and whether 
                    another iteration should commence, as aforementioned. The following program 
                    demonstrates the use of the comparison operators.
                </ParagraphStyled>
            </DividerStyled>

            {/* ********************************comparison.js*********************** */}
            <DividerStyled>
                <Header filenameBegin>comparison.js (begin)</Header>

                <ParagraphStyled code>
                    let a = 11;<LineFeeder />
                    let b = 22;<LineFeeder />
                    <LineFeeder />
                    console.log( `{ lessThanOperation + " $" + lessThanOperationResult }.` );
                    <LineFeeder />
                    console.log( `{ lessAndEqualToOperation + "$" + 
                    lessAndEqualToOperationResult }.` );<LineFeeder />
                    console.log( `{ greaterThanOperation + "$" + 
                    greaterThanOperationResult }.` );<LineFeeder />
                    console.log( `{ greaterAndEqualToOperation + "$" + 
                    greaterAndEqualToOperationResult }.` );
                </ParagraphStyled>

                <Header filenameEnd>comparison.js (end)</Header>
            </DividerStyled>
            {/* ********************************comparison.js********************* */}

            {/* **************************comparison.js output********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    a {lessThan} b: true.<LineFeeder />
                    a {lessAndEqualTo} b: true.<LineFeeder />
                    a {greaterThan} b: false.<LineFeeder />
                    a {greaterAndEqualTo} b: false.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **************************comparison.js output******************* */}
            {/* ********5. The Comparison Operators (<, <=, >, and >=)*************** */}

            {/* ****6. The Equality and Inequality Operators (==, !=, ===, and !==)*** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>
                    6. The Equality and Inequality Operators (==, !=, ===, and !==) 
                </Header>

                <ParagraphStyled>
                    In JS, operands of different data types will be automatically converted for 
                    comparison. For example, the comparison between the string 11 and the number 
                    11, and the comparison between the number 0 and the Boolean value of false 
                    will both be true, if the equality operator (==) is used for comparison. 
                    However, using the strict equality operator (===), where automatic 
                    conversion is not performed, will both evaluate to false. All equality and 
                    inequality operators, strict or not, have operator precedence of 4, and are 
                    left associative. These rules are equally applicable to the inequality 
                    operators (!= and !==). The following program demonstrates the use of these 
                    operators.
                </ParagraphStyled>
            </DividerStyled>

            {/* **************************equality.js**************************** */}
            <DividerStyled>
                <Header filenameBegin>equality.js (begin)</Header>

                <ParagraphStyled code>
                    let a = 11;<LineFeeder />
                    let b = 22;<LineFeeder />
                    <LineFeeder />
                    console.log( `a == b: ${equality}.` );<LineFeeder />
                    console.log( `a != b: ${inequality}.` );<LineFeeder />
                    console.log( `a === b: ${strictEquality}.` );<LineFeeder />
                    console.log( `a !== b: ${strictInequality}.` );
                </ParagraphStyled>

                <Header filenameEnd>equality.js (end)</Header>
            </DividerStyled>
            {/* **************************equality.js**************************** */}

            {/* **************************equality.js output******************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    a == b: false.<LineFeeder />
                    a != b: true.<LineFeeder />
                    a === b: false.<LineFeeder />
                    a !== b: true.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **************************equality.js output******************** */}
            {/* ****6. The Equality and Inequality Operators (==, !=, ===, and !==)***** */}

            {/* ****7. The Logical Operators (&& and ||)*********************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>7. The Logical Operators (&& and ||)</Header>

                <ParagraphStyled>
                    While both logical operators are left associative, the logical AND 
                    operator (&&) has higher operator precedence than the logical OR operator 
                    (||), with operator precedence of 3 and 2, respectively. These operators 
                    permit more complex condition to be evaluated when the comparison operators, 
                    equality operators, and inequality operators alone are insufficient or 
                    inefficient. The following program demonstrates the use of the logical 
                    operators.
                </ParagraphStyled>
            </DividerStyled>

            {/* **************************logical.js**************************** */}
            <DividerStyled>
                <Header filenameBegin>logical.js (begin)</Header>

                <ParagraphStyled code>
                    let a = 11;<LineFeeder />
                    let b = 22;<LineFeeder />
                    <LineFeeder />
                    console.log( `a && b: ${ logicalAnd }.` );<LineFeeder />
                    console.log( `a || b: ${ logicalOr }.` );
                </ParagraphStyled>

                <Header filenameEnd>logical.js (end)</Header>
            </DividerStyled>
            {/* **************************logical.js**************************** */}

            {/* **************************logical.js output***************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    a && b: 22.<LineFeeder />
                    a || b: 11.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **************************logical.js output************** */}
            {/* *****************7. The Logical Operators (&& and ||)*************** */}

            {/* ***8. The Assignment Operator with Shorthand Versions***** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>
                    8. The Assignment Operator with Shorthand Versions (=, +=, -=, *=, 
                    /=, %=, &&=, and ||=)
                </Header>

                <ParagraphStyled>
                    The assignment operator (-) has the lowest operator precedence of 1, and 
                    is right associative. Therefore, assuming variables a, b, and c have 
                    already been declared, this line of code first evaluates the rightmost 
                    expression, and then assigns its value to c, b, and a, in that order: a = b 
                    = c = 5 * 6 + 3 * 4. Therefore, after the line of code has been executed, 
                    variables a, b, and c will all have the value of 42. The developer should 
                    verify this fact to ensure understanding. Although it is possible to use 
                    parentheses to force the order of operation, the developers are encouraged 
                    to at least be aware of operator precedence, as not all existence code use 
                    parentheses for that purpose, and instead rely on operator precedence for 
                    proper execution.
                </ParagraphStyled>

                <ParagraphStyled>
                    Instead of writing myVariable = myVariable + 1, the increment operator can 
                    be used: myVariable++ (or ++myVariable). Similarly, myVariable = myVariable 
                    + someValue can be written as myVariable += someValue. Other shorthand 
                    versions exist, including +=, -=, *=, /=, %=, &&=, and ||=. When to use the 
                    shorthand version is a matter of preference, similar to using the negation 
                    operator (!) or explicitly comparing the value. It may be beneficial to 
                    experiment with the shorthand versions of the assignment operator for their 
                    frequent appearance in existing code. This has been left as an exercise.
                </ParagraphStyled>
            </DividerStyled>
            {/* ***8. The Assignment Operator with Shorthand Versions***** */}

            {/* *****************Table of Operator Precedence (Descending)*************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <Header subsection>Operator Precedence in Descending Order</Header>

                <LineFeeder /><LineFeeder />

                <Header filenameBegin>Operator Precedence 10</Header>
                <DividerStyled>
                    <ParagraphStyled>Member (.)<Underliner /></ParagraphStyled>
                </DividerStyled>

                <Header outputBegin>Operator Precedence 9</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Postfix Increment (++)<LineFeeder /><Underliner />
                        Postfix Decrement (--)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header filenameBegin>Operator Precedence 8</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Prefix Increment (++)<LineFeeder /><Underliner />
                        Prefix Decrement (--)<LineFeeder /><Underliner />
                        Negation (!)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header outputBegin>Operator Precedence 7</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Multiplication (*)<LineFeeder /><Underliner />
                        Division (/)<LineFeeder /><Underliner />
                        Modulus (%)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header filenameBegin>Operator Precedence 6</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Addition (+)<LineFeeder /><Underliner />
                        Subtraction (-)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header outputBegin>Operator Precedence 5</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Less Than ({lessThan})<LineFeeder /><Underliner />
                        Less Than Or Equal To ({lessAndEqualTo})<LineFeeder />
                        <Underliner />
                        Greater Than ({greaterThan})<LineFeeder /><Underliner />
                        Greater Than Or Equal To ({greaterAndEqualTo})<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header filenameBegin>Operator Precedence 4</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Equality (==)<LineFeeder /><Underliner />
                        Inequality (!=)<LineFeeder /><Underliner />
                        Strict Equality (===)<LineFeeder /><Underliner />
                        Strict Inequality (!==)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header outputBegin>Operator Precedence 3</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Logical AND (&&)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header filenameBegin>Operator Precdence 2</Header>
                <DividerStyled>
                    <ParagraphStyled>
                        Logical OR (||)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>

                <Header outputBegin>Operator Precedence 1</Header>
                <DividerStyled>
                    <ParagraphStyled>
                    Assignment (=)<LineFeeder /><Underliner />
                    Shorthands (+=, -=, *=, /=, %=, &&=, ||=)<Underliner />
                    </ParagraphStyled>
                </DividerStyled>
            </DividerStyled>
            {/* ***********Table of Operator Precedence (Descending)**************** */}
            <DividerStyled>
                <ParagraphStyled>
                        With the exception of two groups named below, all operators 
                        aforementioned are left associative.  The postfix increment 
                        operator (++) and postfix decrement operator (--) do not have operator 
                        associativity; the prefix increment operator (++), prefix decrement 
                        operator (--), and the negation operator (logical NOT, !) are right 
                        associative.
                </ParagraphStyled>
            </DividerStyled>
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
                                
                                ({lineNumber++}) An expression is one that which evaluates to 
                                a value.<LineFeeder />
                                ({lineNumber++}) In evaluating an expression, the operator 
                                precedence has the primary effect.<LineFeeder />
                                ({lineNumber++}) If two operators are of equal precedence, the 
                                operator associativity is considered.<LineFeeder />
                                ({lineNumber++}) Most operators are left-associative.
                                <LineFeeder />
                                ({lineNumber++}) The assignment operator has shorthand versions 
                                for select operators.
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
             {/* ***********************************lesson review************************ */}
            
             {/* ***********************************page navigation*********************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/data-types-and-structures'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/branches'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation********************** */}
        </>
    )
}
export default ExpressionsAndOperators;