const { UsersController } = require(".");

describe("User Controller", () => {
  describe("Get", () => {
    it("Return Users JSON", async () => {
      const axios = {
        get: jest.fn().mockResolvedValue({ data: 1 }),
        post: jest.fn().mockResolvedValue({ data: 1 }),
      };
      const res = {
        sendStatus: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };

      await UsersController({ axios }).get({}, res);

      expect(res.sendStatus.mock.calls).toEqual([[200]]);
      expect(res.json.mock.calls).toEqual([[1]]);
    });
  });

  describe("Post", () => {
    it("Create Resource", async () => {
      const axios = {
        post: jest.fn().mockResolvedValue({ data: 1 }),
      };
      const res = {
        sendStatus: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      const req = {
        body: 2,
      };
      await UsersController({ axios }).post(req, res);
      expect(res.json.mock.calls).toEqual([[1]]);
      expect(res.sendStatus.mock.calls).toEqual([[201]]);
      expect(axios.post.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users", 2],
      ]);
    });
  });

  describe("Put", () => {
    it("Update Resource", async () => {
      const axios = {
        put: jest.fn().mockResolvedValue({ data: 1 }),
      };
      const res = {
        sendStatus: jest.fn().mockReturnThis(),
      };
      const req = {
        body: 2,
        params: {
          id: 3,
        },
      };
      await UsersController({ axios }).put(req, res);

      expect(res.sendStatus.mock.calls).toEqual([[204]]);
      expect(axios.put.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users/3", 2],
      ]);
    });
  });
  describe("Delete", () => {
    it("Delete User", async () => {
      const axios = {
        delete: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {
        sendStatus: jest.fn().mockReturnThis(),
      };

      await UsersController({ axios }).delete(req, res);

      expect(axios.delete.mock.calls).toEqual([
        [`https://jsonplaceholder.typicode.com/users/1`],
      ]);
      expect(res.sendStatus.mock.calls).toEqual([[204]]);
    });
  });
});
