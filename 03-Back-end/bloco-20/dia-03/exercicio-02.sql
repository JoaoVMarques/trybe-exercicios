USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
ORDER BY name DESC;

SELECT count(*) AS empresas FROM Fornecimentos 
WHERE fornecedor LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;

SELECT * FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';