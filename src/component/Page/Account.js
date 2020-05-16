import React,{useState, useEffect} from 'react';
import './Account.css';
import axios from 'axios';
import Loader from '../../util/Loading/Loading';

function Account(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('https://i.imgur.com/mvYW7BN.jpg');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReLoad] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const enableEdit = (event) => {
        event.preventDefault();
        setEditMode(!editMode);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name === firstName) setFirstName(value);
        if(name === lastName) setLastName(value);
        if(name === country) setCountry(value);
        if(name === phoneNumber) setPhoneNumber(value); 
    }

    const handleImageCahnge = (event) => {
        setImage(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {firstName, lastName, country, phoneNumber} ;
        const token = localStorage.authToken;
        axios.defaults.headers.common = {Authorization : `${token}`};
        axios
            .post('https://us-central1-wdatodoapplication.cloudfunctions.net/api/user', userData)
            .then(response => {
                console.log(response);
                setReLoad(!reload);
                setEditMode(false);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleCancel = (event)=> {
        setReLoad(!reload);
        setEditMode(false);
    }

    const handleUploadPicture = (event)=> {
        event.preventDefault();
        const token = localStorage.authToken;
		let form_data = new FormData();
        form_data.append('image', image);
		axios.defaults.headers.common = { Authorization: `${token}` };
		axios
			.post('https://us-central1-wdatodoapplication.cloudfunctions.net/api/user/image', form_data, {
				headers: {
					'content-type': 'multipart/form-data'
				}
			})
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/login');
				}
				console.log(error);
			});
    }

    useEffect(() => {
        const token = localStorage.authToken;
        axios.defaults.headers.common = { Authorization : `${token}`}
        axios
            .get('https://us-central1-wdatodoapplication.cloudfunctions.net/api/user')
            .then(response => {
                console.log(response);
                const credentials = response.data.userCredentials;
                setFirstName(credentials.firstName);
                setLastName(credentials.lastName);
                setUserName(credentials.username);
                setEmail(credentials.email);
                setCountry(credentials.country);
                setPhoneNumber(credentials.phoneNumber);
                setProfilePicture(credentials.imageUrl);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [reload])


    if(loading) {
        return (
            <div id='account-container'>
                <Loader/>
            </div>
        )
    } else {
        return (
            <div id='account-container'>
                <div id='account-left'>
                    <div id='profile-pic'>
                        <img id='account-profile-picture' src={profilePicture} alt='profile pic'/>
                    </div>
                    <div>
                        <p>Username</p>
                        <p>{username}</p>
                    </div>
                    <div>
                            <button onClick={enableEdit}>Edit Profile</button>
                    </div>                
                </div>
                <div id='account-right'>
                    <h1>User Information</h1>
                    <div className='row'>
                        <button type='submit' onClick={handleUploadPicture}>Upload Photo</button>
                        <input type='file' onChange={handleImageCahnge}/>
                    </div>
                    <div className='row-2'>
                        <div>
                            <p>firstName</p>
                            <input type='text' value={firstName} name={firstName} onChange={handleChange} disabled={!editMode}/>
                        </div>
                        <div>
                            <p>LastName</p>
                            <input type='text' value={lastName} name={lastName} onChange={handleChange} disabled={!editMode}/>
                        </div>
                    </div>
                    <div className='row'>
                        <p>email</p>
                        <input type='text' value={email} name={email} disabled/>
                    </div>
                    <div className='row-2'>
                        <div>
                            <p>Country</p>
                            <input type='text' value={country} name={country} onChange={handleChange} disabled={!editMode}/>
                        </div>
                        <div>
                            <p>Phone Number</p>
                            <input type='text' value={phoneNumber} name={phoneNumber} onChange={handleChange} disabled={!editMode}/>
                        </div>
                        
                    </div>
                    <div>
                        <button type='submit' onClick={handleSubmit}>Save Changes</button>
                        <button type='submit' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }  
}

export default Account;