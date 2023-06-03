// Packages needed for this application
const inquirer = require('inquirer');
const sqlConnection = require('./config/connection/connection.js');
const consoleTable = require('console.table');

// Function to Query the departments
function viewDepartment() {
sqlConnection.query('SELECT * FROM department', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
  };
  console.log('Results:');
  console.table(results);
  });
};


  
// Initial Prompt for list of options
inquirer.prompt ([
      {
        name: `options`,
        type: `list`,
        message: "Please make a selection:",
        choices: [`View All Departments`,`View All Roles`,`View All Employees`,`Add a Department`, 'Add a Role', 'Add an Employee', 'Update an Employee Role'],

    },
  ])

// Runs function based on the choice made by user
.then((answers) => {
 switch (answers.options){
    case 'View All Departments':
    viewDepartment();
    break;
    case 'Exit':
      inquirer.prompt();
    break;
 }});

