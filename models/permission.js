'use strict';
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('permission', {
    name: DataTypes.STRING
  }, {});
  permission.associate = function(models) {
    // associations can be defined here
    permission.belongsToMany(models.role, {
      through: 'role_permission',
      // key: 'permissionId'//solo cuando en la tabla intermedia esta en un fomato distinto
    })
  };
  return permission;
};