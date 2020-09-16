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

router.route("/:id").get((req, res) => {
  Pin.findById(req.params.id)
    .then((pin) => res.json(pin))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pin deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Pin.findById(req.params.id)
    .then((pin) => {
      pin.employeeName = req.body.employeeName;
      pin.description = req.body.description;
      pin.date = Date.parse(req.body.date);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
