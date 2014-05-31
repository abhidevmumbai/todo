var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	    task: String,
	    done: Boolean
	});

var TaskModel = mongoose.model('Task', taskSchema);

var daySchema = new mongoose.Schema({
		tasks: [taskSchema],
		date: { type: Date, required: true},
	});

var DayModel = mongoose.model('Day', daySchema);

module.exports = DayModel;