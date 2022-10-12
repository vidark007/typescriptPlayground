import React, {useRef} from 'react';
import './style.css'

interface Props{
    todo:string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    handleAdd(event : React.FormEvent) : void;
}

function InputField(props : Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className={'input'}
              onSubmit={(e)=> {
                  props.handleAdd(e);
                  inputRef.current?.blur();
              }}>
            <input type={'input'}
                   ref={inputRef}
                   placeholder={'Enter a task'}
                   className={'input_box'}
                   value={props.todo}
                   onChange={(e)=>props.setTodo(e.target.value)}
            />
            <button className={"input_submit"} type={"submit"} >Go</button>
        </form>
    );
}

export default InputField;