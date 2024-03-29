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

  let user : any;

  export const addUser = async (user : User) => { 
    firebase
    .firestore()
    .collection('Users')
    .add(user);
    
    return user;
  };

  export const getUserByEmail = async (email : UserEmail) => {
    let users : Array<any> = [];
    
    const collection = await firebase
		.firestore()
		.collection('Users')
		.where('email', "==", email)
		.get();    

		collection.forEach(doc => {
      users.push(doc.data());
		});

    return users[0];
  };

  export const getUserPlaces = async (email : UserEmail) => {
    const collection = await firebase
		.firestore()
		.collection('Users')
		.where('email', "==", email)
		.get();

		collection.forEach(doc => {
      user = doc.data();
		});

    return user.places;
  };