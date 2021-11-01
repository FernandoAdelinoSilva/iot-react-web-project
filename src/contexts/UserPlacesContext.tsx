import { createContext, ReactNode, useState } from "react";
import { getUserPlaces } from "../services/firebase/user.service"; 

type Places = Array<{ Name: string, Id: string }>

type UserEmail = string | undefined;

type UserPlacesContextType = {
  places: Places,
  GetUserPlaces: (email: UserEmail) => Promise<void>;
}

type UserPlacesContextProviderProps = {
  children: ReactNode
}

export const UserPlacesContext = createContext({} as UserPlacesContextType);

export function UserPlacesContextProvider(props: UserPlacesContextProviderProps) {
  const [places, setPlaces] = useState<Places>({} as any);

  async function GetUserPlaces(email: UserEmail) {
    var places = await getUserPlaces(email);
    setPlaces(places);
  };
  
  return (
    <UserPlacesContext.Provider value={{places, GetUserPlaces }}>
      {props.children}
    </UserPlacesContext.Provider>
  )
}