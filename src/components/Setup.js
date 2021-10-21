//  /src/components/Setup.js

import React, { useState } from 'react';

import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const Setup = ( { title } ) => 
{
    // ***********************************React hooks************************************************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    //* ***********************************React hooks************************************************ 

    // ***********************************local variables************************************************ 
    //  convenience variable -> also possible to use React hooks to change the value, but doing so may
    //  create too many function calls, since each increment and reset would each require a call
    let lineNumber = 1;
    //* ***********************************local variables************************************************ 

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
                    Some JS developers utilize the Node.js runtime to execute and test their JS before the JS files are 
                    integrated with the rest of the application. Instructions for facilitating such an integration have 
                    already been provided in the previous lesson, should the developer require some reminding. In the 
                    current lesson, the developer will learn how to install the Node.js runtime, and how to execute JS 
                    files with it.
                </ParagraphStyled> 
                {/* ***********************************Introduction************************************************ */}

            </DividerStyled>

            {/* ***********************************1. Installing the Node.js Runtime******************************** */}
            <DividerStyled>
                <Header subsection>
                    1. Installing the Node.js Runtime
                </Header>

                <ParagraphStyled>
                    Navigate the browser to https://nodejs.org and download the executable for your chosen platform. 
                    Node.js is available for a variety of operating systems, including Linux, macOS, and Windows. 
                    Installation is straightforward and requires no additional configuration.
                </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************1. Installing the Node.js Runtime******************************** */}

            {/* **************************************2. Verify Installation**************************************** */}
            <DividerStyled>
                <Header subsection>
                    2. Verify Installation
                </Header>

                <ParagraphStyled>
                    Launch the command line interpreter of your choice, and issue this command to verify successful 
                    installation of the runtime: node -v. A version number should be displayed. If not, download the 
                    appropriate binary again and install. If such a measure does not remedy the problem, it is recommended 
                    that the developer terminates all other running applications to help facilitate the proper installation 
                    of the Node.js runtime.
                </ParagraphStyled>

            </DividerStyled>
            {/* **************************************2. Verify Installation**************************************** */}
            {/* lecture content */}

            {/* ***********************************lesson review*********************************************** */}
            <DividerStyled>
                {/* show review */}
                { !showReview &&
                    <AnchorStyled
                        recap
                        onClick={ toggleReview }
                    >
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
                            
                            ({lineNumber++}) JS files can be embedded as scripts in HTML files.<LineFeeder />
                            ({lineNumber++}) For simplicity, JS can be executed alone in the Node.js environment.<LineFeeder />
                            ({lineNumber++}) Node.js is available for most major operating systems.<LineFeeder />
                            ({lineNumber++}) The command node -v verifies installation.
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
                {/* ***********************************lesson review*********************************************** */}

            </DividerStyled>
            
            {/* ***********************************page navigation*********************************************** */}
            <DividerStyled pageLinker>

                <Footer>
                    <Link to='/'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/hello-world'>Forward &rArr;</Link>
                </Footer>

            </DividerStyled>
            {/* ***********************************page navigation*********************************************** */}
        </>
    )
}
export default Setup;