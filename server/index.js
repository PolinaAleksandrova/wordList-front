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


app.get("/",(req, res) => {
     const sqlInsert = 
     "INSERT INTO word (word_name, audio_name) VALUES ('word5', 'audio5')";
     db.query(sqlInsert, (error, result) =>{
         console.log("error", error);
         console.log("result", result);
         res.send("Hello Express");
     });
   
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})