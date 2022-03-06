import lamp from '../assets/images/lamp.png';
import logoImg from '../assets/images/logo3.jpeg';
import '../styles/auth.scss';

import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from '../components/Button';
import { addUser } from '../services/firebase/user.service';
import { useAuth } from '../hooks/useAuth';

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  eulaAccepted: boolean;
};

export function NewUser() {
	const history = useHistory();
	const { user, signOutWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async newUser => {
    await addUser(newUser);
    history.push('/rooms/new');
  }

  useEffect(() => {
    if(user.signIn === false)
      history.push('/');
  }, [history, user]);

  async function handleLogOutUser() {
    await signOutWithGoogle();
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="display-side-by-side">
                <div className="field-padding">
                  <label htmlFor="firstName"><strong>First Name</strong></label>
                  <input
                    {...register("firstName", { required: "This is required" })}
                    id="firstName" 
                  />
                </div>
                <div className="space-between"></div>
                <div className="field-padding">
                    <label htmlFor="lastName"><strong>Last Name</strong></label>
                    <input 
                      {...register("lastName", { required: "This is required" })} 
                      id="lastName" 
                    />
                </div>
              </div>
              <div className="field-padding">
                <label htmlFor="phoneNumber"><strong>Phone Number</strong></label>
                <input 
                  {...register("phone", { required: "This is required" })}  
                  id="phoneNumber" 
                />
              </div>
              <div className="field-padding">
                <label htmlFor="email"><strong>Email</strong></label>
                <input 
                  {...register("email", { required: "This is required" })} 
                  id="email"  
                />
              </div>
              <div className="field-padding">
                <label htmlFor="address"><strong>Address</strong></label>
                <input 
                  {...register("address", { required: "This is required" })}
                  id="address" 
                />
              </div>
              <div>
                <Button type="submit">
                  Create your Account
                </Button>
              </div>
            </form>
            <div>
              <Button onClick={handleLogOutUser} className="sign-out-btn">
                Switch User
              </Button>
            </div>
          </div>
        </main>
      </div>
  )
}