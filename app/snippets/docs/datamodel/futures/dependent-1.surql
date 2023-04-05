CREATE person SET
	birthday = "2007-06-22",
	can_drive = <future> { time::now() > birthday + 18y }
;
