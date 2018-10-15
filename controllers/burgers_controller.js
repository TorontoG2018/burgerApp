var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {

    var newBurger = req.body.burger_name.toString();
    console.log(newBurger);

    burger.insertOne("burger_name", newBurger, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({devoured: true}, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});


module.exports = router;