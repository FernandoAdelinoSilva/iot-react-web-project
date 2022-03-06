import { firebase } from '../firebase';  
  
type PlaceId = string | undefined;

export const getLogsByPlace = async (placeId : PlaceId) => {
  let logs : Array<any> = [];
  
  const collection = await firebase
  .firestore()
  .collection('Logs')
  .where('PlaceId', "==", placeId)
  .get();

  collection.forEach(doc => {
    logs.push(doc.data());
  });

  return logs;
};