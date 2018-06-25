'use strict';
module.exports = (sequelize, DataTypes) => {
  var Counter = sequelize.define('Counter', {
  	id: { 
  		type: DataTypes.INTEGER.UNSIGNED,
  		allowNull: false, 
  		autoIncrement: true,
  		primaryKey: true

  	},
    name: DataTypes.STRING,
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
        tableName : 'counters',
  });
  Counter.associate = function(models) {
    // associations can be defined here
    models.Counter.belongsTo(models.Department);
    models.Counter.hasMany(models.Queue);

  };
  return Counter; 
};