const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
});
// all your routes here

module.exports = router;
