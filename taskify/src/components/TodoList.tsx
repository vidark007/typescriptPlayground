import React from 'react';
import './style.css'
import {Todo} from "../models/model";
import SingleTodo from "./SingleTodo";
import {Droppable} from "react-beautiful-dnd";

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    competedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList(props: Props) {
    return (
        <div className={"container"}>
            <Droppable droppableId={"TodosList"}>
                {(provided,snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver && 'dragactive'}`}
                         ref={provided.innerRef}
                         {...provided.droppableProps}>
                    <span className="todos_heading">
                        Active Tasks
                    </span>
                        {
                            props.todos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={props.todos}
                                    setTodos={props.setTodos}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>)}
            </Droppable>
            <Droppable droppableId={"TodosRemove"}>
                {
                    (provided,snapshot) => (
                        <div className={`todos remove ${snapshot.isDraggingOver && 'dragcomplete'}`}
                             ref={provided.innerRef} {...provided.droppableProps}>
                 <span className="todos_heading">
                    Completed Tasks
                </span>
                            {
                                props.competedTodos.map((todo, index) => (
                                    <SingleTodo
                                        index={index}
                                        todo={todo}
                                        key={todo.id}
                                        todos={props.todos}
                                        setTodos={props.setCompletedTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
            </Droppable>

        </div>
    );
}

export default TodoList;