import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import lamp from '../assets/images/lamp.png';
import logoImg from '../assets/images/logo3.jpeg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { Checkbox } from '../components/Checkbox';

import { getUserByEmail, addUser } from '../services/firebase/user.service';


export function Home() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	const [checked, setChecked] = useState(false);
	
	const [newUser, setNewUser] = useState({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			address: '',
			eulaAccepted: false
	});

	const handleChange = () => {
		setChecked(!checked);
	};

	async function handleCreateUser() {
		console.log(newUser);
	}

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}

		let firebaseUser = await getUserByEmail(user?.email);

		if(firebaseUser.length > 0) {
			history.push('/rooms/new');
		} else {
			console.log('User not Found on Database');
		}
	}

    return (
        <div id="page-auth">
					<aside>
						<img src={lamp} alt="Ilustration QA"/>
						<strong>Smart House Project</strong>
						<p>All your Devices in One Place</p>
					</aside>
					<main>
						<div className="main-content">
							<img src={logoImg} alt="SmartHome" />
							<button onClick={handleCreateRoom} className="create-room">
								<img src={googleIconImg} alt="Google" />
								Sign In with Google
							</button>
							<div className="separator">Or create your account</div>
							<form>
								<div className="display-side-by-side">
									<div className="field-padding">
										<label htmlFor="firstName"><strong>First Name</strong></label>
										<input 
											type="text" 
											name="firstName" 
											id="firstName" 
											required
											value={newUser.firstName} 
											onChange={event => setNewUser({...newUser, firstName: event.target.value})}
										/>
									</div>
									<div className="space-between"></div>
									<div className="field-padding">
											<label htmlFor="lastName"><strong>Last Name</strong></label>
											<input 
												type="text" 
												name="lastName" 
												id="lastName" 
												required
												value={newUser.lastName} 
												onChange={event => setNewUser({...newUser, lastName: event.target.value})} 
											/>
									</div>
								</div>
								<div className="field-padding">
									<label htmlFor="phoneNumber"><strong>Phone Number</strong></label>
									<input 
										type="text" 
										name="phoneNumber" 
										id="phoneNumber" 
										required
										value={newUser.phone} 
										onChange={event => setNewUser({...newUser, phone: event.target.value})} 
									/>
								</div>
								<div className="field-padding">
									<label htmlFor="email"><strong>Email</strong></label>
									<input 
										type="email" 
										name="email" 
										id="email" 
										required
										value={newUser.email} 
										onChange={event => setNewUser({...newUser, email: event.target.value})} 
									/>
								</div>
								<div className="field-padding">
									<label htmlFor="address"><strong>Address</strong></label>
									<input 
										type="text" 
										name="address" 
										id="address" 
										required
										value={newUser.address} 
										onChange={event => setNewUser({...newUser, address: event.target.value})} 
									/>
								</div>
								<div>
									
								</div>
								<div>
									<Button onClick={handleCreateUser} type="submit">
										Create your Account
									</Button>
								</div>
								<div className="field-padding">
									<Checkbox 
										label="Value 1"
										checked = {checked}
										onChange={handleChange}
									/>
								</div>
								<div>
									<p>Is "Value 1" checked? {checked.toString()}</p>
								</div>
							</form>
						</div>
					</main>
        </div>
    )
}