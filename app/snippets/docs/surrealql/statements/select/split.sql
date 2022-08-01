-- Split the results by each value in an array
SELECT * FROM user SPLIT emails;

-- Split the results by each value in a nested array
SELECT * FROM country SPLIT locations.cities;
