const sum = require("./sum");

describe("addition of nos.", () => {
  // Applies only to tests in this describe block

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
