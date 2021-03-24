const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("getRole method should return Manager", () => {
    const e = new Manager("Nate", 47, "nateskate256@gmail.com", "officenumber");
    expect(e.getRole()).toBe("Manager");
  });
});
