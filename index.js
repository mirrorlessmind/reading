/// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Briefly enlighten us on your project: "
        },
        {
            type: "input",
            name: "install",
            message: "What will be the installation process if any? ",
        },
        {
            type: "input",
            name: "use",
            message: "What greatness will you use this project to accomplish?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your shield, er license for this project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Were there any contributors to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('.README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init(); 