const manager = require("../lib/Manager");

const managerInstance = new manager("Samantha", 335, "samantha00@gmail.com", 123.456);

describe("manager", () => {
  it("should return manager", () => {
    const expected = "Manager";
    const result = managerInstance.getRole();

    expect(result).toEqual(expected);
  });

  it("method should return name", () => {
    const expected = "Samantha";
    const result = managerInstance.getName();

    expect(result).toEqual(expected);
  });

  it("method should return Id", () => {
    const expected = 335;
    const result = managerInstance.getId();

    expect(result).toEqual(expected);
  });

  it("method should return email address", () => {
    const expected = "samantha00@gmail.com";
    const result = managerInstance.getEmail();

    expect(result).toEqual(expected);
  });

  it("method should return office number", () => {
    const expected = 123.456;
    const result = managerInstance.getOfficeNumber();

    expect(result).toEqual(expected);
  });
});

