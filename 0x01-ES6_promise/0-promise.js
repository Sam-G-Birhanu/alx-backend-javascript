/**
 * Returns a promise that logs a message.
 * @returns {Promise<void>} A promise that logs 'I am promise'.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    console.log('I am promise');
    resolve();
  });
}
