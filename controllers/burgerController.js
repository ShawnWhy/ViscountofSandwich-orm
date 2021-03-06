var express = require("express");

var router = express.Router();

var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Burgerlord_db"
});};

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
      burgers.allUneaten(function(data){
          var uneaten = data;
      connection.query("SELECT * FROM burgers WHERE eaten=1", function(err, data){
        if(err) throw err;
        var eaten=data;
  
      res.render("index", { burgers : uneaten, eatenBurger:eaten});
  
      // IF(completed, 'true', 'false') completed
        
      })
  
  
    
    });
  });

router.post("/", function(req, res) {

  // res.json(req.body);
burgers.create(["top_bun, cheese, Lettice, meat, bottom_bun, name, eaten"],([req.body.top_bun, req.body.cheese, req.body.Lettice, req.body.meat, req.body.bottom_bun, req.body.name, req.body.eaten]),function(result){
    // if(err) throw err;
 res.json({id:result.insertId});
})});

router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;

    burgers.update({eaten:1},condition,function(result){
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  


    module.exports = router;





    //     if (err) throw err;
  // Test it
  // console.log('You sent, ' + req.body.cheese);

  // // Test it
  // return res.json( req.body.cheese);


// connection.query("INSERT INTO burgers (top_bun, cheese, lettice, meat, bottom_bun, name, eaten) VALUES (?,?,?,?,?,?,?)", [req.body.top_bun, req.body.cheese, req.body.lettice, req.body.meat, req.body.bottom_bun, req.body.name, req.body.eaten], function(err, result) {
//     if (err) throw err;
// res.json({ id: result.insertId });
// console.log({ id: result.insertId });

// res.redirect("/");
  // });

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
