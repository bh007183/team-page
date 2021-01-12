
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

function Engineer(name, id, email, github){
    Employee.call(this, name, id, email)
    this.github = github

}

Engineer.prototype = new Employee
Engineer.prototype.constructor = Engineer

Engineer.prototype.getRole =  function(){
    return "Engineer"
}
Engineer.prototype.getGithub = function() {
    return this.github
}

const ted = new Engineer("franz", 78332,`bjhops17@Sg.com`, "github")

