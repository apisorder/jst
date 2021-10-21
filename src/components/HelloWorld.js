//  /src/components/HelloWorld.js

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

const HelloWorld = ( { title } ) => 
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
    let lineNumber = 1, lineNumber2 = 1;
    
    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//";
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
                    Traditionally, the first program taught in any programming language is the 
                    program that prints the Hello World message. The successful completion of 
                    which requires the proper installation of any software needed to compile the 
                    source code, the actual compliation and linkage, program execution, and 
                    locating where the program output is generated. The installation step has 
                    already been completed during the previous lesson; in this lesson, the 
                    developer will learn to run the JS file with the Node.js runtime.
                </ParagraphStyled>
            {/* ***********************************Introduction****************************** */}
            </DividerStyled>

            <DividerStyled>
            {/* *****************************1. Using the Runtime to Execute JS******* */}
                <Header subsection>1. Using the Runtime to Execute JS</Header>

                <ParagraphStyled>
                    Comments in JS are created with double forward slashes (//), and since 
                    comments do not affect program execution, they are not shown in the output. 
                    Create a JS file named helloworld.js with the following content, and then 
                    issue this command in the command line interpreter: node helloworld.js to 
                    execute the program. Verify the output.
                </ParagraphStyled>
            </DividerStyled>

            {/* *********************************helloworld.js************************* */}
            <DividerStyled programCode>
                <Header fileName>helloworld.js</Header>

                <ParagraphStyled>
                    Line {'0'+lineNumber++}<IndentStyled />{comment} This is a comment.
                    <LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />{comment} 
                    console.log() is a print function available to JS programs.<LineFeeder />
                    Line {'0'+lineNumber++}<IndentStyled />console.log("Hello World.");
                </ParagraphStyled>
            </DividerStyled>
            {/* *************************************helloworld.js*********************** */}

            {/* ******************************helloworld.js output*********************** */}
            <DividerStyled programOutput>
                <Header output>output</Header>

                <ParagraphStyled>Hello World.</ParagraphStyled>

            </DividerStyled>
            {/* ******************************helloworld.js output********************* */}
            {/* ***************1. Using the Runtime to Execute JS********************* */}

            <DividerStyled>
            {/* **********************2. Explanation of the Program**************** */}
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <Header subsection>2. Explanation of the Program</Header>

                <ParagraphStyled>
                    As explained in the program comment, console.log() is a print function 
                    available to JS programs: it is not part of the JS programming language. 
                    Hello World is the argument we pass to the print function to print to the 
                    console, which is shown in the command line interpreter. Although the Node.js 
                    runtime is being used, no additional configuration is required should the 
                    developer choose to switch to the browser environment.
                </ParagraphStyled>

                <ParagraphStyled>
                    If the console is not already visible in the web browser, the developer can 
                    view the console by choosing the corresponding menu command, which varies from 
                    one browser to another. Keyboard shortcuts are available for select browsers 
                    on select operating systems. For example, the F12 function key can be used to 
                    open the console in Google Chrome and Mozilla Firefox in Windows. Consult the 
                    documentation of your browser if necessary. Unlike programming languages such 
                    as C++ and Java, the Hello World program need not be written inside a main 
                    function, nor do any I/O libraries need to be explicitly included.
                </ParagraphStyled>
            {/* *********************2. Explanation of the Program****************** */}
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
                                
                                ({lineNumber2++}) JS supports C-style comments, and therefore 
                                comments can be preceded by {comment}.<LineFeeder />
                                ({lineNumber2++}) The console.log() print function is 
                                available to JS programs.<LineFeeder />
                                ({lineNumber2++}) For the web browser, console.log() prints in 
                                the JS Developer Console.<LineFeeder />
                                ({lineNumber2++}) The F12 function key can be used to make the 
                                Console visible on select browsers.
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
            {/* ***********************************lesson review*********************** */}
            
            {/* ***************************page navigation*************************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/setup'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/data-types-and-structures'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* *************************page navigation**************************** */}
        </>
    )
}
export default HelloWorld;