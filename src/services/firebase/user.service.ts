import { firebase } from '../firebase';  
  
  type User = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    eulaAccepted: boolean;
  };
  
  type UserEmail = string | undefined;

  let users : Array<any> = [];

  export const addUser = async (user : User) => { 
    firebase
    .firestore()
    .collection('Users')
    .add(user);
    
    return user;
  };

  export const getUserByEmail = async (email : UserEmail) => {
    const collection = await firebase
		.firestore()
		.collection('Users')
		.where('email', "==", email)
		.get();

		collection.forEach(doc => {
      users.push(doc.data());
		});

    return users;
  };

  /*
  await addUser({
			firstName: 'Fernando',
			lastName: 'Silva',
			phone: '9966-6655',
			email: 'fernandoadelinoreact@gmail.com',
			address: 'St Street',
			eulaAccepted: true
		});
  */