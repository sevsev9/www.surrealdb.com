-- Add a graph edge between user:tobie and article:surreal
RELATE user:tobie->write->article:surreal
	SET time.written = time::now()
;

-- Add a graph edge between specific users and developers
LET $from = (SELECT users FROM company:surrealdb);
LET $devs = (SELECT * FROM user WHERE tags CONTAINS 'developer');
RELATE $from->like->$devs UNIQUE
	SET time.connected = time::now()
;
