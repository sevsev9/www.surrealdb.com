-- Select from multiple tables
SELECT * FROM user, admin;

-- Select data from a parameter
SELECT * FROM $parameter WHERE admin = true;

-- Select from multiple specific records
SELECT * FROM user:tobie, user:jaime, company:surrealdb;

-- Select from an array of values and records
SELECT * FROM [3648937, "test", person:lrym5gur8hzws72ux5fa, person:4luro9170uwcv1xrfvby];

-- Select from an object with nested values
SELECT * FROM { person: person:lrym5gur8hzws72ux5fa, embedded: true };

-- Select and filter records from a subquery
SELECT * FROM (SELECT age >= 18 AS adult FROM user) WHERE adult = true;
