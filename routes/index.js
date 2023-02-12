const Router = require('express');
const router = new Router();
const bankRouter = require('./bankRouter');
const jackpotRouter = require('./jackpotRouter');
const userRouter = require('./userRouter');
const winnerRouter = require('./winnerRouter');

router.use('/bank', bankRouter);
router.use('/jackpot', jackpotRouter);
router.use('/user', userRouter);
router.use('/winner', winnerRouter);

module.exports = router;
