const {Router} = require('express')
const router = Router()
const {authController} =require('../controllers/auth.Controller')
router.post('/authentication' ,authController)
module.exports=router