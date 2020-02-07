'use strict';
module.exports = (sequelize, DataTypes) => {
  const role_permission = sequelize.define('role_permission', {
    permissionId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  role_permission.associate = function(models) {
    // associations can be defined here
  };
  return role_permission;
};