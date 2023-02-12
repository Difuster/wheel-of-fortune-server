const { User } = require('../models/models');
const ApiError = require('../error/ApiError');

class UserController {
  async getUser(req, res) {
    try {
      const {id} = req.body; 
      const user = await User.findOne({where: id});
      return res.json(user);
    } catch (err) {
      console.log(err);
    } 
  }

  async registration(req, res) {
    try {
      const {id, firstName, lastName, balance} = req.body; 
      const candidate = await User.create({id, firstName, lastName, balance});
      return res.json(candidate);
    } catch (err) {
      console.log(err);
    }
  }

  async auth(req, res) {
    const {id} = req.body;
    const user = await User.findOne({where: id});
    return res.json(user);
  }

  async update(req, res) {
    try {
      const { id, balance } = req.body;
      const user = await User.findOne({where: id});
      const updatedUser = await user.update({balance}, {where: id});
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
