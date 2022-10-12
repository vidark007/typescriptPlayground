import React, {useEffect, useRef, useState} from 'react';
import {Todo} from '../models/model'
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDownloadDone} from "react-icons/md"
import './style.css'
import TodoList from "./TodoList";
import {Draggable} from "react-beautiful-dnd";

type Props = {
    index: number;
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo(props: Props) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(props.todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    function handleDone(id: number) {
        props.setTodos(
            props.todos.map(
                (todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo
            )
        );
    }

    function handleEdit(e: React.FormEvent, id: number) {
        e.preventDefault();

        //if matches set new edited Todo if not mathces set Old Todo
        props.setTodos(
            props.todos.map(
                todo => todo.id === id ? {...todo, todo: editTodo} : todo)
        );
        setEdit(false);
    }

    function deleteTodo(id: number) {
        props.setTodos(props.todos.filter(
            (todo) => todo.id !== props.todo.id
        ));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return (
        <Draggable draggableId={props.todo.id.toString()} index={props.index}>
            {
                (provided,snapshot) => (
            <form
                className={`todos_single ${snapshot.isDragging && 'drag'}`}
                onSubmit={(e) => handleEdit(e, props.todo.id)}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                        {edit ? (
                            <input ref={inputRef}
                                   className={`todos_single--text`}
                                   value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                                   onBlur={() => setEdit(false)}/>) : (props.todo.isDone ?
                                <s className={"todos_single--text"}>{props.todo.todo}</s>
                                :
                                <span className={"todos_single--text"}>{props.todo.todo}</span>
                        )}
                        <div>
                 <span className={"icon"} onClick={() => {
                     if (!edit && !props.todo.isDone) {
                         setEdit(!edit)
                     }
                 }}>
                     <AiFillEdit/>
                 </span>
                            <span className={"icon"} onClick={() => deleteTodo(props.todo.id)}>
                     <AiFillDelete/>
                 </span>
                            <span className={"icon"} onClick={() => handleDone(props.todo.id)}>
                     <MdDownloadDone/>
                 </span>
                        </div>
                    </form>
                )
            }


        </Draggable>

    );
}

export default SingleTodo;