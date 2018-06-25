var express = require('express');
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var db = require('../models');
const Op = db.Sequelize.Op;

/* GET home page. */
router.get('/create', function(req, res, next) {
	models.Department.findAll({
		where : {
			"status" : 1
		}
	}).then(departments => {
		// console.log(departments);
		res.render('queues/add', { 
			departments: departments 
		});

	})
	
});

router.post('/create', function (req, res) {
	

	models.Department.findOne({

		where : {
			status: 1,
			id : req.body.department_id
		},

	}).then(department=> {

		department.start = department.start + 1;
		department.save();
		return department;

	}).then(department => {

		// 'insert into queues(name, department_id) values(:name, :department_id);',
		return db.sequelize.query(
			'insert into queues(name, department_id, token) values(:name, :department_id, :token);',
			{
				raw: true,
				replacements: { 
					name: req.body.name, 
					department_id:  req.body.department_id,
					token: department.letter + '-' + department.start
				}
			}
		);


	}).then(department => {
		res.redirect('/queues/create');
	});
	

  // console.log(req.body);
  // models.Queue.create({
  //   name: req.body.name,
  //   department : 3
  // })
	// .then(function(queue) {
	// 	queue
  	// queue.setDepartment(req.body.department_id);
  // });
});

module.exports = router;
