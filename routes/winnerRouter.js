const Router = require('express');
const winnerController = require('../controllers/winnerController');

const router = new Router();

router.get('/', winnerController.getAllWinners);
router.post('/create', winnerController.create);

module.exports = router;
