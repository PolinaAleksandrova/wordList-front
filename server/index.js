const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234QWERasdf",
    database: "word_list"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) =>{
    const sqlGet = "SELECT * FROM word";
    db.query(sqlGet,(error, result) => {
        res.send(result);
    });
});

app.post("/api/post", (req, res) =>{
    const {word_name, audio_name} = req.body;
    const sqlInsert = "INSERT INTO word (word_name, audio_name) VALUES (?, ?)";
    db.query(sqlInsert, [word_name, audio_name], (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

app.delete("/api/remove/:id", (req, res) =>{
    const {id} = req.params;
    const sqlRemove =
    "DELETE FROM word WHERE id =?";
    db.query(sqlRemove, id, (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

app.get("/api/get/:id", (req, res) =>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM word where id = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) =>{
    const {id} = req.params;
    const {word_name, audio_name} = req.body;
    const sqlUpdate = "UPDATE word SET word_name = ?, audio_name = ? WHERE id = ?";
    db.query(sqlUpdate, [word_name, audio_name, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/",(req, res) => {
    // const sqlInsert = 
    // "INSERT INTO word (word_name, audio_name) VALUES ('word3', 'audio3')";
    // db.query(sqlInsert, (error, result) =>{
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hello Express");
    // });
   
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})