var express = require('express');
var taskService = require('../services/taskService');
var router = express.Router();



router.get("/", function(req,res,next){
	res.render("tasks/index", {tasks : taskService.getAll()});
});

router.post("/add", function(req,res,next){
	taskService.add(req.body.taskName)
	res.render("tasks/index", {tasks : taskService.getAll()});
});

module.exports = router;