var mysql = require ('mysql2');
var inquirer = require('inquirer');
var fs = require('fs');
const { concat } = require('rxjs');

// var connection = mysql.createConnection ({
//     host:'localhost',
//     port:''
//     user:'root',
//     password:'root',
//     database:'department_db',
// })


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
        {
            type:' input ',
            name:'fistName',
            massages:'What is the employee’s first name?',

        },
        {
            type:'input  ',
            name:'lastName',
            massages:'What is the employee’s last name?',

        },
        {
            type:'list',
            name:'updateEmployee',
            message:'Which employee’s role do you want to update?',
            choices: ( 'John doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown'),


        },
        {
            type:'list',
            name:'addRoles',
            message:'What is the name of the role?',
            choices: ('Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service'),
        },
        {
            type:'list',
            name:'managers',
            massage:'Who is the employee’s manager?',
            choices:('None', 'John doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown'),
        },
        {
            type:'input ',
            name:'salary',
            message:' What is the salary of the role?',
        },
        {
            type:'list',
            name:'deparmentChoice',
            message:' Which department does the role belong to?',
            choices:('Engineering','Finance', 'Legal', 'Sales', 'Service'),
        },
        {
            type:'input ',
            name:'addDeparments',
            message:'What is the name of the department?',

        },
        
        

    ]).then(function(answers){
        console.log(answers);
        connection.querry("INSERT INTO department SET?",{
          mainMenu:answers.mainMenu,  
        })
    })
    
}