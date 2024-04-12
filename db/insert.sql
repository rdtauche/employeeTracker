INSERT INTO departments (departmentID, departmentName) 
VALUES (1, 'Sales'), (2, 'Engineering'), (3, 'Finance'), 
(4, 'Legal');

INSERT INTO roles (roleID, jobTitle, salary, departmentID)
VALUES (1, 'Sales Lead', 100000, 1), (2, 'Salesperson', 80000, 1), 
(3, 'Lead Engineer', 150000, 2), (4, 'Software Engineer', 120000, 2), 
(5, 'Accountant', 125000, 3), (6, 'Legal Team Lead', 250000, 4), 
(7, 'Lawyer', 190000, 4);

INSERT INTO employees (employeeID, firstName, lastName, jobTitle, manager, salary, departmentID)
VALUES (1, 'John', 'Doe', 'Sales Lead', 'NULL', 100000, 1), 
(2, 'Mike', 'Chan', 'Salesperson', 'John Doe', 80000, 1), 
(3, 'Ashley', 'Rodriguez', 'Lead Engineer', 'NULL', 150000, 2), 
(4, 'Kevin', 'Tupik', 'Software Engineer', 'Ashley Rodriguez', 120000, 2), 
(5, 'Malia', 'Brown', 'Accountant', 'NULL', 125000, 3), 
(6, 'Sarah', 'Lourd', 'Legal Team Lead', 'NULL', 250000, 4), 
(7, 'Tom', 'Allen', 'Lawyer', 'Sarah Lourd', 190000, 4);