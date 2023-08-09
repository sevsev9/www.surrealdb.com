type Person = {
	id: string;
	name: string;
	updated_at: Date;
	settings: {
		active: boolean;
		marketing: boolean;
	};
};

// Update all records in a table
const people = await db.merge<Person>('person', {
	updated_at: new Date(),
});

// Update a record with a specific ID
const [person] = await db.merge<Person>('person:tobie', {
	updated_at: new Date(),
	settings: {
		active: true,
	},
});

// The content you are merging the record with might differ from the return type
const [record] = await db.merge<
	Person,
	Pick<Person, 'name'>
>('person:tobie', {
	name: 'Tobie',
});
