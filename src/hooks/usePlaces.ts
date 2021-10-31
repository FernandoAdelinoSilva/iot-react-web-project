import { useContext } from 'react';
import { UserPlacesContext } from '../contexts/UserPlacesContext';

export function usePlaces() {
  const value = useContext(UserPlacesContext);

  return value;
}