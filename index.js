//import express
const express = require('express');
//initilize the app
const app = express();
const path = require('path');
// the port on which server is working
const port = 8000;

//using url encoder to get the query params 
app.use(express.urlencoded());
//assets folder middleware
app.use(express.static('assets'));
//using routes folder
app.use('/', require('./routes'));
//setting view engine to ejs
app.set('view engine', 'ejs');
//view folder
app.set('views', './views');
//listen to port 8000
app.listen(port, function(err){
    //on error
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    //on sucessfull
    console.log(`Server is running on port: ${port}`);
});