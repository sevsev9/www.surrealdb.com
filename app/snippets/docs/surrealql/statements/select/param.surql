-- Store the subquery result in a variable and query that result.
LET $history = SELECT * FROM events WHERE type = 'activity' LIMIT 5;
SELECT * from $history;

-- Use the parent instance's field in a subquery (predefined variable)
SELECT *, (SELECT * FROM events WHERE host == $parent.id) AS hosted_events FROM user;
