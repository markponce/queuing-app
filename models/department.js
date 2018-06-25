'use strict';
module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
  	id: { 
  		type: DataTypes.INTEGER.UNSIGNED,
  		allowNull: false, 
  		autoIncrement: true,
  		primaryKey: true

  	},
    name: DataTypes.STRING,
    letter: DataTypes.STRING,
    start : DataTypes.INTEGER.UNSIGNED,
        status : {
      type : DataTypes.BOOLEAN(4),
      defaultValue : 1

    },
    created_at: { 
    	type: DataTypes.DATE, 
    	defaultValue: DataTypes.NOW 
    },
    updated_at: { 
    	type: DataTypes.DATE, 
    	defaultValue: DataTypes.NOW 
    }
  }, {
        tableName : 'departments'
  });
  Department.associate = function(models) {
    // associations can be defined here
    // console.log(models);
    models.Department.hasMany(models.Counter);
    models.Department.hasMany(models.Queue);

    // console.log(models )
  };
  return Department;
};