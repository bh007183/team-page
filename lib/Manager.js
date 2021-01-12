// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber){
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = officeNumber

    this.getName = () => {
        return(name)
    }
    this.getid = () => {
        return(id)
    }
    this.getEmail = () => {
        return(email)
    }
    this.getRole = () => {
        return "Manager"
    }
}


const e = new Manager("Alice", 1, "test@test.com")
exports.Manager = Manager
