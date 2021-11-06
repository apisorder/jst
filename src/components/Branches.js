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
    let num = 1;

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
            <DividerStyled>
                <Header filenameBegin>if.js (begin)</Header>

                <ParagraphStyled code>
                    let isUserLoggedIn = false;<LineFeeder /><LineFeeder />
                    if ( !isUserLoggedIn )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />console.log( "Please log on." );
                    <LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    if ( isUserLoggedIn )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />console.log( "Welcome, User." );<LineFeeder />
                    {rightBrace}<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>if.js (end)</Header>
            </DividerStyled>
            {/* **********************************if.js*********************************** */}

            {/* **********************************if.js output************************ */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>Please log on.</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
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
            <DividerStyled>
                <Header filenameBegin>ifelse.js (begin)</Header>

                <ParagraphStyled code>
                    let isUserLoggedIn = false;<LineFeeder /><LineFeeder />
                    if ( !isUserLoggedIn )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />console.log( "Please log on." );<LineFeeder />
                    {rightBrace}<LineFeeder />
                    else<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />console.log( "Welcome, User." );<LineFeeder />
                    {rightBrace}<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>ifelse.js (end)</Header>
            </DividerStyled>
            {/* *********************************ifelse.js********************************* */}

            {/* *********************************ifelse.js output*********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>Please log on.</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
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
            <DividerStyled>
                <Header filenameBegin>ifelseifelse.js (begin)</Header>

                <ParagraphStyled code>
                    let number = 0;<LineFeeder />
                    let isNumber = 0;<LineFeeder /><LineFeeder />
                    if ( number === 0 )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />isNumber = 'neither positive nor negative';
                    <LineFeeder />
                    {rightBrace}<LineFeeder />
                    else if ( number {greaterThan} 0 )<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />isNumber = 'positive';<LineFeeder />
                    {rightBrace}<LineFeeder />
                    else<LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />isNumber = 'negative';<LineFeeder />
                    {rightBrace}<LineFeeder />
                    <LineFeeder />
                    console.log( `Number ${number} is ${isNumber}.` );
                    <LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>ifelseifelse.js (end)</Header>
            </DividerStyled>
            {/* *********************************ifelseifelse.js**************************** */}

            {/* *********************************ifelseifelse.js output********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>Number 0 is neither positive nor negative.</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
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
            <DividerStyled>
                <Header filenameBegin>switch.js (begin)</Header>

                <ParagraphStyled code>
                    let day = 1;<LineFeeder />
                    let whatDay;<LineFeeder /><LineFeeder />
                    switch( day ) <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />case 1:<LineFeeder />
                    <IndentStyled />case 2:<LineFeeder />
                    <IndentStyled />case 3:<LineFeeder />
                    <IndentStyled />case 4:<LineFeeder />
                    <IndentStyled />case 5:<LineFeeder />
                    <IndentStyled two/>whatDay = 'school day';<LineFeeder />
                    <IndentStyled two/>break;<LineFeeder />
                    <IndentStyled />case 6:<LineFeeder />
                    <IndentStyled />case 7:<LineFeeder />
                    <IndentStyled two/>whatDay = 'weekend';<LineFeeder />
                    <IndentStyled two/>break;<LineFeeder />
                    <IndentStyled />default:<LineFeeder />
                    <IndentStyled two/>whatDay = 'impossible';<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    console.log( `Today is ${ whatDay }.` );
                    <LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>switch.js (end)</Header>
            </DividerStyled>
            {/* *********************************switch.js************************* */}

            {/* *********************************switch.js output****************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>Today is school day.</ParagraphStyled>

                <Header outputEnd>output (end)</Header>
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

                                ({num++}) Branching allows only some the source code to be 
                                executed based on some condition.<LineFeeder />
                                ({num++}) If an action is necessary only when a condition is 
                                satisfied, use if.<LineFeeder />
                                ({num++}) If two actions need to be decided based on the condition, 
                                use if-else.<LineFeeder />
                                ({num++}) If more than two actions need to decided based on the 
                                condition, use if-else if-else.<LineFeeder />
                                ({num++}) The switch statement can also be used in the last case, 
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