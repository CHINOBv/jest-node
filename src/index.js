const express = require("express");
const app = express();
const morgan = require("morgan");
const authenticate = require("./middlewares");

const { UsersRoutes, PostsRoutes } = require("./routes");

const port = 4000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.use(authenticate());

app.use("/users", UsersRoutes);
app.use("/posts", PostsRoutes);

app.listen(port, () => console.log(`Example app listening on port 4000!`));
