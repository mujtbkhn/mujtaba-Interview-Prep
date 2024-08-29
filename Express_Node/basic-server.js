const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Task } = require('./models/task');
const { errorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./db');
const access = require("./middlewares/access")


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", access, async (req, res, next) => {
    try {
        const task = await Task.find({});
        let data = req.user;
        data = data.filter(item => item.name = "Leanne")
        return res.status(200).json({ msg: "Hello user!", data: data, task });
    } catch (error) {
        console.log(error)
    }
});

app.get("/single/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }
        res.json({ message: "Task Found!!", task });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
});

app.post("/add", async (req, res, next) => {
    try {
        const { title, description, section } = req.body;
        if (!title) {
            return res.status(401).json({ message: "Title not found" });
        }
        const task = await Task.create({ title, description, section });
        return res.json({ task, message: "Task created successfully" });
    } catch (error) {
        next(error); // Pass error to the error handler
        // if(error.name==='ValidationError'){
        //     const errorMessages = Object.values(error.errors).map(err => err.message)
        //     res.status(400).json({message: errorMessages})
        // }else{
        //     res.status(500).json({message: "server error"})
        // }
    }
});

app.put("/:id", async (req, res, next) => {
    try {
        const { done } = req.query;
        const { id } = req.params;
        if (done !== 'true' && done !== 'false') {
            return res.status(400).json({ message: "Pick either 'true' or 'false'" });
        }
        const doneValue = done === 'true';
        const updatedTask = await Task.findByIdAndUpdate(id, { $set: { done: doneValue } }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
});

app.put("/update/:id", async (req, res, next) => {
    try {
        const { title, description, done } = req.body;
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, { $set: { title, description, done } }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
});

app.delete("/delete/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Task.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        next(error); // Pass error to the error handler
    }
});

app.use(errorHandler);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
