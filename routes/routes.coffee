express = require 'express'

view = require './view' 
user = require './user' 
tasks = require './tasks' 
middleware = require './../config/middleware'

module.exports = (app, passport) ->
	app.route '/'
		.all middleware.requiresLogin
		.get view.tasks
	app.route '/home'
		.get view.home
	app.route '/login'
		.post user.login passport
	app.route '/signup'
		.post user.signup passport
	app.route '/logout'
		.get user.logout

	api = express.Router()
	api.use middleware.requiresLogin
	api.route '/tasks'
		.post tasks.add
		.get tasks.all
	api.route '/tasks/:task_id'
		.get tasks.find
		.put tasks.update
		.delete tasks.delete
	app.use('/api', api)