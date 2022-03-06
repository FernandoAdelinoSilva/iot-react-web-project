import { firebase } from '../firebase';  
  
type PlaceId = string | undefined;

export const getPlaceById = async (placeId : PlaceId) => {
  let places : Array<any> = [];
  
  const collection = await firebase
  .firestore()
  .collection('Places')
  .where(firebase.firestore.FieldPath.documentId(), "==", placeId)
  .get();

  collection.forEach(doc => {
    places.push(doc.data());
  });

  return places[0];
};