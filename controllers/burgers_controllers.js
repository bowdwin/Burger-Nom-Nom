const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hdbrsObj = {
      burgers: data,
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
  router.post("/api/burgers", function (req, res) {
    burger.create(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      }
    );
  });
});

// Export routes for server.js to use.
module.exports = router;
