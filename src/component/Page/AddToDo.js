import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './AddToDo.css';

function Todo(props) {
    const [title, setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name === 'title') {
            setTitle(value);
        } 
        if(name === 'body' ) {
            setBody(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const sendData = {title, body}
    }

    return (
        <div id='create-container'>
            <form id='todo-post'>
                <label>Title : </label>
                <input type='text' name='title' value={title} onChange={handleChange} placeholder='Enter title...' />
                <label>Description : </label>
                <textarea name='body' value={body} onChange={handleChange} placeholder='Enter Description...' />
                <button onClick={handleSubmit}>Add ToDo</button>
                <div><Link to='/todos'>Cancel</Link></div>
            </form>
        </div>
    )
}

export default Todo;