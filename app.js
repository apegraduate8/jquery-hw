const express = require('express'),
          mustache = require('mustache-express'),
          bodyParser = require('body-parser'),
          pg = require('pg-promise')();
          cookiePars = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 8080;
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +'/public'));

app.use(cookiePars());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./router.js'));



app.listen(PORT, () => console.log("the server is up "+PORT))

