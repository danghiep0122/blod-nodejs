

const path = require('path')
const express = require("express");
const morgan = require("morgan")
const { engine } = require ('express-handlebars');
const app = express();

//Template engine
// app.engine('handlebars', handlebars())
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
const port = 3000;

//HTTP logger
app.use(morgan('combined'))

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
