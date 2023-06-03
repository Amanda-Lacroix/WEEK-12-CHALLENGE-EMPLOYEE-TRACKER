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
  // Shows the table
   console.table(results);
  // Takes user back to the Options List
   optionsList();
  });
};


// Function to Query the role
function viewRole() {
  sqlConnection.query('SELECT * FROM role', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    };
    console.table(results);
    optionsList();
    });
  };

  // Function to Query the employees
function viewEmployee() {
  sqlConnection.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    };
    console.table(results);
    optionsList()
    });
  };
  
// Initial Prompt for list of options
function optionsList() {
inquirer.prompt ([
      {
        name: `options`,
        type: `list`,
        message: "Please make a selection:",
        choices: [`View All Departments`,`View All Roles`,`View All Employees`,`Add a Department`, 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit'],

    },
  ])

// Runs function based on the choice made by user
.then((answers) => {
 switch (answers.options){
    case 'View All Departments':
      viewDepartment();
    break;
    case 'View All Roles':
      viewRole();
    break;
    case 'View All Employees':
      viewEmployee();
    break;
    // exit the connection
    case 'Exit':
      sqlConnection.end();
    break;
 }});
}

optionsList();