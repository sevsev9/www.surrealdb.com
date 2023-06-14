type Person = {
	id: string;
	name: string;
};

// Assign the variable on the connection
const result = await db.query<[Person[], Person[]]>(
	'CREATE person SET name = "John"; SELECT * FROM type::table($tb);',
	{ tb: 'person' }
);

// Get the first result from the first query
const created = result[0].result[0];

// Get all of the results from the second query
const people = result[1].result;
