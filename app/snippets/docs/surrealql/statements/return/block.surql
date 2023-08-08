RETURN {
	-- We are executing quite a few queries here
	LET $firstname = "John";
	LET $lastname = "Doe";

	LET $person = CREATE person CONTENT {
		firstname: $firstname,
		lastname: $lastname,
	}

	-- But because we end with a RETURN query, only the person's ID will be returned
	-- The results of the other queries will be omitted.
	RETURN $person.id;
};
