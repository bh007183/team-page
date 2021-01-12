// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

function Intern(name, id, email, school){
    Employee.call(name, id, email)
    this.school = school
    
}

Intern.prototype = new Employee
Intern.prototype.constructor = Intern

Intern.prototype.getSchool = function() {
    return(this.school)
}
Intern.prototype.getRole = function() {
    return ("Intern")
}


module.exports = Intern
const f = new Intern("frank", 3473849, "bjhops17@gmail.com", "uw")
