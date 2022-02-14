const inquirer = require("inquirer");
const generateFile = require("./assets/template.js");
const  writeFile = require("./assets/file-generator.js");

// Questions for user
const questions = () => {
    
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: projName => {
            if (projName) {
                return true;
            } else {
                console.log("You did not enter your project's name...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        validate: projDescription => {
            if (projDescription) {
                return true;
            } else {
                console.log("You did not enter your project's description...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your project's installation instructions.",
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log("You did not enter your project's installation instructions...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project's usage information.",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("You did not enter your project's usage information...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your project's contribution guidelines.",
        validate: contribGuide => {
            if (contribGuide) {
                return true;
            } else {
                console.log("You did not enter your project's contribution guidelines...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project's test instructions.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("You did not enter your project's test instructions...");
                return false
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What is license does your project use?",
        choices: ["Apache License 2.0", "MIT", "GNU GPLv3", "GNU GPLv2", "ISC"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("You did not enter your GitHub username...");
                return false
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("You did not enter your email address...");
                return false
            }
        }
    }
])
};

// This will start the app 
function start() {
    console.log(`
    Let's make a README file for your project!
    `);
    return questions();
}


start()
    .then(data => {
        return generateFile(data);
    })
    .then(readMeFile => {
        return writeFile(readMeFile);
    })
    .catch(err => {
        console.log(err);
    });