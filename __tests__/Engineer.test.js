const Engineer = require("../lib/Engineer");

const engineerInstance = new Engineer("Matthew", 3, "matthew89@gmail.com", "matthew.89");

describe("Engineer", () => {
  it("should return Engineer", () => {
    const expected = "Engineer";
    const result = engineerInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "Matthew";
    const result = engineerInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 3;
    const result = engineerInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "matthew89@gmail.com";
    const result = engineerInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return github username", () => {
    const expected = "matthew.89";
    const result = engineerInstance.getGithub();

    expect(result).toEqual(expected);
  });
});
