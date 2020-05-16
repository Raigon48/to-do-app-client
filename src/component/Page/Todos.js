import React from 'react';
import {Link} from 'react-router-dom';
import './Todos.css';

function Todos() {
    return (
        <div id='todo-container'>
            <div id='todo-top'>
                <h1>
                    Todos List
                </h1>
            </div>
            <div id='todo-bottom'>
                <div>
                    <Link to='/todos/create'>Add New</Link>
                </div>  
            </div>
        </div>
    )
}

export default Todos;