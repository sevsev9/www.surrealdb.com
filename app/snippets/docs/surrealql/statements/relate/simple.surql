-- This command creates a relationship ("edge" in graph terms) between a user named 'tobie' and an article titled 'surreal'.
-- The 'wrote' keyword indicates that 'tobie' is the author of 'surreal'.
-- The time the article was written is set to the current time with the function: "time::now()".
RELATE user:tobie->wrote->article:surreal SET time.written = time::now();

-- This command selects all users from the company named 'surrealdb' and assigns the result to the variable $from.
LET $from = (SELECT users FROM company:surrealdb);

-- This command selects all users who have the 'developer' tag and assigns the result to the variable $devs.
LET $devs = (SELECT * FROM user WHERE tags CONTAINS 'developer');

-- This command creates a relationship ("edge") between all users from 'surrealdb' and all users who are developers.
-- The 'like' keyword may indicate that users from 'surrealdb' appreciate or endorse the developers.
-- The time when this connection was made is set to the current time with the function: "time::now()"
-- user:john->likes->user:mary
RELATE $from->like->$devs SET time.connected = time::now();
