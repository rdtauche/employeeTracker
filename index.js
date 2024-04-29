// const express = require("express");
const inquirer = require("inquirer");
const { Pool } = require("pg");


const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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


// Query database
pool.query(
  "SELECT * FROM departments where departmentname=$1",
  ["Engineering"],
  function (err, { rows }) {
    console.log(rows);
  }
);


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
                'Add an employee', 
                'Remove an employee',
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
      }
      if (choices === "Remove an employee") {
        removeEmployee();
      };
  });
};

// function to show all departments 
showDepartments = () => {
  console.log('Showing all departments...\n');
  const sql = `SELECT * from departments`; 

  pool.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows.rows);
    console.table(rows.rows); 
    userPrompts();
  });
};

// function to show all roles 
showRoles = () => {
  console.log('Showing all roles...\n');

  const sql = `SELECT * FROM roles`;
  
  pool.query(sql, (err, rows) => {
    if (err) throw err; 
    console.log(rows.rows);
    console.table(rows.rows); 
    userPrompts();
  })
};

// function to show all employees 
showEmployees = () => {
  console.log('Showing all employees...\n'); 
  const sql = `SELECT * from employees`;

  pool.query(sql, (err, rows) => {
    if (err) throw err; 
    console.log(rows.rows);
    console.table(rows.rows); 
    userPrompts();
  });
};

// function to add a department

addDepartment = () => {
  console.log('Adding a department...\n');

  inquirer.prompt([
    {
      type: 'input',
      name: 'departmentname',
      message: 'Please enter the name of the department.'
    }
  ])
    .then((answers) => {
      const { departmentname } = answers; 
      const sql = `INSERT INTO departments (departmentname) VALUES ($1)`;
      const params = [departmentname]; 

      pool.query(sql, params, (err, rows) => {
        if (err) throw err; 
        console.log('Department added successfully!'); 
        console.table(rows.rows); 
        userPrompts();
      });
    });
}

// function to add a role
addRole = () => {
  console.log('Adding a role...\n');

  inquirer.prompt([
    {
      type: 'input',
      name: 'jobtitle',
      message: 'Please enter the title of the role.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Please enter the salary of the role.'
    },
    {
      type: 'input',
      name: 'departmentid',
      message: 'Please enter the department id of the role.'
    }
  ])
    .then((answers) => {
      console.log(answers);
      const { jobtitle, salary, departmentid } = answers; 
      const sql = `INSERT INTO roles (jobtitle, salary, departmentid) VALUES ($1, $2, $3)`;
      const params = [jobtitle, salary, departmentid]; 

      pool.query(sql, params, (err, rows) => {
        if (err) throw err; 
        console.log('Role added successfully!'); 
        console.table(rows.rows); 
        userPrompts();
      });
    });
}

// function to add an employee
addEmployee = () => {
  console.log('Adding an employee...\n');
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstname',
      message: 'Please enter the first name of the employee.'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Please enter the last name of the employee.'
    }
  ])
    .then((answers) => {
      const { firstname, lastname} = answers; 
      const sql = `INSERT INTO employees (firstname, lastname) VALUES ($1, $2)`;
      const params = [firstname, lastname]; 

      pool.query(sql, params, (err, rows) => {
        if (err) throw err; 
        console.log('Employee added successfully!'); 
        console.table(rows.rows); 
        userPrompts();
      });
    });}

    // function to remove an employee
    removeEmployee = () => {
      console.log('Removing an employee...\n');
      inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: 'Please enter the id of the employee you would like to remove.'
        }
      ])
        .then((answers) => {
          const { id } = answers; 
          const sql = `DELETE FROM employees WHERE employeeid = $1`;
          const params = [id]; 
    
          pool.query(sql, params, (err, rows) => {
            if (err) throw err; 
            console.log('Employee removed successfully!'); 
            console.table(rows.rows); 
            userPrompts();
          });
        });
    }


userPrompts();