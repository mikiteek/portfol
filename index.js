const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main", // главный файл в layouts
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  extname: "hbs", //ext в движке ниже
  // helpers: require("./utils/hbs-helpers")
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about")
});








const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})