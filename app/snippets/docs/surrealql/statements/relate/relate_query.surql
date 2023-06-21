-- Who wrote the articles?
SELECT in FROM wrote;
SELECT ->wrote.in FROM person;
SELECT <-wrote.in FROM article;

-- Which articles did the person write?
SELECT out FROM wrote;
SELECT ->wrote.out FROM person;
SELECT <-wrote.out FROM article;

-- When was the article written?
SELECT time.written as time_written FROM wrote;
SELECT ->wrote.time.written as time_written FROM person;
SELECT <-wrote.time.written as time_written FROM article;