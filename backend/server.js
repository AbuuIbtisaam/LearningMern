// Imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import model from "./model.js";

//Initialize express app
const app = express()
const port = process.env.PORT || 9000

//middleware
app.use(cors())
app.use(express.json())

//Initialize database: modify the connection string by add your password on password field and add your database name after /, mongodb.net/<databasename>?retry...
const mongoURL = "mongodb+srv://mansoor:abcd@cluster0.88a5zv9.mongodb.net/mydatabase?retryWrites=true&w=majority";
mongoose.connect(mongoURL)

mongoose.connection.once("open", () => {
    console.log('Database Connected!')
})

//Routes
app.get('/', (req,res) => res.status(200).send("Hello Mansoor"))

//get
app.get("/get/projects/", (req, res) => {
    model.find((err,data) => {
        err ? res.status(500).send(err) : res.status(201).send(data);
    })
})

//post
app.post("/new/project/", (req, res) => {
    const projectData = req.body;
    model.create(projectData, (err, data) => {
        err ? res.status(500).send(err) : res.status(201).send(data)
    })
})

//listen
app.listen(port, () => console.log(`Listening on port: ${port}`))