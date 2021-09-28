-- Select all users and fetch the users' friends' names
SELECT *, friends.*.name.full AS friends FROM user;

-- Set a variable to be used in subsequent statements
LET $tobie = (SELECT * FROM user WHERE name.first = "Tobie");

-- Select all users with complex graph traversal
SELECT *,
	-- Select all users who like this user
	<-like<-user AS friends,
	-- Select all products which friends have purchased
	<-like<-user->purchase->product AS recommended
	-- Only look at the single user selected above
	FROM $tobie
;
