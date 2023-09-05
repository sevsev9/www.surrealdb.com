-- Delete all records from a table
DELETE person;

-- Delete a record with a specific numeric id
DELETE person:100;

-- Delete a record with a specific string id
DELETE person:tobie;

-- Delete just a single record
-- Using the ONLY keyword, just an object for the record in question will be returned.
-- This, instead of an array with a single object.
DELETE ONLY person:tobie;
