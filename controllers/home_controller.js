//database configuration
const db = require('../config/mongoose');
//database model
const Todo = require('../models/todo');
// home page of our app
module.exports.home = function(req, res){
//finding all document in database
    Todo.find({}, function(err, task){
        //on error
        if(err){
            console.log("error in fetching task from db");
            return;
        }
        //on sucessful rendering our page
        return res.render('home',{
            title: "Ninja Keep",
            todotask: task
        });

    })
}
//creating task
module.exports.createtodo = function(req, res){
    //creating in database
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(err, newTodo){
        // on error
        if(err){console.log('Error in creating a task!')
            return;}
            console.log('******', newTodo);
            return res.redirect('back');
    })
}
// deleting task
module.exports.deletetask = function(req, res){
    // taking the id
    let id = req.query.id;
    // deleting element by id
    Todo.findByIdAndDelete(id, function(err){
        //on error
        if(err){
            console.log('error in deleting task');
            return;
        }
        //on sucessful
        return res.redirect('back');
    });
}