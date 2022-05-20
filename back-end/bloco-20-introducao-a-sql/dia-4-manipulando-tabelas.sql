USE Pixar;

SELECT * FROM Movies;
INSERT INTO Movies(title, director, year, length_minutes)
VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM Movies WHERE title = 'Procurando Nemo';
SELECT * FROM BoxOffice;
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(9, 6.8, 450000000, 370000000);

UPDATE Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';

UPDATE Movies SET title = 'Ratatouille', year = 2007 WHERE title = 'ratatui';

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES
(8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

SELECT * FROM Movies WHERE title = 'WALL-E';
DELETE FROM BoxOffice WHERE movie_id = 11;
DELETE FROM Movies WHERE title = 'WALL-E';

SELECT * FROM Movies WHERE DIRECTOR = 'Andrew Staton';
DELETE FROM BoxOffice WHERE movie_id IN(2, 9);
DELETE FROM Movies WHERE DIRECTOR = 'Andrew Staton';

UPDATE BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;

UPDATE BoxOffice SET rating = 6.0 WHERE domestic_sales > 200000000 AND international_sales < 300000000;

SELECT * FROM Movies WHERE length_minutes < 100;
DELETE FROM BoxOffice WHERE movie_id IN(1, 6, 7, 8);
DELETE FROM Movies WHERE length_minutes < 100;

