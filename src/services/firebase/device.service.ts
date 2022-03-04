import { firebase } from '../firebase';  
  
type PlaceId = string | undefined;

export const getDevicesByPlace = async (placeId : PlaceId) => {
  let devices : Array<any> = [];
  
  const collection = await firebase
  .firestore()
  .collection('Devices')
  .where('PlaceId', "==", placeId)
  .get();

  collection.forEach(doc => {
    devices.push(doc.data());
  });

  return devices;
};