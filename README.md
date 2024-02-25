# USAGE
A simple npm package with dependencies for demonstrating usage.

## Installation

To install this package, use the following command:

```
$ npm install kvlar-test
```
Import the package:

```shell
# import package
const {  generateRandomNumber,
  fetchData,
  colorText,
  formatDate,
  validateEmail,
  hashPassword,
  comparePasswords,
  createUUID,
  signToken,
  verifyToken,
  enableCORS,
  loadEnvVariables,
  setupLogger,
  secureHeaders,
  lodashVersion,
  axiosVersion,
  chalkVersion,
  momentVersion,
  validatorVersion,
  bcryptVersion,
  uuidVersion,
  jwtVersion,
  corsVersion,
  dotenvVersion,
  morganVersion,
  helmetVersion } = require('kvlar-test');
```
How to use:

```bash
console.log('Random Number:', generateRandomNumber());
console.log('Fetched Data:', fetchData());
console.log('Color Text:', ('This text is blue!', '34'));
console.log('Formatted Date:', formatDate(new Date(), 'YYYY-MM-DD'));
console.log('Is Email Valid:', validateEmail('test@example.com'));
console.log('Hashed Password:', hashPassword('password123'));
console.log('Compare Passwords:', comparePasswords('password123', '$2a$10$...'));
console.log('UUID:', createUUID());
console.log('Signed Token:', signToken({ userId: 123 }, 'secret-key', { expiresIn: '1h' }));
console.log('CORS Middleware:', enableCORS());
console.log('Logger Middleware:', setupLogger());
console.log('Secure Headers Middleware:', secureHeaders());
```    

