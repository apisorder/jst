//  /src/components/Branches.js

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import IndentStyled from './IndentStyled';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const Branches = ( { title } ) => 
{
    // ***********************************React Hooks*************************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => ( setShowReview( showReview => !showReview ) )
    // ***********************************React Hooks**************************************

    // ***********************************local variables*********************************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let num = 1, num2 = 1, num3 = 1, num4 = 1, num5 = 1;

    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const lessThan = "<", lessAndEqualTo = "<=", greaterThan = ">", greaterAndEqualTo = ">=";
    const leftBrace = "{", rightBrace = "}", number = "{number}", isNumber = "{isNumber}";
    const whatDay = "{whatDay}";
    // ***********************************local variables***********************************

    return (
        <>
            {/* ***********************************page header***************************** */}
            <DividerStyled>
                {/* page title */}
                <Header main>
                    { title && (<>{ title }</>) }
                </Header>
                {/* page title */}
                {/* ***********************************page header*************************** */}

                {/* lecture content */}
                {/* ***********************************Introduction************************* */}
                <ParagraphStyled>
                    Different from sequential execution, branching allows only part of the 
                    program to execute based on some condition, normally involving the use of 
                    the comparison operators ({lessThan}, {lessAndEqualTo}, {greaterThan}, 
                    and {greaterAndEqualTo}), the equality and inequality operators 
                    (==, !=, ===, and !==), and the logical operators (!, &&, and ||).
                </ParagraphStyled> 
            </DividerStyled>
            {/* ***********************************Introduction***************************** */}

            {/* **********************************1. The If Statement********************** */}
            <DividerStyled>
                <Header subsection>1. The If Statement</Header>

                <ParagraphStyled>
                    The if statement tests an expression against some condition, and the 
                    corresponding code block will execute if and only if the condition has been 
                    satisfied. The following program demonstrates the use of the if statement.
                </ParagraphStyled>
            </DividerStyled>

            {/* **********************************if.js********************************* */}
            <DividerStyled programCode>
                <Header fileName>if.js</Header>

                <ParagraphStyled>
                    <IndentStyled />let isUserLoggedIn = false;<LineFeeder />
                    <LineFeeder />
                    <IndentStyled />if ( !isUserLoggedIn )<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+num++}<IndentStyled two/>console.log( "Please log on." );
                    <LineFeeder />
                    Line {'0'+num++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {'0'+num++}<LineFeeder />
                    Line {'0'+num++}<IndentStyled />if ( isUserLoggedIn )<LineFeeder />
                    Line {'0'+num++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {num++}<IndentStyled two/>console.log( "Welcome, User." );<LineFeeder />
                    Line {num++}<IndentStyled />{rightBrace}<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************if.js*********************************** */}

            {/* **********************************if.js output************************ */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Please log on.</ParagraphStyled>
            </DividerStyled>
            {/* **********************************if.js output*************************** */}

            <DividerStyled>
                <ParagraphStyled>
                    As expected, only the program code inside one of the if blocks has been 
                    executed.
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************1. The If Statement************************ */}

            {/* **********************************2. The If-Else Statement******************** */}
            <DividerStyled>
                {/* extra space from the last section to make the reading easier */}
                <LineFeeder />
                <Header subsection>2. The If-Else Statement</Header>

                <ParagraphStyled>
                    Instead of using two separate if statements, one to test if the condition is 
                    true then execute some block of code, and another to test if the condition is 
                    false then execute some other block of code, the if-else statement can be used: 
                    if the condition is true, code inside the if portion will be executed, and if 
                    the condition is false, code inside the else portion will be executed instead. 
                    The following program is functionally identical to the previous program 
                    contained in if.js.
                </ParagraphStyled>
            </DividerStyled>

            {/* *********************************ifelse.js********************************* */}
            <DividerStyled programCode>
                <Header fileName>ifelse.js</Header>

                <ParagraphStyled>
                    Line {'0'+num2++}<IndentStyled />let isUserLoggedIn = false;<LineFeeder />
                    Line {'0'+num2++}<LineFeeder />
                    Line {'0'+num2++}<IndentStyled />if ( !isUserLoggedIn )<LineFeeder />
                    Line {'0'+num2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+num2++}<IndentStyled two/>console.log( "Please log on." );
                    <LineFeeder />
                    Line {'0'+num2++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {'0'+num2++}<IndentStyled />else<LineFeeder />
                    Line {'0'+num2++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+num2++}<IndentStyled two/>console.log( "Welcome, User." );
                    <LineFeeder />
                    Line {num2++}<IndentStyled />{rightBrace}<LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* *********************************ifelse.js********************************* */}

            {/* *********************************ifelse.js output*********************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Please log on.</ParagraphStyled>
            </DividerStyled>
            {/* *********************************ifelse.js output**************************** */}

            <DividerStyled>
                <ParagraphStyled>
                    Verify the output, which should have been identical to the previous program.
                </ParagraphStyled>
            </DividerStyled>
            {/* **********************************2. The If-Else Statement******************* */}

            {/* **********************************3. The If-Else If-Else Statement********** */}
            <DividerStyled>
                {/* extra space from the last section to make the reading easier */}
                <LineFeeder />
                <Header subsection>3. The If-Else If-Else Statement</Header>

                <ParagraphStyled>
                    The if statement is suitable for situations where if the condition is 
                    satisfied, some action should be taken, and if the condition is unmet, no 
                    action should be taken (do nothing). In contrast, the if-else statement 
                    is appropriate for situations where the expression being evaluated has one of 
                    two possible values. However, it is possible that the expression can have more 
                    than two possible states, in which case the if-else if-else statement can be 
                    used. The if-else if-else statement is essentially a multiple-choice selector. 
                    The following program demonstrates the functionality of this statement.
                </ParagraphStyled>
            </DividerStyled>

            {/* *********************************ifelseifelse.js************************* */}
            <DividerStyled programCode>
                <Header fileName>ifelseifelse.js</Header>

                <ParagraphStyled>
                    Line {'0'+num3++}<IndentStyled />let number = 0;<LineFeeder />
                    Line {'0'+num3++}<IndentStyled />let isNumber = 0;<LineFeeder />
                    Line {'0'+num3++}<LineFeeder />
                    Line {'0'+num3++}<IndentStyled />if ( number === 0 )<LineFeeder />
                    Line {'0'+num3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+num3++}<IndentStyled two/>isNumber = 'neither positive nor 
                    negative';
                    <LineFeeder />
                    Line {'0'+num3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {'0'+num3++}<IndentStyled />else if ( number {greaterThan} 0 )
                    <LineFeeder />
                    Line {'0'+num3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {num3++}<IndentStyled two/>isNumber = 'positive';<LineFeeder />
                    Line {num3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {num3++}<IndentStyled />else<LineFeeder />
                    Line {num3++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {num3++}<IndentStyled two/>isNumber = 'negative';<LineFeeder />
                    Line {num3++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {num3++}<LineFeeder />
                    Line {num3++}<IndentStyled />console.log( `Number ${number} is 
                    ${isNumber}.` );
                    <LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* *********************************ifelseifelse.js**************************** */}

            {/* *********************************ifelseifelse.js output********************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Number 0 is neither positive nor negative.</ParagraphStyled>
            </DividerStyled>
            {/* *********************************ifelseifelse.js output****************** */}

            <DividerStyled>
                <ParagraphStyled>
                    Verify that the output should have been identical to the previous program.
                </ParagraphStyled>
            
            </DividerStyled>
            {/* **********************************3. The If-Else If-Else Statement****** */}

            {/* **********************************4. The Switch Statement**************** */}
            <DividerStyled>
                {/* extra space from the last section to make the reading easier */}
                <LineFeeder />
                <Header subsection>4. The Switch Statement</Header>

                <ParagraphStyled>
                    The switch statement is similar to the if-else if-else statement, with 
                    different syntax: the switch statement uses labels (called cases) and the break 
                    keyword to separate one portion of code from another.  Instead of using the 
                    logical-AND operator (||) to combine different conditions that should trigger 
                    the same code, the developer may choose to use multiple labels inside the 
                    switch statement to create more clarity: which one to use is a matter of 
                    stylistic preference. Essentially, each label (or group of labels) corresponds 
                    to each of the code blocks in the if-else if-else statement.
                </ParagraphStyled>
            </DividerStyled>

            {/* *********************************switch.js********************************* */}
            <DividerStyled programCode>
                <Header fileName>switch.js</Header>

                <ParagraphStyled>
                    Line {'0'+num4++}<IndentStyled />let day = 1;<LineFeeder />
                    Line {'0'+num4++}<IndentStyled />let whatDay;<LineFeeder />
                    Line {'0'+num4++}<LineFeeder />
                    Line {'0'+num4++}<IndentStyled />switch( day ) <LineFeeder />
                    Line {'0'+num4++}<IndentStyled />{leftBrace}<LineFeeder />
                    Line {'0'+num4++}<IndentStyled two/>case 1:<LineFeeder />
                    Line {'0'+num4++}<IndentStyled two/>case 2:<LineFeeder />
                    Line {'0'+num4++}<IndentStyled two/>case 3:<LineFeeder />
                    Line {'0'+num4++}<IndentStyled two/>case 4:<LineFeeder />
                    Line {num4++}<IndentStyled two/>case 5:<LineFeeder />
                    Line {num4++}<IndentStyled three/>whatDay = 'school day';<LineFeeder />
                    Line {num4++}<IndentStyled three/>break;<LineFeeder />
                    Line {num4++}<IndentStyled two/>case 6:<LineFeeder />
                    Line {num4++}<IndentStyled two/>case 7:<LineFeeder />
                    Line {num4++}<IndentStyled three/>whatDay = 'weekend';<LineFeeder />
                    Line {num4++}<IndentStyled three/>break;<LineFeeder />
                    Line {num4++}<IndentStyled two/>default:<LineFeeder />
                    Line {num4++}<IndentStyled three/>whatDay = 'impossible';<LineFeeder />
                    Line {num4++}<IndentStyled />{rightBrace}<LineFeeder />
                    Line {num4++}<LineFeeder />
                    Line {num4++}<IndentStyled />console.log( `Today is ${ whatDay }.` );
                    <LineFeeder />
                </ParagraphStyled>
            </DividerStyled>
            {/* *********************************switch.js************************* */}

            {/* *********************************switch.js output****************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Today is school day.</ParagraphStyled>
            </DividerStyled>
            {/* *********************************switch.js output************************ */}
            {/* **********************************4. The Switch Statement*************** */}
            {/* lecture content */}

            {/* ***********************************lesson review****************************** */}
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

                                ({num5++}) Branching allows only some the source code to be 
                                executed based on some condition.<LineFeeder />
                                ({num5++}) If an action is necessary only when a condition is 
                                satisfied, use if.<LineFeeder />
                                ({num5++}) If two actions need to be decided based on the condition, 
                                use if-else.<LineFeeder />
                                ({num5++}) If more than two actions need to decided based on the 
                                condition, use if-else if-else.<LineFeeder />
                                ({num5++}) The switch statement can also be used in the last case, 
                                depending on preference.
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
            
            {/* ***********************************page navigation********************* */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/expressions-and-operators'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/loops'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation************************** */}
        </>
    )
}
export default Branches;