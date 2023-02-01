const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
return inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
        
      
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',
      
    },
    {
        type: 'input',
        message: 'Describe the installation process',
        name: 'description',
        
      },
    {
      type: 'input',
      message: 'How do you use this?',
      name: 'usage information',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which License should be used for this project?',
      choices: [
        "Academic",
        "GNU",
        "MIT",
        "Mozilla"
      ]
      
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Were there any other contributors for this project?',
      
    },
    
    {
        type: "input",
        name: "email",
        message: "What is your Email Address? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
  ])
}

async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  