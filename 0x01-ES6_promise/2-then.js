export default function function handleResponseFromAPI(promise){
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };

    if (resolve) {
      console.log('Got a response from the API');
      resolve(obj);
    } else {
      reject(new Error);
    }
  });
}
