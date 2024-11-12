import ClassRoom from './0-classroom';
export default function initializeRooms(){
  const ClassArray = []
  ClassArray.push(new ClassRoom(19));
  ClassArray.push(new ClassRoom(20));
  ClassArray.push(new ClassRoom(34));
  return ClassArray;
}
