const Router = require('express');

const bankController = require('../controllers/bankController');

const router = new Router();

router.post('/create', bankController.create);
router.post('/update', bankController.update);
router.get('/', bankController.getValue);

module.exports = router;
