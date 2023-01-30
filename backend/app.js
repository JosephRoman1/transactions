const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

const mongoose = require("mongoose");

//place your MongoDB connection string here!
const connectionString = "";  

const routes = require('./routes/Routes');
app.use('/', routes);


mongoose.connect(connectionString, { useNewUrlParser: true } ).then(() => {
    console.log("Mongoose is connected");
},error => { console.log("Mongoose could not connect to the database: " + error);
});

app.get('/', function(req, res) {
    res.send('hello world')
});



app.listen(3001, function() {
    console.log("Server was started on localhost:3001");
});