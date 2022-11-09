const router = require("express").Router();
const { get } = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("/celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  try {
    const newCelebrity = await Celebrity.create({
      name,
      occupation,
      catchPhrase,
    });
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
