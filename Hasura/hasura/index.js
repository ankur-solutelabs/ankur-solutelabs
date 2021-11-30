const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require("sequelize")

app.use(express.json());

app.listen(3001,() => {
    console.log(`server listining on port 3001`)
});

const POSTGRES_CONNECTION_STRING = "postgres://postgres:ankur@123@localhost:5432/adminTeacherMgmt"

// function echo(event) {
//    let responseBody = '';
//     if (event.op === "INSERT") {
//         responseBody = `New user ${event.data.new.id} inserted, with data: ${event.data.new.name}`;
//     }
//     else if (event.op === "UPDATE") {
//         responseBody = `User ${event.data.new.id} updated, with data: ${event.data.new.name}`;
//     }
//     else if (event.op === "DELETE") {
//         responseBody = `User ${event.data.old.id} deleted, with data: ${event.data.old.name}`;
//     }

//     return responseBody;
// };

// app.use(bodyParser.json());

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


// app.post('/update', async (req, res) => {

//     console.log(req.body)

//     // // get request input
//     // const { inClass } = req.body.input;
  
//     // // run some business logic
  
  
//     // /*
//     // // In case of errors:
//     // return res.status(400).json({
//     //   message: "error happened"
//     // })
//     // */
  
//     // // success
//     // return res.json({
//     //   firstName: "<value>"
//     // })
  
//   });
