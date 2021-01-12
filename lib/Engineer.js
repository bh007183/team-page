// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github){
    this.name = name
    this.id = id
    this.email = email
    this.github = github

    this.getName = () => {
        return this.name
    }
    this.getid = () => {
        return this.id
    }
    this.getEmail = () => {
        return this.email
    }
    this.getRole = () => {
        return "Engineer"
    }
    this.getGithub = () => {
        return this.github
    }
}


const e = new Engineer("Alice", 1, "test@test.com")
exports.Engineer = Engineer
