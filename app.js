// Module dependency
const express = require('express');
const path = require('path');

// Create Express Server
const app = express();

app.use('/', express.static(path.join(__dirname, 'app')));
var wwwRoot = path.normalize(__dirname + '/app')
// const HTML_DIR = path.join(__dirname, '/public/')
// app.use(express.static(HTML_DIR))
// Create Route
app.get('/',(req,res,next)=>{
    res.sendFile(wwwRoot + '/index.html')
})
app.get('/:id',(req,res,next)=>{
    res.sendFile(wwwRoot + '/html/videoPlayer.html')
})

// Create Server port
var port = 3000;
app.listen(port, function(){
    console.log('listen port run on ' + port);
});

