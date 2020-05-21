const express = require("express");
const router = express.Router();

const Hobbits = require("./hobbitsModel");

router.get("/", (req, res) => {
  Hobbits.get()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json(error.message);
    });
});

router.post("/", (req, res) => {
  const hobbit = req.body;
  console.log(hobbit);
  Hobbits.add(hobbit)
    .then((newHobbit) => {
      console.log("in .then", newHobbit);
      res.status(200).json(newHobbit);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json(error.message);
    });
});
module.exports = router;
