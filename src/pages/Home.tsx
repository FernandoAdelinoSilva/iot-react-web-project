import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import lamp from '../assets/images/lamp.png';
import logoImg from '../assets/images/logo3.jpeg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'

import { useAuth } from '../hooks/useAuth';
import { usePlaces } from '../hooks/usePlaces';
import { getUserByEmail } from '../services/firebase/user.service';

export function Home() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();
	const { GetUserPlaces } = usePlaces();

	useEffect(() => {
		if(!user.signIn)
			return;

		const getUser = async () => {
			let firebaseUser = await getUserByEmail(user.email);

			if(firebaseUser.length > 0) {
				await GetUserPlaces(user.email);
				history.push('/rooms/new');
			} else {
				history.push('/user/new');
			}
		} 
		getUser();
	}, [history, user, GetUserPlaces]);

	async function handleCreateRoom() {
		if (!user.id) {
			await signInWithGoogle();
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
							<button onClick={handleCreateRoom} className="sign-in-btn">
								<img src={googleIconImg} alt="Google" />
								Sign In with Google
							</button>
						</div>
					</main>
        </div>
    )
}