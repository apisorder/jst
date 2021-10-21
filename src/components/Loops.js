//  /src/components/Loops.js

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

const Loops = ( { title } ) => 
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

    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//", result = "{result}", sum = "{sum}", leftBrace = "{";
    const rightBrace = "}", forLoopCondition = "let i = 0; i < array.length; i++ ";
    const hasEven = "{hasEven}", lessThan = "<", lessAndEqualTo = "<=";
    const forEachCalls = "array.forEach( ( i ) => {";
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
                    While branching facilitates code selection, looping allows the developer to 
                    run the code for a specified number of times, or until some test condition 
                    fails. Many constructs exist in JS, and four of which will be discussed in this 
                    lesson: the while loop, the do-while loop, the for loop, and the forEach() 
                    array method.
                </ParagraphStyled> 
                {/* ***********************************Introduction***********************/}
            </DividerStyled>

            {/* ***********************1. The While Loop********************** */}
            <DividerStyled>
                <Header subsection>1. The While Loop</Header>

                <ParagraphStyled>
                    The while loop will start if and only if the condition is satisfied, and 
                    will repeat until the condition fails. If the condition never becomes 
                    false, an infinite loop is created. If the perpetual loop is unintended, 
                    the developer needs to ensure that the condition can become false at some 
                    point. The following program demonstrates the use of the while loop.
                </ParagraphStyled>
            </DividerStyled>
            {/* ***********************1. The While Loop********************** */}

            {/* **********************************while.js********************** */}
            <DividerStyled programCode>
                <Header fileName>while.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber++}<IndentStyled />{comment} Calculates the factorial 
                    of a number.<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />let result = 1;<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />let number = 6;<LineFeeder />
                    Line {'0'+lineNumber++}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />{comment} While the number is not 0
                    <LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />while ( number )<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>result *= number;<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled two/>number--;<LineFeeder />
                    Line {lineNumber++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber++}<LineFeeder />
                    Line {lineNumber++}<IndentStyled />
                    console.log( `Factorial of 6 = ${ result }.` );
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************while.js********************** */}

            {/* **********************************while.js output**************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Factorial of 6 = 720.</ParagraphStyled>
            </DividerStyled>
            {/* **********************************while.js output**************** */}
            {/* ***********************1. The While Loop********************** */}

            {/* ********************2. The Do-While Loop************************* */}
            <DividerStyled>

            {/* extra space from the last program output to make the reading easier */}
            <LineFeeder />
            <LineFeeder />
                <Header subsection>2. The Do-While Loop</Header>

                <ParagraphStyled>
                    The do-while loop is nearly identical to the while loop, with the sole 
                    exception that the code inside the loop will execute at least once, hence 
                    the do part. That is, the code is first executed, then the condition is 
                    evaluated in deciding whether to repeat execution. The following program 
                    demonstrates the use of the do-while loop.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************dowhile.js******************* */}
            <DividerStyled programCode>
                <Header fileName>dowhile.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} This program sums from 6 
                    to 1.<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />let sum = 0;<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />let number = 6;<LineFeeder />
                    Line {'0'+lineNumber2++}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{comment} while the number is not 0
                    <LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />do<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/>sum += number;<LineFeeder />
                    Line {'0'+lineNumber2++}<IndentStyled two/>number--;<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />while ( number );<LineFeeder />
                    Line {lineNumber2++}<LineFeeder />
                    Line {lineNumber2++}<IndentStyled />console.log( `The sum is ${ sum }.` );
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************dowhile.js******************* */}

            {/* **********************************dowhile.js output****************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>The sum is 21.</ParagraphStyled>
            </DividerStyled>
            {/* **********************************dowhile.js output****************** */}
            {/* ********************2. The Do-While Loop************************* */}

            {/* **********************************3. The For Loop****************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>3. The For Loop</Header>

                <ParagraphStyled>
                    The syntax of the for loop is significantly different from the while loop 
                    or the do-while loop. In addition to the terminating condition, the for loop 
                    has two additional components: these are the loop initialization, and the 
                    change to be taken in each iteration, to the left and to the right of the 
                    terminating condition, respectively. The following program demonstrates the 
                    use of the for loop. Note that the length property on the array object 
                    returns the size of the array.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************for.js************************ */}
            <DividerStyled programCode>
                <Header fileName>for.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber3++}<IndentStyled />{comment} 
                    Determine if the array has even numbers.<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />let array = [ 2, 1, 3, 6 ];
                    <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />let hasEven = false;<LineFeeder />
                    Line {'0'+lineNumber3++}<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />for ( {forLoopCondition} ) 
                    <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled two/>{comment} 
                    Terminate the loop early with break if number is even.<LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled two/>if ( array[ i ] % 2 === 0 ) 
                    <LineFeeder />
                    Line {'0'+lineNumber3++}<IndentStyled two/>{leftBrace}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled three/>hasEven = true;<LineFeeder />
                    Line {lineNumber3++}<IndentStyled three/>break;<LineFeeder />
                    Line {lineNumber3++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {lineNumber3++}<LineFeeder />
                    Line {lineNumber3++}<IndentStyled />
                    console.log( `The array has even numbers: ${ hasEven }.` );
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************for.js************************ */}

            {/* **********************************for.js output******************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>The array has even numbers: true.</ParagraphStyled>
            </DividerStyled>
            {/* **********************************for.js output******************** */}
            {/* **********************************3. The For Loop****************** */}

            {/* *******************4. The forEach() Array Method**************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <LineFeeder />
                <Header subsection>4. The forEach() Array Method</Header>

                <ParagraphStyled>
                    The circumstances that call for the proper use of the while loop, the 
                    do-while loop, or the for loop have already been explained. However, the 
                    forEach() array method can also be used if an array is involved, iterating 
                    over the array, one element at a time. Note that the forEach() array method 
                    takes a function as its argument: the next lesson will cover functions in 
                    greater detail. Which style to use is of personal preference. One of the 
                    reasons to use the forEach() array method is to prevent the off-by-one logic 
                    error some developers make when iterating over an array using the for loop 
                    (using {lessAndEqualTo} instead of {lessThan}, for example). The following 
                    program demonstrates the use of the forEach() array method.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************foreach.js******************* */}
            <DividerStyled programCode>
                <Header fileName>foreach.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} Sums the array.
                    <LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />let array = [ 2, 1, 3, 6 ];
                    <LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />let sum = 0;<LineFeeder />
                    Line {'0'+lineNumber4++}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />{comment} 
                    Same as for ( {forLoopCondition} )<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled />{forEachCalls}<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled three/>{comment} 
                    Same as sum += array[i]<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled three/>sum += i;<LineFeeder />
                    Line {'0'+lineNumber4++}<IndentStyled two/>{rightBrace}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />)<LineFeeder />
                    Line {lineNumber4++}<LineFeeder />
                    Line {lineNumber4++}<IndentStyled />
                    console.log( `The sum of the array is ${ sum }.` );
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************foreach.js******************* */}

            {/* *********************foreach.js output********************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>The sum of the array is 12.</ParagraphStyled>
            </DividerStyled>
            {/* *********************foreach.js output********************** */}
            {/* *******************4. The forEach() Array Method**************** */}
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
                                
                                ({lineNumber5++}) Loops can be used to simplify running the 
                                identical code for multiple times.<LineFeeder />
                                ({lineNumber5++}) Additionally, loops can be used to repeat the 
                                same code until some condition fails.<LineFeeder />
                                ({lineNumber5++}) While and do-while loops both execute the code 
                                until some condition fails.<LineFeeder />
                                ({lineNumber5++}) In contrast, the for loop executes the code for 
                                a specified number of times.<LineFeeder />
                                ({lineNumber5++}) In the case of an array, the forEach( ) method 
                                may be simplier than the for loop.
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
            {/* ***********************************lesson review********************** */}
            
            {/* ***********************************page navigation******************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/branches'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/functions'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation************** */}
        </>
    )
}
export default Loops;