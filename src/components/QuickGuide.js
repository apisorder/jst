//  /src/components/QuickGuide.js

import React from 'react';

//  sharable components across different components
import DividerStyled from './DividerStyled';
import Footer from './Footer';
import Header from './Header';
import LineFeeder from './LineFeeder';
import ParagraphStyled from './ParagraphStyled';

//  SVG needed for the page
import { ReactComponent as NavBar } from '../images/navBar.svg';
import { ReactComponent as PageLinker } from '../images/pageLinker.svg';
import { ReactComponent as LessonReviewOff } from '../images/lessonReviewOff.svg';
import { ReactComponent as LessonReviewOn } from '../images/lessonReviewOn.svg';
import { ReactComponent as TodoApp } from '../images/todoApp.svg';
import { ReactComponent as TodoToggleMarked } from '../images/todoToggleMarked.svg';
import { ReactComponent as TodoToggleUnmarked } from '../images/todoToggleUnmarked.svg';
import { ReactComponent as TodoToggleDeleted } from '../images/todoToggleDeleted.svg';
import { ReactComponent as QuizSystem } from '../images/quizSystem.svg';
import { ReactComponent as QuizNextQuestion } from '../images/quizNextQuestion.svg';
import { ReactComponent as QuizResult } from '../images/quizResult.svg';

//  to be able to navigate to other links in React Router
import { Link } from 'react-router-dom';

const QuickGuide = ( { title } ) => 
{
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
                
                {/* ************************1. Site Navigation************** */}
                {/* extra space to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>1. Site Navigation</Header>

                <ParagraphStyled>
                    One way to navigate JST is to use the left navigation panel, where all
                    of JST's available pages and functionalities are accessible.             
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <NavBar />
                </DividerStyled>

                <ParagraphStyled>
                    Another way to navigate JST is to use the page linker at the bottom:  the
                    Back linker and the Forward linker takes the user to the previous module 
                    and the next module, respectively.
                </ParagraphStyled>           

                <DividerStyled quickGuideImage>
                    <PageLinker />
                </DividerStyled>
                {/* ************************1. Site Navigation************** */}

                {/* **********2. User Interaction - lesson Review************ */}
                {/* extra space to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>2. User Interaction - Lesson Review</Header>

                <ParagraphStyled>
                    Lesson review is provided for the user to better absorb the
                    materials.  This feature is turned off by default, but can
                    be activated through a mouse click to reveal its content.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <LessonReviewOff />
                </DividerStyled>

                <ParagraphStyled>
                    Once the content of the review has been made available, a second
                    mouse click will deactivate the feature and hide it from view.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <LessonReviewOn />
                </DividerStyled>
                {/* **********2. User Interaction - lesson Review************ */}

                {/* ****3. User Interaction - Sample Web Application Demo***** */}
                {/* extra space to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>
                    3. User Interaction - Sample Web Application Demo
                </Header>

                <ParagraphStyled>
                    The To-Do List Task Manager allows the user to create new tasks.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <TodoApp />
                </DividerStyled>

                <ParagraphStyled>
                    It allows the user to mark the task as complete 
                    (indicated with a strike-through).
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <TodoToggleMarked />
                </DividerStyled>

                <ParagraphStyled>
                    It also allows the user to mark a completed task as incomplete 
                    (strike-through removed).
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <TodoToggleUnmarked />
                </DividerStyled>

                <ParagraphStyled>
                    Finally, it allows the user to delete the completed tasks, assuming task
                    1 and task 2 have already been marked as completed.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <TodoToggleDeleted />
                </DividerStyled>
                {/* ****3. User Interaction - Sample Web Application Demo***** */}

                {/* **********4. User Interaction - Quiz System************ */}
                {/* extra space to make the reading easier */}
                <LineFeeder />
                <LineFeeder />
                <Header subsection>4. User Interaction - Quiz System</Header>

                <ParagraphStyled>
                    The quiz system generates 10 random questions and prompts the user for
                    an answer to each one.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <QuizSystem />
                </DividerStyled>

                <ParagraphStyled>
                    The user needs to choose an answer in order to see the next question.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <QuizNextQuestion />
                </DividerStyled>

                <ParagraphStyled>
                    When 10 questions have been given and answered, the user will be 
                    shown their score and corresponding performance analytics.  If 
                    desired, the user can restart another quiz of 10 randomly generated
                    questions.
                </ParagraphStyled>

                <DividerStyled quickGuideImage>
                    <QuizResult />
                </DividerStyled>
                {/* **********4. User Interaction - Quiz System************ */}
            </DividerStyled>
            {/* main content */}

            {/* ***********************************page navigation****************** */}
            <DividerStyled pageLinker>

                <Footer>
                    <Link to='/'>&lArr; Back</Link>
                </Footer>

                <Footer>
                        <Link to='/setup'>Forward &rArr;</Link>
                </Footer>
                
            </DividerStyled>
            {/* ***********************************page navigation******************** */}
            {/* main content */}
        </>
    )
}
export default QuickGuide;