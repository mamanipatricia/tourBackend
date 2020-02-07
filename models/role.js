'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: DataTypes.STRING
  }, {});
  role.associate = function (models) {
    // associations can be defined here
    role.hasMany(models.user, {
      foreignKey: 'roleId',
      as: 'users'
    })
    role.belongsToMany(models.permission, {
      through: 'role_permission',
      // key: 'roleId' // as same permission model..
    })
  };
  return role;
};