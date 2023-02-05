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

/*------------------'WORD' TABLE---------------------*/
/*GET 'WORD' TABLE*/
app.get("/api/get", (req, res) =>{
    const sqlGet = "SELECT * FROM word";
    db.query(sqlGet,(error, result) => {
        res.send(result);
    });
});

/*POST 'WORD' TABLE*/
app.post("/api/post", (req, res) =>{
    const {word_name, audio_name} = req.body;
    const sqlInsert = "INSERT INTO word (word_name, audio_name) VALUES (?, ?)";
    db.query(sqlInsert, [word_name, audio_name], (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

/*DELETE 'WORD' TABLE*/
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

/*GET ID 'WORD' TABLE*/
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

/*PUT ID 'WORD' TABLE*/
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

/*------------------'translate' TABLE---------------------*/
/*GET 'translate' TABLE*/
app.get("/translate/get", (req, res) =>{
    const sqlGet = "SELECT * FROM translate";
    db.query(sqlGet,(error, result) => {
        res.send(result);
    });
});

/*POST 'translate' TABLE*/
app.post("/translate/post", (req, res) =>{
    const {translate_name, audio_name} = req.body;
    const sqlInsert = "INSERT INTO translate (translate_name, audio_name) VALUES (?, ?)";
    db.query(sqlInsert, [translate_name, audio_name], (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

/*DELETE 'translate' TABLE*/
app.delete("/translate/remove/:id", (req, res) =>{
    const {id} = req.params;
    const sqlRemove =
    "DELETE FROM translate WHERE id =?";
    db.query(sqlRemove, id, (error, result) => {
        if(error) {
            console.log(error);
        }
    });
});

/*GET ID 'translate' TABLE*/
app.get("/translate/get/:id", (req, res) =>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM translate where id = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

/*PUT ID 'translate' TABLE*/
app.put("/translate/update/:id", (req, res) =>{
    const {id} = req.params;
    const {translate_name, audio_name} = req.body;
    const sqlUpdate = "UPDATE translate SET translate_name = ?, audio_name = ? WHERE id = ?";
    db.query(sqlUpdate, [translate_name, audio_name, id], (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});







// app.get("/translateTable",(req, res) => {
//      const sqlInsert = 
//      "INSERT INTO translate (translate_name, audio_name) VALUES ('123', '456')";
//      db.query(sqlInsert, (error, result) =>{
//         console.log("error", error);
//        console.log("result", result);
//          res.send("Hello Express");
//     });
   
// });

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})