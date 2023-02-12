const Router = require('express');

const jackpotController = require('../controllers/jackpotController');

const router = new Router();

router.post('/create', jackpotController.create);
router.post('/update', jackpotController.update);
router.get('/', jackpotController.getValue);

module.exports = router;
