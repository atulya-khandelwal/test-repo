const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Harsh%401234@ayulyaclustor.iwlsmgr.mongodb.net/todoapp');


const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    completed:{
        type:Boolean,
        default: false
    }
})

const Todo = mongoose.model('todo', todoSchema)

module.exports = Todo;