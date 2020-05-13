import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Login.css';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : '',
			error : '',
			loading : 'false'
		}
	}

	handleChange = (event) => {
		this.setState ({
			[event.target.name] : event.target.value 
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			loading : true
		})
		const userData = {
			email : this.state.email,
			password : this.state.password
		}
		axios
			.post('/login', userData)
			.then(response => {
				console.log(response);
				localStorage.setItem('authToken', 'Bearer ' + response.data.token);
			})
			.catch(error => {
				console.log(error);
			})
		console.log(userData);

	}

	render() { 
		return (
			<div className='login-container'>
				<form className='login-form'>
					<input className='login-input' type="text" id='email' name='email' onChange={this.handleChange} placeholder='Enter email'/>
					<input className='login-input' type='password' id='password' name='password' onChange={this.handleChange} placeholder='Enter password'/>
					<button className='login-button' type='submit' onClick={this.handleSubmit}>Login</button>
				</form>
				<Link to='/signUp'>New User? Sign Up</Link>
			</div>
		)
	}
}

export default Login;

//"proxy" : "https://us-central1-wdatodoapplication.cloudfunctions.net/api"