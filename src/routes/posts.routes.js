const router = require("express").Router();
const axios = require("axios");

const { PostsController } = require("../controllers");
const authenticate = require("../middlewares/authenticate");

const PostsControllers = PostsController({ axios });

router.use(authenticate);
router.post("/", PostsControllers.post);
router.get("/", PostsControllers.get);
module.exports = router;
