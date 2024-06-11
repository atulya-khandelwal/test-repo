const express = require('express')
const { createTodo, updateTodo } = require('./types')
const  Todo  = require('./db')
const cors = require('cors')
const app = express()

const port = 3001;
app.use(express.json());
app.use(cors())
app.post('/todo',async(req,res)=>{
    const input = req.body;
    console.log("input" + input);

    const validInput =  createTodo.safeParse(input);
    console.log("validinput" + validInput)

    if(!validInput.success){
        res.status(400).json({error: 'Invalid input'});
    }else{
        //logic to create todo
        await Todo.create({
            title: input.title,
            description: input.description,
        })
        res.json({message: 'Todo created successfully'});
    }

    
})

app.get('/todos', async(req,res)=>{
    //logic to get all todos
    const todos = await Todo.find()
    res.json(todos)
})

app.put('/updatetodo', async(req,res)=>{
    const input = req.body;
    const validInput = updateTodo.safeParse(input);

    if(!validInput.success){
        res.status(400).json({error: 'Invalid input'});
    }else{
        //login to update todo
        await Todo.updateOne({_id: validInput.data.id},{completed: true} )
        res.json({message: 'Todo updated successfully'});

    }
})


app.listen(port, ()=> console.log(`app is listing on port ${port}`))