var express = require("express");
const { Scholarship } = require("../../models/scholarship");
var router = express.Router();
const validateScholarship = require("../../middlewares/validateScholarship");
const somMid = require("../../middlewares/somMid");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  let scholarships = await Scholarship.find();
  res.send(scholarships);
});

// Get single

router.get("/:id", somMid, async function (req, res, next) {
  try {
    let scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship)
      return res.status(400).send("No Scholarship against given ID");
    return res.send(scholarship);
  } catch (error) {
    return res.status(400).send("Invalid ID");
  }
});

// Post
router.post("/", validateScholarship, async function (req, res, next) {
  let scholarship = new Scholarship();
  scholarship.title = req.body.title;
  scholarship.description = req.body.description;
  scholarship.program = req.body.program;
  scholarship.amount = req.body.amount;
  scholarship.date = req.body.date;
  scholarship.eligibility = req.body.eligibility;
  scholarship.link = req.body.link;

  await scholarship.save();

  res.send(scholarship);
});

// Put
router.put("/:id", validateScholarship, async function (req, res, next) {
  let scholarship = await Scholarship.findById(req.params.id);
  scholarship.title = req.body.title;
  scholarship.description = req.body.description;
  scholarship.program = req.body.program;
  scholarship.amount = req.body.amount;
  scholarship.date = req.body.date;
  scholarship.eligibility = req.body.eligibility;
  scholarship.link = req.body.link;

  await scholarship.save();

  res.send(scholarship);
});

//   Delete

router.delete("/:id", async function (req, res, next) {
  let scholarship = await Scholarship.findByIdAndDelete(req.params.id);
  res.send(scholarship);
});

module.exports = router;
