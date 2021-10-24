//  /src/components/TodoItemStyled.js

//  to be able to use custom CSS styling
import styled, {css}  from 'styled-components';

//  extending existing style on a component
import ParagraphStyled from './ParagraphStyled';

// CSS styling for todo element in the sample web application demo
//  default is TodoItemStyled
//  todoItemCompleted only affect completed item
const TodoItemStyled = styled(ParagraphStyled)`
    background: Thistle;
    border: 7px solid white;
    border-radius: 3px;
    color: MidnightBlue;
    font-size: 29px;
    margin: 0rem 12rem;
    text-align: center;

    //  decorate a completed item with a strike-through
    ${props => props.todoitemCompleted && css`
        background: Silver;
        border: 7px solid white;
        text-align: center;
        text-decoration: line-through;
    `}
`;
export default TodoItemStyled;