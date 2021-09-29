-- Add a new 'user' record with some basic attributes
CREATE user SET
	age = 36,
	gender = 'm',
	name = 'Tobie Morgan Hitchcock'
;

-- Define a table which aggregates data from another table
DEFINE TABLE users_by_gender
	AS
		SELECT
			count() AS total,
			math::mean(age) AS average_age
		FROM user
		GROUP BY gender
;
