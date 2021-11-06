//  /src/components/HtmlPrimer.js

//  to allow React Hooks to be used
import React, { useState } from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import ElementDelimiter from './ElementDelimiter';
import Footer from './Footer';
import Header from './Header';
import IndentStyled from './IndentStyled';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const HtmlPrimer = ( { title } ) => 
{
    // ***********************************React hooks*************
    // for showing and hiding lesson review
    const [ showReview, setShowReview ] = useState( false );
    const toggleReview = ( ) => (
        setShowReview( showReview => !showReview )
    )
    // ***********************************React hooks********************

    // ***********************************local variables**********************
    //  convenience variables -> also possible to use React hooks to change the value, but doing
    //  so entails too many calls to the Hook, since each modification of value would require one
    let lineNumber = 1;
    
    //  to better work with React, since JSX (not JS) always interpolates the value in template 
    //  string, and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these 
    //  string variables, but template string is a conducive to maintainence, hence the decision
    const comment = "//";
    // ***********************************local variables********************************

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
                    Apple Safari, Google Chrome, and Mozilla Firefox are all examples of 
                    modern web browsers. Web browsers can be used to access a web site, which 
                    is composed of a number of web pages. While a text document devoid of any 
                    stylistic formatting can often still be displayed in the browser, the use of 
                    the HyperText Markup Language (HTML) is recommended to ensure browser 
                    compatibility.
                </ParagraphStyled> 

                <ParagraphStyled>
                    The function of the markup language is similar to the comments in the source 
                    code: to elucidate. An HTML element is normally composed of two parts: the 
                    starting tag and the ending tag. The starting tag has three individual 
                    components: the less than sign (<ElementDelimiter>), the tag name, and the 
                    greater than sign (</ElementDelimiter>). In the case of the ending tag, an 
                    extra component is included: the forward slash (/). For example, for the HTML 
                    title element, <ElementDelimiter>title</ElementDelimiter> is the starting tag, 
                    and <ElementDelimiter>/title</ElementDelimiter> is the ending tag. Some HTML 
                    elements do not have an ending tag.
                </ParagraphStyled>

                <ParagraphStyled>
                    HTML elements are annotations which add meaning and structure to the page. 
                    For example, some elements add metadata information about the page 
                    (the <ElementDelimiter>head</ElementDelimiter> element), some elements 
                    delimit the visible area on the page (the <ElementDelimiter>body
                    </ElementDelimiter> element), some elements attract greater attention from 
                    the viewer (such as <ElementDelimiter>h1</ElementDelimiter>), some elements 
                    allow assets to be embedded on the web page
                    (the <ElementDelimiter>img</ElementDelimiter> element), and some elements 
                    create hypertext links that connect with other pages 
                    (the <ElementDelimiter>link</ElementDelimiter> element). The code below 
                    demonstrates select HTML elements in an HTML file named index.html. To 
                    render the page, simply navigate to the directory in which the HTML file 
                    resides, and open the file in the web browser of your choice. The output 
                    will differ, depending on your browser and the random image that has been 
                    generated.
                </ParagraphStyled>
            
            </DividerStyled>

            {/* ***********************************index.html******************************* */}
            <DividerStyled>
                <Header filenameBegin>index.html (begin)</Header>

                <ParagraphStyled code>
                    <ElementDelimiter>
                    !-- This is a comment. --</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>!DOCTYPE html
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>html</ElementDelimiter><LineFeeder />
                    <LineFeeder />
                    <ElementDelimiter>
                    !-- The head contains meta information about the page. --
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>head</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>title
                    </ElementDelimiter>Page Title<ElementDelimiter>/title</ElementDelimiter>
                    <LineFeeder />
                    <ElementDelimiter>/head</ElementDelimiter><LineFeeder /><LineFeeder />
                    <ElementDelimiter>
                    !-- The body contains the visible elements on the page. --</ElementDelimiter>
                    <LineFeeder />
                    <ElementDelimiter>body</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>
                    !-- H1 through H6 tags creating page headers. --</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled /><ElementDelimiter>h1</ElementDelimiter>
                    A heading<ElementDelimiter>h1</ElementDelimiter><LineFeeder />
                    <LineFeeder />
                    <IndentStyled /><ElementDelimiter>
                    !-- Creates a hypertext link to other resources. --</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled /><ElementDelimiter>button</ElementDelimiter><LineFeeder />
                    <IndentStyled two/><ElementDelimiter>
                    a href="https://cs.sfsu.edu/" target="_blank"</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled two/>CS Department<ElementDelimiter>/a
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>/button
                    </ElementDelimiter><LineFeeder /><LineFeeder />
                    <IndentStyled /><ElementDelimiter>
                    !-- The img tag inserts an image on the page. --</ElementDelimiter>
                    <LineFeeder />
                    <IndentStyled /><ElementDelimiter>img<LineFeeder />
                    <IndentStyled two/>src="https://placeimg.com/640/480/any" alt="img"/
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/body</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/html</ElementDelimiter>
                </ParagraphStyled>

                <Header filenameEnd>index.html (end)</Header>
            </DividerStyled>
            {/* ***********************************index.html*************************** */}

            {/* ***********************************index.html output*********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (start)</Header>

                <ParagraphStyled>
                    While the exact composition will depend on the browser and the screen 
                    resolution, the page will render a heading, a random image from an online 
                    source, and a link to the San Francisco State University Computer Science 
                    Department.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********************************index.html output************************* */}

            <DividerStyled>

                <ParagraphStyled>
                    In production, the JS files are normally embedded in the HTML files, and 
                    therefore in the event of an error, it can originate from a variety of sources: 
                    the HTML file, the linkage, the JS file, or all three. To minimize the sources 
                    of errors, the installation of the Node.js runtime environment will be covered 
                    in the next lesson. With the runtime, the single possible source of error is in 
                    the JS file.
                </ParagraphStyled>
            
            {/* ***********************************Introduction************************* */}
            </DividerStyled>
            
            <DividerStyled>

            {/* ***********************************1. Embedding the JS File*************** */}
                <Header subsection>
                    1. Embedding the JS File
                </Header>

                <ParagraphStyled>
                    As previously shown, in order for an image to be displayed on the page, two 
                    steps are required: embedding the source, and browser rendering. Similarly, 
                    before JS can be executed on the page, the source file needs to be embedded. 
                    Create a JS file named script.js with the content below. 
                </ParagraphStyled>

            </DividerStyled>

            {/* ***********************************script.js*********************** */}
            <DividerStyled>
                <Header filenameBegin>script.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} This is a comment.<LineFeeder />
                    {comment} 
                    JS can insert HTML elements into the page.<LineFeeder /><LineFeeder />
                    document.write('<ElementDelimiter>h1</ElementDelimiter>A heading
                    <ElementDelimiter>/h1</ElementDelimiter>');<LineFeeder />
                    document.write('<ElementDelimiter>button</ElementDelimiter><LineFeeder />
                    <IndentStyled three/><ElementDelimiter>
                    a href="https://cs.sfsu.edu/" target="_blank"</ElementDelimiter>
                    <LineFeeder />
                    CS Department<ElementDelimiter>/a
                    </ElementDelimiter><LineFeeder />
                    <IndentStyled three/><ElementDelimiter>/button</ElementDelimiter>');
                    <LineFeeder />
                    document.write('<ElementDelimiter>img<LineFeeder />
                    <IndentStyled three/>
                    src="https://placeimg.com/640/480/any"<LineFeeder /><IndentStyled three/>
                    alt="image"/</ElementDelimiter>');
                </ParagraphStyled>

                <Header filenameEnd>script.js (end)</Header>
            </DividerStyled>
            {/* ***********************************script.js************************ */}

            <DividerStyled>
                <ParagraphStyled>
                    Now, create an HTML file named index2.html that links to the JS file, as 
                    shown. Open the HTML file in the browser.
                </ParagraphStyled>
            </DividerStyled>
    
            {/* ***********************************index.html********************* */}
            <DividerStyled>
                <Header filenameBegin>index.html (begin)</Header>

                <ParagraphStyled code>
                    <ElementDelimiter>!DOCTYPE html</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>html
                    </ElementDelimiter><LineFeeder /><LineFeeder />
                    <ElementDelimiter>head</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>title
                    </ElementDelimiter>Page Title<ElementDelimiter>/title
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/head</ElementDelimiter><LineFeeder />
                    <LineFeeder />
                    <ElementDelimiter>body</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>
                    !-- The JS file is embedded here. --</ElementDelimiter><LineFeeder />
                    <IndentStyled /><ElementDelimiter>
                    script src="script.js"</ElementDelimiter><ElementDelimiter>/script
                    </ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/body</ElementDelimiter><LineFeeder />
                    <ElementDelimiter>/html</ElementDelimiter>
                </ParagraphStyled>

                <Header filenameEnd>index.html (end)</Header>
            </DividerStyled>
            {/* ***********************************index.html********************** */}

            {/* **********************************index.html output************* */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    The output should be identical to the output of the previous HTML file, 
                    namely index.html, with the sole exception of the randomly inserted image.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* **********************************index.html output************** */}

            <DividerStyled>
                <ParagraphStyled>
                    Although the output is nearly the same as those generated from index.html, 
                    how the output has been generated is not the same. In index.html, the output 
                    has been generated by the HTML elements. In index2.html, the output has also 
                    been generated by the HTML elements, but these elements have been inserted: 
                    JS has the ability to add, change, and even delete the contents of the HTML 
                    file.
                </ParagraphStyled>

                <ParagraphStyled>
                    Note that while it is entirely possible to mix the HTML code with the JS code 
                    in the same HTML file, such practice is not recommended and therefore will not 
                    be discussed: the interface is to be separated from the computation.
                </ParagraphStyled>
            </DividerStyled>
            {/* ***********************************1. Embedding the JS File*************** */}
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
                                
                                ({lineNumber++}) The use of HTML is recommended to ensure 
                                compatibility between web browsers.<LineFeeder />
                                ({lineNumber++}) HTML is not a programming language and does 
                                not support programming logic.<LineFeeder />
                                ({lineNumber++}) Most HTML elements are made up of a starting 
                                tag and an ending tag.<LineFeeder />
                                ({lineNumber++}) JS can be embedded in HTML using the script 
                                tags.<LineFeeder />
                                ({lineNumber++}) JS can insert HTML elements into an HTML 
                                document.
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
            {/* ***********************************lesson review********************** */}
            
            {/* ***********************************page navigation******************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/setup'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation************** */}
        </>
    )
}
export default HtmlPrimer;