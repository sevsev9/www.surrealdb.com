LET $temp = tester:tobie;

// Create a user
CREATE user SET
	age = 36,
	temp = true,
	other = false,
	something = NULL,
	another = NONE,
	name.first = "Tobie",
	name.last = "Morgan Hitchcock",
	name.full = <string> string::join(' ', name.first, name.last),
	friends = [user:gna732gnajan74hj, user:gna732gnajan74hj]
;

// Select a user and friends
SELECT
	*,
	friends.*.name.full AS friends,
	<-like<-user->purchased->product
FROM user
WHERE friends CONTAINS tester:tobie;
