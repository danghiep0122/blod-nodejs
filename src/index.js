const path = require('path')
const express = require("express");
const morgan = require("morgan")
const { engine } = require ('express-handlebars');
const app = express();

const route = require('./routes/index.js')

app.use(express.static(path.join(__dirname,'public')))

//Template engine
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
const port = 3000;

//HTTP logger
app.use(morgan('combined'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
