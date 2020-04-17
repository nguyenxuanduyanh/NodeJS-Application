const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()
const controller = require('../controller/user.controller')
const validate = require('../validate/user.validate')
var multer = require('multer')
var upload = multer({ dest: './public/uploads/' })
router.get('/', controller.index)
router.get('/createuser', controller.create)
router.post('/createuser', upload.single('avatar'), validate.validateuser, controller.postCreate)
router.get('/searchuser', controller.searchuser)
router.get('/:id', controller.viewuser)


module.exports = router