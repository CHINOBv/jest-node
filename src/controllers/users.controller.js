module.exports = ({ axios }) => ({
  async get(req, res) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.sendStatus(200).json(data);
  },
  async post(req, res) {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      req.body
    );

    res.sendStatus(201).json(data);
  },
  async put(req, res) {
    const { id } = req.params;
    const { body } = req;

    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    res.sendStatus(204);
  },
  async delete(req, res) {
    const { id } = req.params;

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    res.sendStatus(204);
  },
});
