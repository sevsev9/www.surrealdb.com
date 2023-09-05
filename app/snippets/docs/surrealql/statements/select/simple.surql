-- Select all fields from a table
SELECT * FROM person;

-- Select specific fields from a table
SELECT name, address, email FROM person;

-- Select all fields from a specific record
SELECT * FROM person:tobie;

-- Select specific fields from a specific record
SELECT name, address, email FROM person:tobie;

-- Alias/rename fields
SELECT name AS user_name, address FROM person;

-- Select just a single record
-- Using the ONLY keyword, just an object for the record in question will be returned.
-- This, instead of an array with a single object.
SELECT * FROM ONLY person:john;
