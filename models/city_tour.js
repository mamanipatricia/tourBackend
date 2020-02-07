'use strict';
module.exports = (sequelize, DataTypes) => {
  const city_tour = sequelize.define('city_tour', {
    nameTour: DataTypes.STRING,
    depart: DataTypes.DATE,
    arrive: DataTypes.DATE,
    city: DataTypes.STRING,
    quantity: DataTypes.STRING,
    filled: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  city_tour.associate = function (models) {
    // associations can be defined here
    city_tour.belongsToMany(models.user, {
      through: 'ct_user',
      // foreignKey: 'id_ct_user' // if the id is different in DB
      // as: 'users' // if you want, it depends on you ;) (it is necessary in queries)
    })
  };
  return city_tour;
};