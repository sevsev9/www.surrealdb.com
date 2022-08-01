IF $scope = "admin" THEN
	( SELECT * FROM account )
ELSE IF $scope = "user" THEN
	( SELECT * FROM $auth.account )
ELSE
	[]
END
