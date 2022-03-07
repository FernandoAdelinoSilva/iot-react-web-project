import { createContext, ReactNode, useState } from "react";
import { getUserByEmail } from "../services/firebase/user.service"; 

type UserInformation = {
  address: string, 
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
};

type UserEmail = string | undefined;

type UserInformationContextType = {
  userInformation: UserInformation,
  getUserInformation: (email: UserEmail) => Promise<void>;
}

type UserInformationContextProviderProps = {
  children: ReactNode
}

export const UserInformationContext = createContext({} as UserInformationContextType);

export function UserInformationContextProvider(props: UserInformationContextProviderProps) {
  const [userInformation, setUserInformation] = useState<UserInformation>({} as UserInformation);

  async function getUserInformation(email: UserEmail) {
    var userInformation = await getUserByEmail(email);
    setUserInformation(userInformation);
  };
  
  return (
    <UserInformationContext.Provider value={{userInformation, getUserInformation }}>
      {props.children}
    </UserInformationContext.Provider>
  )
}