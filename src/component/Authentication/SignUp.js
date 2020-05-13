import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
            <div>
                <div className='signup-container'>
                    <form className='signup-form'>
                        <input 
                            className='signup-input'
                            type='text'
                            id='firstName'
                            name='firstName'
                            onChange={this.handleChange}
                            placeholder='John'
                        />
                        <input
                            className='signup-input'
                            type='text'
                            id='lastName'
                            name='lastName'
                            onChange={this.handleChange}
                            placeholder='Doe'
                        />
                        <input 
                            className='signup-input'
                            type="text"
                            id='email'
                            name='email'
                            onChange={this.handleChange}
                            placeholder='john.doe@email.com'
                        />
                        <input
                            className='signup-input'
                            type='text'
                            id='phoneNumber'
                            name='phoneNumber'
                            onChange={this.handleChange}
                            placeholder='180-980-2355'
                        />
                        <input
                            className='signup-input'
                            type='text'
                            id='country'
                            name='country'
                            onChange={this.handleChange}
                            placeholder='India'
                        />
                        <input 
                            className='signup-input' 
                            type='password' 
                            id='password' 
                            name='password' 
                            onChange={this.handleChange} 
                            placeholder='Enter password'
                        />
                        <input
                            className='signup-input'
                            type='text'
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={this.handleChange}
                            placeholder='Password again'
                        />
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
                    <Link to='/login'>Already have account? Login</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;