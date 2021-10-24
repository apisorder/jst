//  /src/components/Quiz.js
//  reference:  https://jschris.com/beginner-react-project-quiz-app-using-hooks

import React, { useState } from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import ButtonStyled from './ButtonStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const Quiz = ( { title } ) => 
{
    //  number of questions to prompt the user
    const numOfQuestionsToAsk = 10;

    //  test bank
    const questions = [
        //  question 1
        {
            question: 'The Node.js runtime is available for....',
            answerChoices: [
                { answerChoice: 'Linux only', isCorrect: false },
                { answerChoice: 'macOS and Windows', isCorrect: false },
                { answerChoice: 'Linux and macOS', isCorrect: false },
                { answerChoice: 'Linux, macOS, and Windows', isCorrect: true },
            ],
        },
        //  question 2
        {
            question: 'Which programming paradigms does JavaScript support?',
            answerChoices: [
                { answerChoice: 
                'procedural, functional, and object-oriented', isCorrect: false },
                { answerChoice: 'event-driven ony', isCorrect: false },
                { answerChoice: 
                'procedural, functional, object-oriented, and event-driven', 
                isCorrect: true },
                { answerChoice: 'procedural, and object-oriented', isCorrect: false },
            ],
        },
        //  question 3
        {
            question: 'Which sides of the web does JavaScript support?',
            answerChoices: [
                { answerChoice: 'neither server-side and client-side', isCorrect: false },
                { answerChoice: 'client-side only', isCorrect: false },
                { answerChoice: 'both server-side and client-side', isCorrect: true },
                { answerChoice: 'server-side only', isCorrect: false },
            ],
        },
        //  question 4
        {
            question: 'Which one of the following is not a core web technology?',
            answerChoices: [
                { answerChoice: 'JavaScript', isCorrect: false },
                { answerChoice: 'HTML', isCorrect: false },
                { answerChoice: 'React', isCorrect: true },
                { answerChoice: 'CSS', isCorrect: false },
            ],
        },
        //  question 5
        {
            question: 'Which function can be used in JavaScript to print something?',
            answerChoices: [
                { answerChoice: 'printf()', isCorrect: false },
                { answerChoice: 'console.log()', isCorrect: true },
                { answerChoice: 'println()', isCorrect: false },
                { answerChoice: 'cout', isCorrect: false },
            ],
        },
        //  question 6
        {
            question: 'How to write comments in JavaScript?',
            answerChoices: [
                { answerChoice: 'double forward slashes (//)', isCorrect: true },
                { answerChoice: 'backticks (``)', isCorrect: false },
                { answerChoice: 'the pound sign (#)', isCorrect: false },
                { answerChoice: 'curly braces ({})', isCorrect: false },
            ],
        },
        //  question 7
        {
            question: 'How to join strings with variables of other types in JavaScript?',
            answerChoices: [
                { answerChoice: 'with the plus operator (+)', isCorrect: true },
                { answerChoice: 'with the logical AND operator (&&)', isCorrect: false },
                { answerChoice: 'with the bitwise AND operator (&)', isCorrect: false },
                { answerChoice: 'with the right shift operator (>>)', isCorrect: false },
            ],
        },
        //  question 8
        {
            question: 'How are numerical operations performed in JavaScript by default?',
            answerChoices: [
                { answerChoice: 'integer', isCorrect: false },
                { answerChoice: 
                'no default, depending on the machine architecture', isCorrect: false },
                { answerChoice: 'floating-point', isCorrect: true },
                { answerChoice: 
                'no default, and must be specified by the programmer', isCorrect: false },
            ],
        },
        //  question 9
        {
            question: 'What does the toFixed() function do in JavaScript?',
            answerChoices: [
                { answerChoice: 
                'change the number of significant digits to show', isCorrect: true },
                { answerChoice: 
                'change the precision of the numerical calculation', isCorrect: false },
                { answerChoice: 
                'change to integer-only numerical calculation', isCorrect: false },
                { answerChoice: 
                'change to floating-point-only numerical calculation', isCorrect: false },
            ],
        },
        //  question 10
        {
            question: 'How to force numerical calculation in JavaScript to be integer-only?',
            answerChoices: [
                { answerChoice: 'use Math.floor()', isCorrect: false },
                { answerChoice: 'use Math.ceil()', isCorrect: false },
                { answerChoice: 'use Math.trunc()', isCorrect: false },
                { answerChoice: 'both Math.floor() and Math.ceil()', isCorrect: true },
            ],
        },
        //  question 11
        {
            question: 'What is the membershp operator used for in JavaScript?',
            answerChoices: [
                { answerChoice: 'to access existing values', isCorrect: false },
                { answerChoice: 'to add new values', isCorrect: false },
                { answerChoice: 'both for accessing and adding values', isCorrect: true },
                { answerChoice: 'none of the above', isCorrect: false },
            ],
        },
        //  question 12
        {
            question: 'Arrays in JavaScript can store....',
            answerChoices: [
                { answerChoice: 
                'both homogeneous and hetrogeneous elements', isCorrect: true },
                { answerChoice: 'only homogeneous elements', isCorrect: false },
                { answerChoice: 'only hetrogeneous elements', isCorrect: false },
                { answerChoice: 'only the object data type', isCorrect: false },
            ],
        },
        //  question 13
        {
            question: 'How to add values into an array?',
            answerChoices: [
                { answerChoice: 'both push() and pop()', isCorrect: false },
                { answerChoice: 'both push() and unshift()', isCorrect: true },
                { answerChoice: 'both shift() and unshift()', isCorrect: false },
                { answerChoice: 'push(), shift() and add()', isCorrect: false },
            ],
        },
        //  question 14
        {
            question: 'Which statement about JavaScript data types is wrong?',
            answerChoices: [
                { answerChoice: 
                'the Boolean type can store only 0 or 1', isCorrect: true },
                { answerChoice: 
                'the Number type supports both integer and real', isCorrect: false },
                { answerChoice: 'no Character type exists in JavaScript', isCorrect: false },
                { answerChoice: 
                'the Object type can auto-accommodate new properties', isCorrect: false },
            ],
        },
        //  question 15
        {
            question: 'Which one has priority?',
            answerChoices: [
                { answerChoice: 'operator associativity', isCorrect: false },
                { answerChoice: 'operator precedence', isCorrect: true },
                { answerChoice: 'whichever comes first', isCorrect: false },
                { answerChoice: 'whichever comes last', isCorrect: false },
            ],
        },
        //  question 16
        {
            question: 'Which statement is true about JavaScript operators?',
            answerChoices: [
                { answerChoice: 'all are left-associative', isCorrect: false },
                { answerChoice: 'all are right-associative', isCorrect: false },
                { answerChoice: 'some are left-assoicative', isCorrect: true },
                { answerChoice: 'none are left-assoicative', isCorrect: false },
            ],
        },
        //  question 17
        {
            question: 'What does the negation operator do in JavaScript?',
            answerChoices: [
                { answerChoice: 
                'negates the result from positive to negative', isCorrect: false },
                { answerChoice: 
                'negates the result from negative to positive', isCorrect: false },
                { answerChoice: 'negate the result logically', isCorrect: true },
                { answerChoice: 'always change the result to negative', isCorrect: false },
            ],
        },
        //  question 18
        {
            question: 'What does the double star (**) operator do in JavaScript?',
            answerChoices: [
                { answerChoice: 'raise to a certain exponent', isCorrect: true },
                { answerChoice: 'multiply by a factor of two', isCorrect: false },
                { answerChoice: 'multiply two times in the row', isCorrect: false },
                { answerChoice: 'there is no such operator', isCorrect: false },
            ],
        },
        //  question 19
        {
            question: 'How is the equality operator different from the strict version?',
            answerChoices: [
                { answerChoice: 'no difference', isCorrect: false },
                { answerChoice: 'type coercion is performed', isCorrect: true },
                { answerChoice: 'type coercion is not performed', isCorrect: false },
                { answerChoice: 'the strict is used for older computers', isCorrect: false },
            ],
        },
        //  question 20
        {
            question: 'Which one of the following is not available in JavaScript?',
            answerChoices: [
                { answerChoice: 'the select loop', isCorrect: true },
                { answerChoice: 'the while loop', isCorrect: false },
                { answerChoice: 'the do-while loop', isCorrect: false },
                { answerChoice: 'the for loop', isCorrect: false },
            ],
        },
        //  question 21
        {
            question: 'Which one can replace the while loop?',
            answerChoices: [
                { answerChoice: 'forEach() and the for loop', isCorrect: true },
                { answerChoice: 'only forEach()', isCorrect: false },
                { answerChoice: 'only the for loop', isCorrect: false },
                { answerChoice: 'no replacement is possible', isCorrect: false },
            ],
        },
        //  question 22
        {
            question: 'Which one is not a function type in JavaScript?',
            answerChoices: [
                { answerChoice: 'abstract function', isCorrect: true },
                { answerChoice: 'named function', isCorrect: false },
                { answerChoice: 'arrow function', isCorrect: false },
                { answerChoice: 'anonymous function', isCorrect: false },
            ],
        },
        //  question 23
        {
            question: 'Which function type is less suitable as methods?',
            answerChoices: [
                { answerChoice: 'abstract function', isCorrect: false },
                { answerChoice: 'named function', isCorrect: false },
                { answerChoice: 'arrow function', isCorrect: true },
                { answerChoice: 'anonymous function', isCorrect: false },
            ],
        },
        //  question 24
        {
            question: 'Which function type has the most concise syntax?',
            answerChoices: [
                { answerChoice: 'abstract function', isCorrect: false },
                { answerChoice: 'named function', isCorrect: false },
                { answerChoice: 'anonymous function', isCorrect: false },
                { answerChoice: 'arrow function', isCorrect: true },
            ],
        },
        //  question 25
        {
            question: 'Why is the callback function named callback?',
            answerChoices: [
                { answerChoice: 'no reason:  just a name', isCorrect: false },
                { answerChoice: 
                'because it is called after some task completed', isCorrect: true },
                { answerChoice: 'a nickname to remember arrow functions', isCorrect: false },
                { answerChoice: 'becauase it leaves the program first', isCorrect: false },
            ],
        },
        //  question 26
        {
            question: 'Which one of the following is not used in async JavaScript?',
            answerChoices: [
                { answerChoice: 'setTimeout() function', isCorrect: false },
                { answerChoice: 'the abstract function', isCorrect: true },
                { answerChoice: 'the axios() library', isCorrect: false },
                { answerChoice: 'the fetch API', isCorrect: false },
            ],
        },
        //  question 27
        {
            question: 'How is async JavaScript different from regular JavaScript?',
            answerChoices: [
                { answerChoice: 'code is executed out of order', isCorrect: true },
                { answerChoice: 'code is executed in order', isCorrect: false },
                { answerChoice: 'no difference', isCorrect: false },
                { answerChoice: 'async JavaScript is always faster', isCorrect: false },
            ],
        },
        //  question 28
        {
            question: 'Why was the JavaScript promise developed?',
            answerChoices: [
                { answerChoice: 'to prevent Callback Hell', isCorrect: true },
                { answerChoice: 
                'to promote a variable to a bigger data type', isCorrect: false },
                { answerChoice: 
                'to demote a variable to a smaller data type', isCorrect: false },
                { answerChoice: 'to prompt the user in JavaScript', isCorrect: false },
            ],
        },
        //  question 29
        {
            question: 'Why was the JavaScript async and await developed?',
            answerChoices: [
                { answerChoice: 'to make Callback Hell longer', isCorrect: false },
                { answerChoice: 
                'to make JavaScript promise longer to write', isCorrect: false },
                { answerChoice: 
                'to shorten the syntax of JavaScript promise', isCorrect: true },
                { answerChoice: 'no reason', isCorrect: false },
            ],
        },
        //  question 30
        {
            question: 'Which one is a good way to implement async JavaScript?',
            answerChoices: [
                { answerChoice: 'callback only ', isCorrect: false },
                { answerChoice: 
                    'callback, promise, and async and await', isCorrect: true },
                { answerChoice: 'promise only', isCorrect: false },
                { answerChoice: 'async and await only', isCorrect: false },
            ],
        },
    ];
    //  end of test bank

    // ***********************************React Hooks**************************
    //  the number of the question, i. e. question 1, 2, 3....
    const [ currentQuestion, setCurrentQuestion ] = useState( 0 );
    //  whether the result of the quiz should be visible to the user
	const [ showScore, setShowScore ] = useState( false );
    //  the quiz score
	const [ score, setScore ] = useState( 0 );
    //  the actual number of question to ask, randomized
    const [ actualQuestion, setActualQuestion ] = useState( 0 );
    // ***********************************React Hooks**************************

    //  map each of the four options in each question with this handler
    const handleAnswerChoice = ( isCorrect ) => 
    {
        //  if the correct choice has been chosen, increment the quiz score
		if ( isCorrect ) 
        {
			setScore( score + 1 );
		}

        //  move on to the question quetion number
		const nextQuestion = currentQuestion + 1;

        //  decide whether to continue prompting the user for an answer or show the score
		if ( nextQuestion < numOfQuestionsToAsk ) 
        {
            //  iterate to the next question, i.e. 1 -> 2, 2 -> 3, 3 -> 4....
			setCurrentQuestion( nextQuestion );

            //  randomize question from the test bank
            setActualQuestion( Math.floor( Math.random() * questions.length ));
		} else 
        {
            //  the predetermine number of questions have been answered
            //  show the quiz score
			setShowScore(true);
		}
	};

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
            </DividerStyled>

            <DividerStyled>
                {/* show the quiz score with the corresponding performance analytics */}
                {showScore ? (
                    <DividerStyled>
                        <ParagraphStyled questionResult>
                            You scored { score } out of { numOfQuestionsToAsk }.
                            <LineFeeder />
                            {
                                score / numOfQuestionsToAsk >= 0 && 
                                score / numOfQuestionsToAsk <= 0.6 
                                ? 'You seem to struggle with many concepts.  Keep trying!':
                                score / numOfQuestionsToAsk >= 0.6 && 
                                score / numOfQuestionsToAsk <= 0.7
                                ? 'Acceptable understanding of the basics.  Keep trying!':
                                score / numOfQuestionsToAsk >= 0.7 && 
                                score / numOfQuestionsToAsk <= 0.8
                                ? 'Good grasp of the fundamentals.  Keep trying!':
                                score / numOfQuestionsToAsk >= 0.8 && 
                                score / numOfQuestionsToAsk <= 0.9 
                                ? 'You are doing well!  Not quite perfect though.':
                                'Good work!  Ready for more advanced study.'
                            }
                        </ParagraphStyled>

                        {/* reset necessary parameters if the user wants to retake */}
                        <AnchorStyled
                            restartQuiz
                            onClick={ () => 
                                {
                                    setCurrentQuestion( 0 )
                                    setShowScore( false )
                                    setScore( 0 )
                                }
                             }>
                            Restart Quiz
                        </AnchorStyled>
                    
                    </DividerStyled>
                ) : (
                    // otherwise show another question
                    <>
                        <DividerStyled>
                            {/* show the question number */}
                            <DividerStyled>
                                <ParagraphStyled questionProgress>
                                    Question { currentQuestion + 1 }/{ numOfQuestionsToAsk }
                                </ParagraphStyled>                     
                            </DividerStyled>

                            {/* show the question to ask       */}
                            <DividerStyled>
                                <ParagraphStyled question>
                                    { questions[ actualQuestion ].question }
                                </ParagraphStyled>         
                            </DividerStyled>
                        </DividerStyled>

                        {/* show the options by mapping the answerChoices array */}
                        <DividerStyled>
                            {
                                questions[ actualQuestion ]
                                .answerChoices.map(
                                    ( answerOption ) => 
                                    (
                                        // map each choice with an event handler
                                        <ButtonStyled
                                            answerChoices
                                            onClick={ () => handleAnswerChoice( 
                                                answerOption.isCorrect )
                                            }
                                        >
                                            { answerOption.answerChoice }
                                        </ButtonStyled>
                                    )
                                )
                            }
                        </DividerStyled>
                    </>
                )}
            </DividerStyled>

            {/* ***********************************page navigation*********************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/road-ahead'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation*********************** */}
        </>
    )
}
export default Quiz;