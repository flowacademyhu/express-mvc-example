'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videogame = sequelize.define('Videogame', {
    distributor: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Videogame.associate = function(models) {
    // associations can be defined here
  };
  return Videogame;
};