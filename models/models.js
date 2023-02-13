const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
  firstName: {type: DataTypes.STRING, unique: true, allowNull: false},
  lastName: {type: DataTypes.STRING, unique: true, allowNull: false},
  balance: {type: DataTypes.INTEGER, allowNull: false},
});

const Winner = sequelize.define('winner', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  firstName: {type: DataTypes.STRING, allowNull: false},
  lastName: {type: DataTypes.STRING, allowNull: false},
  gainField: {type: DataTypes.STRING, allowNull: false},
  userId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
});

const Bank = sequelize.define('bank', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  gainValue: {type: DataTypes.INTEGER, allowNull: false},
});

const Jackpot = sequelize.define('jackpot', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  gainValue: {type: DataTypes.INTEGER, allowNull: false},
});

module.exports = {
  User,
  Winner,
  Bank,
  Jackpot,
  UserWinner
}