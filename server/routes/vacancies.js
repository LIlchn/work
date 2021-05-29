const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

// Load vacancy model
const Vacancy = require("../models/Vacancy");
const User = require("../models/User");

// @route GET api/vacancies
// @description Get all vacancies
// @access Public
router.get("/", (req, res) => {
  Vacancy.find()
    .then((vacancies) => res.json(vacancies))
    .catch((err) =>
      res.status(404).json({ novacanciesfound: "No vacancies found" })
    );
});

router.get("/personal", auth, async (req, res) => {
  try {
    const vacancies = await Vacancy.find({
      "owner.id": req.user.userID,
    });
    res.json(vacancies);
  } catch (error) {
    res
      .status(500)
      .json({ message: `oof, pc.routes.js (/personal) error: <br> ${error}` });
  }
});

// @route GET api/vacancies/:id
// @description Get single vacancy by id
// @access Public
router.get("/:id", (req, res) => {
  Vacancy
    .findById(req.params.id)
    .then((vacancy) => res.json(vacancy))
    .catch((err) =>
      res.status(404).json({ novacancyfound: "No vacancy found" })
    );
});

router.post("/", auth, async (req, res) => {
  try {
    const { name, description, category, level, conditions, contact, ...rest } = req.body;

    const ownerID = req.user.userID;

    const owner = await User.findOne({ _id: ownerID });
    const ownerName = owner.name;

    const vacancy = new Vacancy({
      name,
      description,
      published_date: Date.now(),
      category,
      level,
      conditions,
      contact,

      owner: {
        id: ownerID,
        name: ownerName,
      },
    });

    await vacancy.save();

    res.status(200).json(vacancy);
  } catch (error) {
    res
      .status(500)
      .json({ message: `oof, error: <br> ${error}` });
  }
});

// @route GET api/vacancies/:id
// @description Update vacancy
// @access Public
router.put("/:id",auth, (req, res) => {
  vacancy
    .findByIdAndUpdate(req.params.id, req.body)
    .then((vacancy) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/vacancies/:id
// @description Delete vacancy by id
// @access Public
router.delete("/:id",auth, (req, res) => {
  vacancy
    .findByIdAndRemove(req.params.id, req.body)
    .then((vacancy) => res.json({ mgs: "vacancy entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a vacancy" }));
});

module.exports = router;
