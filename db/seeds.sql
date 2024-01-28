INSERT INTO department (name) VALUES
  ('HR'),
  ('Finance'),
  ('IT'),
  ('SALES');


INSERT INTO role (title, salary, department_id) VALUES
  ('HR Manager', 70000, 1),
  ('Accountant', 60000, 2),
  ('Software Engineer', 80000, 3),
  ('Sales Rep', 95000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 2),
  ('Mason', 'McNeil', 3,3);