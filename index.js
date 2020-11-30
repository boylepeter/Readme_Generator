//Dependancies
const inquirer = require("inquirer");
const fs = require("fs");

//Prompts for fill
inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Write a description of your project: ",
            name: "description",
            validate: (value)=> {if (value){return true} else {return "Your project needs a description."}}
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "install",
            validate: (value)=> {if (value){return true} else {return "Your project needs instructions."}}
        },
        {
            type: "input",
            message: "How do you utilize your project?",
            name: "instructions",
            validate: (value)=> {if (value){return true} else {return "Your project needs instructions."}}
        },
        {
            type: "input",
            message: "Write a filepath to an included image for your project: ",
            name: "img1",
        },
        {
            type: "list",
            message: "Any licenses for your project?",
            name: "license",
            choices: ["afl3.0", "apache2.0", "artistic2.0", "bsl1.0", "bsd2clause", "bsd3clause", "cc", "epl", "gpl", "lgpl", "isc", "mit", "unlicensed", "zlib"],
            validate: (value)=> {if (value){return true} else {return "Your project needs installation instructions."}}
        },
        {
            type: "list",
            message: "What color would you like your license?",
            name: "color",
            choices: ["red", "orange", "yellow", "green", "blue", "white", "black", "grey"]
        },
        {
            type: "input",
            message: "What is your Github page URL?",
            name: "github",
            validate: (value)=> {if (value){return true} else {return "Your project needs a username."}}
        },
        {
            type: "input",
            message: "What is your linkedin page URL?",
            name: "linkedin",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the link to your deployed project?",
            name: "link",
            validate: (value)=> {if (value){return true} else {return "Your project needs a deployed link."}}
        },
        {
            type: "input",
            message: "Do you have any contributors to credit?",
            name: "contributing",
        },
        {
            type: "input",
            message: "Do you have any tests that you would like users to try?",
            name: "tests",
        },
    ])

.then(({
    title,
    description,
    install,
    instructions,
    license,
    color,
    img1,
    github,
    linkedin,
    email,
    link,
    contributing,
    tests,
    }) => {
    const format = `
# ${title}

## Description: 
${description}
## Table of Contents

-[Description](#description)

-[Installation](#installation)

-[Instructions](#instructions)

-[Licenses](#licenses)

-[Deployed](#deployed)

-[Contact](#contact)

-[Contributors](#Contributors)

-[Testing](#Tests)

## Installation:
${install}
## Instructions:
${instructions}
### Licenses: 
![license](https://img.shields.io/badge/license-${license}-${color})
### Deployed: 
[${link}](${link})

![image](${img1})

### Contact:

[Github](${github})

[LinkedIn](${linkedin})

Email: [${email}](${email})

### Contributors: 
${contributing}

### Tests: 
${tests}
`;
    newReadme(title, format);
}
)
function newReadme(title, data){
    fs.writeFile(`./generated/${title.toLowerCase().split(' ').join('')}.md`, data, (err)=>
    {if (err){console.log(err)}
    else {console.log(`${title} has been generated.`)}}
)
}