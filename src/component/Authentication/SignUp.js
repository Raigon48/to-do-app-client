import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './SignUp.css';

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
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='signup-page'>
                <div className='signup-container'>
                    <h1>Sign Up</h1>
                    <form className='signup-form'>
                        <div>
                            <div>
                                <label for='firstName'>First Name: </label>
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
                                <label for='Last Name'>Last Name:</label>
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
                        <label for='email'>e-mail:</label>
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
                                <label for='phoneNumber'>Phone Number:</label>
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
                                <label for='country'>Country:</label>
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
                                <label for='password'>Password:</label>
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
                                <label for='confirmPassword'>Confirm Password:</label>
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
                        <label for='username'>Username:</label>
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