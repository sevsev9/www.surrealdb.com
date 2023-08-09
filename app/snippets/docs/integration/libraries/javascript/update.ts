type Person = {
	id: string;
	name: string;
	settings: {
		active: boolean;
		marketing: boolean;
	};
};

// Update all records in a table
const people = await db.update<Person>('person');

// Update a record with a specific ID
const [person] = await db.update<Person>('person:tobie', {
	name: 'Tobie',
	settings: {
		active: true,
		marketing: true,
	},
});

// The content you are updating the record with might differ from the return type
const [record] = await db.update<
	Person,
	Pick<Person, 'name'>
>('person:tobie', {
	name: 'Tobie',
});
