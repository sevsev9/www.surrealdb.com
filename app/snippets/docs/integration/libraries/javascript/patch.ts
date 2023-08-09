// Update all records in a table
const people = await db.patch('person', [
	{ op: 'replace', path: '/created_at', value: new Date() },
]);

// Update a record with a specific ID
const [person] = await db.patch('person:tobie', [
	{ op: 'replace', path: '/settings/active', value: false },
	{ op: 'add', path: '/tags', value: ['developer', 'engineer'] },
	{ op: 'remove', path: '/temp' },
]);
