import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const AddTask = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

 const updateTodo = (description, id , completed) => {
   const newTask = todos.map((task) => 
    task.id === id ? { description, id, completed } : task
   );
   setTodos(newTask);
   setEditTodo("");
 };

 useEffect(() => {
    if(editTodo){
        setInput(editTodo.description);
    }
    else {
        setInput("");
    }
 }, [setInput, editTodo])

 const handlenewTask = (e) => {
    e.preventDefault();
    setInput(e.target.value);
};

const addTask = (e) => {
    e.preventDefault();
    if(!editTodo) {
        setTodos([...todos, {id: uuidv4(), description: input, completed: false}])
        setInput("");
    }
    else {
        updateTodo(input, editTodo.id, editTodo.completed);
    }

};
    return (
        <form className="form" onSubmit={addTask}>
        <input type="text" className="newTodo"
            placeholder="Add to your list..." required
            value={input}
            onChange={handlenewTask}
            />
            <button className="add" type="submit">
                {editTodo ? "Edit" : "Add"}
            </button>
        </form>
    )
    }

export default AddTask;