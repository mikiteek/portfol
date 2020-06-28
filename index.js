const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const homeRouts = require("./routes/home");
const aboutRouts = require("./routes/about");
const newsRouts = require("./routes/news");
const projectsRouts = require("./routes/projects");
const contactRouts = require("./routes/contact");
const loginRouts = require("./routes/login");
const addRouts = require("./routes/add");


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
app.use(express.urlencoded({extended: true}));

// routes registration
app.use("/", homeRouts);
app.use("/about", aboutRouts);
app.use("/news", newsRouts);
app.use("/projects", projectsRouts);
app.use("/contact", contactRouts);
app.use("/auth/login", loginRouts);
app.use("/add", addRouts);








const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})