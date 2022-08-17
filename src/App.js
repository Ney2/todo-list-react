import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/header';
import AddTask from './components/form';
import List from './components/list';

const App = () => {
    const allTask = JSON.parse(localStorage.getItem('todos')) || [];
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(allTask);
    const [editTodo, setEditTodo] = useState('null');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <Header />
                </div>
                <div>
                    <AddTask 
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                </div>
            </div>
        </div>
    );
};

export default App;
