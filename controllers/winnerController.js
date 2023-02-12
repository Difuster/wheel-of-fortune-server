const { Winner } = require('../models/models');

class WinnerController {
  async create(req, res) {
    try {
      const { firstName, lastName, gainField, userId } = req.body;
      const winner = await Winner.create({firstName, lastName, gainField, userId});
      console.log(res.json(winner));
    } catch (err) {
      console.log(err);
    }
  }

  async getAllWinners(req, res) {
    const winners = await Winner.findAll({limit: 4, order: [['updatedAt', 'DESC']]});
    res.json(winners);
  }
}

module.exports = new WinnerController();
