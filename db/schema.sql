DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

\c employeeTracker_db;

-- Creates the table "departments" within inventory_db --
CREATE TABLE departments (
  -- Creates a numeric column called "departmentid" --
  departmentID INTEGER,
  -- Creates a string column called "departmentname" which can hold up to 100 characters --
  departmentName VARCHAR(100)
);

-- create table roles
CREATE TABLE roles (
  roleID INTEGER,
  jobTitle VARCHAR(100),
  salary INTEGER,
  departmentID INTEGER
);

-- create table employees
CREATE TABLE employees (
  employeeID INTEGER,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  jobTitle VARCHAR(100),
  manager VARCHAR(100),
  salary INTEGER,
  departmentID INTEGER
);

