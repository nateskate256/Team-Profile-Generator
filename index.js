const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const makeHTML = require("./src/makeHTML")

const Employees = [];

//Manager
function getManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your job title?",
        name: "jobTitle",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then((dataAnswers) => {
      const managerData = new Manager(
        dataAnswers.employeeName,
        dataAnswers.employeeID,
        dataAnswers.employeeEmail,
        dataAnswers.officeNumber
      );
      Employees.push(managerData);

      newMember();
    });
}

function newMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What employee would you like to add?",
        name: "newEmployee",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((eOrI) => {
      switch (eOrI.newEmployee) {
        case "Engineer":
          getEngineer();
          break;
        case "Intern":
          getIntern();
          break;
        default:
          buildHTML();
      }
    });
}

function buildHTML() {
console.log(Employees)
}


//Engineer
function getEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your job title?",
        name: "jobTitle",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
      },
    ])
    .then((engAnswers) => {
      const engineerData = new Engineer(
        engAnswers.employeeName,
        engAnswers.employeeID,
        engAnswers.employeeEmail,
        engAnswers.github
      );
      Employees.push(engineerData);

      newMember();
    });
}

//Intern
function getIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employees name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is your job title?",
        name: "jobTitle",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "What school do you go to?",
        name: "school",
      },
    ])
    .then((intAnswers) => {
      const internData = new Intern(
        intAnswers.employeeName,
        intAnswers.employeeID,
        intAnswers.employeeEmail,
        intAnswers.school
      );
      Employees.push(internData);

      newMember();
    });
}
getManager()

// function buildTeam() {
//   const pageContent = makeHTML(Employees);
//   fs.writeFile("index.html", pageContent, (err) =>
//   err ? console.log(err) : console.log("An index.html file was created.")
//   );
// }
// buildTeam()
