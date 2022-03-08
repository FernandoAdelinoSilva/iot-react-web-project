import { firebase } from '../firebase';  
  
type PlaceId = string | undefined;

type Place = {
  Address: string,
  Name: string,
  ServerAddress: string,
  ServerHttpPort: string,
  ServerTcpPort: string,
  Users: Array<User>
}; 

type User = {
  Id: string,
  FirstName: string,
  LastName: string,
  Role: string
};

export const getPlaceById = async (placeId : PlaceId) => {
  let places: Array<any> = [];
  let place: Place;
  
  const collection = await firebase
  .firestore()
  .collection('Places')
  .where(firebase.firestore.FieldPath.documentId(), "==", placeId)
  .get();

  collection.forEach(doc => {
    places.push(doc.data());
  });

  place = places[0];

  return place;
};