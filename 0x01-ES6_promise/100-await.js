import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try { // try to run the function
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    }; // return null
  }
}
