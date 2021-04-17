const inquirer = require('inquirer');
const fs =  require('fs');
const path = require('path');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager= require("./lib/Manager");

const generateHTML = team => (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="container-fluid text-center bg-danger p-2 text-light">
        <h1>My Team</h1>
        </header>
        <body>
            <section class="cardGroup row justify-content-around mb-10">
            ${ generateTeam(team) }
            </section>
        </body>
        
    </body>
    </html>`
);

const generateTeam = team => (
    team // implicit return
        .map( member => (
            `<div class="card col-6 col-sm-3 col-lg-3 mb-3">
                <div class="card-header bg-primary text-light"> 
                    <h3>${member.getName()}</h3>
                    <h4>${member.getRole()}</h4>
                </div>
                <div class="card-body">
                    <div class="card-text">
                    <ul class="list-group">
                        <li>ID: ${member.getId()}</li>
                        <li>Email: ${member.getEmail()}</li>
                        ${ member.getRole() === 'Engineer'
                            ? `<li>GitHub: ${member.getGithub()} </li>`
                            : member.getRole() === 'Intern'
                                ? `<li>School: ${member.getSchool()} </li>`
                                : member.getRole() === 'Manager'
                                    ? `<li>Office Number: ${member.getOfficeNumber()} </li>`
                                    : ''
                        }
                    </ul>
                    </div>
                </div>
            </div>`
        ))
        .join("")
);

const menu = [
    {
        type:"list",
        name:"menu",
        message:"What would you like to do?",
        choices:["addManager","addEngineer","addIntern", "buildFile"]
    },
];

const managerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What's your name?"
    },
    {
        type:"input",
        name:"id",
        message:"What's your id?"
    },
    {
        type:"input",
        name:"email",
        message:"What's your email?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What's your office number?"
    },
];

const engineerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What's your name?"
    },
    {
        type:"input",
        name:"id",
        message:"What's your id?"
    },
    {
        type:"input",
        name:"email",
        message:"What's your email?"
    },
    {
        type:"input",
        name:"github",
        message:"What's your github username?"
    },
];

const internQuestions = [
    {
        type:"input",
        name:"name",
        message:"What's your name?"
    },
    {
        type:"input",
        name:"id",
        message:"What's your id?"
    },
    {
        type:"input",
        name:"email",
        message:"What's your email?"
    },
    {
        type:"input",
        name:"school",
        message:"What school do you attend?"
    },
];

const teamMembers = [];

function addMembers() {
    inquirer.prompt(menu)
        .then( ({ menu: choice }) => {
            if (choice==='addManager') {
                addManager();      
            } else if (choice==='addEngineer') {
                addEngineer(); 
            } else if (choice==='addIntern') {
                addIntern(); 
            } else {
                generateOutput();
            }
        })
}

function addManager() {
    inquirer.prompt(managerQuestions)
        .then(({ name, id, email, officeNumber }) => {
             const manager = new Manager(name, id, email, officeNumber);
             teamMembers.push(manager);
             addMembers();
        });
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(({ name, id, email, github }) => {
             const engineer = new Engineer(name, id, email, github);
             teamMembers.push(engineer);
             addMembers();
        });
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then(({name,id,email,school}) =>{
             const intern = new Intern(name,id,email,school);
             teamMembers.push(intern);
             addMembers();
    });
}
function generateOutput() {
    const html = generateHTML(teamMembers);
    fs.writeFile(`index.html`,html, err => {
        err ? console.log(err) : console.log('successfully created index.html');
    });
}

addMembers();