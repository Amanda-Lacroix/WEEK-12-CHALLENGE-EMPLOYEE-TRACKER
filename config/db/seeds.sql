INSERT INTO department (department_name)
VALUES 
('Operations Management'),
('Accounting & Sales'),
('Administration & Customer Service'),
('Warehouse'),
('Human Resources');


INSERT INTO role (title, salary, department_id )
VALUES 
('Regional Manager', 69000, 1),
('Assistant to the Regional Manager', 50000, 3),
('Sales Representative', 77000, 2),
('Warehouse Foreman', 75000, 4),
('Supplier Relations', 43500, 3),
('Quality Assurance', 1000000, 3),
('Quality Assurance', 1000000, 3),
('Customer Service Representative', 35000, 3),
('Human Resource Representative', 55000, 5),
('Accountant', 60000, 2),
('Accountant', 63000, 2),
('Head of Accounting', 80000, 2),
('Senior Sales Respresentative', 100000, 2),
('Senior Sales Respresentative', 150000, 2),
('Receptionist', 35000, 3);




INSERT INTO employee (first_name, last_name, role_id, manager_id )
VALUES 
('Michael', 'Scott', 1, NULL),          
('Dwight', 'Schrute', 2, 1),          
('Jim','Halpert', 3, 11),           
('Darryl', 'Philbin', 4, 1),        
('Meredith', 'Palmer', 5, 1),       
('Creed', 'Bratton', 6, NULL),         
('Kelly', 'Kapoor', 7, 11),          
('Toby', 'Flenderson', 8, 1),       
('Oscar', 'Martinez', 9, 11),        
('Kevin', 'Malone', 10, 11),        
('Angela', 'Martin', 11, 1),       
('Phyllis', 'Lapin', 12, 11),       
('Stanley', 'Hudson', 13, 11),      
('Pam', 'Beesly', 14, 2);          















