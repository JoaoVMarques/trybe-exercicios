USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 8 * 2;
SELECT * FROM Scientists;
SELECT name as 'nome_do_projeto',
 hours as 'tempo_de_trabalho'
 FROM Projects;

SELECT * FROM Scientists
ORDER BY name ASC;

SELECT * FROM Projects
ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' para ser concluído.') FROM Projects;

SELECT * FROM Projects
ORDER BY hours DESC
LIMIT 3;

SELECT DISTINCT * FROM AssignedTo;

SELECT name FROM Projects
ORDER BY hours DESC
LIMIT 1;

SELECT name FROM Projects
ORDER BY hours ASC
LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY hours ASC
LIMIT 5;

SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') FROM Scientists;