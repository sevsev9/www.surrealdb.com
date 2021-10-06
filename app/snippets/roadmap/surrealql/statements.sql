-- Create a new article record with a specific id
CREATE article:surreal SET name = "SurrealDB: The next generation database";

-- Update the article record, and add a new field
UPDATE article:surreal SET time.created = time::now();

-- Select all matching articles
SELECT * FROM article, post WHERE name CONTAINS 'SurrealDB';

-- Delete the article
DELETE article:surreal;
