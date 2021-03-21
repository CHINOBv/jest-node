const { UsersController } = require("../controllers");
const axios = require("axios");
const router = require("express").Router();

const UsersControllers = UsersController({ axios });

router.get("/", UsersControllers.get);

router.post("/", UsersControllers.post);

router.put("/:id", UsersControllers.put);

router.delete("/:id", UsersControllers.delete);

module.exports = router;
