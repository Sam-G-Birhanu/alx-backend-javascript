/**
 * Returns a promise that logs a message.
 * @returns {Promise<void>} A promise that logs 'I am promise'.
 */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    console.log('I am promise');
    resolve();
  });
}
