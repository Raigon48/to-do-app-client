import React from 'react';
import { Link } from 'react-router-dom';
import './Logout.css';

function Logout(props) {
    const handleClick = () => {
        localStorage.removeItem('authToken');
    }

    return <Link id='logout' to='/login' onClick={handleClick}>Logout</Link>
}

export default Logout;