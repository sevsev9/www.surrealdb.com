DEFINE FUNCTION fn::person::create($firstname: string, $lastname: string) {
	-- We are executing more than one query here
	LET $person = CREATE person CONTENT {
		firstname: $firstname,
		lastname: $lastname,
	}

	-- But because we end with a RETURN query, only the person's ID will be returned
	-- The results of the other queries will be omitted.
	RETURN $person.id;
};
