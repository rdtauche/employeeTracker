DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;


-- Creates the table "departments" within inventory_db --
CREATE TABLE departments (
  -- Creates a numeric column called "departmentid" --
  departmentID SERIAL PRIMARY KEY,
  -- Creates a string column called "departmentname" which can hold up to 100 characters --
  departmentName VARCHAR(100) NOT NULL
);

-- create table roles
CREATE TABLE roles (
  roleID SERIAL PRIMARY KEY,
  jobTitle VARCHAR(100) NOT NULL,
  salary INTEGER,
  departmentID INTEGER,
  FOREIGN KEY (departmentID) REFERENCES departments(departmentID),
  ON DELETE SET NULL
);

-- create table employees
CREATE TABLE employees (
  employeeID SERIAL PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  jobTitle VARCHAR(100),
  manager VARCHAR(100),
  salary INTEGER
  );

