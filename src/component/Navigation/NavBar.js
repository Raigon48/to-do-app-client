import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogOut = (event) => {
        if(localStorage.authToken) {
            localStorage.removeItem('authToken');
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }

    useEffect(() => {
        if(localStorage.authToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn])

    return (
        <div className='nav-bar'>
            <div className='nav-bar-left'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/todos'>Todos</Link>
            </div>
            <div className='nav-bar-right'>
                {
                    isLoggedIn ?
                    <React.Fragment>
                        <Link className='link' to='/account'>Account</Link>
                        <Link className='link' to='/login' onClick={handleLogOut}>Logout</Link>
                    </React.Fragment> :
                    <React.Fragment>
                        <Link className='link' to='/Signup'>Signup</Link>
                        <Link className='link' to='/Login' >Login</Link>
                    </React.Fragment>
                }
                
            </div>
        </div>
    )
}

export default NavBar;