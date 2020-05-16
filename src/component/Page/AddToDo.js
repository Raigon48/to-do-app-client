import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './AddToDo.css';
import Axios from 'axios';
import Loader from '../../util/Loading/Loading';

function Todo(props) {
    const [title, setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        const sendData = {title, body};
        let token = localStorage.authToken;
        Axios.defaults.headers.common = {Authorization : `${token}`};
        Axios
            .post('https://us-central1-wdatodoapplication.cloudfunctions.net/api/todo', sendData)
            .then(response => {
                console.log(response);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }

    return (
        <div id='create-container'>
            { loading ? 
                <Loader/> :
                <form id='todo-post'>
                    <label>Title : </label>
                    <input type='text' name='title' value={title} onChange={handleChange} placeholder='Enter title...' />
                    <label>Description : </label>
                    <textarea name='body' value={body} onChange={handleChange} placeholder='Enter Description...' />
                    <button onClick={handleSubmit}>Add ToDo</button>
                    <div><Link to='/todos'>Cancel</Link></div>
                </form>}
        </div>
    )
}

export default Todo;