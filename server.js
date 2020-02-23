var express = require("express");


var PORT = process.env.PORT || 8083;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


// var exphbs = require("express-handlebars");
// var mysql = require("mysql");

// var app = express();

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8083;

// Sets up the Express app to handle data parsing




// Handlebars.registerHelper('if_eq', function(a, b, opts) {
//   if (a == b) {
//       return opts.fn(this);
//   } else {
//       return opts.inverse(this);
//   }
// });

// if(process.env.JAWSDB_URL){
//   connection=mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "Burgerlord_db"
// });};

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });




// // Post route -> back to home
// app.post("/", function(req, res) {
//   // Test it
//   // console.log('You sent, ' + req.body.cheese);

//   // // Test it
//   // return res.json( req.body.cheese);


// connection.query("INSERT INTO burgers (top_bun, cheese, lettice, meat, bottom_bun, name, eaten) VALUES (?,?,?,?,?,?,?)", [req.body.top_bun, req.body.cheese, req.body.lettice, req.body.meat, req.body.bottom_bun, req.body.name, req.body.eaten], function(err, result) {
//     if (err) throw err;
// res.json({ id: result.insertId });
// console.log({ id: result.insertId });

// // res.redirect("/");
//   // });
// });
// })
// app.put("/api/burgers/:id", function(req, res){
//  var id = parseInt( req.params.id);
//  console.log(id)
//   connection.query("UPDATE burgers SET eaten=1 where id =?",[id], function(err, result){
//       if(err) throw err;
//       res.json({ id: result.insertId });

//   })
// })
// Start our server so that it can begin listening to client requests.



