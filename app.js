const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const expressvalidator = require("express-validator")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressvalidator())

const todos = [
  
];

app.get("/", function(req, res){
  res.render("index", { todos: todos })
});

app.post("/", function(req, res){
  todos.push(req.body.todo)
  res.redirect("/")
})









app.listen(3000, function() {
  console.log("Listening on 3000")
})
