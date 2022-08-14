import React from "react";

const list = ({todos, setTodos, setEditTodo}) => {

const handleEdit = ({id}) => {
  const findTodo = todos.find((task) => task.id === id)
  setEditTodo(findTodo);
};

const handleComplete = (todo) => {
  setTodos(todos.map((task) => {
    if(task.id === todo.id) {
      return { ...task, completed: !task.completed } 
    }
    return task;
  }))
};

 const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id ));
 };

    return (
        <div className="list-container">
         {
            todos.map((todo) => (
             <li className="newTask" key={todo.id}>
                <input type="text" value={todo.description} 
                className={`list ${todo.completed ? "complete" : ""}`} 
                onChange={(e) => e.preventDefault()} />
                <div>
            <button className="complete-icon" onClick={() => handleComplete(todo)}>
               <i className="fa fa-check-circle"></i>
            </button>
            <button className="edit-icon" onClick={() => handleEdit(todo)}>
               <i className="fa fa-edit"></i>
            </button>
            <button className="delete-icon" onClick={() => handleDelete(todo)}>
               <i className="fa fa-trash"></i>
            </button>
         </div>
             </li>
            ))
         }
        </div>
    );
}
export default list;