module.exports = ({ axios }) => ({
  async get() {},
  async post(req, res) {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const found = users.find((x) => x.id === req.body.userId);
    if (!found) return res.sendStatus(500);

    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      req.body
    );

    res.sendStatus(200).json(data);
  },
});
