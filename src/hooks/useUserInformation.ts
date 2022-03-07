import { useContext } from 'react';
import { UserInformationContext } from '../contexts/UserInformationContext';

export function useUserInformation() {
  const value = useContext(UserInformationContext);

  return value;
}