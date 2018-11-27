'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clock = sequelize.define('Clock', {
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Clock.associate = function(models) {
    // associations can be defined here
  };
  return Clock;
};