-- Define the parameter
LET $adults = (SELECT * FROM person WHERE age > 18);
-- Use the parameter
UPDATE $adults SET adult = true;
