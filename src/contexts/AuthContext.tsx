import { createContext, ReactNode, useState, useEffect } from "react";

import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

type AuthContextType = {
  user: User,
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email} = user;

        if(!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email,
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    console.log(result);

    if(result.user) {
      const { displayName, photoURL, uid, email} = result.user;

      if(!displayName || !photoURL || !email) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email,
      })
    }
  }
  
  return (
    <AuthContext.Provider value={{user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}