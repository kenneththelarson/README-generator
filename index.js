// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

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
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does this project require installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation requirements:',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe the usage of your project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe what your project is used for!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license should the project have?',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', 'None']
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
            when: ({ contributions }) => contributions
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
            when: ({ confirmTest }) => confirmTest,
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
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMarkDown => {
        return writeToFile(pageMarkDown);
    })
    .catch(err => {
        console.log(err);
    });
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
