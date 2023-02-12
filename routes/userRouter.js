const Router = require('express');
const userController = require('../controllers/userController');

const router = new Router();

router.post('/', userController.getUser);
router.post('/registration', userController.registration);
router.post('/auth', userController.auth);
router.post('/update', userController.update);

module.exports = router;
