const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const employeeName = req.body.employeeName;
  const newEmployee = new Employee(employeeName);

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
