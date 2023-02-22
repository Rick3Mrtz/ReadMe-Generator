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
        name: 'installation',
        
      },
    {
      type: 'input',
      message: 'How do you use this?',
      name: 'usage',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which License should be used for this project?',
      choices: [
        "Eclipse",
        "GNU",
        "MIT",
        "Mozilla"
      ]
      
    },
    {
      type: 'input',
      name: 'contributions',
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


  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };

// need to write function to initialize the app

const init = () => {
    const answers = inquirer.prompt(prompts)
        .then((answers) => writeToFile('/README.md', generateReadme({...answers})))
        .then(() => console.log(answers))
        .catch((err) => console.log(err));    
};

init();