-- This command selects all records from both 'user' and 'admin' tables.
SELECT * FROM user, admin;

-- This command selects all records from the table named in the variable '$table',
-- but only if the 'admin' field of those records is true.
-- This query is equivalent to 'SELECT * FROM user WHERE admin = true'.
LET $table = "user";
SELECT * FROM type::table($table) WHERE admin = true;

-- This command selects a single record from:
-- * the table named in the variable '$table',
-- * and the identifier named in the variable '$id'.
-- This query is equivalent to 'SELECT * FROM user:admin'.
LET $table = "user";
LET $id = "admin";
SELECT * FROM type::thing($table, $id);

-- This command selects all records for specific users 'tobie' and 'jaime', as well as all records for the company 'surrealdb'.
SELECT * FROM user:tobie, user:jaime, company:surrealdb;

-- This command selects records from a list of identifiers. The identifiers can be numerical,
-- string, or specific records such as 'person:lrym5gur8hzws72ux5fa'.
SELECT * FROM [3648937, "test", person:lrym5gur8hzws72ux5fa, person:4luro9170uwcv1xrfvby];

-- This command selects data from an object that includes a 'person' key,
-- which is associated with a specific person record, and an 'embedded' key set to true.
SELECT * FROM { person: person:lrym5gur8hzws72ux5fa, embedded: true };

-- This command first performs a subquery, which selects all 'user' records and adds a
-- computed 'adult' field that is true if the user's 'age' is 18 or older.
-- The main query then selects all records from this subquery where 'adult' is true.
SELECT * FROM (SELECT age >= 18 AS adult FROM user) WHERE adult = true;
