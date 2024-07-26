/**
 * Returns a promise that resolves with a success object or rejects with an error.
 * @param {boolean} success - A flag indicating whether the API call is successful.
 * @returns {Promise<{status: number, body: string}>} A promise that resolves with an object containing status and body or rejects with an error.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success'
    };

    if (success) {
      resolve(obj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
