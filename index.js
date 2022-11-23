const inquirer = require("inquirer");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const fs = require("fs");
const generateTemplate = require("./src/generate-template");

const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployees",
        message: "what type of employee would you like to add?:",
        choices: ["Manager", "Engineer", "Intern", "Finish building team"],
      },
    ])
    .then(function (userInput) {
      switch (userInput.addEmployees) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          generateWebpage();
      }
    });
};

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter manager name:",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter manager ID: ",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number:",
      },
    ])
    .then((answers) => {
      const Manager = new manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      employeeArray.push(Manager);
      createTeam();
    });
};
