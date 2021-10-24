//  /src/components/TodoList.js

import React from 'react';

//  sharable components across different components
import AnchorStyled from './AnchorStyled';
import DividerStyled from './DividerStyled';
import LineFeeder from './LineFeeder';
import Todo from './Todo';

const TodoList = ({ todoList, handleToggle, handleFilter }) => 
{
    return (
        <DividerStyled>
            {/* map the entire todo list into the Todo component, with handlers */}
            { todoList.map(( todo ) => 
                    <Todo 
                        todo={ todo }
                        handleToggle={ handleToggle }
                        handleFilter={ handleFilter }
                    />
                )
            }
            <DividerStyled>
                <LineFeeder />
                <LineFeeder />
                <LineFeeder />
                {/* clear (delete) selected todos */}
                <AnchorStyled todoClearSelected 
                    onClick={ handleFilter }>
                    Clear Selected
                </AnchorStyled>
            </DividerStyled>
        </DividerStyled>
    )
}
export default TodoList;