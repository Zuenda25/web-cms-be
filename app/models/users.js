const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    sexId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    createdFrom: DataTypes.STRING,
    updateBy: DataTypes.STRING,
    updateFrom: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
