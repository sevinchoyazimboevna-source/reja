console.log('Web serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const http = require("http");
// const fs  = require("fs");

// let user;
// fs.readFile("databace/user.json", "utf8", (err, data) => {
//     if(err) {
// console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);  
//     }
// });    

//MongoDB connect

const db = require("./server").db();

// 1;Kirish codlari

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//2 sessionga boglik kodlar
//3views code

app.set("views", "views");
app.set("view engine", "ejs");  
                
//4routing code

// app.get("/Angel", function ( req , res) {
//     res.end(`<h1 style="background: red ">Hello World Im ANGEL</h1>`);
// });

// app.get("/gold", function ( req , res) {
//     res.end(`<h1 style="background: red ">Golden moments</h1>`);
// });

app.post("/create-item", (req, res) => {

    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.end("successfully added");
        }
    });
});
  
// app.get("/author", (req, res) => { 
//     res.render("author", {user: user});
// });

app.get('/', function (req, res) {
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
             res.render("reja");
        }
  });      
});


module.exports = app;  




// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//     console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// }); 

