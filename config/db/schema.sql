DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    deptartment_name VARCHAR (60) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR (60) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL

);
CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (60) NOT NULL,
    last_name VARCHAR (60) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT  
);