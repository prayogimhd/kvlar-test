// Import modul dari index.js
const {
    generateRandomNumber,
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
    helmetVersion,
  } = require('./index'); // Sesuaikan path jika diperlukan
  
  // Gunakan variabel atau fungsi yang telah diimpor
  console.log('Random Number:', generateRandomNumber());
  
  fetchData().then((data) => {
    console.log('Fetched Data:', data);
  });
  
  const text = 'Hello, World!';
  const coloredText = colorText(text, 36); // Contoh warna ANSI untuk warna hijau
  console.log('Colored Text:', coloredText.coloredText);
  
  const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
  console.log('Formatted Date:', formattedDate);
  
  const email = 'test@example.com';
  console.log('Is Valid Email:', validateEmail(email));
  
  const password = 'password123';
  hashPassword(password).then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
  });
  
  const newPassword = 'password123';
  const hashedPassword = '$2a$10$OjPblNSPHIqvdV3LVwz/WeOlw7T7ZkzxjEVrOcXo/n.K0Zq9nHNGW'; // Contoh hashed password
  comparePasswords(newPassword, hashedPassword).then((result) => {
    console.log('Password Match:', result);
  });
  
  const newUUID = createUUID();
  console.log('New UUID:', newUUID);
  
  const payload = { userId: 123 };
  const secret = 'your-secret-key';
  const options = { expiresIn: '1h' };
  const token = signToken(payload, secret, options);
  console.log('Generated Token:', token);
  
  try {
    const decodedToken = verifyToken(token, secret);
    console.log('Decoded Token:', decodedToken);
  } catch (error) {
    console.error('Token Verification Failed:', error.message);
  }
  
  const corsMiddleware = enableCORS();
  console.log('CORS Middleware:', corsMiddleware);
  
  loadEnvVariables(); 
  
  const loggerMiddleware = setupLogger();
  console.log('Logger Middleware:', loggerMiddleware);
  
  const helmetMiddleware = secureHeaders();
  console.log('Helmet Middleware:', helmetMiddleware);
  
  console.log('Lodash Version:', lodashVersion);
  console.log('Axios Version:', axiosVersion);
  console.log('Chalk Version:', chalkVersion);
  console.log('Moment Version:', momentVersion);
  console.log('Validator Version:', validatorVersion);
  console.log('Bcrypt Version:', bcryptVersion);
  console.log('UUID Version:', uuidVersion);
  console.log('JWT Version:', jwtVersion);
  console.log('CORS Version:', corsVersion);
  console.log('Dotenv Version:', dotenvVersion);
  console.log('Morgan Version:', morganVersion);
  console.log('Helmet Version:', helmetVersion);
  