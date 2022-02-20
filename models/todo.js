//mongoose module
const mongoose = require('mongoose');
// creating schema
const todoSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum : ['Personal', 'Work', 'School', 'Coding', 'Other'],
        required: true
    },
    duedate: {
        type: String,
        required: true
    }

})

//creating our model
const Todo = mongoose.model('Todo', todoSchema);
// exporting to main index.js
module.exports = Todo;