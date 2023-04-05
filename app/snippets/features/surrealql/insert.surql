INSERT INTO company {
	name: 'SurrealDB',
	founded: "2021-09-10",
	founders: [person:tobie, person:jaime],
	tags: ['big data', 'database']
};

INSERT IGNORE INTO company (name, founded)
	VALUES ('SurrealDB', '2021-09-10')
	ON DUPLICATE KEY UPDATE tags += 'developer tools'
;
