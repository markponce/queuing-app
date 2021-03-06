'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
  	id: { 
  		type: DataTypes.INTEGER.UNSIGNED,
  		allowNull: false, 
  		autoIncrement: true,
  		primaryKey: true

  	},
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password : DataTypes.STRING,
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

        tableName : 'users'

  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};