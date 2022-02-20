//entry point of all routes
const express = require('express');
//adding home controller folder
const homeController = require('../controllers/home_controller');
// adding Router function
const router = express.Router();

// home page of app
router.get('/', homeController.home);
//route for creating contact
router.post('/create-todo', homeController.createtodo);
//route for deleting contact
router.get('/delete-task', homeController.deletetask);
//to check whether router is loaded or not
console.log('router loaded');
//exporting to main folder index
module.exports = router;