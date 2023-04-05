-- Update all records with the same content
UPDATE person REPLACE {
	name: 'Tobie',
	company: 'SurrealDB',
	skills: ['Rust', 'Go', 'JavaScript'],
};

-- Update a specific record with some content
UPDATE person:tobie REPLACE {
	name: 'Tobie',
	company: 'SurrealDB',
	skills: ['Rust', 'Go', 'JavaScript'],
};
