USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 3 * 9;

SELECT * FROM Scientists;

SELECT name as 'Nome do Projeto',
hours as 'Tempo de Trabalho' FROM Projects;

SELECT name FROM Scientists
ORDER BY name ASC;

SELECT name FROM Projects
ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' Precisou de ',
 hours, ' horas para ser concluído') FROM Projects;
 
 SELECT name, hours FROM Projects
 ORDER BY hours DESC
 LIMIT 3;
 
SELECT DISTINCT Project FROM AssignedTo;

 SELECT name FROM Projects
 ORDER BY hours DESC
 LIMIT 1;
 
SELECT Name FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;

SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.')
as resultado FROM Scientists;