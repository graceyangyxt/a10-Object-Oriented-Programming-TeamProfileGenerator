const inquirer = require('inquirer');
const fs =  require('fs');
const path = require('path');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager= require("./lib/Manager");


const generateHTML = (answers)=>
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
        <section class="row justify-content-around mb-10">
            <div class="card col-6 col-sm-3 col-lg-3 mb-3">
                <div class="card-header bg-primary text-light"> 
                     <h2>${answers.name}</h2>
                     <h2>${answers.role}</h2>
                </div>
                <div class="card-body">
                    <div class="card-text">
                      <ul class="list-group">
                        <li>ID: ${answers.id}</li>
                        <li>Email: ${answers.email}</li>
                        <li>GitHub: ${answers.github} </li>
                      </ul>
                    </div>
                </div>
            </div>
   
        </section>
    </body>
    
</body>
</html>
`

const questions=[
    {
        type:"input",
        name:"name",
        message:"What's your name?"
    },
    {
        type:"list",
        name:"role",
        message:"What's your role?",
        choice:["Manager","Engineer","Intern"]
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
        message:"What's your github name?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What's your office number?"
    },
    {
        type:"input",
        name:"school",
        message:"What's your school?"
    },
    
]

inquirer.prompt(questions)
.then(answers=>{
    const htmlPageContent=generateHTML(answers);

    if(answers.role==='Manager'){
          
    }else if(answers.role==='Engineer'){

    }else if(answers.role==='Intern'){

    }

    fs.writeFile(`index.html`,htmlPageContent,err=>
        err ? console.log(err):console.log('successfully created index.html')
    );
});