// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: "Enter your project's title:",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${fileName} generated successfully!`);
    });
  }


// function generateREADME(answers) {
//     return `
//   # ${answers.projectTitle}
  
//   ## Description
//   ${answers.description}
  
//   ## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [License](#license)
//   - [Contributing](#contributing)
//   - [Tests](#tests)
//   - [Questions](#questions)
  
//   ## Installation
//   ${answers.installation}
  
//   ## Usage
//   ${answers.usage}
  
//   ## License
//   This project is covered under the ${answers.license} license.
  
//   ## Contributing
//   ${answers.contributing}
  
//   ## Tests
//   ${answers.tests}
  
//   ## Questions
//   For additional questions, contact ${answers.githubUsername} via email at ${answers.email}.
//   `;
//   }
  

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function call to initialize app
init();



