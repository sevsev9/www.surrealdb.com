-- Update all records in a table
UPDATE person SET skills += ['breathing'];

-- Update or create a record with a specific numeric id
UPDATE person:100 SET name = 'Tobie', company = 'SurrealDB', skills = ['Rust', 'Go', 'JavaScript'];

-- Update or create a record with a specific string id
UPDATE person:tobie SET name = 'Tobie', company = 'SurrealDB', skills = ['Rust', 'Go', 'JavaScript'];
