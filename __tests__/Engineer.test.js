const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("Can set Github account info", () => {
    const ghUsername = "nateskate256"
    const e = new Engineer("Nate", 47, "nateskate256@gmail.com", ghUsername);
    expect(e.github).toBe(ghUsername);
  });

  test("getRole method should return Engineer", () => {
    const e = new Engineer("Nate", 47, "nateskate256@gmail.com", "ghUsername");
    expect(e.getRole()).toBe("Engineer");
  });

  test("getGithub method should return this.github", () => {
    const e = new Engineer("Nate", 47, "nateskate256@gmail.com", "ghUsername");
    expect(e.getGithub()).toBe("ghUsername");
  });
});
