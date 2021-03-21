const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


class Employee {
    constructor(name, iD, email){
        this.name = name
        this.iD = iD
        this.email = email
    }
    getName()
    getID()
    getEmail()
    getRole()
}