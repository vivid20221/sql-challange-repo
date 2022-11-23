-- Departments
-- -----------
-- engineering 
-- finance
-- legal 
-- sales

INSERT INTO department (department_name)
VALUES("Engineering"),
      ("Finance"), 
      ("Legal"),
      ("Sales");



-- Roles
-- ------
-- Sales lead sales 100000
-- Salesperson sales 80000
-- lead engineer engineering 150000
-- software engineer engineering 120000
-- account manager finance 160000
-- accountant finance 125000
-- legal team lead legal 250000
-- lawyer legal 190000

INSERT INTO roles (role_title, department_id, role_salary)
VALUES("Sales Lead" ,100000),
      ("Salesperson" ,80000),
      ("Lead Engineer" ,150000),
      ("Software Engineer" ,120000), 
      ("Account Manager" ,160000),
      ("Accountant" ,125000),
      ("Legal Team Lead" ,250000),
      ("Lawyer" ,190000);


      INSERT INTO employee (first_name, last_name, manager_id )
      VALUES("John", "Doe"),
            ("Mike", "Chan"),
            ("Ashley", "Rodriguez"),
            ("Kevin", "Tupik"),
            ("Kunal", "Singh"),
            ("Malia", "Brown"),
            ("Sarah", "Lourd"),
            ("Tom", "Allen");








    --   first_name 
    --   ----------
    --   jhon 
    --   mike 
    --   ashely 
    --   kevin 
    --   kunal
    --   malia
    --   sarah
    --   tom

    --   last_name
    --   --------
    --   doe 
    --   chan
    --   rodriguez
    --   tupik
    --   singh
    --   brown 
    --   lourd
    --   allen
