-- Define a fulltext index for 4 fields on the user table
DEFINE INDEX fulltext ON user
	FULLTEXT
	COLUMNS age, name, email, profile
;

-- Select all users who match a full text search query
SELECT * FROM user
	WHERE search('profile:"SurrealDB" OR name:"Tobie"')
;
