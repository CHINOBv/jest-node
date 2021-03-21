function mult(a, b) {
  return a * b;
}

function sum(a, b, fn) {
  const c = a + b;
  return fn(c, 2);
}

describe("functions", () => {
  describe("mult", () => {
    it("Should Return Multiply of Value", () => {
      const r = mult(1, 2);
      expect(r).toBe(2);
    });
  });
  describe("sum", () => {
    it("Should Return values", () => {
      const mockMult = jest.fn().mockReturnValue(4);

      const r = sum(1, 1, mockMult);

      expect(mockMult.mock.calls).toEqual([[2, 2]]);
      expect(r).toBe(4);
    });
  });
  it("Should Return values", () => {
    const r = sum(1, 1, mult);
    expect(r).toBe(4);
  });
});
