var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Salam Brother');
})

app.listen(80, () => console.log('express server started successfully.'));
