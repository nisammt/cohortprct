const { adminPanel, getallUsers } = require('../../controllers/adminController')
const {adminMiddile}= require('../../middlewares/adminMiddile')

const adminRouter = require('express').Router()


adminRouter.post('/adminlogin' ,adminMiddile, adminPanel);
adminRouter.get('/getallusers',getallUsers)
adminRouter.put ('/edituser', )

module.exports = adminRouter