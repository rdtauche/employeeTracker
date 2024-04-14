const express = require("express");
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require("pg");
// import inquirer
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: "postgres",
    // Enter PostgreSQL password
    password: "Xadrez1982!!",
    host: "localhost",
    database: "employeetracker_db",
  },
  console.log("Connected to the employeetracker_db database!")
);

pool.connect();


// // Query database
// pool.query(
//   "SELECT * FROM departments where departmentname=$1",
//   ["Engineering"],
//   function (err, { rows }) {
//     console.log(rows);
//   }
// );

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// inquirer prompts
const userPrompts = () => {
  inquirer.prompt ([
    {
      type: 'list',
      name: 'choices', 
      message: 'Please select what you would like to do?',
      choices: ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee' 
              ]
    }
  ])
    .then((answers) => {
      const { choices } = answers; 

      if (choices === "View all departments") {
        showDepartments();
      }

      if (choices === "View all roles") {
        showRoles();
      }

      if (choices === "View all employees") {
        showEmployees();
      }

      if (choices === "Add a department") {
        addDepartment();
      }

      if (choices === "Add a role") {
        addRole();
      }

      if (choices === "Add an employee") {
        addEmployee();
      };
  });
};

// function to show all departments 
showDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT * from departments`; 

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    userPrompts();
  });
};

// function to show all roles 
showRoles = () => {
  console.log('Showing all roles...\n');

  const sql = `SELECT * FROM roles`;
  
  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows); 
    userPrompts();
  })
};

// function to show all employees 
showEmployees = () => {
  console.log('Showing all employees...\n'); 
  const sql = `SELECT * from employees`;

  connection.promise().query(sql, (err, rows) => {
    if (err) throw err; 
    console.table(rows);
    userPrompts();
  });
};