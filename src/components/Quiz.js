//  /src/components/Quiz.js
//  reference:  https://jschris.com/beginner-react-project-quiz-app-using-hooks

import React, { useState } from 'react';

import AnchorStyled from './AnchorStyled';
import ButtonStyled from './ButtonStyled';
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

import { Link } from 'react-router-dom';

const Quiz = ( { title } ) => 
{
    // ***********************************React hooks************************************************
    // for showing and hiding lesson review
    // ***********************************React hooks************************************************

    // ***********************************local variables************************************************
    //  convenience variables -> also possible to use React hooks to change the value, but doing so may
    //  create too many function calls, since each increment and reset would each require a call

    //  to better work with React, since JSX (not JS) always interpolates the value in template string,
    //  and string escape sequence does not seem to work
    //  an alternative may be using string concatenation instead, and thereby avoid naming these string variables,
    //  but template string is a useful feature to demonstrate to the students, hence the decision

    const numOfQuestionsToAsk = 10;

    const questions = [
        //  question 1
        {
            question: 'Node.js is available for....',
            answerChoices: [
                { answerChoice: 'Linux only', isCorrect: false },
                { answerChoice: 'macOS and Windows', isCorrect: false },
                { answerChoice: 'Linux and macOS', isCorrect: false },
                { answerChoice: 'Linux, macOS, and Windows', isCorrect: true },
            ],
        },
        //  question 2
        {
            question: 'What type(s) of programming does JavaScript support?',
            answerChoices: [
                { answerChoice: 
                'procedural, functional, and object-oriented', isCorrect: false },
                { answerChoice: 'event-driven ony', isCorrect: false },
                { answerChoice: 
                'procedural, functional, object-oriented, and event-driven', isCorrect: true },
                { answerChoice: 'procedural, and object-oriented', isCorrect: false },
            ],
        },
        //  question 3
        {
            question: 'Which side(s) of the web does JavaScript support?',
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
            question: 'What function can be used in JavaScript to print something?',
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
            question: 'How to join strings with variables of other types',
            answerChoices: [
                { answerChoice: 'with the plus operator (+)', isCorrect: true },
                { answerChoice: 'with the logical AND operator (&&)', isCorrect: false },
                { answerChoice: 'with the bitwise AND operator (&)', isCorrect: false },
                { answerChoice: 'with the right shift operator (>>)', isCorrect: false },
            ],
        },
    ];

    const [ currentQuestion, setCurrentQuestion ] = useState( 0 );
	const [ showScore, setShowScore ] = useState( false );
	const [ score, setScore ] = useState( 0 );
    const [ actualQuestion, setActualQuestion ] = useState( 0 );

    const handleAnswerChoice = ( isCorrect ) => 
    {
		if ( isCorrect ) 
        {
			setScore( score + 1 );
		}

		const nextQuestion = currentQuestion + 1;
		if ( nextQuestion < numOfQuestionsToAsk ) 
        {
            //  counter to keep track when to shown user score
			setCurrentQuestion( nextQuestion );
            //  randomize question from test bank
            setActualQuestion( Math.floor( Math.random() * questions.length ));
		} else 
        {
			setShowScore(true);
		}
	};

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
            </DividerStyled>

            <DividerStyled>
                {showScore ? (
                    <DividerStyled>
                        <ParagraphStyled questionResult>
                            You scored { score } out of { numOfQuestionsToAsk }.
                            <LineFeeder />
                            {
                                score/numOfQuestionsToAsk >= 0 && score/numOfQuestionsToAsk <= 0.6 
                                ? 'Please study some more.':
                                score/numOfQuestionsToAsk >= 0.6 && score/numOfQuestionsToAsk <= 0.8 
                                ? 'You are getting it!  Almost there.':
                                'Good work!'
                            }
                        </ParagraphStyled>

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
                    <>
                        <DividerStyled>
                            <DividerStyled>
                                <ParagraphStyled questionProgress>
                                    Question { currentQuestion + 1 }/{ numOfQuestionsToAsk }
                                </ParagraphStyled>                     
                            </DividerStyled>

                            <DividerStyled>
                                <ParagraphStyled question>
                                    {questions[ actualQuestion ].question}
                                </ParagraphStyled>         
                            </DividerStyled>
                        </DividerStyled>
                        <DividerStyled>
                            {
                                questions[ actualQuestion ]
                                .answerChoices.map(
                                    (answerOption) => 
                                    (
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

            {/* ***********************************lesson review*********************************************** */}

            {/* ***********************************page navigation*********************************************** */}
            <DividerStyled pageLinker>
                <Footer>
                    <Link to='/road-ahead'>&lArr; Back</Link>
                </Footer>

                <Footer>
                    <Link to='/'>Forward &rArr;</Link>
                </Footer>
            </DividerStyled>
            {/* ***********************************page navigation*********************************************** */}
        </>
    )
}
export default Quiz;