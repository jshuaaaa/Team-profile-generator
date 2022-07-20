const inquirer = require("inquirer");
const fs = require('fs')

const generateHTML = require("./utils/generateHTML.js");
// Node dependencies
class Employee {
constructor(name, type,  id, email, work) {
    this.name = name
    this.type = type
    this.id = id
    this.email = email
    this.work = work
}
}
// Employee class
class Engineer {
    constructor(name, type,  id, email, work) {
        this.name = name
        this.type = type
        this.id = id
        this.email = email
        this.work = work
    }
    }
    //Engineer class
class Intern {
        constructor(name, type,  id, email, work) {
            this.name = name
            this.type = type
            this.id = id
            this.email = email
            this.work = work
        }
        }
// Intern class

// Starter questions are for manager data and normal questions are for intern/engineer
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
        message: "What is the employee's github? Click enter if not applicable",
        name: 'github'
    },
    {
        type: 'input',
        message: "What is the employee's school? Click enter if not applicable",
        name: 'school'
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
    const storage = []
    //empty array used to store employees
    const response =  await inquirer.prompt(starterQuestions)
    const manager = new Employee(response.name, "Manager", response.office, response.email, "N/A")
    storage.push(manager)
    
    
    if(response.addEmployee === 'Engineer' || response.addEmployee === 'Intern') {
        testForNewEmployee(response, response.addEmployee)
        
    } else if(response.addEmployee === "finish building your team") {
    writeToFile('index.html', generateHTML(storage))
    }

    function checkAgain(tester, newName) {
      console.log('t')
        testForNewEmployee(tester, newName)
        

    }
    // Based on user input generates new employee data

    async function testForNewEmployee(data, name) {
        let newdata = await inquirer.prompt(questions)
        if(name === "Intern") {
            let index = new Intern(newdata.name, name, newdata.id, newdata.email, newdata.school)
            storage.push(index)
            
            
        } else if(name === "Engineer") {
            let index = new Engineer(newdata.name, name, newdata.id, newdata.email, newdata.github)
            storage.push(index)
            
        }

        

        if(newdata.addEmployee === "finish building your team") {
           
            writeToFile('index.html', generateHTML(storage))
            }  else checkAgain(newdata, newdata.addEmployee)

    // This function adds the employee created to the previous array and also creates a new one if neccesary

        

        
       
            
           
   

            
        
        
         
   

    }


  
    

    
    
    // const markdown = generateHTML(response)


    // writeToFile('index.html', markdown)
    //Writes file based on markdown values
}


// Init is an async function so it runs after the prompt is finished
init();
module.exports = Engineer
module.exports = Intern
module.exports = Employee
