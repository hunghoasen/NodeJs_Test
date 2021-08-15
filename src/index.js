const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path');

const app = express();

const port = 3000;

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'resources\\views'));

//console.log('View: ',path.join(__dirname,'resources\\views'));

app.get('/', function (req, res) {
  res.render('home');
})
 

app.get('/news', function (req, res) {
  res.render('news');
})

//127.0.0.1 - localhost
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`); })