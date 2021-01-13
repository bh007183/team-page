const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber){
    Employee.call(this,name, id, email)
    
    this.officeNumber = officeNumber

    
}
Manager.prototype = new Employee
Manager.prototype.constructor = Manager

Manager.prototype.getRole = function(){
    return "Manager"
}
Manager.prototype.getOfficeNumber = function(){
    return (this.officeNumber)
}


const e = new Manager("Alice", 1, "test@test.com", 2)
console.log(e.getOfficeNumber())
module.exports = Manager

console.log(e.getName())