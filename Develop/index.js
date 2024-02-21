// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
const userData = {};

const markdownContent = generateMarkdown(userData);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Your Project Title",
        name: "title",
    },
    {
        type: "input",
        message: "Description",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage Information",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines",
        name: "contributions",
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "test",
    },
    {
        type: "input",
        message: "GitHub Username",
        name: "github",
    },
    {
        type: "input",
        message: "Email",
        name: "email",
    },
    {
        type: "list",
        message: "Choose a license for your application",
        name: "license",
        choices: ["MIT License", "GNU GPLv3"],
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        userData.title = answers.title;
        userData.description = answers.description;
        userData.installation = answers.installation;
        userData.usage = answers.usage;
        userData.contribution = answers.contribution;
        userData.test = answers.test;
        userData.github = answers.github;
        userData.email = answers.email;
        userData.license = answers.license;

        const markdownContent = generateMarkdown(userData);
        writeToFile("generatedREADME.md", markdownContent);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} has been created successfully!`);
    });
}

// Function call to initialize app
init();
