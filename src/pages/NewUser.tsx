import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Button } from '../components/Button';

import { addUser } from '../services/firebase/user.service';
import { useAuth } from '../hooks/useAuth';

import lamp from '../assets/images/lamp.png';
import logoImg from '../assets/images/logo3.jpeg';
import '../styles/auth.scss';


export function NewUser() {
	const history = useHistory();
	const { user, signOutWithGoogle } = useAuth();

	const [newUser, setNewUser] = useState({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			address: '',
			eulaAccepted: false
	});

  useEffect(() => {
    if(user.signIn === false)
      history.push('/');
  }, [history, user]);

	async function handleCreateUser() {
    await addUser(newUser);
    history.push('/rooms/new');
	}

  async function handleLogOutUser() {
    await signOutWithGoogle();
    //history.push('/');

    //await addUser(newUser);
    //history.push('/rooms/new');
    
	}

  return (
      <div id="page-auth">
        <aside>
          <img src={lamp} alt="Ilustration QA"/>
          <strong>First Time Here ?</strong>
          <p>Lets create your account</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="SmartHome" />
            <div className="separator">Create Your Account</div>
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
              <div>
                <Button onClick={handleLogOutUser} type="submit">
                  Switch User
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
  )
}