module.exports = (req, res, next) => {
  const userID = req.headers("user_id");
  if (userID !== 1) {
    res.sendStatus(403);
  }
  next();
};
