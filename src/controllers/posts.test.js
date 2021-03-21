const app = require("../index");
const request = require("supertest");

describe("Server", () => {
  describe("Ednppoint", () => {
    describe("Posts POST", () => {
      it("Should Create a New Post", async () => {
        const response = await request(app)
          .post("/")
          .send({ userId: 4 })
          .set("user_id", 1)
          .set("Content-Type", "application/json");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty("id");
      });

      it("Shouldn't Create a New Post", async () => {
        const response = await request(app)
          .post("/")
          .send({ userId: 4 })
          .set("user_id", 2)
          .set("Content-Type", "application/json");
        expect(response.statusCode).toEqual(400);
        expect(response.body).not.toHaveProperty("id");
      });
    });
  });
});
