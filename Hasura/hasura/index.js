const express = require('express');
const app = express();
const sequelize = require("sequelize")

app.use(express.json());

const server = app.listen(3001,() => {
    console.log(`server listining on port 3001`)
});

const POSTGRES_CONNECTION_STRING = "postgres://postgres:ankur@123@localhost:5432/postgres"

app.post("/student", async (req,res) => {
    console.log(req.body)
     
    const Sequelize = new sequelize(POSTGRES_CONNECTION_STRING, {});

    const studentId = req.body.id;

    await Sequelize.query("INSERT INTO student(student_id) values(:studentId);", {

    replacements:{
        studentId,
    }  
})

res.status(200)
})