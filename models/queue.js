'use strict';
module.exports = (sequelize, DataTypes) => {
  var Queue = sequelize.define('Queue', {
  	id: { 
  		type: DataTypes.INTEGER.UNSIGNED,
  		allowNull: false, 
  		autoIncrement: true,
  		primaryKey: true

  	},
    name: DataTypes.STRING,
    token: DataTypes.STRING,
    status : {
      type : DataTypes.BOOLEAN(4),
      defaultValue : 0

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
        tableName : 'queues'
  });
  Queue.associate = function(models) {
    // associations can be defined here
    models.Queue.belongsTo(models.Department);
    models.Queue.belongsTo(models.Counter);
    models.Queue.belongsTo(models.User);

  };
  return Queue;
};