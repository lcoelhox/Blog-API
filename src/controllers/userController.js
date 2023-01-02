require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'coelhos';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const loginUserEmail = async (req, res) => {
  const { password, email } = req.body;
  
  const userEmail = await userService.getEmailUser(email);
  // console.log(userEmail);

  if (!userEmail || userEmail.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ 
    email,
    password: null,
    data: { userId: userEmail.id } },
    secret,
    jwtConfig);

  //  console.log(token);

  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userCreate = await userService.createUser({ displayName, email, password, image });
  console.log(userCreate.email);

  const token = jwt.sign({ 
    displayName,
    email,
    password: null,
    image,
    data: { userId: userCreate.id } },
    secret,
    jwtConfig);
  
  return res.status(201).json({ token });
};

const getUsersAll = async (req, res) => {
  const getAll = await userService.getAllUsers();

  return res.status(200).json(getAll);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userId = await userService.getUserId(id);

  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(userId);
};

module.exports = {
  loginUserEmail,
  createUser,
  getUsersAll,
  getUserById,
};