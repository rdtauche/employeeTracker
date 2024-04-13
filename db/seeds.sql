INSERT INTO departments (departmentName) 
VALUES ('Sales'), ('Engineering'), ('Finance'), 
('Legal');

INSERT INTO roles (jobTitle, salary)
VALUES ('Sales Lead', 100000), ('Salesperson', 80000), 
('Lead Engineer', 150000), ('Software Engineer', 120000), 
('Accountant', 125000), ('Legal Team Lead', 250000), 
('Lawyer', 190000);

INSERT INTO employees (firstName, lastName, jobTitle, manager, salary)
VALUES ('John', 'Doe', 'Sales Lead', 'NULL', 100000), 
('Mike', 'Smith', 'Salesperson', 'John Doe', 80000), 
('Sara', 'Watson', 'Lead Engineer', 'NULL', 150000), 
('Andrew', 'Johnson', 'Software Engineer', 'Sara Watson', 120000), 
('Maggie', 'Thompson', 'Accountant', 'NULL', 125000), 
('Sarah', 'Lee', 'Legal Team Lead', 'NULL', 250000), 
('Tom', 'Jones', 'Lawyer', 'Sarah Lee', 190000);

-- update example
UPDATE roles 
SET jobTitle = 'Sales Manager' 
WHERE roleID = 1;

-- join example
SELECT * FROM departments
JOIN roles ON departments.departmentID = roles.departmentID;