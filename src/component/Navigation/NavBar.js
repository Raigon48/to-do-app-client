import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    return (
        <div className='nav-bar'>
            <div className='nav-bar-left'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/todos'>Todos</Link>
            </div>
            <div className='nav-bar-right'>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/Signup'>Signup</Link>
            </div>
        </div>
    )
}

export default NavBar;