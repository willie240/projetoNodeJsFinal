'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  task.init({
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    realizada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};