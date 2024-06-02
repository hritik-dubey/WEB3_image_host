const { Router } = require('express');
const router = Router();
const { imageUploadController } = require('../controllers/imageUpload.Controller');
const {uploadUserImage} = require('../middlware/multerUpload');
const {authenticateToken} = require('../middlware/auth');
router.post('/uploadImage',authenticateToken,uploadUserImage,imageUploadController)

module.exports = router;