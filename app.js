// Module dependency
const express = require('express');
const path = require('path');

// Create Express Server
const app = express();

app.use('/', express.static(path.join(__dirname, 'app')));
var wwwRoot = path.normalize(__dirname + '/app')

// Create Route
app.get('/',(req,res,next)=>{
    res.sendFile(wwwRoot + '/html/homeMediaPlayer.html')
})
app.get('/:id',(req,res,next)=>{
    res.sendFile(wwwRoot + '/html/videoPlayer.html')
})

// Create Server port
var port = 3000;
app.listen(port, function(){
    console.log('listen port run on ' + port);
});

