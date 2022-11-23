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
