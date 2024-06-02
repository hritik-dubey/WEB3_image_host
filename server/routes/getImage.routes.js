const express = require('express')
const router = express.Router();
const {  getImageController} = require('../controllers/getImage.Controller');
const {authenticateToken} = require("../middlware/auth");

router.post('/getImage',authenticateToken,getImageController)

module.exports=router