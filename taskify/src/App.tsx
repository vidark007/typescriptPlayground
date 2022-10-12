import "./App.css"
import React, {useState} from "react";
import InputField from "./components/InputField";
import {Todo} from "./models/model"
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    function handleAdd(event: React.FormEvent): void {
        event.preventDefault();

        if (todo) {
            setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
            setTodo("");
        }
    }

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        console.log(result);

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let add;
        let active = todos;
        let complete = completedTodos;
        // Source Logic
        if (source.droppableId === "TodosList") {
            add = active[source.index];
            active.splice(source.index, 1);
        } else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        // Destination Logic
        if (destination.droppableId === "TodosList") {
            active.splice(destination.index, 0, add);
        } else {
            complete.splice(destination.index, 0, add);
        }

        setCompletedTodos(complete);
        setTodos(active);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={"App"}>
                {/* <Todos items={todos}/>*/}
                {/* <Header title={"blabla"} color={'red'}/>*/}
                <span className={"heading"}>Taskify</span>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    competedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    );
}

export default App;