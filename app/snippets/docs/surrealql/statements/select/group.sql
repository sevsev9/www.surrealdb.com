-- Group records by a single field
SELECT country FROM user GROUP BY country;

-- Group results by a nested field
SELECT settings.published FROM article GROUP BY settings.published;

-- Group results by multiple fields
SELECT gender, country, city FROM person GROUP BY gender, country, city;

-- Group results with aggregate functions
SELECT count(*) AS total, math::sum(age), gender, country FROM person GROUP BY gender, country;
