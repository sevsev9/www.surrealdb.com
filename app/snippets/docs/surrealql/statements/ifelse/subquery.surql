UPDATE person SET railcard =
	IF age <= 10 THEN
		'junior'
	ELSE IF age <= 21 THEN
		'student'
	ELSE IF age >= 65 THEN
		'senior'
	ELSE
		NULL
	END
;
