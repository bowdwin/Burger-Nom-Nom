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
  router.post("/api/burgers", (req, res) => {
    burger.create(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      }
    );
  });

  router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update(
      {
        devoured: req.body.devoured,
      },
      condition,
      (result) => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, (result) => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
// Export routes for server.js to use.
module.exports = router;
