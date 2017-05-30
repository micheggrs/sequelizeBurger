// calls the orm object with burger db specific information
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
