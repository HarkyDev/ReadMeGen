// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the Name of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Add a description for your project",
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "install",
    message: "What are the required steps to install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How and what is this project used for",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "contributors",
    message: "Did anyone contributed to this repo? (link github if possible)",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Insert path/or URL for your screenshot.",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using for this project? ",
    choices: ["MIT","GPL","ISC"],
  },
];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//didn't do this as the functionality is created inside the init() function at 36-40

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        fs.writeFile("README.md", content, (err) =>
          err
            ? console.log(err)
            : console.log("Created 'README.MD'")
        );
      });
}

// Function call to initialize app
init();
