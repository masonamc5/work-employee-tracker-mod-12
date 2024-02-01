INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');


INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', 70000, 1),
  ('Sales Person', 60000, 1),
  ('Lead Engineer', 80000, 2),
  ('Software Engineer', 95000, 2),
  ('Account Manager', 95000, 3),
  ('Accountant', 95000, 3),
  ('Legal Team Lead', 95000, 4),
  ('Lawyer', 95000, 4);


INSERT INTO employee
  (first_name, last_name, role_id, manager_id )
VALUES
  ('John', 'Doe', 1, NULL ),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, NULL),
  ('Mason', 'McNeil', 4, 3),
  ('Kevin', 'Tupic', 5, NULL),
  ('Mallia', 'Brown', 6, 5),
  ('Sara', 'Lord', 7, NUll),
  ('Tom', 'Alan', 8, 7);