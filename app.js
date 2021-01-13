const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const team = []


creatManager()
function creatManager(){

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Input team managers name?"

    },
    {
        type: "input",
        name: "id",
        message: "Input team managers ID?"

    },
    {
        type: "input",
        name: "email",
        message: "Input team managers Email?"

    },
    {
        type: "input",
        name: "officeNumber",
        message: "Input team managers officeNumber?"

    }
]).then((data) => {
    console.log(data)
    const overhead = new Manager(data.name, data.id, data.email, data.officeNumber)
    team.push(overhead)
    choice ()
  
    
}) 
}
function choice (){
inquirer.prompt([
    {
        type:"list",
        message:"What type of Employee are you adding?",
        name: "choices",
        choices: ["Intern", "Engineer", "Done!"]
    }
]).then(({choices}) => {
    switch (choices) {
        case "Intern":
            creatIntern()
            
            break;
        case "Engineer":
            creatEngineer()

            break;

        case "Done!":
            console.log("Complete!")
            fs.writeFile("output/team.html", render(team), function (err){
                if(err){
                    console.log("error")
            }})
            
    
        default:
            break;
    }
}
)
}
function creatIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Input Interns name:"
    
        },
        {
            type: "input",
            name: "id",
            message: "Input Interns ID:"
    
        },
        {
            type: "input",
            name: "email",
            message: "Input Interns Email:"
    
        },
        {
            type: "input",
            name: "school",
            message: "Input Interns School:"
    
        }
    ]).then((data) => {
        
        const overhead = new Intern(data.name, data.id, data.email, data.school)
        team.push(overhead)
        choice()
      
        
    }) 
}

function creatEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Input Engineers name:"
    
        },
        {
            type: "input",
            name: "id",
            message: "Input Engineers ID:"
    
        },
        {
            type: "input",
            name: "email",
            message: "Input Engineers Email:"
    
        },
        {
            type: "input",
            name: "github",
            message: "Input Engineers github user name:"
    
        }
    ]).then((data) => {
        
        const overhead = new Engineer(data.name, data.id, data.email, data.github)
        team.push(overhead)
        choice()
      
        
    }) 
    
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
