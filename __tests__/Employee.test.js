const Employee = require("../lib/Employee");

const employeeInstance = new Employee("Suzanne", 4, "suzanne@gmail.com");

describe("employee", () => {
  it("should return employee", () => {
    const expected = "Employee";
    const result = employeeInstance.getRole();

    expect(result).toEqual(expected);
  });
  it("should return name", () => {
    const expected = "Suzanne";
    const result = employeeInstance.getName();

    expect(result).toEqual(expected);
  });
  it("should return id number", () => {
    const expected = 4;
    const result = employeeInstance.getId();

    expect(result).toEqual(expected);
  });
  it("should return email address", () => {
    const expected = "suzanne@gmail.com";
    const result = employeeInstance.getEmail();

    expect(result).toEqual(expected);
  });
});
