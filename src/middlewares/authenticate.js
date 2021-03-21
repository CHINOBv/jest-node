module.exports = (req, res, next) => {
  const userID = req.header("user_id");

  if (userID !== "1") {
    res.sendStatus(403);
  }
  next();
};
