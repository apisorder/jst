//  /src/components/JsProgrammingTechniques.js
//  reference:  https://www.udemy.com/course/modern-javascript/

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

const JSProgrammingTechniques = ( { title } ) => 
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
    const comment = "//", leftBrace = "{", rightBrace = "}";
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
                    Thus far, all the examples use synchronous JS, where each line of code is 
                    executed in order.  This is analogous to an assembly line, where all tasks 
                    depend on the completion of the one previous.  In the context of the web, 
                    however, this can create a serious problem:  any failure in the process will 
                    halt the entire assembly line.  For example, in the case of data fetching, 
                    the server may be unresponsive, and instead of executing the rest of the code, 
                    possibly alerting the user that data fetching is still in process, nothing 
                    will be shown to the page.  Until the data has been fetched successfully, 
                    everything just stops.  To address this issue, the JS programming language 
                    offers an alternative.  Asynchronous JS, or async JS for short, allows more 
                    tasks to be executed independently.
                </ParagraphStyled> 
                {/* ***********************************Introduction******************* */}
            </DividerStyled>

            {/* *********1. The Callback and the setTimeout( ) Function************* */}
            <DividerStyled>

                <Header subsection>
                    1. The Callback and the setTimeout( ) Function
                </Header>

                <ParagraphStyled>
                    Just as variables can be passed as function parameters, as can functions.  
                    In JS, when a function is passed this way, it has a special name:  a 
                    callback.  Although a callback function is simply a function that is 
                    called within another function, its name can be interpreted this way:  
                    take some time to perform some tasks first, and when the tasks have been 
                    completed, come back and call the function, hence the name.  Note that in a 
                    synchronous program, the relationship between the function that is calling 
                    and the function that is being called is not the relationship described here:  
                    in that scenario, it is simply one function invoking another.  The concept of 
                    callbacks only makes sense in an asynchronous program.
                </ParagraphStyled>

                <ParagraphStyled>
                    Specifically, in the context of the web, some operations are expensive in 
                    that they require an indefinite amount of time, and these operations 
                    include communicating with the server and the CRUD operations (create, read, 
                    update, and delete).  In a more real-life scenario, such operations may 
                    involve using a fetch API or the axios JS library.  To simplify things, we 
                    will directly set aside some amount of time, pretending that this is the time 
                    necessary to complete the data fetch or update with the remote server.  This 
                    can be achieved with the setTimeout( ) function, which invokes a callback 
                    when the time is up.  The setTimeout( ) function takes two arguments, the 
                    callback, which is the function to be called when the timer is up, and the 
                    amount of time to wait, in milliseconds.  Compare and contrast the difference 
                    in output generated from the synchronous portion of the code to the 
                    asynchronous portion of the code below.
                </ParagraphStyled>
            </DividerStyled>

            {/* ***********************************async.js***************************** */}
            <DividerStyled>
                <Header filenameBegin>async.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} synchronous<LineFeeder />
                    console.log(' Synchronous ');<LineFeeder />
                    console.log(' Customer places an order. ');<LineFeeder />
                    console.log(' The order is being prepared. ');<LineFeeder />
                    console.log(' Customer pays for the order. ');<LineFeeder />
                    {comment} asynchronous<LineFeeder />
                    console.log(' Asynchronous ');<LineFeeder />
                    console.log(' Customer places an order. ');<LineFeeder />
                    setTimeout( ( ) => {leftBrace}<LineFeeder />
                    <IndentStyled /> callback()<LineFeeder />
                    {rightBrace}, 2000);<LineFeeder />
                    console.log(' Customer pays for the order. ');<LineFeeder />
                    {comment} the callback function, and it can be named anything
                    <LineFeeder />
                    const callback = ( ) => <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />
                    console.log(' The order is being prepared. ');<LineFeeder />
                    {rightBrace}
                </ParagraphStyled>

                <Header filenameEnd>async.js (end)</Header>
            </DividerStyled>
            {/* ***********************************async.js***************************** */}

            {/* ************************async.js output***************************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Synchronous<LineFeeder />
                    Customer places an order.<LineFeeder />
                    The order is being prepared.<LineFeeder />
                    Customer pays for the order.<LineFeeder />
                    Asynchronous<LineFeeder />
                    Customer places an order.<LineFeeder />
                    Customer pays for the order.<LineFeeder />
                    The order is being prepared.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ************************async.js output***************************** */}

            <DividerStyled>
                <ParagraphStyled>
                    Although both results make sense, as in a real restaurant, the customer 
                    can either pay for the order before the order is ready (freshly made and 
                    asynchronous), or the customer can pay for the order right after they pick 
                    up the order (food is pre-prepared and synchronous), what is important is 
                    the difference in the output.  The first difference is the order in which 
                    the output was generated, and the second difference is how the last line of 
                    output was generated after a certain of time has lapsed, hence the 
                    asynchronous part.  That is, had the code been executed on a local machine, 
                    the last line of code would have been visible after two seconds, since 2000 
                    milliseconds is exactly two seconds.
                </ParagraphStyled>
            </DividerStyled>
            {/* *********1. The Callback and the setTimeout( ) Function************* */}

            {/* ***********************2. Callback Chaining************************** */}
            <DividerStyled>

                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <Header subsection>2. Callback Chaining</Header>

                <ParagraphStyled>
                    While it is possible to have a callback function inside each called function, 
                    the convention is to chain a series of callbacks, cascading down, as the 
                    following program illustrates, where a pizza shop sells pizza to its customers.  
                    However, it will soon become clear that callback chaining poses a serious 
                    problem, known as Callback Hell.
                </ParagraphStyled>

            </DividerStyled>

            {/* **************************callback-hell.js******************************* */}
            <DividerStyled>
                <Header filenameBegin>callback-hell.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} 
                    for each callback, set the timer, and do work when timer is up
                    <LineFeeder />
                    let openForBusiness = ( ) => <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />setTimeout( ( ) =><LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log(' Customer arrives. ');<LineFeeder />
                    <IndentStyled two/>setTimeout( ( ) => <LineFeeder />
                    <IndentStyled three/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>console.log(' Customer orders. ');<LineFeeder />
                    <IndentStyled four/>setTimeout( ( ) => <LineFeeder />
                    <IndentStyled four/>{leftBrace}<LineFeeder />
                    <IndentStyled five/>console.log(' Preparing order. ');<LineFeeder />
                    <IndentStyled five/>setTimeout( ( ) =><LineFeeder />
                    <IndentStyled five/>{leftBrace}<LineFeeder />
                    <IndentStyled six/>console.log(' Customer pays. ');<LineFeeder />
                    <IndentStyled six/>setTimeout( ( ) =><LineFeeder />
                    <IndentStyled six/>{leftBrace}<LineFeeder />
                    <IndentStyled seven/>console.log(' Customer leaves. ');<LineFeeder />
                    <IndentStyled six/>{rightBrace}, 1000)<LineFeeder />
                    <IndentStyled five/>{rightBrace}, 4000)<LineFeeder />
                    <IndentStyled four/>{rightBrace}, 5000)<LineFeeder />
                    <IndentStyled three/>{rightBrace}, 1000)<LineFeeder />
                    <IndentStyled two/>{rightBrace}, 4000)<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder /><LineFeeder />
                    openForBusiness( );<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>callback-hell.js (end)</Header>
            </DividerStyled>
            {/* **************************callback-hell.js******************************* */}

            {/* ***************callback-hell.js output******************************* */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Customer arrives.<LineFeeder />
                    Customer orders.<LineFeeder />
                    Preparing order.<LineFeeder />
                    Customer pays.<LineFeeder />
                    Customer leaves.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***************callback-hell.js output******************************* */}

            <DividerStyled>

                <ParagraphStyled>
                    Although the code does not necessarily appear to be as terrible as the name 
                    Callback Hell seems to suggest, note that in a more realistic application, 
                    the openForBusiness( ) function will likely have many more callbacks than 
                    only five, and that the calling function itself, namely openForBusiness( ), 
                    is likely a callback itself.  Structured this way, the snowball layering 
                    effect of asynchronous callbacks soon become deep and complex.  While JS 
                    does not enforce levels of indentation as Python does, developers may find 
                    this lopsided structure difficult to maintain in future revisions.  
                    Therefore, some developers prefer a newer construct that does not result in 
                    such heavy code nesting, and that is the JS promises.
                </ParagraphStyled>

            </DividerStyled>
            {/* ***********************2. Callback Chaining************************** */}

            {/* *************************3. Promises********************************** */}
            <DividerStyled>
                <Header subsection>3. Promises</Header>

                <ParagraphStyled>
                    Promises in JS have several distinct phases:  waiting, fulfilled, rejected, 
                    and cleaning up.  Sometimes referred to as the pending phase, the waiting 
                    phase is the period of time in which a new promise has been made, and “work” 
                    is being done to deliver that promise, and that work can be a network call or 
                    a simple setTimeout( ) function.  The second phase bifurcates.  If the 
                    asynchronous operation was a success, the promise goes into the fulfilled 
                    phase, and if the asynchronous operation was a failure, the promise goes 
                    into the rejected phase.
                </ParagraphStyled>

                <ParagraphStyled>
                    However, in either case, an additional promise (or promises) will follow the 
                    original promise.  If the promise has been fulfilled, any number of then( ) 
                    functions will follow, each one returning a promise that is also an 
                    asynchronous operation in itself.  Had the promise been rejected, the 
                    catch( ) function is responsible for any error handling, hence the name catch.
                </ParagraphStyled>

                <ParagraphStyled>
                    Whether the original promise was fulfilled or rejected, an optional finally( ) 
                    function can finish the method chaining, the cleaning up phase:  the 
                    finally( ) function, if provided, is always called at the end of the 
                    invocation of the original promise, and it is used to perform tasks which 
                    needs to be completed, independent of the outcome of the original promise.  
                    The following program shows the basic use of JS promises.
                </ParagraphStyled>
            </DividerStyled>

            {/* *****************************promises.js********************** */}
            <DividerStyled>
                <Header filenameBegin>promises.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} promises.js<LineFeeder /><LineFeeder />
                    let isOpenForBusiness = true;<LineFeeder /><LineFeeder />
                    let order = ( timeNeeded, workNeeded ) =><LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />{comment} 
                    original promise:  resolve = success, and reject = failure<LineFeeder />
                    <IndentStyled />return new Promise( ( resolve, reject ) => <LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>if ( isOpenForBusiness )<LineFeeder />
                    <IndentStyled three/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>{comment} when timer is up, do work<LineFeeder />
                    <IndentStyled four/>setTimeout( ( ) =><LineFeeder />
                    <IndentStyled five/>{leftBrace}<LineFeeder />
                    <IndentStyled six/>resolve( workNeeded( ) )<LineFeeder />
                    <IndentStyled five/>{rightBrace}, timeNeeded<LineFeeder />
                    <IndentStyled four/>)<LineFeeder />
                    <IndentStyled three/>{rightBrace}<LineFeeder />
                    <IndentStyled three/>else<LineFeeder />
                    <IndentStyled three/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>reject( console.log(' Shop is not open. ') );
                    <LineFeeder />
                    <IndentStyled three/>{rightBrace}<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />)<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} 
                    if first promise was fulfilled, so are the promises in the then( )
                    <LineFeeder />
                    order( 1000, ( ) => console.log(' Customer arrives. ') )
                    <LineFeeder /><IndentStyled />
                    .then( () => order( 4000, () => console.log(' Customer orders. ')))
                    <LineFeeder />
                    <IndentStyled />.then( () => order( 5000, () => 
                    console.log(' Preparing order. ')))<LineFeeder />
                    <IndentStyled />.then( () => order( 1000, () => 
                    console.log(' Customer pays. ')))<LineFeeder />
                    <IndentStyled />.then( () => order( 4000, () => 
                    console.log(' Customer leaves. ')))<LineFeeder />
                    <IndentStyled />{comment} 
                    if first promise was rejected, do error handling<LineFeeder />
                    <IndentStyled />.catch( () => 
                    console.log(' Customer left the shop angrily. '))<LineFeeder />
                    <IndentStyled />.finally( () => 
                    console.log(' Cleaning up and preparing for next business day. '));
                </ParagraphStyled>

                <Header filenameEnd>promises.js (end)</Header>
            </DividerStyled>
            {/* *****************************promises.js********************** */}

            {/* *****************************promises.js output********************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Customer arrives.<LineFeeder />
                    Customer orders.<LineFeeder />
                    Preparing order.<LineFeeder />
                    Customer pays.<LineFeeder />
                    Customer leaves.<LineFeeder />
                    Cleaning ujp and preparing for the next business day.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>


            {/* *****************************promises.js output********************** */}
            {/* *************************3. Promises********************************** */}

            {/* ***********************4. Async and Await**************************** */}
            <DividerStyled>
                {/* extra space from the last program output to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>4. Async and Await</Header>

                <ParagraphStyled>
                    There are two ways of writing promises, one of which has already been 
                    discussed.  The other way is called async and await.  It may seem 
                    redundant to support both promises and another construct (async and 
                    await) which achieve the same effect, but this is not the case:  promises 
                    were developed to prevent the deeply nested, lopsided structure for which 
                    the phenomenon Callback Hell is famous, and async and await was developed 
                    to further simplify the code of doing so.
                </ParagraphStyled>

                <ParagraphStyled>
                    Syntactically, async and await, and promises share some similarities.  
                    However, while a callback function needs to be passed to the setTimeout( ) 
                    function in the regular promise function, the setTimeout( ) function in async 
                    and await accepts the resolve directly.  That is, instead of calling another 
                    callback whenever the timer is up inside the setTimeout() function, which can 
                    cause a lopsided code structure, the setTimeout function( ) in async and 
                    await is simply a timer that waits the time out.  When the timer is complete, 
                    program execution resumes where it left off, in essence achieving the same 
                    effect.
                </ParagraphStyled>

                <ParagraphStyled>
                    Note that although the syntax of async and await may seem more concise than 
                    the promise, any function that wants to call promises written this way must 
                    have the prefix async (meaning asynchronous) before the function keyword, or, 
                    in the case of anonymous or arrow functions, before the parentheses 
                    surrounding the parameter list.  Additionally, when these promises are 
                    actually invoked, each call must be prefixed with the await keyword.  The 
                    following program demonstrates the basic use of async and await in JS.
                </ParagraphStyled>
            </DividerStyled>

            {/* ************************async-and-await.js***************************** */}
            <DividerStyled>
                <Header filenameBegin>async-and-await.js (begin)</Header>

                <ParagraphStyled code>
                    {comment} async-and-await.js<LineFeeder /><LineFeeder />
                    let isOpenForBusiness = true;<LineFeeder /><LineFeeder />
                    let timer = ( timeNeeded ) =><LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />return new Promise( ( resolve, reject ) =><LineFeeder />
                    <IndentStyled two/>{leftBrace}<LineFeeder />
                    <IndentStyled three/>{comment} 
                    notice how the setTimeout parameters are slightly different<LineFeeder />
                    <IndentStyled three />if ( isOpenForBusiness )<LineFeeder />
                    <IndentStyled three/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>setTimeout( resolve, timeNeeded );<LineFeeder />
                    <IndentStyled three/>{rightBrace}<LineFeeder />
                    <IndentStyled three/>else<LineFeeder />
                    <IndentStyled three/>{leftBrace}<LineFeeder />
                    <IndentStyled four/>reject( console.log(' Shop is not open. ') );
                    <LineFeeder />
                    <IndentStyled three/>{rightBrace}<LineFeeder />
                    <IndentStyled two/>{rightBrace}<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    {comment} 
                    the async keyword automatically makes the function asynchronous
                    <LineFeeder />
                    async function order( ) <LineFeeder />
                    {leftBrace}<LineFeeder />
                    <IndentStyled />try<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>await timer( 2000 )<LineFeeder />
                    <IndentStyled two/>
                    console.log(' Customer arrives. ');<LineFeeder />
                    <IndentStyled two/>await timer( 4000 )<LineFeeder />
                    <IndentStyled two/>console.log(' Customer orders. ');<LineFeeder />
                    <IndentStyled two/>await timer( 5000 )<LineFeeder />
                    <IndentStyled two/>console.log(' Preparing order. ');<LineFeeder />
                    <IndentStyled two/>await timer( 1000 )<LineFeeder />
                    <IndentStyled two/>console.log(' Customer pays. ');<LineFeeder />
                    <IndentStyled two/>await timer( 4000 )<LineFeeder />
                    <IndentStyled two/>console.log(' Customer leaves. ');<LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    <IndentStyled />catch( error )<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>console.log(' Customer left the shop angrily. ');
                    <LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    <IndentStyled />finally<LineFeeder />
                    <IndentStyled />{leftBrace}<LineFeeder />
                    <IndentStyled two/>
                    console.log(' Cleaning up and preparing for next business day. ');
                    <LineFeeder />
                    <IndentStyled />{rightBrace}<LineFeeder />
                    {rightBrace}<LineFeeder /><LineFeeder />
                    order();<LineFeeder />
                </ParagraphStyled>

                <Header filenameEnd>async-and-await.js (end)</Header>
            </DividerStyled>
            {/* ************************async-and-await.js***************************** */}

            {/* ***********async-and-await.js output***************************** */}
            <DividerStyled programOutput>
                <Header outputBegin>output (begin)</Header>

                <ParagraphStyled>
                    Customer arrives.<LineFeeder />
                    Customer orders.<LineFeeder />
                    Preparing order.<LineFeeder />
                    Customer pays.<LineFeeder />
                    Customer leaves.<LineFeeder />
                    Cleaning up and preparing for next business day.
                </ParagraphStyled>

                <Header outputEnd>output (end)</Header>
            </DividerStyled>
            {/* ***********async-and-await.js output***************************** */}

            <DividerStyled>
                    <ParagraphStyled>
                        Although promises, and async and await are available to prevent deeply 
                        nested, lopsided code, as aforementioned, not every developer uses them, 
                        and this is probably because consecutive callbacks are easier to reason 
                        with, despite the great possibility of creating a Callback Hell.  However, 
                        in terms of future code maintainability, the uses of either promises or 
                        async and await are strongly encouraged.
                    </ParagraphStyled>
            </DividerStyled>
            {/* ***********************4. Async and Await**************************** */}
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
                                
                                ({lineNumber++}) Callbacks allow tasks to delegated without 
                                halting program execution.<LineFeeder />
                                ({lineNumber++}) The fetch API and the axios library help 
                                facilitate async operations.<LineFeeder />
                                ({lineNumber++}) Chaining callbacks can result in Callback 
                                Hell with lopsided, deeply nested code.<LineFeeder />
                                ({lineNumber++}) Promises is a better way to chain callback 
                                functions.<LineFeeder />
                                ({lineNumber++}) Async and Await is a more concise way of 
                                writing a promise.
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
                    <Link to='/functions'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/sample-web-application'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation************** */}
        </>
    )
}
export default JSProgrammingTechniques;