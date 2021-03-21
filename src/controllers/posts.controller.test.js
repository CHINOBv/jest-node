const PostsController = require("./posts.controller");

describe("Posts Controller", () => {
  describe("Posts Methods", () => {
    it("Should Create A New Post", async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

      const post = {
        userId: 1,
        id: 1,
        title: "t",
        body: "b",
      };
      const req = {
        body: post,
      };
      const res = {
        json: jest.fn().mockResolvedValue({ data: mockUsers }),
        status: jest.fn().mockReturnThis(),
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };

      await PostsController({ axios }).post(req, res);

      expect(axios.post.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/posts", post],
      ]);
      expect(axios.get.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users"],
      ]);
      expect(res.json.mock.calls).toEqual([[{ id: 1000 }]]);
      expect(res.status.mock.calls).toEqual([[200]]);
    });

    it("Shoud Fail And Not Create The Post If ID Does Not Exist", async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

      const post = {
        userId: 4,
        id: 1,
        title: "t",
        body: "b",
      };
      const req = {
        body: post,
      };
      const res = {
        json: jest.fn().mockResolvedValue({ data: mockUsers }),
        sendStatus: jest.fn().mockReturnThis(),
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };

      await PostsController({ axios }).post(req, res);

      expect(axios.post.mock.calls).toEqual([]);
      expect(res.sendStatus.mock.calls).toEqual([[500]]);
    });
  });
});
