USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active IS FALSE 
AND store_id = 2 
AND NOT first_name = 'KENNETH'
ORDER by first_name;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER by replacement_cost DESC, title
LIMIT 100;

SELECT count(*) AS Quantidade FROM customer
WHERE active IS TRUE AND store_id = 1;

SELECT * FROM customer
WHERE active IS FALSE AND store_id = 1;

SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;