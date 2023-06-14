type Person = {
	id: string;
	name: string;
};

// Select all records from a table
const people = await db.select<Person>('person');

// Select a specific record from a table
const [person] = await db.select<Person>('person:h5wxrf2ewk8xjxosxtyc');
