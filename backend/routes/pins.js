const router = require("express").Router();
let Pin = require("../models/pin.model");

router.route("/").get((req, res) => {
  Pin.find()
    .then((pins) => res.json(pins))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const employeeName = req.body.employeeName;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newPin = new Pin({
    employeeName,
    description,
    date,
  });

  newPin
    .save()
    .then(() => res.json("Pin added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
