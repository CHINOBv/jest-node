const router = require("express").Router();

router.get("/", (req, res) => res.send("value"));

module.exports = router;
