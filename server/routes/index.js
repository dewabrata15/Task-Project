const express = require('express');
const router = express.Router();
const ChartController =  require('../controller/ChartController')
const UserController = require('../controller/UserController');
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication')


router.get('/', (req, res) => {
    res.send('HOME')
})

router.post('/register', UserController.addUser)
router.post('/login', UserController.login)

router.use(authentication)

router.get('/charts', ChartController.chartList)


router.use(errorHandler)

module.exports = router