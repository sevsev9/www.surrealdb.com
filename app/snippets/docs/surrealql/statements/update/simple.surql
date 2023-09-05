-- Update all records in a table
UPDATE person SET skills += ['breathing'];

-- Update or create a record with a specific numeric id
UPDATE person:100 SET name = 'Tobie', company = 'SurrealDB', skills = ['Rust', 'Go', 'JavaScript'];

-- Update or create a record with a specific string id
UPDATE person:tobie SET name = 'Tobie', company = 'SurrealDB', skills = ['Rust', 'Go', 'JavaScript'];

-- Update just a single record
-- Using the ONLY keyword, just an object for the record in question will be returned.
-- This, instead of an array with a single object.
UPDATE ONLY person:tobie SET name = 'Tobie', company = 'SurrealDB', skills = ['Rust', 'Go', 'JavaScript'];
