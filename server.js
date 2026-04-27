const http = require("http");
const mongodb = require("mongodb");
const { connect } = require("http2");

let db;
const connectionString = 
"mongodb+srv://Angel:qwertyon_2786@cluster0.gs4tnic.mongodb.net/Reja?retryWrites=true&w=majorityappName=Cluster0";

mongodb.connect(
    connectionString,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if (err) console.log("ERROR on connecting MongoDB");
    else{
        console.log("MongoDB connection succeed");
       module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
    console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
    );
    }); 
   }
}
);

