const express = require('express');
const router = express.Router();

const {getUsers,getUniqueUser,postUser} = require('../controllers/SimpleRegistersController')

router.get('/getUsers',getUsers);
router.post('/getUniqueUser',getUniqueUser);
router.post('/postUser',postUser);

module.exports =  router;