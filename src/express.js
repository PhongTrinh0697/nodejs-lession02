import express from "express";
import {tasks} from "./data.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// get tasks
app.get('/tasks', async(req, res) =>{
    res.json(tasks);
});

// create tasks
app.post('/tasks', async(req, res) =>{
    const data = req.body;
    
    console.log("Tasks data :", data);

    // thêm tasks vào danh sách
    tasks.push(data);
    res.json(data);
});

// find task by id
app.get("/tasks/:id", async(req, res) =>{
    const params = req.params;
    const id = params.id;
    console.log("Get tasks by ID :", id);
   const task = tasks.find((i) =>i.id === id);
   res.json({
    task
   });
   
});


// delete task by id
app.delete("/tasks/:id", async(req, res) =>{

    const id = req.params.id;

    console.log("Delete task by ID :", id);

    tasks.filter((i) => i.id !==id);
    res.json({status : true})
});

app.listen(3000, () =>{
    console.log('ExpressJS Server is running on port 3000');
})

