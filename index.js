const inquirer = require("inquirer");
const fs = require('fs')

const generateMarkdown = require('./utils/generateHTML.js');
const generateHTML = require("./utils/generateHTML.js");
// Node dependencies
function Employee(type,  id, email, work) {
    this.type = type
    this.id = id
    this.email = email
    this.work = work
}
const starterQuestions = [ 
{
    type: 'input',
    message: "What is your name?",
    name: 'name',
    default: 'Josh',
    
    
},
{
    type: 'input',
    message: "What is your email?",
    name: 'email'
},
{
    type: 'input',
    message: "What is your office number?",
    name: 'office' 
},
{
    type: 'input',
    message: "What is your github",
    name: 'github'
},
{
    type: 'list',
    message: "Would you like to add an employee?",
    name: "addEmployee",
    choices: ['Engineer', "Intern", "finish building your team"]
}
];
const questions = [ 
    {
        type: 'input',
        message: "What is the employees name?",
        name: 'name',
        default: 'Josh',
        
        
    },
    {
        type: 'input',
        message: "What is the employee's id?",
        name: 'id',
        default: '123',
    },
    {
        type: 'input',
        message: "What is the employees email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the employee's github",
        name: 'github'
    },
    {
        type: 'list',
        message: "Would you like to add another employee?",
        name: "addEmployee",
        choices: ['Engineer', "Intern", "finish building your team"]
    }
    ];
// Array of user questions for inquirer




function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your index.html file has been generated")
    });
  }
//writes file function
  

async function init() {
    const response =  await inquirer.prompt(starterQuestions)
    const manager = new Employee(response.name, response.office, response.email, "Manager")
    console.log(manager)
    const markdown = generateHTML(response)


    writeToFile('index.html', markdown)
    //Writes file based on markdown values
}
// Init is an async function so it runs after the prompt is finished
init();
