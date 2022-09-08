import { useState } from "react";
import Todo from "./todo";

import './todoApp.css';

export default function TodoApp() {
        const [title, setTitle] = useState("Hola");
        const   [todos, setTodos] = useState([]);

    
    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    function handleSumit (e){
        e.preventDefault();

        const newTodo ={
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };

        const temp = [...todos];
        temp.unshift(newTodo)

        setTodos(temp);
        setTitle("");
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);

    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id = id);
        item.title = value;
        setTodos(temp);
    }



    return <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSumit}>
            <input  onChange={handleChange} className="todoInput" value={title} placeholder="Add a task" />
            
            
            <input  type="submit" value="Create To Do" className="buttonCreate"/>
            
        </form>

        <div className="todosContainer">
            {todos.map((item) => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>

    </div>;
}