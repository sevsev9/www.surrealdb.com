CREATE author:john SET
	name.first = "John",
	name.last = "Adams",
	name.full = string::join(' ', name.first, name.last),
	age = 29,
	admin = true,
	signup_at = time::now()
;
