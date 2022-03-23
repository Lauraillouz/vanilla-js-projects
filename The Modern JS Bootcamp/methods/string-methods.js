let myName = ' Laura Illouz ';

console.log(myName.toUpperCase());

console.log(myName.toLowerCase());

// Verify if a string includes a specific string
let password = 'abcdefghijklmnopqrstuvwxyz123456789';
console.log(password.includes('password'));

// Trim = returns a new string representing the calling string stripped of white space from both ends
console.log(myName.trim());

// isValidPassword
const isValidPassword = (password) => {
  return password.length < 8 || password.includes('password');
};
console.log(isValidPassword('abcd')); // expected false
console.log(isValidPassword('abcdergzreg36846')); // expected true
console.log(isValidPassword('abcdqdfvdfvpassword')); // expected false
