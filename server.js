const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "business_db",
  },
  console.log(`Connected to the business_db database.`)
);

function startApp() {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          db.end();
          console.log("Goodbye!");
          break;
      }
    });
}

function viewAllDepartments() {
  const query = "SELECT * FROM department";
  db.query(query, (err, res) => {
    if (err) throw err;

    console.table(res);

    startApp();
  });
}

function viewAllRoles() {
  const query = "SELECT * FROM role";
  db.query(query, (err, res) => {
    if (err) throw err;

    console.table(res);

    startApp();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: "department_name",
      message: "Enter the department name:",
    })
    .then((answer) => {
      const query = "INSERT INTO departments SET ?";
      db.query(query, answer, (err, res) => {
        if (err) throw err;

        console.log("Department added successfully!");

        startApp();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "role_title",
        message: "Enter the role title:",
      },
      {
        name: "salary",
        message: "Enter the salary:",
      },
    ])
    .then((answers) => {
      const query = "INSERT INTO roles SET ?";
      db.query(query, answers, (err, res) => {
        if (err) throw err;

        console.log("Role added successfully!");

        startApp();
      });
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "employee_id",
        message: "Enter the employee ID to update:",
      },
      {
        name: "role_id",
        message: "Enter the new role ID:",
      },
    ])
    .then((answers) => {
      const query = "UPDATE employee SET role_id = ? WHERE id = ?";
      db.query(query, [answers.role_id, answers.employee_id], (err, res) => {
        if (err) throw err;

        console.log("Employee role updated successfully!");

        startApp();
      });
    });
}
