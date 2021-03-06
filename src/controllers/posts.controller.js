module.exports = ({ axios }) => ({
  async get(req, res) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.status(200).json(data);
  },
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

    res.status(200).json(data);
  },
});
