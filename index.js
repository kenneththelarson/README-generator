// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub Username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation requirements:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage of your project:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license should the project have?',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'confirm',
            name: 'contributions',
            message: 'Will you allow contributions on this project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributonGuidelines',
            message: 'Define your contribution guidelines for this project:',
            when: ({ contributions }) => {
                if (contributions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Will this project require testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please detail the testing instructions for the user:',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please enter a detailed description for testing instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
