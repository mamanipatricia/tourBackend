'use strict';
module.exports = (sequelize, DataTypes) => {
  const ct_user = sequelize.define('ct_user', {
    ctId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ct_user.associate = function(models) {
    // associations can be defined here
  };
  return ct_user;
};