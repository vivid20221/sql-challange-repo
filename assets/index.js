var mysql = require ('mysql2')
var inquirer = require('inquirer');
var fs = require('fs');
const { concat } = require('rxjs');

var connection = mysql.createConnection ({
    host:'localhost',
    port:''
    user:'root',
    password:'root',
    database:'department_db',
})


connection.connect(function(error){
    if(error) throw error;
    console.log("connected at " +connection.threadId+"\n");
    addDepartment()

})

function querying(){
    connection.query("SELECT * FROM department",function(error, results){
        if (error) throw error;
        console.log("results",results);
        connection.end()


    })
}

function addDepartment(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ('View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Departments', 'Quit')


        },
        
        

    ]).then(function(answers){
        console.log(answers);
        connection.querry("INSERT INTO department SET?",{
          mainMenu:answers.mainMenu,  
        })
    })
    
}