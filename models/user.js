'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.role, {
      // as: 'mis_roles',
      // foreignKey: 'roleId' // tomra en cuenta mucho esto
    })
    user.belongsToMany(models.city_tour, {
      through: 'ct_user',
      // as: 'city_tour' // we already know Pat..
    })
  };
  return user;
};