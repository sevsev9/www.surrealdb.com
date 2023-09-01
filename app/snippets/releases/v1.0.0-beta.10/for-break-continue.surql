// Here, we loop through an array with three numbers.
// For any number under two, we skip the iteration
// For any number above two, we break the loop
// The result is that only when the number is two, we will create the "person:two" record.

FOR $num IN [1, 2, 3] {
	IF $num < 2 {
		CONTINUE;
	};

	IF $num > 2 {
		BREAK;
	};

	CREATE person:two;
};

// Here, we select the id for every person in the database, and we gift them a ticket to SurrealDB World.
FOR $person IN (SELECT VALUE id FROM person) {
	CREATE gift CONTENT {
		recipient: $person,
		type: "ticket",
		event: "SurrealDB World"
	};
};
