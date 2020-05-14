import React , {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

import './SignUp.css';
import Loader from '../../util/Loading/Loading';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            phoneNumber : '',
            country : '',
            password : '',
            confirmPassword : '',
            loading : false,
            error : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({loading : true});
        const userData = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            phoneNumber : this.state.phoneNumber,
            country : this.state.country,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword,
            username : this.state.username
        }
        axios
            .post('https://us-central1-wdatodoapplication.cloudfunctions.net/api/signup', userData)
            .then(response => {
                localStorage.setItem('authToken', 'Bearer ' + response.data.token);
                this.setState({loading : false})
            })
            .catch(error => {
                console.log(error);
                this.setState({loading : false})
            })
    }

    render() {
        if(localStorage.authToken) {
            return <Redirect to='/todos' />
        }
        return (
            <div className='signup-page'>
                <div className='signup-container'>
                    <div>{this.state.loading ? <Loader/>: <h1>Sign Up</h1> }</div>
                    <form className='signup-form'>
                        <div>
                            <div>
                                <label htmlFor='firstName'>First Name: </label>
                                <input 
                                    className='signup-input'
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    onChange={this.handleChange}
                                    placeholder='John'
                                />
                            </div>
                            <div>
                                <label htmlFor='Last Name'>Last Name:</label>
                                <input
                                    className='signup-input'
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    onChange={this.handleChange}
                                    placeholder='Doe'
                                />
                            </div>  
                        </div>
                        <label htmlFor='email'>e-mail:</label>
                        <input 
                            className='signup-input'
                            type="text"
                            id='email'
                            name='email'
                            onChange={this.handleChange}
                            placeholder='john.doe@email.com'
                        />
                        <div>
                            <div>
                                <label htmlFor='phoneNumber'>Phone Number:</label>
                                <input
                                    className='signup-input'
                                    type='text'
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    onChange={this.handleChange}
                                    placeholder='180-980-2355'
                                />
                            </div>
                            <div>
                                <label htmlFor='country'>Country:</label>
                                <input
                                    className='signup-input'
                                    type='text'
                                    id='country'
                                    name='country'
                                    onChange={this.handleChange}
                                    placeholder='India'
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor='password'>Password:</label>
                                <input 
                                    className='signup-input' 
                                    type='password' 
                                    id='password' 
                                    name='password' 
                                    onChange={this.handleChange} 
                                    placeholder='Enter password'
                                />
                            </div>
                            <div>
                                <label htmlFor='confirmPassword'>Confirm Password:</label>
                                <input
                                    className='signup-input'
                                    type='text'
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    onChange={this.handleChange}
                                    placeholder='Password again'
                                />
                            </div>
                        </div>
                        <label htmlFor='username'>Username:</label>
                        <input
                            className='signup-input'
                            type='text'
                            id='username'
                            name='username'
                            onChange={this.handleChange}
                            placeholder='johndoe007'
                        />
                        <button className='signup-button' type='submit' onClick={this.handleSubmit}>Signup</button>
                    </form>
                    <p>Already Have Account? <Link to='/login'>Login</Link> </p>
                </div>
            </div>
        )
    }
}

export default SignUp;