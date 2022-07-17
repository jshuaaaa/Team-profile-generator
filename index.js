const inquirer = require("inquirer");
const fs = require('fs')

const generateMarkdown = require('./utils/generateHTML.js');
const generateHTML = require("./utils/generateHTML.js");
// Node dependencies

const questions = [ 
{
    type: 'input',
    message: "What is your name?",
    name: 'title',
    default: 'Josh',
    
    
},
{
    type: 'input',
    message: "Where are you located?",
    name: 'location',
    default: 'Boston',
},
{
    type: 'input',
    message: "Tell me something about yourself!",
    name: 'bio'
},
{
    type: 'input',
    message: "Enter your github username",
    name: 'github'
},
{
    type: 'input',
    message: "Enter your linkedin username",
    name: 'linkedin'
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
    const response =  await inquirer.prompt(questions)
    const markdown = generateHTML(response)


    writeToFile('index.html', markdown)
    //Writes file based on markdown values
}
// Init is an async function so it runs after the prompt is finished
init();
