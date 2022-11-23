const intern = require("../lib/Intern");

const internInstance = new intern(
  "Rob",
  764,
  "robbert77@gmail.com",
  "University Of Birmingham"
);

describe("intern", () => {
  it("should return intern", () => {
    const expected = "Intern";
    const result = internInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "Rob";
    const result = internInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 764;
    const result = internInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "robbert77@gmail.com";
    const result = internInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return intern school", () => {
    const expected = "University Of Birmingham";
    const result = internInstance.getSchool();

    expect(result).toEqual(expected);
  });
});