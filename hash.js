// hash.js
import bcrypt from 'bcryptjs';

const password = 'mypassword'; // replace with the password you want
const hash = bcrypt.hashSync(password, 10);

console.log('Your bcrypt hash:', hash);
