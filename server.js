const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

//Sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");
app.use(routes);
///test

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
