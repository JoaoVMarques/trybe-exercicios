SELECT MAX(salary)
FROM hr.employees;

SELECT MAX(salary) - MIN(salary)
FROM hr.employees;

SELECT job_id, AVG(salary) as 'salarioMedio'
FROM hr.employees
GROUP BY job_id
ORDER BY salarioMedio DESC;

SELECT SUM(salary)
FROM hr.employees;

SELECT MAX(salary) as 'max_salary', 
MIN(salary) as 'minimum_salary',
SUM(salary) as 'all_salaries',
ROUND(AVG(salary), 2) as 'average_salary'
FROM hr.employees;

SELECT job_id, COUNT(*)
AS 'total'
FROM hr.employees
WHERE job_id = "it_prog";

SELECT job_id, SUM(salary) as 'salary'
FROM hr.employees 
GROUP BY job_id;

SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";

SELECT job_id, AVG(salary) as 'average_salary'
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT department_id, AVG(salary) as 'average_salary', COUNT(*) as 'number_employeers'
FROM hr.employees
GROUP BY department_id
HAVING number_employeers > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;