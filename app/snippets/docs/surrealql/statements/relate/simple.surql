-- Add a graph edge between two specific records
RELATE user:tobie->write->article:surreal SET time.written = time::now();

-- Add a graph edge between multiple specific users and devs
LET $from = (SELECT users FROM company:surrealdb);
LET $devs = (SELECT * FROM user WHERE tags CONTAINS 'developer');
RELATE $from->like->$devs SET time.connected = time::now();
