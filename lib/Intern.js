// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
function Intern(school){
    this.school = school
    
    this.getSchool = () => {
        return(this.school)
    }
    this.getRole = () => {
        return "Intern"
    }
}


const e = new Intern("Alice", 1, "test@test.com")
console.log(e.name)
exports.Intern = Intern
const f = new Employee("frank", 3473849, "bjhops17@gmail.com")
consoe.log(f.name)