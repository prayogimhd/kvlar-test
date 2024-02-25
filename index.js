const _ = require('lodash');
const axios = require('axios');
const chalk = require('chalk-cjs');
const moment = require('moment');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const lodashVersion = _.VERSION;
const axiosVersion = axios.version;
const chalkVersion = chalk.version;
const momentVersion = moment.version;
const validatorVersion = validator.version;
const bcryptVersion = bcrypt.version;
const uuidVersion = uuidv4();
const jwtVersion = jwt.version;
const corsVersion = cors.version;
const dotenvVersion = dotenv.version;
const morganVersion = morgan.version;
const helmetVersion = helmet.version;

const generateRandomNumber = () => {
  return _.random(1, 100);
};

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

const colorText = (text, color) => {
    const coloredText = `\x1b[${color}m${text}\x1b[0m`;
    return {
        coloredText,
    };
};

const formatDate = (date, format) => {
  return moment(date).format(format);
};

const validateEmail = (email) => {
  return validator.isEmail(email);
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const createUUID = () => {
  return uuidv4();
};

const signToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const enableCORS = () => {
  return cors();
};

const loadEnvVariables = () => {
  dotenv.config();
};

const setupLogger = () => {
  return morgan('combined');
};

const secureHeaders = () => {
  return helmet();
};

module.exports = {
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
};