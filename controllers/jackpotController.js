const { Jackpot } = require('../models/models');

class JackpotController {
  async getValue(req, res) {
    try {
      const jackpot = await Jackpot.findOne({where: {name: "JACKPOT"}});
      res.json(jackpot);
    } catch (err) {
      console.log(err);
    }
  }

  async create(req, res) {
    try {
      const { name, value } = req.body;
      const jackpot = await Jackpot.create(name, value);
      return res.json(jackpot);
    } catch (err) {
      console.log(err);
    }
  }

  async update(req, res) {
    try {
      const { gainValue } = req.body;
      const jackpot = await Jackpot.findOne({name: "JACKPOT"});
      const updatedJackpot = await jackpot.update({gainValue});
      res.json(updatedJackpot);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new JackpotController();
