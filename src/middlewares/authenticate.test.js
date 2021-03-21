const authenticate = require("./authenticate");
describe("Authenticate Middleware", () => {
  it("Should Have ID 1", () => {
    const req = {
      header: jest.fn().mockReturnValue("1"),
    };
    const res = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();
    authenticate(req, res, next);

    expect(req.header.mock.calls).toEqual([["user_id"]]);
    expect(res.sendStatus.mock.calls).toEqual([]);
    expect(next.mock.calls).toEqual([[]]);
  });

  it("Should Fial If User ID Not Is 1", () => {
    const req = {
      header: jest.fn().mockReturnValue("2"),
    };
    const res = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();
    authenticate(req, res, next);

    expect(req.header.mock.calls).toEqual([["user_id"]]);

    expect(res.sendStatus.mock.calls).toEqual([[400]]);
  });
});
