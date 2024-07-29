import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((photo) => createUser().then((user) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      image: photo.body,
    })))
    .then((userProfile) => {
      console.log(userProfile.image, userProfile.firstName, userProfile.lastName);
    });
}
