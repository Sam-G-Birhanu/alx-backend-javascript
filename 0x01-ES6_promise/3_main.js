import handleProfileSignup from "./3-all";

handleProfileSignup();
const response = handleProfileSignup();
console.log(response instanceof Promise);
