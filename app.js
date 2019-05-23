var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('test.html');
});

app.listen(3000, function(){
	console.log('Connected 3000');
});