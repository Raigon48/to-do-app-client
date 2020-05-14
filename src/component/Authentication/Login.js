import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import './Login.css';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : '',
			error : '',
			loading : false,
			status : false
		}
	}

	handleChange = (event) => {
		this.setState ({
			[event.target.name] : event.target.value 
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({loading : true})
		const userData = {
			email : this.state.email,
			password : this.state.password
		}
		axios
			.post('https://us-central1-wdatodoapplication.cloudfunctions.net/api/login', userData)
			.then(response => {
				console.log(response);
				localStorage.setItem('authToken', 'Bearer ' + response.data.token);
				this.setState({loading : false});
			})
			.catch(error => {
				console.log(error);
				this.setState({loading : false});
			})
			if(true) {
				return <Redirect to='/signup'/>
			}
	}

	render() { 
		if(localStorage.authToken){
			return <Redirect to='/todos' />
		}
		return (
			<div className='login-page'>
				<div className='todo-info'>
					<p>I'm controlling, and I want everything orderly, and I need lists. My mind goes a mile a minute. I'm difficult on every single level.</p>
				</div>
				<div className='login-container'>
					<h1>Login</h1>
					<form className='login-form'>
						<label for='email'>Enter e-mail:</label>
						<input 
							className='login-input'
							type="text" 
							id='email' 
							name='email' 
							onChange={this.handleChange} 
							placeholder='Enter email'
						/>
						<label for='password'>Enter Password:</label>
						<input 
							className='login-input' 
							type='password' 
							id='password' 
							name='password' 
							onChange={this.handleChange} 
							placeholder='Enter password'
						/>
						<button 
							className='login-button' 
							type='submit' 
							onClick={this.handleSubmit}
						>
							Login
						</button>
					</form>
					<p>New User? <Link to='/signUp'> Sign Up</Link></p>
					<div>{ this.state.loading ? 'Loading...' : '' }</div>
				</div>
			</div>
			
		)
	}
}

export default Login;

//"proxy" : "https://us-central1-wdatodoapplication.cloudfunctions.net/api"