// Packages needed for this application
const inquirer = require('inquirer');
const sqlConnection = require('./config/connection/connection.js');
const consoleTable = require('console.table');


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
      case 'Add a Department':
        addDepartment();
      break;
      case 'Add a Role':
        addRole();
      break;
      case 'Add an Employee':
        addEmployee();
      break;
      case 'Update an Employee':
        updateEmployee();
      break;
      // exit the connection
      case 'Exit':
        sqlConnection.end();
      break;
   }});
  }

// Function to Query the departments
function viewDepartment() {
sqlConnection.query('SELECT * FROM department', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
  }
  // Shows the table
   console.table(results);
  // Takes user back to the Options List
   optionsList();
  });
}

// Function to Query the role
function viewRole() {
  sqlConnection.query('SELECT * FROM role', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    }
    console.table(results);
    optionsList();
    });
  }

  // Function to Query the employees
function viewEmployee() {
  sqlConnection.query('SELECT * FROM employee', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    }
    console.table(results);
    optionsList();
    });
  }
  
  // Function to Add a Department
function addDepartment() {
    inquirer.prompt ([
      {
        name: `departmentName`,
        type: `input`,
        message: "Enter Department Name:",
        
      },
   
    ])
    
    .then((answers) => {
      const { departmentName} = answers;
      const query = `INSERT INTO department (department_name) VALUES (?)`;
      sqlConnection.query(query, [departmentName], (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
        } else {
          console.log('Department added successfully!');
          optionsList();
        }
      });
    });
}
      

// Function to add Role
  function addRole() {
    inquirer.prompt ([
        {
          name: `roleName`,
          type: `input`,
          message: "Enter Role Name:",
          
        },
        {
          name: `salary`,
          type: `input`,
          message: "Enter Salary:",
          
        },
        {
          name: `departmentId`,
          type: `input`,
          message: "Enter Department Id:",
          
        },
     
      ])
      
      .then((answers) => {
        const { roleName, salary, departmentId } = answers;
        const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
        sqlConnection.query(query, [roleName, salary, departmentId], (err, results) => {
          if (err) {
            console.error('Error executing query:', err);
          } else {
            console.log('Role added successfully!');
            optionsList();
          }
        });
      });
  }


  // Function to Add an employee
  function addEmployee() {
  inquirer.prompt ([
    {
      name: `firstName`,
      type: `input`,
      message: "Enter Employees First Name:",
    },

    {
      name: `lastName`,
      type: `input`,
      message: "Enter Employees Last Name:",
    },

    {
      name: `roleId`,
      type: `input`,
      message: "Enter Employees Role Id  #:",
    },

    {
      name: `managerId`,
      type: `input`,
      message: "Enter Employees Manager Id #:",
    },
    ])

.then((answers) => {
  const { firstName, lastName, roleId, managerId } = answers;
  const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  sqlConnection.query(query, [firstName, lastName, roleId, managerId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Employee added successfully!');
      optionsList();
    }
  });
});
}

  
//   // Function to update an Employee Role
//   function  updateEmployee() {
//     inquirer.prompt ([
//       {
//         name: `selectEmployee`,
//         type: `list`,
//         message: "Please choose employee:",
//         choices: viewEmployee(),
        
//       },
   
//     ])
    
//     .then((answers) => {
//       const { selectEmployee} = answers;
//       const query = `UPDATE employee (role_id) VALUES (?)`;
//       sqlConnection.query(query, [selectEmployee], (err, results) => {
//         if (err) {
//           console.error('Error executing query:', err);
//         } else {
//           console.log('Updated successfully!');
//           optionsList();
//         }
//       });
//     });
// }


optionsList();