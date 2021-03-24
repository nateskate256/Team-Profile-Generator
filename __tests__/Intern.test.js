const Intern = require("../lib/Intern");

describe("Intern", () => {
  test("Intern info", () => {
    const intSchool = "UA"
    const e = new Intern("Nate", 47, "nateskate256@gmail.com", intSchool);
    expect(e.school).toBe(intSchool);
  });

  test("getRole method should return Intern", () => {
    const e = new Intern("Nate", 47, "nateskate256@gmail.com", "UA");
    expect(e.getRole()).toBe("Intern");
  });

  test("getSchool method should return this.school", () => {
    const e = new Intern("Nate", 47, "nateskate256@gmail.com", "UA");
    expect(e.getSchool()).toBe("UA");
  });
});
