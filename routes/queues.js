var express = require('express');
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var db = require('../models');
// const Op = db.Sequelize.Op;
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET home page. */
router.get('/create', function(req, res, next) {
	models.Department.findAll({
		where : {
			"status" : 1
		}
	}).then(departments => {
		// console.log(123123);
		// console.log(req.flash('queue'));
		errors = req.flash('errors');
		old = req.flash('old');
		// console.log(errors);
		// console.log(errors, old);
		res.render('queues/add', { 
			departments: departments,
			queue : req.flash('queue'),
			errors : errors,
			old : old
		});



	})
	
});

router.post('/create',  [
	body('department_id', 'Department is require.').isLength({ min: 1 }).trim().custom(value=>{
		if(value) {


			return models.Department.findById(value).then(department=>{
				if(!department) {
					return Promise.reject('Department is invalid.');
				}
			});
		}

		return true;
	}),
	body('name', 'Name is require.').isLength({ min: 1 }).trim(),
	sanitizeBody('*').trim().escape(),

	function (req, res, next) {
	
		const errors = validationResult(req);

		if (errors.isEmpty())
		{
			


			models.Department.findOne({

				where : {
					status: 1,
					id : req.body.department_id
				},

			}).then(department=>{
				return models.sequelize.transaction(function (t) {

				  // chain all your queries here. make sure you return them.
				  return models.Queue.create({
				 	name : req.body.name,
				  	department_id:  req.body.department_id,
				  	letter: department.dataValues.letter,
					number : department.dataValues.start
				  }, {transaction: t}).then(function (queue) {
				  		return models.Department.update({
				  			start : department.dataValues.start + 1
				  		}, {
				  			where : {
				  				id : department.dataValues.id
				  			},
				  			transaction: t,
				  		}).then(function(){
				  			return queue;
				  		});
				  });

				}).then(function (queue) {

					req.flash('queue', queue);
					res.redirect('/queues/create');

				}).catch(function (err) {



				});
			})
		} else {
			// errors.isEmpty()
			
			req.flash('old',req.body);
			req.flash('errors', errors.array());
			res.redirect('/queues/create');
		}



	}
]);

module.exports = router;
