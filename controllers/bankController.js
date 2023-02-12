const { Bank } = require('../models/models');

class BankController {
  async getValue(req, res) {
    try {
      const bank = await Bank.findOne({where: {name: "BANK"}});
      res.json(bank);
    } catch (err) {
      console.log(err);
    }
  }

  async update(req, res) {
    try {
      const { gainValue } = req.body;
      const bank = await Bank.findOne({name: "BANK"});
      const updatedBank = await bank.update({gainValue});
      res.json(updatedBank);
    } catch (err) {
      console.log(err);
    }
  }

  async create(req, res) {
    try {
      const { name, gainValue } = req.body;
      const bank = await Bank.create(name, gainValue);
      res.json(bank);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new BankController();
