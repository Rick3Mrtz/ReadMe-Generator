const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateReadme = require("./util/generateMarkdown");


const prompts = [
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
        name: 'install',
        
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
]

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
     
        // Ask user questions and generate responses
        // const answers = promptUser();

inquirer.prompt(prompts).then((responses)=> {
  writeFile('ReadMe.md', generateReadme({...responses}))
})

        // const generateContent = generateReadme(answers);
        // // Write new README
        // writeFileAsync('./dist/README.md', generateContent);
        // console.log('✔️  Successfully wrote to README.md');
    }
  
  


  init();  