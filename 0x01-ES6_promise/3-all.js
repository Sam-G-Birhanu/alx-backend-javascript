import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((photo) => {
      console.log(photo.body);
      return createUser();
    })
    .then((user) => {
      console.log(user.firstName, user.lastName);
    });
}
