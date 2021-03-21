module.exports = (req, res, next) => {
  const userID = req.header("user_id");

  if (userID !== "1") {
    return res.sendStatus(400);
  }
  next();
};
